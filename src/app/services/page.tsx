import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTA";
import HeroPages from "../components/HeroPages"
export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <HeroPages
        title="Services"
        />
      </div>
      <main className="flex-grow p-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Our Services
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="Web Development"
            description="Creating high-quality, responsive websites."
          />
          <ServiceCard
            title="Graphic Design"
            description="Innovative and captivating design solutions."
          />
          <ServiceCard
            title="Digital Marketing"
            description="Effective strategies to reach your audience."
          />
        </section>
        <section className="bg-white p-10 rounded-lg shadow-md mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            What Our Clients Say
          </h3>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto italic">
          &quot;The team exceeded our expectations! They delivered exceptional
            results and provided excellent support throughout the project.&quot;
          </p>
        </section>
        <CTASection
          title="Ready to Get Started?"
          description="Contact us today and let’s build something amazing together."
          buttonText="Get in Touch"
          buttonLink="/contact"
        />
      </main>
    </div>
  );
}
