interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ title, description, buttonText, buttonLink } : CTAProps) {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-10 mt-10 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
      <h3 className="text-4xl font-semibold mb-4">{title}</h3>
      <p className="text-lg mb-6">{description}</p>
      <a
        href={buttonLink}
        className="bg-yellow-400 text-gray-800 font-semibold px-8 py-3 rounded-lg shadow-md transform transition duration-300 hover:bg-yellow-300"
      >
        {buttonText}
      </a>
    </section>
  );
}
