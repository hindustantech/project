import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              HIRE DEDICATED
              <br />
              <span className="text-emerald-500">DEVELOPERS</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Hire 5X top vetted remote & Dedicated Software Programmers within 48 hours. Save up to 60% on development
              cost with our dedicated software developers for hire. We have 500+ skilled developers for hire with
              expertise in 40+ technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 text-lg">Hire Developers</Button>
              <Button
                variant="outline"
                className="px-8 py-3 text-lg border-emerald-500 text-emerald-500 hover:bg-emerald-50 bg-transparent"
              >
                Schedule A Call
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div>
            <Card className="p-8 shadow-xl bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Create Your Team</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <Input placeholder="Enter your name" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input type="email" placeholder="Enter your email" className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input placeholder="Enter your phone" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <Input placeholder="Select country" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Skype ID</label>
                  <Input placeholder="Enter Skype ID" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your project</label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md resize-none h-24 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Describe your project requirements"
                  />
                </div>
                <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white py-3 text-lg h-12">
                  Send Request
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
