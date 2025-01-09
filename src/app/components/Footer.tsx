import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-lg font-light mb-4">
          &copy; 2024 Burair Ahmed. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
