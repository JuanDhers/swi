import {
    // FaFacebook,
    FaInstagram,
    // FaYoutube,
    FaWhatsapp,
    FaRegEnvelope,
    // FaBookOpen,
    // FaPencilAlt,
    // FaBook,
    // FaBlog,
    // FaTiktok,
    // FaSpotify,
    FaRegQuestionCircle,
    FaRegListAlt  
  } from "react-icons/fa"
  import { MdOutlinePrivacyTip } from "react-icons/md";
  import { AiOutlineSpotify } from "react-icons/ai";
  import { PiTiktokLogoLight } from "react-icons/pi";


  
  export default function Footer() {
    return (
      <footer className="bg-amber-50 border-t border-amber-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-amber-500">Spanish with Inés</h3>
              <p className="text-sm text-gray-700">
                Enseñando español con pasión y dedicación. Clases personalizadas para todos los niveles.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-yellow-500 hover:text-amber-500 transition-colors">
                  <FaInstagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-yellow-500 hover:text-amber-500 transition-colors">
                  <PiTiktokLogoLight  className="h-5 w-5" />
                  <span className="sr-only">Tiktok</span>
                </a>
                <a href="#" className="text-yellow-500 hover:text-amber-500 transition-colors">
                  <AiOutlineSpotify  className="h-5 w-5" />
                  <span className="sr-only">Spotify </span>
                </a>
              </div>
            </div>
  
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-500">Ayuda</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/faq" className="text-gray-700 hover:text-yellow-500 transition-colors flex items-center gap-2">
                    <FaRegQuestionCircle  className="h-4 w-4 text-yellow-500" />
                    Preguntas frecuentes
                  </a>
                </li>
                <li>
                  <a href="/TermsAndConditions" className="text-gray-700 hover:text-yellow-500 transition-colors flex items-center gap-2">
                    <FaRegListAlt className="h-4 w-4 text-yellow-500" />
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a href="/PrivacyPolicy" className="text-gray-700 hover:text-yellow-500 transition-colors flex items-center gap-2">
                    <MdOutlinePrivacyTip className="h-4 w-4 text-yellow-500" />
                    Política de privacidad
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-500">Contacto</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FaWhatsapp  className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-700">+54 9 11 3421-8599</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaRegEnvelope className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-700">spanishteacher.ines@gmail.com</span>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 bg-yellow-200 hover:bg-yellow-500 text-amber-900 rounded-md transition-colors"
                  >
                    Reservar clase
                  </a>
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-8 pt-6 border-t border-amber-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600">
                {new Date().getFullYear()} SpanishWithInes.
              </p>
              {/* <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-sm text-gray-600 hover:text-yellow-500">
                  Política de privacidad
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-yellow-500">
                  Términos y condiciones
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  