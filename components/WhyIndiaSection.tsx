import { ArrowRight } from "lucide-react"

export default function WhyIndiaSection() {
  const benefits = [
    "English Speaking Programmers",
    "Flexible Work Hours",
    "Rapid Onboarding Process",
    "Expertise in Top Technologies",
    "Seamless Communication",
  ]

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Hire Software Developers
              <br />
              In India?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              India has emerged as the global hub for software development with over 4.5 million skilled developers. Get
              access to top talent at competitive rates with proven expertise.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Illustration */}
          <div className="relative">
            <img src="/software-developers-team.png" alt="Developers in India" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
