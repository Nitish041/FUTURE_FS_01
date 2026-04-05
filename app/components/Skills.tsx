import ScrollFloat from './ScrollFloat';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['C', 'Java', 'Python'],
      color: 'from-black/55 to-black/20',
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Flask', 'Laravel', 'REST API'],
      color: 'from-black/60 to-black/30',
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
      color: 'from-black/50 to-black/25',
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'GitHub Actions', 'Linux Basics', 'Google Cloud Basics', 'AWS Basics'],
      color: 'from-black/45 to-black/18',
    },
    {
      title: 'Tools & Technologies',
      skills: ['GitHub', 'VS Code', 'Excel'],
      color: 'from-black/52 to-black/22',
    },
  ];

  const certifications = [
    {
      title: 'Google Cloud Cybersecurity Certification',
      href: 'https://www.skills.google/public_profiles/59c2e4bb-e416-4810-8dc7-c05d3c9b8fc3/badges/22222019?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      title: 'IBM Skills Build Data Fundamentals',
      href: 'https://www.credly.com/badges/a7807fd6-b272-48be-aa9c-ac2438572f09/linked_in_profile',
    },
    {
      title: 'Python Foundation Certification (Infosys Springboard)',
      href: '#',
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-black/[0.03]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#111111] to-[#6a6a6a] bg-clip-text text-transparent">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.01}
            >
              Skills & Expertise
            </ScrollFloat>
          </h2>
          <p className="text-xl text-black/55 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 rounded-3xl bg-gradient-to-br from-white/70 to-[#e7e2d9]/75 backdrop-blur-sm border border-black/10 hover:border-black/20 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-[#111111] mb-4 group-hover:text-black/70 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`h-2 rounded-full bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ width: `${Math.random() * 40 + 60}%` }}
                  ></div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-xs font-medium bg-black/[0.04] text-black/60 rounded-full border border-black/10 hover:bg-black/[0.06] hover:text-[#111111] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#111111] mb-8">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-white/65 backdrop-blur-sm border border-black/10 text-black/65 font-medium hover:bg-white/85 transition-all duration-300 hover:scale-105"
              >
                {cert.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
