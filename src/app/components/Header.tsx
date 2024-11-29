import { Moon, Sun } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export function Header({darkMode, toggleDarkMode}: HeaderProps) {
    return (
        <header className="text-center mb-12 relative">
            <button
            onClick={toggleDarkMode}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
            aria-label="Toggle dark mode"
            >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <Image
            src="/kauan_schamber.png"
            alt="Foto de Perfil de Kauan Schamber"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4 border-4 border-gray-400 dark:border-gray-600 shadow-lg object-fill"
            />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">Kauan Schamber</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Desenvolvedor Full Stack</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <a href="tel:+5569993988887" className="text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 flex items-center justify-center sm:justify-start">
                <Phone size={20} className="mr-2" />
                (69) 9 9398-8887
            </a>
            <a href="mailto:schamberkauan@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 flex items-center justify-center sm:justify-start">
                <Mail size={20} className="mr-2" />
                schamberkauan@gmail.com
            </a>
            </div>
            <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/kauanarthur" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
                <Linkedin size={24} />
            </a>  
            <a href="https://github.com/Schambin" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
                <Github size={24} />
            </a>
            </div>
        </header>
    )
}