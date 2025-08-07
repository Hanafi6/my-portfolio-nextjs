import Image from 'next/image';
import AboutMe from './About';

export default function HomeSection() {
  return (
    <>
<section id='home' className="scroll-mt-[60px] w-full  min-h-screen flex items-center   justify-center relative left-0 right-0 overflow-hidden ">
  {/* SVG */}
<svg
  className="absolute top-[30px] left-0 w-full h-20"
  viewBox="0 0 1440 320"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
<defs>
  <linearGradient id="waveGradient" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#6EE7B7" />  
    <stop offset="50%" stopColor="#3B82F6" />  
    <stop offset="100%" stopColor ="#9333EA" /> 
  </linearGradient>
</defs>


  <path
    fill="url(#waveGradient)"
    fillOpacity="1"
    d="M0,224L30,213.3C60,203,120,181,180,186.7C240,192,300,224,360,240C420,256,480,256,540,229.3C600,203,660,149,720,138.7C780,128,840,160,900,186.7C960,213,1020,235,1080,224C1140,213,1200,171,1260,154.7C1320,139,1380,149,1410,154.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
  />
</svg>

  {/* الكارت الشخصية */}
<div className=" absolute  bg-white dark:bg-[#0f172a] w-80 h-[370px] shadow-xl pt-20 pb-8 px-6 text-center text-gray-800 dark:text-white  rounded">
        {/* الصورة الطايرة داخل دائرة مموجة */}
            <Image
                src="/images/محمود.jpg"
                alt="Profile"
                fill
                className=" opacity-[.5] rounded " 
            />
                
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-[6px] border-white dark:border-[#0f172a] shadow-lg ring-4 ring-offset-2 ring-purple-400/30 animate-pulse">
            <Image
            src="/images/prof.jpg"
            alt="Profile"
            width={100}
            height={100}
            className="object-cover w-full h-full"
            />
        </div>

        {/* البيانات */}
        <div className="mt-12 absolute left-[50%] top-[50%] transform -translate-x-1/2">
            <h2 className="text-xl font-semibold">Mahmoud</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Front End Developer</p>
        </div>
  </div>
        

{/* About Section */}
</section>
<div className="w-full flex justify-center px-4 py-8">
  <AboutMe />
</div>

    </>
  );
}
