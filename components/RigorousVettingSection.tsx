import { Shield, Target, Award } from "lucide-react"

export default function RigorousVettingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Rigorous Vetting</h2>
            <p className="text-xl text-gray-600 mb-8">
              We follow a 5-step vetting process to ensure you get the best developers. Our comprehensive screening
              process includes technical assessments, communication skills evaluation, and cultural fit analysis.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Technical Skills Assessment</h4>
                  <p className="text-gray-600">Comprehensive evaluation of coding skills and technical expertise</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Problem Solving Test</h4>
                  <p className="text-gray-600">Real-world problem solving scenarios to test analytical thinking</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Communication & Cultural Fit</h4>
                  <p className="text-gray-600">Ensuring seamless collaboration and cultural alignment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Illustration */}
          <div className="relative">
            <img src="/team-mobile-app-collaboration.png" alt="Vetting process" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
