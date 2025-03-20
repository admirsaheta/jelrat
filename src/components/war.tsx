import { useState } from "react";
import { MenuItem } from "./ui/menu-item";
import { Menu, X, Building, User } from "lucide-react"; // Assuming you have an icon library
import { motion } from "framer-motion";

export const WarTheme = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="asli-nije w-full h-full bg-[#26292C]">
      <nav className="flex md:justify-between items-center h-16 bg-[#1E2124] p-2 md:px-16 md:py-4">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white mr-32">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <h1 className="text-lg md:text-2xl font-bold text-white pr-4 md:pr-8">Jel Rat?</h1>
        <div className="hidden md:flex gap-2 md:gap-4">
          <MenuItem title="Klix" bgColor="bg-red-400" url="https://klix.ba" />
          <MenuItem title="Avaz" bgColor="bg-blue-400" url="https://avaz.ba" />
          <MenuItem title="N1" bgColor="bg-green-400" url="https://n1info.ba/" />
          <MenuItem title="Oslobođenje" bgColor="bg-yellow-400" url="https://oslobodjenje.ba/vijesti/" />
          <MenuItem title="Bljesak.info" bgColor="bg-purple-400" url="https://bljesak.info/" />
          <MenuItem title="Nezavisne Novine" bgColor="bg-orange-400" url="https://nezavisne.com/" />
          <MenuItem title="OLX" bgColor="bg-teal-400" url="https://olx.ba/" />
          <MenuItem title="Artinfo" bgColor="bg-pink-400" url="https://artinfo.ba/" />
        </div>
        <div className="hidden sm:flex items-center">
          <a href="https://sarajewo.diplo.de/" target="_blank" rel="noopener noreferrer">
            <Building size={24} className="text-white mr-4" />
          </a>
          <a href="https://sarajewo.diplo.de/" target="_blank" rel="noopener noreferrer">
            <User size={24} className="text-white mr-4" />
          </a>
          <a href="https://sarajewo.diplo.de/" target="_blank" rel="noopener noreferrer">
            <Menu size={24} className="text-white mr-4" />
          </a>
        </div>
      </nav>
      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: isMenuOpen ? "0%" : "-100%", opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-64 h-full bg-[#1E2124] md:hidden"
      >
        <div className="flex flex-col gap-4 p-4">
          <button onClick={toggleMenu} className="text-white self-end">
            <X size={24} />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center mb-4"
          >
            <h1 className="text-xl font-bold text-white">Jel Rat?</h1>
          </motion.div>
          <MenuItem title="Klix" bgColor="bg-red-400" url="https://klix.ba" />
          <MenuItem title="Avaz" bgColor="bg-blue-400" url="https://avaz.ba" />
          <MenuItem title="N1" bgColor="bg-green-400" url="https://n1info.ba/" />
          <MenuItem title="Oslobođenje" bgColor="bg-yellow-400" url="https://oslobodjenje.ba/vijesti/" />
          <MenuItem title="Bljesak.info" bgColor="bg-purple-400" url="https://bljesak.info/" />
          <MenuItem title="Nezavisne Novine" bgColor="bg-orange-400" url="https://nezavisne.com/" />
          <MenuItem title="OLX" bgColor="bg-teal-400" url="https://olx.ba/" />
          <MenuItem title="Artinfo" bgColor="bg-pink-400" url="https://artinfo.ba/" />
        </div>
      </motion.div>
    </div>
  );
};
