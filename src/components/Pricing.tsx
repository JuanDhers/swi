import React from 'react';
// import { Check } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
// import { IoIosStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

export default function Component() {
    const paquetes = [
        { titulo: "Paquete Básico", horas: 10, precio: 50, caracteristicas: ["Sesiones personalizadas", "Sesiones personalizadas"] },
        { titulo: "Paquete Estándar", horas: 20, precio: 90, caracteristicas: ["Sesiones personalizadas", "Sesiones personalizadas", "Sesiones personalizadas"], destacado: true },
        { titulo: "Paquete Premium", horas: 40, precio: 160, caracteristicas: ["Sesiones personalizadas", "Sesiones personalizadas", "Sesiones personalizadas"] },
    ];

    return (
        <section className='pt-8 bg-gradient-to-b from-amber-50 to-white'>
            <h2 className="text-4xl md:text-6xl text-stone-700 font-title pt-4 tracking-wides font-bold text-center">Choose your planss!</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center my  p-16 pt-8">
            {paquetes.map((paquete, index) => (
                <div
                    key={index}
                    className={`relative w-full max-w-sm p-6 bg-white rounded-lg border ${paquete.destacado ? 'border-yellow-500 shadow-lg' : 'hover:shadow-md'
                        } transition-all duration-300 ease-in-out transform hover:scale-105`}
                >
                    {paquete.destacado && (
                        <span className="absolute -top-4 right-4 px-3 py-1 text-sm font-semibold bg-yellow-500 text-white rounded flex items-center">

                            < IoIosStar className="font-bold mr-2" size={16} />
                            Recomendado
                        </span>
                    )}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">{paquete.titulo}</h3>
                        <p className="text-lg text-gray-700">{paquete.horas} horas de clases</p>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-5xl font-extrabold text-yellow-500 mb-2">${paquete.precio}</p>
                        <p className="text-sm text-gray-500 mb-6">por paquete</p>
                        <ul className="text-left space-y-2">
                            {paquete.caracteristicas.map((caracteristica, i) => (
                                <li key={i} className="flex items-center">
                                    <FaCheck className="text-yellow-500 mr-2" size={16} />
                                    <span>{caracteristica}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6">
                        <button
                            className={`w-full py-2 px-4 font-semibold text-white rounded ${paquete.destacado ? 'bg-amber-500 hover:bg-amber-600' : 'bg-amber-500 hover:bg-amber-600'
                                } transition duration-300`}
                        >
                            Seleccionar {paquete.titulo}
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
}
