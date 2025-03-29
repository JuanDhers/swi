import React from "react";
import { BsShieldCheck } from "react-icons/bs";

const privacyPolicies = [
  "Se recopilan datos personales como nombre, correo electrónico y método de pago únicamente para la gestión de clases.",
  "La información proporcionada por el estudiante será tratada con confidencialidad y no será compartida con terceros sin su consentimiento.",
  "Los pagos se procesan a través de plataformas seguras como PayPal o Stripe. No almacenamos información de tarjetas de crédito o débito.",
  "Se pueden utilizar cookies para mejorar la experiencia del usuario en la plataforma.",
  "El estudiante tiene derecho a solicitar la modificación o eliminación de sus datos personales en cualquier momento.",
  "El acceso a las clases se realiza a través de enlaces privados de Zoom, garantizando la seguridad de la sesión.",
  "No se permite la grabación de las clases sin el consentimiento de la profesora.",
  "Los datos de contacto proporcionados solo se utilizarán para la comunicación relacionada con las clases.",
  "La información recopilada puede usarse para mejorar el servicio, pero nunca se compartirá con fines comerciales.",
  "En caso de cambios en estas políticas, se notificará a los estudiantes con antelación.",
];

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-8 p-10  rounded">
        <h2 className="text-4xl md:text-6xl mb-8 text-stone-700 font-title tracking-wides font-bold text-center">Política de Privacidad</h2>
      <ul className="pl-5 space-y-2 text-gray-700">
        
        {privacyPolicies.map((policy, index) => (
            
          <li key={index} className="pl-5 space-y-2 text-gray-700 pb-4 flex items-center leading-none"><span className="mr-2 text-yellow-500"><BsShieldCheck /></span><span className="m-[0px]">{policy}</span></li>
        ))}
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
