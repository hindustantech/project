import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import WhyHireSection from "@/components/WhyHireSection"
import RigorousVettingSection from "@/components/RigorousVettingSection"
import TechnologySection from "@/components/TechnologySection"
import WhyIndiaSection from "@/components/WhyIndiaSection"
import TrustedCompaniesSection from "@/components/TrustedCompaniesSection"
import HiringProcessSection from "@/components/HiringProcessSection"
import UserGuideSection from "@/components/UserGuideSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyHireSection />
      {/* <RigorousVettingSection /> */}
      <TechnologySection />
      <WhyIndiaSection />
      <TrustedCompaniesSection />
      <HiringProcessSection />
      <UserGuideSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
