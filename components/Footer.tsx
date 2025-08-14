export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
              {/* Replace with actual logo */}
              <span className="text-black font-bold text-lg">⚡</span>
            </div>
            <span className="text-xl font-bold">Logoipsum</span>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
          <div className="flex space-x-3">
            {["f", "t", "in", "▶"].map((icon, i) => (
              <div
                key={i}
                className="w-9 h-9 bg-white text-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-500 hover:text-white transition-colors"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {["Software Team", "Technologies", "Resources", "Company", "Contact us", "FAQ"].map((link, i) => (
              <li key={i}>
                <a href="#" className="text-gray-300 hover:text-emerald-500 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-6">Services</h3>
          <ul className="space-y-3">
            {["Dedicated Development", "Staff Augmentation Services", "Software Development", "Development Center"].map((service, i) => (
              <li key={i}>
                <a href="#" className="text-gray-300 hover:text-emerald-500 transition-colors">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start space-x-3">
              <span className="text-emerald-500">📍</span>
              <span>Envato, Level 13, 2 Elizabeth Victoria 3000 India</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-emerald-500">📞</span>
              <span>+91 861 944 1176</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-emerald-500">✉️</span>
              <span>ezyoga@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-emerald-500 py-4 text-center text-white font-medium">
        logoname. 2023. All rights reserved
      </div>
    </footer>
  );
}
