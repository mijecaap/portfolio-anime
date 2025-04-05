import { FaReact } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';

export default function TechIcons() {
  return (
    <div className="flex gap-4">
      <FaReact className="w-12 h-12 text-[#61DAFB] animate-spin-slow" />
      <SiNestjs className="w-12 h-12 text-[#E0234E]" />
    </div>
  );
}
