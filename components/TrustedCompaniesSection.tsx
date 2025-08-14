export default function TrustedCompaniesSection() {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Illustration */}
          <div className="relative">
            <img src="/coding-laptop-logos.png" alt="Trusted by companies" className="w-full h-auto rounded-lg" />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Top Companies Trust ValueCoders For Hiring Software Developers
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Over 2,500+ companies worldwide trust us for their software development needs. From startups to Fortune
              500 companies, we deliver exceptional results.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-emerald-600 mb-1">2500+</div>
                <div className="text-sm text-gray-600">Clients Served Globally</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-emerald-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Client Retention Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-emerald-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Skilled Developers</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-emerald-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
