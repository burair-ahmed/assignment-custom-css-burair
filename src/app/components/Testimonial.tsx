interface TestimonialProps{
  name: string;
  feedback: string;
}


export default function Testimonial({ name, feedback } : TestimonialProps) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
      <p className="italic text-gray-600">&quot;{feedback}&quot;</p>
      <h4 className="mt-2 font-semibold text-gray-800">{name}</h4>
    </div>
  );
}
