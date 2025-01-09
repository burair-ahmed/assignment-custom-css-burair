import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; 2024 Burair Ahmed. All rights reserved.
        </p>
        <div className="footer-links">
          <Link href="/contact" className="footer-link">Privacy Policy</Link>
          <Link href="/contact" className="footer-link">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
