import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Cómo puedo reservar una clase?',
    answer: 'Para reservar una clase, selecciona un horario disponible en el calendario y sigue los pasos para completar el pago.',
  },
  {
    question: '¿Cuánto dura cada clase?',
    answer: 'Cada clase tiene una duración de 45 minutos.',
  },
  {
    question: '¿Por qué plataforma se dictan las clases?',
    answer: 'Las clases se realizan a través de Zoom. Recibirás el enlace de la reunión después de confirmar tu reserva.',
  },
  {
    question: '¿Qué niveles de español enseñas?',
    answer: 'Ofrezco clases para todos los niveles: principiante, intermedio y avanzado.',
  },
  {
    question: '¿El material de estudio está incluido?',
    answer: 'Sí, todo el material audiovisual y ejercicios están incluidos en la clase.',
  },
  {
    question: '¿Qué métodos de pago aceptas?',
    answer: 'Acepto tarjetas de crédito, débito y PayPal.',
  },
  {
    question: '¿Puedo cancelar o reprogramar mi clase?',
    answer: 'Sí, puedes cancelar o reprogramar tu clase con al menos 24 horas de anticipación.',
  },
];


export const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className='w-full  p-2'>
      <div className="w-full max-w-screen-lg mx-auto my-8 p-10  rounded">
        <h2 className="text-4xl md:text-6xl mb-8 text-stone-700 font-title tracking-wides font-bold text-center">Preguntas Frecuentes</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="">
            <button
              className="w-full text-left pt-4 flex justify-between items-center text-base font-semibold hover:text-gray-900 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg">{faq.question}</span>
              <span className="text-2xl text-amber-400">{activeIndex === index ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</span>
            </button>
            {activeIndex === index && (
              <div className="pl-4 pr-2 p-4 text-gray-900 bg-amber-50 rounded">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}