
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
    
      <main className="flex-grow">
        <Hero />
        <section className="p-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial name="John Doe" feedback="Great service and very reliable!" />
            <Testimonial name="Jane Smith" feedback="Professional team and quick response." />
          </div>
        </section>
      </main>
      
    </div>
  );
}
