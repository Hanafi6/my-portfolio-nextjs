// // HeroSection.jsx
// 'use client';

// import Image from 'next/image';

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-[100vh] flex items-center justify-center text-center px-6 py-16 bg-gradient-to-br from-[#0f172a] to-black dark:from-black dark:to-[#0f172a] overflow-hidden rounded-3xl shadow-2xl mb-16">

//       {/* خلفية الصورة */}
//       <Image
//         src="/images/محمود.jpg"
//         alt="Cover"
//         fill
//         className="object-cover opacity-30 z-0"
//         priority
//       />

//       {/* فلتر فوق الخلفية */}
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

//       {/* المحتوى */}
//       <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-white">
//         {/* صورة البروفايل */}
//         <div className="flex justify-center mb-6">
//           <Image
//             src="/images/profile-ai.png.jpg"
//             width={100}
//             height={100}
//             alt="Profile"
//             className="rounded-full border-4 border-white shadow-xl w-[80px] sm:w-[100px] md:w-[120px]"
//           />
//         </div>

//         {/* الاسم والوصف */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
//           Mahmoud Ahmed
//         </h1>
//         <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6">
//           Frontend Developer & UI/UX Enthusiast 🚀
//         </p>

//         {/* المهارات */}
//         <div className="flex flex-wrap justify-center gap-3">
//           {[
//             { name: 'React', color: 'bg-blue-600' },
//             { name: 'Next.js', color: 'bg-gray-800' },
//             { name: 'Redux', color: 'bg-purple-700' },
//             { name: 'Tailwind', color: 'bg-cyan-600' },
//           ].map((skill) => (
//             <span
//               key={skill.name}
//               className={`${skill.color} text-white px-4 py-1.5 rounded-full text-sm sm:text-base font-medium shadow hover:scale-105 transition-transform`}
//             >
//               {skill.name}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
