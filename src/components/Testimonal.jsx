import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import reviewsData from './utils/reviews.json';
import stars from '../assets/icons/stars.svg';
import quoteClose from '../assets/icons/quote-close.svg';
import au from '../assets/icons/Flags/au.svg';
import br from '../assets/icons/Flags/br.svg';
import cr from '../assets/icons/Flags/cr.svg';
import eg from '../assets/icons/Flags/eg.svg';
import fr from '../assets/icons/Flags/fr.svg';
import ho from '../assets/icons/Flags/ho.svg';
import uk from '../assets/icons/Flags/uk.svg';
import us from '../assets/icons/Flags/us.svg';

const images = {
  au,
  br,
  cr,
  eg,
  fr,
  ho,
  uk,
  us,
};

export const Testimonial = () => {
  const [isClient, setIsClient] = useState(false);
  const [modalContent, setModalContent] = useState(null); // Estado para el contenido del modal

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Para evitar problemas de SSR

  const openModal = (review) => {
    setModalContent(review); // Guarda el contenido del review en el modal
  };

  const closeModal = () => {
    setModalContent(null); // Cierra el modal
  };

  return (
    <section className="testimonials flex justify-center items-center flex-col py-12 px-4 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl mb-10 text-stone-700 font-title tracking-wides font-bold text-center">Happy students!</h2>{/*     py-4 text-2xl lg:text-4xl font-bold text-zinc-700 */}
      </div>

      <div className="w-full max-w-screen-lg">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 40 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        className='p-4'>
          {reviewsData.map((review, index) => (
            <SwiperSlide key={index} className='my-4 pb-8'>
              <div className={`relative p-6 rounded-lg shadow-[0_0_15px_0_rgba(0,0,0,0.1)] ${review.background} transition-transform transform hover:scale-105`}>
                <div className="flex items-start gap-4">
                  <div>
                    <img src={stars} alt="rating stars" />
                  </div>
                </div>

                {/* Contenedor de contenido con tamaño fijo */}
                  {
                    review.review.length > 150 ?
                <div className="h-40 overflow-hidden shadow-[inset_4px_-18px_8px_-8px_rgba(50,50,50,0.1)]">
                    <blockquote className="mt-4 text-base lg:text-lg font-normal leading-relaxed">
                    {review.review}
                  </blockquote>
                  </div>
                  :
                  <div className="h-40 overflow-hidden">
                  <blockquote className="mt-4 text-base lg:text-lg font-normal leading-relaxed">
                    {review.review}
                  </blockquote>
                  </div>
                  }
                

                {/* Botón para ver más */}
                {review.review.length > 150 && (
                  <button
                    onClick={() => openModal(review)}
                    className="mt-4 bg-amber-50 py-1 px-2 text-amber-600 rounded text-sm"
                  >
                    Read more
                  </button>
                )}

                <div className="mt-8 flex justify-between items-center">
                  <div className="flex items-center">
                    <h3 className="text-base font-semibold">{review.name}</h3>
                    <img className="ml-2 w-6" src={images[review.nation]} alt="country flag" />
                  </div>
                  <img src={quoteClose} alt="quote end icon" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{modalContent.name}</h3>
              <button onClick={closeModal} className="text-red-500">X</button>
            </div>
            <div className="flex items-center mb-4">
              <img className="w-6 mr-2" src={images[modalContent.nation]} alt="country flag" />
              <img src={stars} alt="rating stars" />
            </div>
            <p className="text-base font-normal leading-relaxed">{modalContent.review}</p>
          </div>
        </div>
      )}
    </section>
  );
};
