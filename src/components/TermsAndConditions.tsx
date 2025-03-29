import React from "react";

const termsAndConditions = [
  "Cada clase tiene una duración de 45 minutos y se imparte a través de Zoom.",
  "Las clases deben reservarse con al menos 24 horas de anticipación a través del sistema de reservas en línea.",
  "El pago debe realizarse antes de la clase para confirmar la reserva. Se aceptan tarjetas de crédito, débito y PayPal.",
  "Puedes cancelar o reprogramar una clase con al menos 24 horas de anticipación. No se realizan reembolsos por cancelaciones fuera de este plazo.",
  "Se recomienda ingresar a la clase a tiempo. Si el estudiante llega tarde, la clase no se extenderá más allá del horario acordado.",
  "Si el estudiante no se presenta a la clase sin previo aviso, se considerará como tomada y no habrá reembolso ni reprogramación.",
  "Todos los materiales audiovisuales y ejercicios están incluidos en la clase y serán proporcionados por la profesora.",
  "El material proporcionado es exclusivo para uso personal del estudiante y no puede ser distribuido ni compartido sin autorización.",
  "Las clases se imparten exclusivamente a través de Zoom. Es responsabilidad del estudiante contar con una conexión estable a Internet y un dispositivo adecuado.",
  "Se ofrece enseñanza para todos los niveles, desde principiante hasta avanzado.",
  "Se espera respeto mutuo durante las clases. Cualquier actitud irrespetuosa o conducta inapropiada puede resultar en la suspensión de las clases sin derecho a reembolso.",
  "Las clases no pueden ser grabadas sin el consentimiento de la profesora.",
  "Toda la información del estudiante será tratada con confidencialidad y solo se usará para la gestión de las clases.",
  "La profesora se reserva el derecho de modificar el horario de clases con previo aviso al estudiante.",
  "Se puede realizar una breve evaluación inicial para determinar el nivel de español del estudiante.",
  "Si se adquiere un paquete de clases, estas deben tomarse dentro del período establecido al momento de la compra.",
  "No se realizan reembolsos una vez que la clase ha sido tomada, salvo en casos excepcionales evaluados por la profesora.",
  "El estudiante debe asegurarse de contar con Zoom instalado y un entorno adecuado para recibir la clase sin interrupciones.",
  "Estos términos y condiciones pueden actualizarse en cualquier momento. Se notificará a los estudiantes en caso de cambios importantes.",
  "Al reservar una clase, el estudiante acepta estos términos y condiciones.",
];

const TermsAndConditions: React.FC = () => {
  return (

      <div className="w-full max-w-screen-lg mx-auto my-8 p-10  rounded">
        <h2 className="text-4xl md:text-6xl mb-8 text-stone-700 font-title tracking-wides font-bold text-center">Terminos y condiciones</h2>
      <ol className="list-decimal pl-5 space-y-2 text-gray-700">
        {termsAndConditions.map((term, index) => (
          <li key={index} className="list-decimal pl-5 space-y-2 text-gray-700 pb-4">{term}</li>
        ))}
      </ol>
    </div>
  );
};

export default TermsAndConditions;
