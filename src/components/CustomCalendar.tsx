import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig"; // Importa la configuración de Firebase
import { collection, getDocs } from "firebase/firestore";

interface CalendarProps {
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

const CustomCalendar: React.FC<CalendarProps> = ({ selectedDate, onSelectDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [blockedDays, setBlockedDays] = useState<string[]>([]);
  const today = new Date();

  const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  // Obtener los días bloqueados desde Firebase
  useEffect(() => {
    const fetchBlockedDays = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blockedDays"));
        const days = querySnapshot.docs.map(doc => doc.data().date); // Se espera un campo "date" en formato "YYYY-MM-DD"
        setBlockedDays(days);
        console.log("days",days)
      } catch (error) {
        console.error("Error obteniendo días bloqueados:", error);
      }
    };

    fetchBlockedDays();
  }, []);

  // Obtener los días del mes con los días del mes anterior y siguiente si es necesario
  const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
  
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevMonthLastDay = new Date(year, month, 0);
  
    const daysArray: Date[] = [];
    const startOffset = (firstDay.getDay() + 6) % 7; 
  
    for (let i = startOffset; i > 0; i--) {
      daysArray.push(new Date(year, month - 1, prevMonthLastDay.getDate() - i + 1));
    }
  
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(new Date(year, month, i));
    }
  
    const nextMonthDays = 7 - (daysArray.length % 7);
    if (nextMonthDays < 7) {
      for (let i = 1; i <= nextMonthDays; i++) {
        daysArray.push(new Date(year, month + 1, i));
      }
    }
  
    return daysArray;
  };

  const changeMonth = (offset: number) => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + offset));
  };

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const isDisabled = (date: Date) => {
    const dateStr = formatDate(date);
    return date < today || date.getDay() === 0 || date.getDay() === 6 || blockedDays.includes(dateStr);
  };

  return (
    <div className="border rounded p-4 shadow-md bg-white border-yellow-500 shadow-lg">
      <div className="flex justify-between mb-2">
        <button className="text-2xl bold" onClick={() => changeMonth(-1)}>{"<"}</button>
        <span className="font-semibold text-2xl">
          {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
        </span>
        <button className="text-2xl bold" onClick={() => changeMonth(1)}>{">"}</button>
      </div>

      <div className="grid grid-cols-7 text-center font-semibold mb-2 text-xl">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-1">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {getDaysInMonth(currentMonth).map((day) => {
          const dateStr = formatDate(day);
          const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
          const disabled = isDisabled(day);

          return (
            <button
              key={dateStr}
              className={`p-2 rounded ${
                disabled
                  ? "bg-yellow-50 text-grey-500 cursor-not-allowed"
                  : selectedDate === dateStr
                  ? "bg-amber-500 text-white"
                  : isCurrentMonth
                  ? "bg-yellow-200"
                  : "bg-yellow-200"
              }`}
              onClick={() => !disabled && onSelectDate(dateStr)}
              disabled={disabled}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCalendar;
