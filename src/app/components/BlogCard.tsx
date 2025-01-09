interface BlogCardProps {
  title: string;
  summary: string;
  imageUrl: string;
}

export default function BlogCard({ title, summary, imageUrl }: BlogCardProps) {
  return (
    <div className="blog-card">
      <img src={imageUrl} alt={title} className="blog-card-img" />
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-summary">{summary}</p>
        <button className="blog-card-button">
          <a href="/contact">Read More</a>
        </button>
      </div>
    </div>
  );
}
