import { Button } from "@/components/ui/button"

export default function UserGuideSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">User Guide To Hire Dedicated Software Developers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about hiring dedicated developers and building your remote team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Hiring Dedicated Developers</h3>
              <p className="text-gray-600 mb-6">
                Dedicated developers work exclusively on your project, ensuring focused attention, better communication,
                and faster delivery. They become an extension of your in-house team.
              </p>
              <Button className="bg-emerald-500 hover:bg-emerald-600">Get Started Today</Button>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-lg font-bold text-gray-900 mb-2">Cost Effective</div>
                <div className="text-sm text-gray-600">Save up to 60% on development costs</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-lg font-bold text-gray-900 mb-2">Quick Hiring</div>
                <div className="text-sm text-gray-600">Get developers ready in 48 hours</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-lg font-bold text-gray-900 mb-2">Skilled Talent</div>
                <div className="text-sm text-gray-600">Access to 500+ expert developers</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-lg font-bold text-gray-900 mb-2">Flexible Scaling</div>
                <div className="text-sm text-gray-600">Scale team based on requirements</div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <img src="/developer-guide-illustration.png" alt="User guide" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
