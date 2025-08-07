'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Who I Am',
    img: '/images/newText.png',
    desc: `I'm Mahmoud, a front-end developer passionate about building 
    interactive and functional user interfaces using React and Next.js.
     With a background in space and data analysis,
      I love combining structured design with analytical thinking 
      to deliver effective and easy-to-use software solutions.`,
  },
  {
    title: '',
    img: '/images/part_2.png',
    desc: `I'm Mahmoud, someone who sees programming not just as code,
     but as a reflection of a way of thinking.
      I believe that every interface I create is a human experience before it's technical,
       and that the small details are what create the big impression.`,
  },
  {
    title: 'For Me',
    img: '/images/text.png',
    desc: `Every day you postpone your work,
     someone less fortunate than you will find work and pass you by.
      The comfort you're experiencing now is the grave your fear has dug for you while you're silent.`,
  },
];


export default function AboutMe() {
  
  return (
<section className="max-w-6xl mx-auto flex flex-col gap-10 px-4 sm:px-6 md:px-10 lg:px-16 pt-28 pb-20 space-y-24">
  {cards.map((card, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                  items-center gap-8 md:gap-16 bg-white dark:bg-[#1e293b] 
                  rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 md:p-12`}
    >
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        src={card.img}
        alt={card.title || 'About image'}
        className="w-full sm:w-[300px] md:w-1/3 max-w-[320px] aspect-[3/4] object-cover object-top rounded-xl shadow-lg"
      />

      <motion.div
        initial={{ x: i % 2 === 0 ? 70 : -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="flex-1 text-center md:text-right"
      >
        {card.title && (
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white text-center md:text-start">
            {card.title}
          </h3>
        )}
        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed text-base sm:text-lg text-center md:text-start">
          {card.desc}
        </p>
      </motion.div>
    </motion.div>
  ))}
</section>
  );
}
