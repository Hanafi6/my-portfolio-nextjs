"use client";

import { motion } from "framer-motion";

const aboutCards = [
  {
    title: "Who I Am",
    img: "/images/newText.png",
    desc: `I'm Mahmoud, a front-end developer passionate about building 
    interactive and functional user interfaces using React and Next.js.
    With a background in space and data analysis,
    I love combining structured design with analytical thinking 
    to deliver effective and easy-to-use software solutions.`,
  },
  {
    title: "",
    img: "/images/part_2.png",
    desc: `I'm Mahmoud, someone who sees programming not just as code,
    but as a reflection of a way of thinking.
    I believe that every interface I create is a human experience before it's technical,
    and that the small details are what create the big impression.`,
  },
  {
    title: "For Me",
    img: "/images/text.png",
    desc: `Every day you postpone your work,
    someone less fortunate than you will find work and pass you by.
    The comfort you're experiencing now is the grave your fear has dug for you while you're silent.`,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* العنوان */}
        <div className="text-center mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Get to know me, my values, and what drives my passion for
            development.
          </p>
        </div>

        {/* الكروت */}
        <div className="w-full flex flex-col gap-12">
          {aboutCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center justify-center gap-6 md:gap-12 
              bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden 
              p-6 sm:p-8 md:p-10`}
            >
              {/* الصورة */}
              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                src={card.img}
                alt={card.title || "About image"}
                className="w-full sm:w-[280px] md:w-1/3 max-w-[300px] aspect-[3/4] object-cover object-top rounded-xl shadow-lg"
              />

              {/* النص */}
              <motion.div
                initial={{ x: i % 2 === 0 ? 70 : -70, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="flex-1 text-center md:text-left"
              >
                {card.title && (
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                    {card.title}
                  </h3>
                )}
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed text-base sm:text-lg">
                  {card.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
