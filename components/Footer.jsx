import { Github, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 rounded text-center  text-sm text-gray-600 dark:text-gray-300 absolute left-0 right-0">
            <div className="flex justify-center items-center gap-6 mb-4">
                <a
                    href="https://github.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                    <Github className="w-5 h-5" />
                </a>
                <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
                <a
                    href="https://facebook.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200"
                >
                    <Facebook className="w-5 h-5" />
                </a>
            </div>
            <p className="text-xs sm:text-sm">
                © {new Date().getFullYear()} <span className="font-semibold">Mahmoud</span> — All rights reserved.
            </p>
        </footer>
    );
}
