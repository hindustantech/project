export default function WhyHireSection() {
  return (
    <section className="relative py-20 bg-[#FF857854] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Left and Right Images */}
        <img
          src="/leftbg.png"
          alt=""
          className="absolute top-0 left-0 w-1/3 opacity-80"
        />
        <img
          src="/rightbg.png"
          alt=""
          className="absolute top-0 right-0 w-1/3 opacity-80"
        />

        {/* Gradient Circle with Glow */}
        

        {/* Another Glow Circle (optional for balance) */}
        
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Why Hire Developers From Our Name
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
        </div>

        {/* Row 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Illustration */}
          <div className="flex justify-center">
            <img
              src="/leftcard.png"
              alt="High quality cost ratio"
              className="w-full max-w-md"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">
              High Quality/Cost Ratio
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="w-6 h-6 flex items-center justify-center bg-emerald-500 rounded-full">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Hire Silicon Valley Caliber At Half The Cost
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Hire the top 1% of 1.5 million+ developers from 150+
                    countries who have applied to Turing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="w-6 h-6 flex items-center justify-center bg-red-500 rounded-full">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    100+ Skills Available
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Hire the top 1% of 1.5 million+ developers from 150+
                    countries who have applied to Turing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">
              Rigorous Vetting
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="w-6 h-6 flex items-center justify-center bg-emerald-500 rounded-full">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    5+ Hours Of Tests And Interviews
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Hire the top 1% of 1.5 million+ developers from 150+
                    countries who have applied to Turing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="w-6 h-6 flex items-center justify-center bg-red-500 rounded-full">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Seniority Tests
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Hire the top 1% of 1.5 million+ developers from 150+
                    countries who have applied to Turing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <img
              src="/rightcard.png"
              alt="Rigorous vetting process"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
