
"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
// Add missing icon imports
import { CheckCircle, ArrowRight } from "lucide-react"

export default function UserGuideSection() {
  const [activeTab, setActiveTab] = useState<"benefits" | "process" | "technologies" | "support">("benefits")
  const tabContent = {
    benefits: {
      title: "Benefits of Hiring Dedicated Developers",
      description: "Discover the key advantages of working with dedicated development teams for your projects.",
      points: [
        "Cost-effective solution compared to in-house teams",
        "Access to specialized skills and expertise",
        "Faster time-to-market for your products",
        "Scalable team size based on project requirements",
        "Focus on core business while experts handle development",
        "Focus on core business while experts handle development",
      ],
    },
    process: {
      title: "Our Development Process",
      description: "Learn about our proven methodology for delivering successful software projects.",
      points: [
        "Detailed project analysis and requirement gathering",
        "Agile development methodology with regular sprints",
        "Continuous integration and deployment practices",
        "Regular code reviews and quality assurance",
        "Transparent communication and progress reporting",
        "Transparent communication and progress reporting",
      ],
    },
    technologies: {
      title: "Technology Expertise",
      description: "Explore our comprehensive technology stack and development capabilities.",
      points: [
        "Modern frontend frameworks (React, Angular, Vue.js)",
        "Robust backend technologies (Node.js, Python, PHP)",
        "Cloud platforms and DevOps practices",
        "Mobile development (React Native, Flutter)",
        "Database design and optimization",
        "Database design and optimization",
      ],
    },
    support: {
      title: "Ongoing Support & Maintenance",
      description: "Understand our commitment to long-term project success and support.",
      points: [
        "24/7 technical support and monitoring",
        "Regular updates and security patches",
        "Performance optimization and scaling",
        "Bug fixes and feature enhancements",
        "Documentation and knowledge transfer",
        "Documentation and knowledge transfer",
      ],
    },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4 leading-tight">
            User Guide To Hire Dedicated Software Developers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about hiring and managing dedicated development teams
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">


          <div className="border-b-1">
            <button
              type="button"
              onClick={() => setActiveTab("benefits")}
              className={`w-full text-left p-6   border-b-1 transition-all ${activeTab === "benefits"
                ? "border-teal-500 bg-teal-50 shadow-md"
                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">Benefits of Hiring Developers</h4>
                  <p className="text-sm text-gray-600">Discover key advantages and cost benefits</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${activeTab === "benefits" ? "bg-teal-500" : "bg-gray-300"}`} />
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("process")}
              className={`w-full text-left p-6  border-b-1  transition-all ${activeTab === "process"
                ? "border-teal-500 bg-teal-50 shadow-md"
                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">Development Process</h4>
                  <p className="text-sm text-gray-600">Learn about our proven methodology</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${activeTab === "process" ? "bg-teal-500" : "bg-gray-300"}`} />
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("technologies")}
              className={`w-full text-left p-6 border-b-1   transition-all ${activeTab === "technologies"
                ? "border-teal-500 bg-teal-50 shadow-md"
                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">Technology Expertise</h4>
                  <p className="text-sm text-gray-600">Explore our comprehensive tech stack</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${activeTab === "technologies" ? "bg-teal-500" : "bg-gray-300"}`} />
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("support")}
              className={`w-full text-left p-6  border-b-1  transition-all ${activeTab === "support"
                ? "border-teal-500 bg-teal-50 shadow-md"
                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">Support & Maintenance</h4>
                  <p className="text-sm text-gray-600">Ongoing support and project success</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${activeTab === "support" ? "bg-teal-500" : "bg-gray-300"}`} />
              </div>
            </button>

          </div>


          <div className="bg-white  p-8 shadow-sm">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-4">{tabContent[activeTab].title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{tabContent[activeTab].description}</p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {tabContent[activeTab].points.map((point, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-[10px]">{point}</span>
                  </div>
                ))}
              </div>

              <img
                src="/tab.png"
                alt="Developers in India"
                className="w-full  "
              />
            </div>
                

          </div>
        </div>
      </div>
    </section>
  )
}