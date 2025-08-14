import { Search, Users, Handshake, Rocket } from "lucide-react"

export default function HiringProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "INQUIRY",
      description: "Tell us about your project requirements and technical needs",
    },
    {
      icon: Users,
      title: "SELECT DEVELOPERS",
      description: "Choose from our pool of pre-vetted skilled developers",
    },
    {
      icon: Handshake,
      title: "TEAM INTEGRATION",
      description: "Seamlessly integrate developers into your existing team",
    },
    {
      icon: Rocket,
      title: "TEAM SCALING",
      description: "Scale your team up or down based on project requirements",
    },
  ]

  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple and straightforward process to get your dedicated development team ready within 48 hours
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg border-4 border-coral-200">
                  <step.icon className="w-8 h-8 text-coral-500" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-coral-200 -translate-x-1/2"></div>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
