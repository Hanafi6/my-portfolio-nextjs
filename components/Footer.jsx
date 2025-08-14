import { Github, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
    return (
// Footer
<footer className="w-full dark:bg-gray-800 text-center text-sm static sm:fixed sm:bottom-0 text-gray-600 dark:text-gray-300 py-4 px-2">
  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-2">
    {/* روابط الأيقونات */}
  </div>
  <p className="text-xs sm:text-sm">
    © {new Date().getFullYear()} <span className="font-semibold">Mahmoud</span> — All rights reserved.
  </p>
</footer>


    );
}
