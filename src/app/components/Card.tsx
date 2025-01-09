// components/Card.js
interface CardProps {
  title: string;
  content: string;
}
export default function Card({ title, content } : CardProps) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
