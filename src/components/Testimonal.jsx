import reviewsData from './reviews.json';
import stars from '../assets/icons/stars.svg'
import quoteClose from '../assets/icons/quote-close.svg'
import au from '../assets/icons/Flags/au.svg';
import br from '../assets/icons/Flags/br.svg';
import cr from '../assets/icons/Flags/cr.svg';
import eg from '../assets/icons/Flags/eg.svg';
import fr from '../assets/icons/Flags/fr.svg';
import ho from '../assets/icons/Flags/ho.svg';
import uk from '../assets/icons/Flags/uk.svg';
import us from '../assets/icons/Flags/us.svg';

// Mapea el nombre de la imagen a su respectiva importación
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
  return (
    <section className="flex justify-center items-center flex-col">
      <div>
        <h2 className="py-8 text-4xl font-bold text-zinc-700">Happy students!</h2>
      </div>
      <div className=" md:grid-cols-3 gap-4 max-w-screen-md content-center">
        {reviewsData.map((review, index) => (
          <div key={index} className="gap-4 m-8">
            <div className={`h-auto max-w-full rounded-lg ${review.background} shadow-lg p-6`}>
              <div className="flex items-start gap-4">
                <div>
                 <img src={stars} alt="" />
                </div>
              </div>
              <blockquote className="mt-4 text-base font-normal leading-relaxed">
                {review.review}
              </blockquote>
              <div className='mt-8 flex justify-between'>
                <div className='flex'>
              <h3 className="text-base font-semibold">{review.name}</h3>
              <img className='ml-2 w-6' src={images[review.nation]} alt="" />
              </div>
              <img src={quoteClose} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
