// import ine from '../assets/about.jpeg'
import ine1 from '../assets/ine4.jpeg'
export const About = () => {
    return (

        <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row items-center  px-6 lg:px-0">
          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src={ine1} alt="Ines" className="w-72 h-auto md:w-96  shadow-lg object-cover" />
          </div>
          {/* Text Section */}
          <div className="md:w-1/2 p-4 md:pr-12">
            <h2 className="text-4xl md:text-6xl my-8 text-stone-700 font-title tracking-wides font-bold text-center">Hi! I’m Inés, </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Spanish teacher since 2020, living in Buenos Aires, Argentina. I’ve had the wonderful opportunity to teach over a hundred students from different parts of the world. Teaching is my passion, not only because I enjoy sharing my language and culture, but also because I learn from my students every day. My classes focus on communication, and I love incorporating discussions about culture as an essential part of the learning process.
              <br /><br />
              Besides teaching, I love reading, cooking, traveling, and being in touch with nature. My favorite vacation spot is in the mountains, where I enjoy trekking and breathing in the fresh air. I’m an animal lover and a proud vegetarian, reflecting my deep respect for all forms of life.
              <br /><br />
              If you're looking to learn Spanish in a dynamic and enriching way, I’d be delighted to accompany you on this journey. See you in class!
            </p>
            
            <div className="flex items-center mt-8">
            <button className="bg-amber-500 font-bold py-3 px-6 rounded-md text-white flex items-center group">
              Talk to me!
            </button>
           
            </div>
          </div>
      
        </div>
      </section>
      
    )
}