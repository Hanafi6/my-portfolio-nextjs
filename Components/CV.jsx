"use client";
import React, { useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";


/// Canvas رسم موجات هندسية
function CanvasHeader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const w = (canvas.width = canvas.offsetWidth);
    const h = (canvas.height = canvas.offsetHeight);

    ctx.clearRect(0, 0, w, h);

    const colors = ["#0b0024", "#004e81", "#00a8b4", "#011038"];

    for (let i = 0; i < colors.length; i++) {
      ctx.beginPath();
      ctx.moveTo(0, h * (0.2 + i * 0.15));
      for (let x = 0; x <= w; x += 10) {
        ctx.lineTo(
          x,
          h * (0.2 + i * 0.15) + Math.sin(x / 50 + i) * (10 + i * 5)
        );
      }
      ctx.strokeStyle = colors[i];
      ctx.globalAlpha = 0.6;
      ctx.lineWidth = 2 + i;
      ctx.stroke();
    }
  }, []);

  return (
    <div className="w-full md:h-40 lg:h-48 overflow-hidden rounded-t-xl bg-gradient-to-r from-[#0b0024] to-[#004e81]">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

// تحميل PDF
/// تحميل PNG
function downloadPNG(ref) {
  if (!ref.current) return;
  htmlToImage.toPng(ref.current, { cacheBust: true }).then((dataUrl) => {
    const link = document.createElement("a");
    link.download = "Portfolio.png";
    link.href = dataUrl;
    link.click();
  });
}

/// تحميل PDF
function downloadPDF(ref) {
  if (!ref.current) return;
  htmlToImage.toPng(ref.current, { cacheBust: true }).then((dataUrl) => {
    const pdf = new jsPDF("p", "mm", "a4");
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const ratio = Math.min(pageWidth / img.width, pageHeight / img.height);
      const imgWidth = img.width * ratio;
      const imgHeight = img.height * ratio;
      const x = (pageWidth - imgWidth) / 2;
      const y = 10;
      pdf.addImage(dataUrl, "PNG", x, y, imgWidth, imgHeight);
      pdf.save("Portfolio.pdf");
    };
  });
}

// بيانات الـ CV
const cvData = {
  name: "Mahmoud Ahmed",
  title: "FRONT-END DEVELOPER | SELF-TAUGHT & ALWAYS IMPROVING",
  contact: {
    phone: "+01221539838 | 0502151091",
    email: "Lacheu7@gmail.com",
    address: "5 Abdel Aal Street, Salam City, Mansoura, Dakahlia",
    linkedin: "linkedin.com/in/muham...3267630a",
  },
  profile:
    "Self-taught Front-End Developer with a surveying background. Passionate about modern web technologies, clean UI and continuous learning. Always eager to build real-world projects and improve my coding skills.",
  education: [
    {
      years: "2020 - 2025",
      degree: "DIPLOMA IN SURVEYING",
      place: "Mansoura Institute of Surveying - Mansoura, Egypt",
    },
  ],
  experience: [
    {
      company: "Freelance video editor and photographer",
      years: "2021 - 2023",
      desc: "Worked on Khamsat and Mostaqil platforms.",
    },
    {
      company: "AZZRAK COMPANY",
      years: "2023- JAN 2025",
      title: "SENIOR AT EDITING TEAM OF AZZRAK",
      desc: "Led post-production for Gulf market projects. Edited and delivered 1000+ videos with high creative standards.",
    },
    {
      company: "MASSIVE MEDIA PRODUCTION COMPANY",
      years: "JAN 2025- NOW",
      title: "TEAM LEADER OF EDITING TEAM",
      desc: "Managed a team of editors. Produced content for Awlad El Syasi, Pyramid brands, and pharmacy chains, boosting marketing impact.",
    },
  ],
  technical: [
    "HTML, CSS, SASS",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Zustand & Redux",
    "JSON Server",
    "REST API",
    "Git & Github",
    "Vaito / t-i18s",
    "Responsive Design",
  ],
  creative: [
    "UI Layout Structuring",
    "Animating with Titi.js",
    "Clean Code Architecture",
    "Personal Branding & Theming",
  ],
  soft: [
    "Self-Motivated",
    "Quick Learner",
    "Time Management",
    "Problem Solving",
    "Team Collaboration",
    "Adaptability",
  ],
};

export default function CV() {
  const cvRef = useRef();
  return (
    <div className="w-full flex flex-col items-start justify-around min-h-[500px] ">
      <CanvasHeader />

      {/* المحتوى الرئيسي */}
      <div className="w-full flex p-4">
        <div
          ref={cvRef}
          className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-6xl p-6 gap-6 border border-blue-200"
        >
          {/* العمود الأيسر */}
          <div className="md:w-1/3 flex flex-col items-center gap-6 border-r border-blue-100 pb-6 md:pb-0">
            <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center border-4 border-blue-300">
              <img
                src="/images/mahmoud.png"
                alt="profile"
                className="object-cover w-full h-full"
              />
            </div>

            {/* CONTACT */}
            <div className="text-center">
              <h2 className="font-bold text-lg text-blue-700">CONTACT</h2>
              <div className="text-xs text-gray-700 mt-2 space-y-1">
                <div>{cvData.contact.phone}</div>
                <div>{cvData.contact.email}</div>
                <div>{cvData.contact.address}</div>
                <div>{cvData.contact.linkedin}</div>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="text-center">
              <h2 className="font-bold text-lg text-blue-700">EDUCATION</h2>
              <div className="text-xs text-gray-700 mt-2">
                {cvData.education.map((ed, i) => (
                  <div key={i} className="mb-2">
                    <div>{ed.years}</div>
                    <div>{ed.degree}</div>
                    <div>{ed.place}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNICAL SKILLS */}
            <div className="text-center">
              <h2 className="font-bold text-lg text-blue-700">TECHNICAL SKILLS</h2>
              <ul className="text-xs text-gray-700 mt-2 list-disc list-inside text-left">
                {cvData.technical.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* العمود الأيمن */}
          <div className="md:w-2/3 flex flex-col gap-6">
            {/* NAME + TITLE */}
            <div>
              <h1 className="text-3xl font-bold text-blue-900">{cvData.name}</h1>
              <div className="text-blue-700 font-semibold text-sm mt-1">
                {cvData.title}
              </div>
            </div>

            {/* PROFILE */}
            <div>
              <h2 className="font-bold text-lg text-blue-700">PROFILE</h2>
              <p className="text-xs text-gray-700 mt-2">{cvData.profile}</p>
            </div>

            {/* EXPERIENCE */}
            <div>
              <h2 className="font-bold text-lg text-blue-700">WORK EXPERIENCE</h2>
              <div className="text-xs text-gray-700 mt-2 flex flex-col gap-2">
                {cvData.experience.map((exp, i) => (
                  <div key={i} className="mb-2">
                    <div className="flex justify-between font-semibold">
                      <span>{exp.company}</span> <span>{exp.years}</span>
                    </div>
                    {exp.title && (
                      <div className="italic text-blue-800 text-xs">
                        {exp.title}
                      </div>
                    )}
                    <p>{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <h2 className="font-bold text-lg text-blue-700">CREATIVE SKILLS</h2>
                <ul className="text-xs text-gray-700 mt-2 list-disc list-inside">
                  {cvData.creative.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-lg text-blue-700">SOFT SKILLS</h2>
                <ul className="text-xs text-gray-700 mt-2 list-disc list-inside">
                  {cvData.soft.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full py-6 backdrop-blur-2xl flex flex-col items-center gap-3 rounded-b-xl">
        <div className="flex gap-4 w-[40%]  p-4 rounded-xl justify-center">
          <span
            onClick={() => downloadPDF(cvRef)}
            className=" font-bold bg-[#fff] text-[#000] cursor-pointer shadow-lg transition-all duration-200 hover:scale-105"
          >
            Download PDF
          </span>
          <span
            onClick={() => downloadPNG(cvRef)}
            className="font-bold text-[#000] cursor-pointer bg-[#fff] shadow-lg transition-all duration-200 hover:scale-105"
          >
            Download PNG
          </span>
        </div>
     
      </div>
    </div>
  );
}
