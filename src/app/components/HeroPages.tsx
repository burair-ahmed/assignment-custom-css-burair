interface HomeProps {
  title: string;
}

export default function HeroPages({ title }: HomeProps) {
  return (
    <section className="hero-page">
      <h1 className="hero-page-title">
        {title}
      </h1>
    </section>
  );
}
