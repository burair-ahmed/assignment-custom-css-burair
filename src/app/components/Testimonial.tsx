interface TestimonialProps {
  name: string;
  feedback: string;
}

export default function Testimonial({ name, feedback }: TestimonialProps) {
  return (
    <div className="testimonial">
      <p className="testimonial-feedback">&quot;{feedback}&quot;</p>
      <h4 className="testimonial-name">{name}</h4>
    </div>
  );
}
