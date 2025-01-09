import TeamMember from "../components/TeamMember";
import CTASection from "../components/CTA";
import HeroPages from "../components/HeroPages";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
          <div>
        <HeroPages
        title="About"
        />
      </div>
      <main className="flex-grow bg-gray-50 p-10">
        {/* <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          About Us
        </h2> */}

        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Alice Smith"
              position="CEO"
              image="/images/team1.jpg"
            />
            <TeamMember
              name="John Doe"
              position="CTO"
              image="/images/team1.jpg"
            />
            <TeamMember
              name="Jane Doe"
              position="CMO"
              image="/images/team1.jpg"
            />
          </div>
        </section>

        <section className="bg-white p-10 rounded-lg shadow-md mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Why Choose Us
          </h3>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Our team is dedicated to delivering top-notch services to help you
            achieve your goals. With a focus on innovation and customer
            satisfaction, we stand out as leaders in the industry.
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
