import { BarChart3, Database, Globe, ServerCog } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

const highlights = [
  {
    icon: BarChart3,
    title: 'Applied ML + API Delivery',
    description:
      'Built an end-to-end forecasting workflow by training a Random Forest model and exposing predictions through a Flask API for frontend consumption.',
  },
  {
    icon: Database,
    title: 'Automation-Driven Database Design',
    description:
      'Designed relational database logic with triggers and validation flows to automate alerts, reduce manual work, and improve data reliability.',
  },
  {
    icon: Globe,
    title: 'Full-Stack Product Thinking',
    description:
      'Developed web applications across backend, frontend, and API layers with a focus on usability, maintainability, and real-world workflows.',
  },
  {
    icon: ServerCog,
    title: 'DevOps Learning in Progress',
    description:
      'Actively learning Docker, CI/CD, cloud deployment, and Linux-based workflows to build and deploy scalable applications more effectively.',
  },
];

export default function TechnicalHighlights() {
  return (
    <section id="highlights" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-[#111111] to-[#6a6a6a] bg-clip-text text-transparent">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.01}
            >
              Technical Highlights
            </ScrollFloat>
          </h2>
          <p className="text-lg text-black/58 leading-relaxed">
            A snapshot of the strengths I bring as a student developer: practical
            implementation, structured thinking, and a growing focus on deployment-ready systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-black/10 bg-gradient-to-br from-white/75 to-[#e8e2d8]/80 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-black/[0.05] p-3 text-[#111111]">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111111] mb-3">{item.title}</h3>
              <p className="text-sm leading-7 text-black/58">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
