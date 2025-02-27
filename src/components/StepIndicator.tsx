import React from "react";

interface StepIndicatorProps {
  selectedDate: boolean;
  selectedTime: boolean;
  fullName: string;
  email: string;
  confirmEmail: string
  
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ selectedDate, selectedTime, fullName, email, confirmEmail }) => {
    const emailMatch = email === confirmEmail;
  const steps = [
    { label: "Seleccionar fecha", completed: selectedDate },
    { label: "Seleccionar horario", completed: selectedTime },
    { label: "Completar datos", completed:  fullName.trim() !== "" && email.trim() !== "" && emailMatch},
  ];

  console.log("email",email)
  console.log("confirmEmail",confirmEmail)

  return (
    <div className="flex gap-4 items-center justify-center mb-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <p className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${step.completed ? "bg-yellow-500" : "bg-gray-300"}`}>{index + 1}</p>
            <p className="text-center">{step.label}</p>
          </div>
          {/* {index < steps.length - 1 && <div className="w-10 h-1 bg-gray-300"></div>} */}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
