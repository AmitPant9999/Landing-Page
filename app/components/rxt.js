import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

interface NavitemsProps {} // No props needed in this example

const Navitems: React.FC<NavitemsProps> = () => {
  return (
    <div className="flex gap-6">
      <Link href="/" className="hover:no-underline">
        <span className="flex items-center text-blue-400">
          Lorem Ipsum
          <FaChevronDown className="w-2" />
        </span>
      </Link>
      <Link href="/" className="hover:no-underline">
        <span className="flex items-center text-blue-400">
          Lorem Ipsum
          <FaChevronDown className="w-2" />
        </span>
      </Link>
      <Link href="/" className="hover:no-underline">
        <span className="flex items-center text-blue-400">
          Lorem Ipsum
          <FaChevronDown className="w-2" />
        </span>
      </Link>
    </div>
  );
};

export default Navitems;