import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Cómo puedo registrarme?',
    answer: 'Para registrarte, haz clic en el botón de registro y sigue los pasos que se indican.',
  },
  {
    question: '¿Cuál es el horario de atención?',
    answer: 'Nuestro horario de atención es de lunes a viernes, de 9:00 a 18:00 horas.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos tarjetas de crédito, débito y PayPal.',
  },
];


export const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className='w-full bg-red-100 p-2'>
      <h2>EN PRODUCION!!! NO Tener en cuenta</h2>
      <div className="w-full max-w-screen-lg mx-auto my-8 p-10 bg-red-100 rounded">
        <h2 className="text-4xl md:text-6xl mb-8 text-stone-700 font-title tracking-wides font-bold text-center">Preguntas Frecuentes</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="">
            <button
              className="w-full text-left pt-4 flex justify-between items-center text-base font-semibold hover:text-gray-900 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg">{faq.question}</span>
              <span className="text-2xl text-red-400">{activeIndex === index ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</span>
            </button>
            {activeIndex === index && (
              <div className="pl-4 pr-2 p-4 text-gray-600 bg-red-50 rounded">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}