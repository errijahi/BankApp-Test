import { useState } from "react";
import { Menu, X, Home, User, Settings } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-16 bg-[#424AF9] text-white flex flex-col items-center p-4 transform ${isOpen ? "translate-x-0" : "-translate-x-16"} transition-transform duration-300`}>
        {/* <button onClick={() => setIsOpen(false)} className="mb-6">
          <X className="w-6 h-6" />
        </button> */}
        <nav className="flex flex-col space-y-6">
          <button className="p-2 bg-[#5E64F8] rounded cursor-pointer">
            <Home className="w-6 h-6" />
          </button>
          <button className="p-2 bg-[#5E64F8] rounded cursor-pointer">
            <User className="w-6 h-6" />
          </button>
          <button className="p-2 bg-[#5E64F8] rounded cursor-pointer">
            <Settings className="w-6 h-6" />
          </button>
        </nav>
      </div>

     

    </div>
  );
}
