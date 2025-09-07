"use client";
import React, { useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

// Canvas رسم موجات هندسية
function CanvasHeader() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width = canvas.offsetWidth;
    const h = canvas.height = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, h);
    // رسم موجات
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(0, h * (0.2 + i * 0.2));
      for (let x = 0; x <= w; x += 10) {
        ctx.lineTo(x, h * (0.2 + i * 0.2) + Math.sin(x / 50 + i) * 15);
      }
      ctx.strokeStyle = `rgba(59,130,246,${0.3 + i * 0.2})`;
      ctx.lineWidth = 2 + i;
      ctx.stroke();
    }
  }, []);
  return (
    <div className="w-full h-32 md:h-40 lg:h-48 overflow-hidden rounded-t-xl bg-gradient-to-r from-blue-100 to-blue-300">
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

function downloadPDF(ref) {
  html2canvas(ref.current, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("Portfolio.pdf");
  });
}

function downloadPNG(ref) {
  html2canvas(ref.current, { scale: 2 }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "Portfolio.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}

const cvData = {
  name: "MAHM",
  title: "FRONT-END DEVELOPER | SELF-TAUGHT & ALWAYS IMPROVING",
  contact: {
    phone: "+01221539838 0502151091",
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
    { years: "2020 - 2021", degree: "", place: "" },
  ],
  experience: [
    {
      company: "Freelance video editor and photographer",
      years: "2021 - 2023",
      desc: "I worked on “Khamsat” and “Mostaqil” platforms.",
    },
    {
      company: "AZZRAK COMPANY",
      years: "2023- JAN 2025",
      title: "SENIOR AT EDITING TEAM OF AZZRAK",
      desc: "Worked for Azzrak as a Senior Video Editor for 2 years, leading post production on a wide range of projects targeting the Gulf market. Successfully edited and delivered over 1000 videos, maintaining high creative standards and fast turnaround times.",
    },
    {
      company: "MASSIVE MEDIA PRODUCTION COMPANY",
      years: "JAN 2025- NOW",
      title: "TEAM LEADER OF EDITING TEAM",
      desc: "Joined Massive Advertising as a Video Editing Team Leader for 6 months, where I managed and guided a team of editors. Produced high-impact video content for major clients such as Awlad El Syasi, Pyramid fashion brands, and pharmacy chains, helping elevate their visual presence and marketing performance.",
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
    <div className="flex flex-col items-center w-full min-h-screen py-8">
      <CanvasHeader />
      <div className="mb-4 flex flex-col items-center gap-2">
        <button
          onClick={() => downloadPDF(cvRef)}
          className="px-5 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg transition-all duration-200 hover:from-blue-600 hover:to-cyan-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Download PDF
        </button>
        <button
          onClick={() => downloadPNG(cvRef)}
          className="px-5 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-green-500 to-lime-400 shadow-lg transition-all duration-200 hover:from-green-600 hover:to-lime-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Download PNG
        </button>
        <div className="flex gap-4 mt-2">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl transition-all"><FaFacebook /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl transition-all"><FaLinkedin /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-2xl transition-all"><FaGithub /></a>
        </div>
      </div>
      <div
        ref={cvRef}
        className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl p-6 gap-6 border border-blue-200"
      >
        {/* Left Column */}
        <div className="md:w-1/3 flex flex-col items-center gap-6 border-r border-blue-100 pb-6 md:pb-0">
          <div className="w-32 h-32 rounded-full bg-blue-100 overflow-hidden flex items-center justify-center border-4 border-blue-300">
            <img
              src="/images/mahmoud.jpg"
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg text-blue-700">CONTACT</h2>
            <div className="text-xs text-gray-700 mt-2">
              <div>{cvData.contact.phone}</div>
              <div>{cvData.contact.email}</div>
              <div>{cvData.contact.address}</div>
              <div>{cvData.contact.linkedin}</div>
            </div>
          </div>
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
          <div className="text-center">
            <h2 className="font-bold text-lg text-blue-700">TECHNICAL SKILLS</h2>
            <ul className="text-xs text-gray-700 mt-2 list-disc list-inside">
              {cvData.technical.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right Column */}
        <div className="md:w-2/3 flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold text-blue-900">{cvData.name}</h1>
            <div className="text-blue-700 font-semibold text-sm mt-1">
              {cvData.title}
            </div>
          </div>
          <div>
            <h2 className="font-bold text-lg text-blue-700">PROFILE</h2>
            <div className="text-xs text-gray-700 mt-2">{cvData.profile}</div>
          </div>
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
                  <div>{exp.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <h2 className="font-bold text-lg text-blue-700">
                CREATIVE SKILLS
              </h2>
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
  );
}