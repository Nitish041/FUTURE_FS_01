import FloatingParticles from './FloatingParticles';
import ScrollFloat from './ScrollFloat';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles
        count={30}
        color="#8b8b8b"
        size={1.5}
        speed={0.5}
        opacity={0.22}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#111111] to-[#6a6a6a] bg-clip-text text-transparent">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.01}
                >
                  About Me
                </ScrollFloat>
              </h2>
              <div className="space-y-4 text-black/62 text-lg leading-relaxed">
                <p>
                  I am a Computer Science student focused on building practical software that solves
                  real-world problems through clean engineering, reliable backend logic, and usable interfaces.
                  My work so far spans full-stack development, database design, API integration, and
                  machine learning-backed applications.
                </p>
                <p>
                  I am especially interested in full-stack engineering with growing exposure to DevOps and cloud workflows.
                  Alongside developing applications, I am learning how software is packaged, automated, deployed,
                  and maintained using tools such as Docker, CI/CD pipelines, Linux environments, and cloud platforms.
                </p>
                <p>
                  I enjoy working on systems that combine strong problem-solving with practical impact,
                  whether that means forecasting data trends, automating alerts, or designing applications
                  that are easier to operate and scale in real environments.
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-2xl bg-white/55 backdrop-blur-sm border border-black/10">
                <div className="text-2xl font-bold text-[#111111]">7.10</div>
                <div className="text-sm text-black/45">CGPA</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/55 backdrop-blur-sm border border-black/10">
                <div className="text-2xl font-bold text-[#111111]">4+</div>
                <div className="text-sm text-black/45">Projects</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/55 backdrop-blur-sm border border-black/10">
                <div className="text-2xl font-bold text-[#111111]">3</div>
                <div className="text-sm text-black/45">Certifications</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/55 backdrop-blur-sm border border-black/10">
                <div className="text-2xl font-bold text-[#111111]">DevOps</div>
                <div className="text-sm text-black/45">Learning Track</div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-white/70 via-white/55 to-black/[0.03] backdrop-blur-sm border border-black/10 p-8">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#ece7df] to-[#d8d3cb] flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-orange-400">🎯</div>
                    <div className="text-xl font-semibold text-[#111111]">Problem Solver</div>
                    <div className="text-sm text-black/45">Building efficient solutions</div>
                  </div>
                </div>
              </div>

              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#111111] flex items-center justify-center shadow-lg">
                <span className="text-[#f7f5f1] font-bold">CS</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-lg">
                <span className="text-[#111111] font-bold text-sm">AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
