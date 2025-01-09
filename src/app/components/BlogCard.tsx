interface BlogCardProps {
  title: string
  summary: string
  imageUrl: string  
}


export default function BlogCard({ title, summary, imageUrl } : BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={imageUrl} alt={title} className="w-full h-72 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{summary}</p>
        <button className="text-blue-500 font-semibold hover:underline">
            <a href="/contact">
          Read More
          </a>
        </button>
      </div>
    </div>
  );
}
