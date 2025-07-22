const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-red-500 to-green-500"></div>
              <span className="text-xl font-bold">CDMX Experiences</span>
            </div>
            <p className="text-gray-400">
              Tu puerta de entrada a las mejores experiencias en la Ciudad de
              México.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Experiencias</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Tours Gastronómicos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cultura e Historia
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Aventura
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Arte y Museos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Información</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cancelaciones
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@cdmxexperiences.com</li>
              <li>📱 +52 55 1234 5678</li>
              <li>📍 Centro Histórico, CDMX</li>
              <li>🕒 Lun - Dom: 8:00 - 20:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} CDMX Experiences. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
