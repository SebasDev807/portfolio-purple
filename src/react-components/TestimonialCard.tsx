import { FaStar, FaQuoteLeft } from "react-icons/fa";

interface TestimonialCardProps {
  text: string;
  rating: number;
  role: string;
  name: string;
}

export const TestimonialCard = ({ text, rating, role, name }: TestimonialCardProps) => {
  const initial = name.charAt(0).toUpperCase();

  return (

    <article className="bg-gray-800 md:w-100 h-80 relative rounded-lg shadow-xl overflow-hidden flex flex-col justify-between ">

      {/* Rating con estrellas */}
      <div className="flex gap-1 mt-3 px-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-400"}
            size={14}
          />
        ))}
      </div>
      {/* Contenido */}
      <div className="p-5 relative flex-1">
        {/* Comilla grande */}
        <FaQuoteLeft className="absolute top-4 left-4 opacity-10 text-7xl z-0" />

        {/* Texto */}
        <p className="relative z-10 text-gray-200 text-sm justify-left">{text}</p>
      </div>

      {/* Footer */}
      <footer className="bg-violet-500 flex items-center gap-3 p-4 rounded-b-lg">
        {/* Circulo con inicial */}
        <div className="w-12 h-12 bg-white text-violet-500 font-bold rounded-full flex items-center justify-center">
          {initial}
        </div>

        {/* Nombre y cargo */}
        <div className="text-white flex-1">
          <p className="font-semibold">{name}</p>
          <p className="text-sm opacity-80">{role}</p>


        </div>
      </footer>
    </article>
  );
};