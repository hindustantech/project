export default function TechnologySection() {
  const technologies = [
    {
      category: "Back-End Development",
      color: "bg-blue-50 border-blue-200",
      techs: [
        "PHP",
        ".NET",
        "Python",
        "Node.js",
        "Java",
        "Ruby on Rails",
        "Laravel",
        "CodeIgniter",
        "CakePHP",
        "Symfony",
        "Zend",
        "Yii",
      ],
    },
    {
      category: "Front-End Development",
      color: "bg-purple-50 border-purple-200",
      techs: ["HTML", "CSS", "JavaScript", "jQuery", "Angular", "React", "Vue.js", "Bootstrap", "Sass", "TypeScript"],
    },
    {
      category: "Mobile Development",
      color: "bg-green-50 border-green-200",
      techs: [
        "iOS",
        "Android",
        "React Native",
        "Flutter",
        "Ionic",
        "Xamarin",
        "PhoneGap",
        "Cordova",
        "Swift",
        "Kotlin",
      ],
    },
    {
      category: "Blockchain & AI/ML",
      color: "bg-orange-50 border-orange-200",
      techs: ["Blockchain", "Ethereum", "Smart Contracts", "Machine Learning", "AI", "TensorFlow", "PyTorch", "OpenAI"],
    },
    {
      category: "DevOps & Low-Code",
      color: "bg-pink-50 border-pink-200",
      techs: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Bubble.io", "Webflow", "No-Code", "Low-Code"],
    },
    {
      category: "E-commerce & CMS",
      color: "bg-indigo-50 border-indigo-200",
      techs: ["Shopify", "WooCommerce", "Magento", "WordPress", "Drupal", "Joomla", "PrestaShop", "OpenCart"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Diverse Technology Competency</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert developers have hands-on experience with cutting-edge technologies across multiple domains. From
            web development to AI/ML, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 ${tech.color} hover:shadow-lg transition-shadow`}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.techs.map((item, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
