import { useState } from "react";

const milestones = [
  {
    id: 1,
    year: "2017",
    title: "Greystone College",
    date: "09/2017 - 03/2018",
    type: "education",
    popup: "Foundation year in Vancouver focusing on English language and North American business culture. First experience living abroad and working independently."
  },
  {
    id: 2,
    year: "2018",
    title: "University of Groningen",
    date: "09/2018 - 08/2021",
    type: "education",
    popup: "Bachelor in International Business. Developed foundational understanding of marketing, strategy, and cross-cultural business operations."
  },
  {
    id: 3,
    year: "2021",
    title: "Rotterdam School of Management",
    date: "08/2021 - 05/2023",
    type: "education",
    popup: "Master in Management (CEMS). Focused on strategic marketing and international management. Exchange semester deepened understanding of global business contexts."
  },
  {
    id: 4,
    year: "2022",
    title: "Intern @ Montblanc",
    date: "12/2022 - 06/2023",
    type: "work",
    popup: "Marketing and product internship supporting the Digital Paper launch. First hands-on experience coordinating across product, marketing, and retail teams."
  },
  {
    id: 5,
    year: "2023",
    title: "Junior Product Manager @ Montblanc",
    date: "06/2023 - 07/2024",
    type: "work",
    popup: "Product management role focused on Digital Paper ecosystem. Coordinated feature development, customer communication, and go-to-market initiatives across multiple stakeholders."
  },
  {
    id: 6,
    year: "2024",
    title: "Freelancer",
    date: "08/2024 - Present",
    type: "freelance",
    popup: "Working independently across marketing, project management, and execution. Supporting teams at BoraBora Studios, Montblanc, and other clients with campaign coordination, product communication, and content creation."
  },
];

export default function Timeline() {
  const [active, setActive] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Background
          </p>
        </div>

        <div className="md:col-span-9">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              
              {/* Horizontal Line */}
              <div className="absolute top-4 left-0 right-0 h-px bg-gray-200"></div>

              {/* Milestones */}
              <div className="relative flex justify-between">
                {milestones.map((milestone) => (
                  <div
                    key={milestone.id}
                    className="relative flex flex-col items-center"
                    onMouseEnter={() => setActive(milestone.id)}
                    onMouseLeave={() => setActive(null)}
                  >
                    {/* Dot */}
                    <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 cursor-pointer z-10 ${
                      active === milestone.id 
                        ? "bg-gray-900 border-gray-900 scale-125" 
                        : "bg-white border-gray-400"
                    }`}></div>

                    {/* Pop-up card */}
                    {active === milestone.id && (
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-200 shadow-md p-4 z-20 rounded-sm">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">{milestone.date}</p>
                        <p className="text-xs text-gray-700 leading-relaxed">{milestone.popup}</p>
                      </div>
                    )}

                    {/* Label */}
                    <div className="mt-6 text-center">
                      <p className="text-xs text-gray-400 mb-1">{milestone.year}</p>
                      <p className="text-sm font-medium text-gray-900 max-w-24 text-center leading-tight">{milestone.title}</p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="md:hidden">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute top-0 bottom-0 left-2 w-px bg-gray-200"></div>

              <div className="space-y-8">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="relative flex items-start gap-6 pl-8">
                    {/* Dot */}
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 bg-white border-gray-400"></div>
                    
                    {/* Content */}
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{milestone.date}</p>
                      <p className="text-sm font-medium text-gray-900">{milestone.title}</p>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">{milestone.popup}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}