interface ServiceCardProps {
  title: string;
  description: string;
}
export default function ServiceCard({ title, description } : ServiceCardProps) {
  return (
    <div className="p-6 border rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
