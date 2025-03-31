import React, { useState, useEffect } from "react";
import { db, collection, query, where, getDocs, addDoc } from "../../firebaseConfig";
// import firebase from "firebase/compat/app";
import CustomCalendar from "./CustomCalendar"; // Importamos el calendario personalizado
import StepIndicator from "./StepIndicator";

interface EventSlot {
  time: string;
  available: boolean;
}

// const allowedTimesART = ["08:00", "18:00", "19:00", "20:00", "21:00"]; // Horarios en ART (hora de Argentina)



// const isWeekend = (dateString: string): boolean => {
//   const date = new Date(dateString);
//   const day = date.getDay();
//   return day === 6 || day === 0;
// };

// const isPastDate = (dateString: string): boolean => {
//   const selectedDate = new Date(dateString);
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
//   return selectedDate < today;
// };

const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidName = (name: string): boolean => {
  return name.trim().includes(" ");
};

const EventBooking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [timeSlots, setTimeSlots] = useState<EventSlot[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [fullNameError, setFullNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [allowedTimesART, setAllowedTimesART] = useState<string[]>([]);
console.log("allowedTimesART",allowedTimesART)
  const fetchAllowedTimesFromFirebase = async (): Promise<string[]> => {
    try {
      const timeSlotsRef = collection(db, "timeSlots"); // Nombre de la colección en Firebase
      const q = query(timeSlotsRef);
      const querySnapshot = await getDocs(q);
  
      const allowedTimesART: string[] = [];
  
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.time && data.available) { // Asegúrate de que el documento tiene 'time' y 'available'
          allowedTimesART.push(data.time);
        }
      });
  
      return allowedTimesART; // Retorna los horarios obtenidos
    } catch (error) {
      console.error("Error al obtener los horarios desde Firebase:", error);
      return []; // Retorna un arreglo vacío en caso de error
    }
  };

  useEffect(() => {
    const getTimes = async () => {
      const times = await fetchAllowedTimesFromFirebase();
      setAllowedTimesART(times);
    };

    getTimes();
  }, []);

  // ACA
  useEffect(() => {
    if (selectedDate) {
      fetchReservedTimes(selectedDate);
    } else {
      setTimeSlots([]);
    }
  }, [selectedDate]);

  useEffect(() => {
    const emailMatch = email === confirmEmail;
    setEmailError(emailMatch ? "" : "Los correos electrónicos no coinciden");

    const fullNameMatch = isValidName(fullName)
    setFullNameError(fullNameMatch)
    console.log("fullNameMatch",fullNameError)
    setIsFormValid(
      isValidName(fullName) &&
      isValidEmail(email) &&
      emailMatch
    );
  }, [fullName, email, confirmEmail]);
  
  const getAllowedTimesForUser = () => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
    return allowedTimesART.map(time => {
      const [hours, minutes] = time.split(":").map(Number);
  
      // Crear una fecha en la zona horaria de Argentina (ART)
      const artDate = new Date();
      artDate.setUTCHours(hours + 3, minutes, 0, 0); // UTC-3 para Argentina
  
      // Convertir a la zona horaria del usuario
      return new Intl.DateTimeFormat("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: userTimeZone
      }).format(artDate);
    });
  };
  
  // ACA agergea fetchreservedTimes

  const fetchReservedTimes = async (date: string) => {
    const reservasRef = collection(db, "reservas");
    const q = query(reservasRef, where("date", "==", date));
    const querySnapshot = await getDocs(q);
    const reservedTimes = querySnapshot.docs.map(doc => doc.data().time);
    const availableSlots = getAllowedTimesForUser()
      .filter(time => !reservedTimes.includes(time))
      .map(time => ({ time, available: true }));
    setTimeSlots(availableSlots);
  };

  // const allowedTimes = getAllowedTimesForUser();
  // console.log(allowedTimes); // Muestra los horarios convertidos a la zona horaria del usuario
  
  
  // const generateTimeSlots = (): EventSlot[] => {
  //   return allowedTimes.map(time => ({ time, available: true }));
  // };

  // const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const date = event.target.value;
  //   if (isWeekend(date)) {
  //     alert("No se pueden reservar eventos los sábados ni domingos.");
  //     setSelectedDate("");
  //     return;
  //   }
  //   if (isPastDate(date)) {
  //     alert("No se pueden reservar fechas pasadas.");
  //     setSelectedDate("");
  //     return;
  //   }
  //   setSelectedDate(date);
  // };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  // const handleBooking = () => {
  //   if (!selectedDate || !selectedTime || !isFormValid) {
  //     alert("Por favor, completa todos los campos correctamente antes de reservar.");
  //     return;
  //   }
  //   alert(`Evento reservado para el ${selectedDate} a las ${selectedTime}\nNombre: ${fullName}\nEmail: ${email}`);
  //   setTimeSlots(
  //     timeSlots.map(slot => (slot.time === selectedTime ? { ...slot, available: false } : slot))
  //   );
  // };



const handleBooking = async () => {
  if (!selectedDate || !selectedTime || !fullName || !email) {
    alert("Completa todos los campos antes de reservar.");
    return;
  }


  const reservasRef = collection(db, "reservas");
  const q = query(reservasRef, where("date", "==", selectedDate), where("time", "==", selectedTime));
  const querySnapshot = await getDocs(q);

  const qEmail = query(reservasRef, where("email", "==", confirmEmail));
  const querySnapshotEmail = await getDocs(qEmail);

  if(!querySnapshotEmail.empty){
    alert("ya has reservado");
    return
  }

  if (!querySnapshot.empty) {
    alert("Ese horario ya está reservado.");
    return;
  }


  await addDoc(reservasRef, { 
    fullName, 
    email, 
    to: email, // Agregamos el campo 'to' para el trigger
    message: {
      subject: "Confirmación de Reserva", // Asunto del correo
      html: `
      <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notificación</title>
    <style>
        /* Base styles */
        body {
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #fffbeb; /* amber-50 */
            margin: 0;
            padding: 0;
        }
        
        /* Container styles */
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        /* Header styles */
        .header {
            background-color: #f59e0b; /* amber-500 */
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        
        .header h1 {
            color: white;
            margin: 0;
            font-size: 24px;
        }
        
        /* Content styles */
        .content {
            padding: 20px;
            background-color: #ffffff;
        }
        
        /* Button styles */
        .button {
            display: inline-block;
            background-color: #eab308; /* yellow-500 */
            color: white;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 4px;
            font-weight: bold;
            margin: 20px 0;
        }
        
        /* Footer styles */
        .footer {
            background-color: #fef08a; /* yellow-200 */
            padding: 15px;
            text-align: center;
            border-radius: 0 0 8px 8px;
            font-size: 14px;
            color: #666666;
        }
        
        /* Highlight box */
        .highlight-box {
            background-color: #fffbeb; /* amber-50 */
            border-left: 4px solid #f59e0b; /* amber-500 */
            padding: 15px;
            margin: 20px 0;
        }
        
        /* Responsive styles */
        @media screen and (max-width: 600px) {
            .container {
                width: 100%;
                border-radius: 0;
            }
            
            .header, .footer {
                border-radius: 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Spanis with Inés</h1>
        </div>
        
        <div class="content">
            <p>Hola <strong>${fullName}</strong>!</p>
            
            <p>Realizate agendaste una clase de prueba!</p>
            
            <div class="highlight-box">
                <p><strong>Detalles:</strong></p>
                <p>Fecha: ${selectedDate}</p>
                <p>Horario: ${selectedTime}</p>
                <a target="_blank" href="https://us06web.zoom.us/j/3414482534">Zoom</a>
            </div>
            
            <p>Si tiene alguna pregunta o necesita asistencia adicional, no dude en contactarnos.</p>
            
            <p>Saludos,<br>
            Inés</p>
        </div>
      
    </div>
</body>
</html>
      ` // Cuerpo del correo
    },
    date: selectedDate, 
    time: selectedTime });
  alert(`Reserva confirmada para el ${selectedDate} a las ${selectedTime}.`);

  // Opcional: enviar email de confirmación
};



  return (
    <div className="flex flex-col bg-gradient-to-br min-h-full p-8 max-w-screen-lg justify-center items-center mx-auto">
      <h2 className="text-4xl md:text-6xl mb-10 text-stone-700 font-title tracking-wides font-bold text-center">Reserva una clase de prueba</h2>
      
      <StepIndicator selectedDate={!!selectedDate} selectedTime={!!selectedTime} fullName={fullName} email={email} confirmEmail={confirmEmail} />
    
    <div className="flex flex-col md:flex-row gap-8 justify-center">

      <div>
      {/* 📅 PASAMOS selectedDate PARA QUE SE QUEDE SELECCIONADO */}
<CustomCalendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
</div>

<div>
<div className="mb-4">
{!selectedDate ? <h4 className="font-semibold">Selecciona una fecha para ver los horarios disponibles.</h4> : <h4 className="font-semibold">Selecciona un horario:</h4>}
      
      {selectedDate && (
        timeSlots.length ?
        
        <div className={`grid grid-cols-${timeSlots.length} gap-2 mt-2`}>
        {timeSlots.map(({ time, available }) => (
          <button
            key={time}
            className={`p-2 rounded ${selectedTime === time ? "bg-amber-500 text-white" : "bg-yellow-200"} ${!available ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={!available}
            onClick={() => handleTimeSelection(time)}
          >
            {time}
          </button>
        ))}
      </div>
      :
      <p className="text-red-500 text-xs">No hay horarios disponibles para la fecha seleccionada</p>
)}
</div>
      <label className="block my-2">Nombre completo:*
        <input 
          type="text" 
          className="border p-2 w-full" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
        />
        {!fullNameError && fullName ? <p className="text-red-500 text-xs">Ingresa nombre y apellido</p> : <p className="text-red-500 text-xs text-opacity-0"> ""</p>} 
      </label>
      <label className="block my-2">Correo electrónico:*
        <input 
          type="email" 
          className="border p-2 w-full" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </label>
      <label className="block my-2">Confirmar correo electrónico:*
        <input 
          type="email" 
          className="border p-2 w-full" 
          value={confirmEmail} 
          onChange={(e) => setConfirmEmail(e.target.value)} 
        />
      </label>
      {emailError && <p className="text-red-500">{emailError}</p>}
      {/* <label className="block my-2">Fecha:
        <input 
          type="date" 
          className="border p-2 w-full" 
          value={selectedDate} 
          onChange={handleDateChange} 
          disabled={!isFormValid}
        />
      </label> */}


      
    <button 
        className="mt-4 p-2 bg-amber-500 text-white w-full" 
        onClick={handleBooking} 
        disabled={!isFormValid}
      >Reservar</button>
    </div>
    </div>
    </div>
  );
};

export default EventBooking;