import { Download, Mail, MapPin, Phone } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

type SocialIconProps = {
  className?: string;
};

function GitHubIcon({ className = 'w-6 h-6' }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.589 2 12.248c0 4.526 2.865 8.367 6.839 9.722.5.096.682-.222.682-.493 0-.243-.009-.888-.014-1.743-2.782.617-3.369-1.386-3.369-1.386-.455-1.177-1.11-1.491-1.11-1.491-.908-.635.069-.622.069-.622 1.004.072 1.532 1.054 1.532 1.054.892 1.566 2.341 1.114 2.91.852.091-.664.349-1.114.635-1.37-2.221-.261-4.555-1.14-4.555-5.073 0-1.12.389-2.036 1.029-2.754-.103-.261-.446-1.312.098-2.736 0 0 .84-.277 2.75 1.052A9.305 9.305 0 0 1 12 6.836a9.27 9.27 0 0 1 2.504.348c1.909-1.329 2.748-1.052 2.748-1.052.546 1.424.202 2.475.1 2.736.64.718 1.028 1.634 1.028 2.754 0 3.943-2.337 4.809-4.566 5.064.359.319.678.948.678 1.911 0 1.379-.012 2.49-.012 2.829 0 .274.18.594.688.492C19.138 20.61 22 16.772 22 12.248 22 6.589 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-6 h-6' }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.3 3.9 3.3 5.01c0 1.1.86 2 1.93 2 1.08 0 1.95-.9 1.95-2C7.18 3.9 6.33 3 5.25 3ZM20.7 12.91c0-3.46-1.82-5.07-4.25-5.07-1.96 0-2.84 1.1-3.33 1.87V8.5H9.74c.04.8 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.93.27-.68.87-1.38 1.89-1.38 1.33 0 1.87 1.04 1.87 2.56V20h3.38v-7.09Z" />
    </svg>
  );
}

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nitishnaik041@gmail.com',
      href: 'mailto:nitishnaik041@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8618215010',
      href: 'tel:+918618215010',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mangalore, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: GitHubIcon,
      label: 'GitHub',
      href: 'https://github.com/Nitish041',
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nitish-naik-909249293',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#111111] to-[#6a6a6a] bg-clip-text text-transparent">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.01}
          >
            Let&apos;s Connect
          </ScrollFloat>
        </h2>
        <p className="text-xl text-black/55 mb-12 max-w-2xl mx-auto">
          Open to internships, collaborative projects, and opportunities to contribute to
          full-stack and DevOps-focused teams. Feel free to reach out.
        </p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              className="group p-6 rounded-3xl bg-gradient-to-br from-white/70 to-[#e7e2d9]/75 backdrop-blur-sm border border-black/10 hover:border-black/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 rounded-full bg-black/[0.05] group-hover:bg-black/[0.08] transition-colors duration-300">
                  <info.icon className="w-6 h-6 text-black/60" />
                </div>
                <div>
                  <div className="text-sm text-black/45 mb-1">{info.label}</div>
                  <div className="text-[#111111] font-medium group-hover:text-black/70 transition-colors duration-300">
                    {info.value}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full bg-white/55 backdrop-blur-sm border border-black/10 hover:bg-white/80 hover:border-black/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/5"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-black/55 hover:text-[#111111] transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Resume Download */}
        <div className="flex justify-center">
          <a
            href="/nitish-kumar-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-[#f7f5f1] font-semibold rounded-full hover:bg-black transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400">
            © 2024 NitishKumar Naik. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
