import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Logicspice</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">
              Software Services
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">
              Technologies
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">
              Industries
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">
              Company
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden border-[#2DC67D] sm:inline-flex bg-transparent">
             Get in Toch  
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
