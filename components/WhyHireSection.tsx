import { CheckCircle, Clock, Users } from "lucide-react"

export default function WhyHireSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Hire Developers From Our Name</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save up to 60% on hiring cost and get access to 500+ skilled developers with expertise in 40+ technologies.
            Our dedicated developers are ready to work in your time zone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Illustration */}
          <div className="relative">
            <img src="/developer-multiple-monitors.png" alt="Developer working" className="w-full h-auto rounded-lg" />
          </div>

          {/* Right - Benefits */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-coral-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">High Quality/Cost Ratio</h3>
                <p className="text-gray-600">
                  Get Superior Quality Software at Half The Cost. Our dedicated developers deliver exceptional results
                  while keeping costs low.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Turnaround</h3>
                <p className="text-gray-600">
                  Get your dedicated development team ready within 48 hours. Fast hiring process with immediate project
                  kickoff.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Skilled Expertise</h3>
                <p className="text-gray-600">
                  Access to 500+ skilled developers with expertise in 40+ technologies. All developers are thoroughly
                  vetted and experienced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
