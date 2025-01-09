interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ title, description, buttonText, buttonLink }: CTAProps) {
  return (
    <section className="cta-section">
      <h3 className="cta-title">{title}</h3>
      <p className="cta-description">{description}</p>
      <a href={buttonLink} className="cta-button">
        {buttonText}
      </a>
    </section>
  );
}
