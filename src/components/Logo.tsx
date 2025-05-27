import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="#" className="flex flex-col text-white font-espuma">
      <span className="text-2xl ">DreamDwell</span>
      <span className="text-lg italic text-right leading-none opacity-90">
        Estates
      </span>
    </Link>
  );
}
