import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Krich Brysman",
      role: "CEO, TechCorp",
      image: "/male-ceo-headshot.png",
      rating: 5,
      text: "Outstanding developers with excellent communication skills. They delivered our project on time and exceeded expectations.",
    },
    {
      name: "Krich Brysman",
      role: "CTO, StartupXYZ",
      image: "/female-cto-headshot.png",
      rating: 5,
      text: "The quality of work and dedication shown by the team was remarkable. Highly recommend their services.",
    },
    {
      name: "Krich Brysman",
      role: "Product Manager, InnovateCo",
      image: "/professional-headshot-male-product-manager.png",
      rating: 5,
      text: "Professional, skilled, and reliable. They helped us scale our development team efficiently.",
    },
    {
      name: "Krich Brysman",
      role: "Founder, TechStart",
      image: "/female-founder-headshot.png",
      rating: 5,
      text: "Excellent experience working with their developers. Great technical expertise and project management.",
    },
  ]

  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Have To Say About Us</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
