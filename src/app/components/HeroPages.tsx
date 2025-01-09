interface HomeProps {
  title: string
}


export default function HeroPages({ title } : HomeProps) {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white text-center py-24 md:py-32">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
        {title}
      </h1>
      {/* <button className="bg-yellow-500 text-gray-800 font-semibold px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
        Get Started
      </button> */}
    </section>
  );
}
