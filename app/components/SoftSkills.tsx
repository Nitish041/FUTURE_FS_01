import { Brain, BookOpen, MessageSquareText, Users } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

const softSkills = [
  {
    icon: Brain,
    title: 'Problem Solving',
    description: 'Approach technical challenges with structured analysis, debugging discipline, and a focus on practical outcomes.',
  },
  {
    icon: MessageSquareText,
    title: 'Communication',
    description: 'Able to explain ideas clearly, discuss tradeoffs, and collaborate effectively with mentors, peers, and teams.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Comfortable contributing in team settings, sharing ownership, and supporting progress through consistent collaboration.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Actively building new skills in DevOps, cloud, and scalable system design with a strong learning mindset.',
  },
];

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-[#111111] to-[#6a6a6a] bg-clip-text text-transparent">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.01}
            >
              Soft Skills
            </ScrollFloat>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-black/58 leading-relaxed">
            Alongside technical skills, I value communication, ownership, and steady execution.
            These qualities help me contribute effectively in collaborative engineering environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {softSkills.map((skill) => (
            <article
              key={skill.title}
              className="rounded-[1.75rem] border border-black/10 bg-gradient-to-br from-white/75 to-[#ece6dc]/80 p-6"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-black/[0.05] p-3 text-[#111111]">
                <skill.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#111111] mb-2">{skill.title}</h3>
              <p className="text-sm leading-7 text-black/58">{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
