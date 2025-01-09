import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}
export default function TeamMember({ name, position, image } : TeamMemberProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500 shadow-md"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-500 mb-4">{position}</p>
      <div className="flex justify-center space-x-4 text-gray-600">
        <a href="#" className="hover:text-blue-500 transition-colors duration-200">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-blue-700 transition-colors duration-200">
          <FaLinkedin />
        </a>
        <a href="#" className="hover:text-gray-800 transition-colors duration-200">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
