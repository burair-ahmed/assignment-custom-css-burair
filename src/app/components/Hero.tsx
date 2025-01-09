export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white text-center py-24 md:py-32">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
        Welcome to Burair&apos;s Practice Site
      </h1>
      <p className="text-lg md:text-xl font-light mb-8 max-w-3xl mx-auto drop-shadow-md">
        Discover our range of services and learn more about what we can do for you.
      </p>
      <button className="bg-yellow-500 text-gray-800 font-semibold px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
       <a href="/contact"> Get Started</a>
      </button>
    </section>
  );
}
