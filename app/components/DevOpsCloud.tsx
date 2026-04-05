import { Cloud, Container, GitBranchPlus, TerminalSquare } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

const devopsAreas = [
  {
    icon: Container,
    title: 'Docker',
    description: 'Learning containerization to package applications consistently across development and deployment environments.',
    skills: ['Container basics', 'App packaging', 'Environment consistency'],
  },
  {
    icon: GitBranchPlus,
    title: 'CI/CD',
    description: 'Exploring automated build, test, and deployment workflows using GitHub Actions and modern delivery practices.',
    skills: ['GitHub Actions', 'Build automation', 'Deployment flow'],
  },
  {
    icon: TerminalSquare,
    title: 'Linux Basics',
    description: 'Comfortable with foundational command-line workflows, file system navigation, and basic server-side operations.',
    skills: ['CLI workflow', 'File permissions', 'Process basics'],
  },
  {
    icon: Cloud,
    title: 'Cloud Fundamentals',
    description: 'Building foundational knowledge in cloud services, deployment, and infrastructure concepts through Google Cloud and AWS basics.',
    skills: ['GCP basics', 'AWS basics', 'Cloud deployment concepts'],
  },
];

export default function DevOpsCloud() {
  return (
    <section id="devops" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-10 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-[#111111] to-[#6a6a6a] bg-clip-text text-transparent">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.01}
              >
                DevOps & Cloud
              </ScrollFloat>
            </h2>
            <p className="text-lg leading-8 text-black/58">
              I am expanding beyond application development into deployment-ready engineering.
              My current focus is learning the tools and practices required to build, automate,
              and ship software more reliably.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {devopsAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-[1.75rem] border border-black/10 bg-white/70 p-6 shadow-[0_14px_45px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-black/[0.05] p-3 text-[#111111]">
                  <area.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#111111] mb-2">{area.title}</h3>
                <p className="text-sm leading-7 text-black/58 mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-xs font-medium text-black/62"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
