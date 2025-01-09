import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

export default function TeamMember({ name, position, image }: TeamMemberProps) {
  return (
    <div className="team-member">
      <img
        src={image}
        alt={name}
        className="team-member-image"
      />
      <h3 className="team-member-name">{name}</h3>
      <p className="team-member-position">{position}</p>
      <div className="team-member-social">
        <a href="#" className="social-link twitter">
          <FaTwitter />
        </a>
        <a href="#" className="social-link linkedin">
          <FaLinkedin />
        </a>
        <a href="#" className="social-link github">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
