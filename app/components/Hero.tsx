'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:py-24">
      <div className="relative w-full max-w-6xl min-h-[780px] sm:min-h-[860px] lg:min-h-[640px]">
        <div className="absolute inset-0 rounded-[2.5rem] bg-white/45 backdrop-blur-[4px]" />

        <div className="relative z-10 h-full rounded-[2.5rem] overflow-hidden border border-black/10 bg-[#fbfaf7]/75 shadow-[0_35px_100px_rgba(15,15,15,0.12)]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/35 to-black/5 blur-3xl opacity-80" />
          <div className="relative grid h-full gap-8 p-6 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
            <div className="order-2 flex flex-col justify-center space-y-6 lg:order-1 lg:space-y-8">
              <div className="space-y-4">
                <AnimatedText
                  text="Hey, I&apos;m"
                  className="text-base font-medium text-black/55 sm:text-lg"
                  animation="fadeIn"
                  delay={200}
                />
                <AnimatedText
                  text="NitishKumar Naik"
                  className="text-4xl font-bold leading-[0.95] sm:text-5xl lg:text-7xl bg-gradient-to-r from-[#111111] to-[#5f5f5f] bg-clip-text text-transparent"
                  animation="slideUp"
                  delay={400}
                />
                <AnimatedText
                  text="Full-Stack Developer | DevOps Enthusiast | Problem Solver"
                  className="text-lg leading-8 text-black/60 font-light sm:text-xl lg:text-2xl"
                  animation="slideUp"
                  delay={600}
                />
              </div>

              <p className="max-w-xl text-base leading-8 text-black/58 lg:text-lg">
                Computer Science student building full-stack applications, data-driven solutions,
                and deployment-ready systems with growing expertise in cloud and DevOps workflows.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-[#111111] text-[#f7f5f1] font-semibold rounded-full hover:bg-black transition-all duration-300 transform hover:scale-105"
                >
                  View Projects
                </button>
                <a
                  href="/nitish-kumar-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 border border-black/12 text-[#111111] font-semibold rounded-full hover:bg-black/[0.04] transition-all duration-300 backdrop-blur-sm text-center"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="order-1 flex items-center justify-center pt-2 lg:order-2 lg:justify-end lg:pt-0">
              <div className="relative">
                <div className="flex h-52 w-52 items-center justify-center rounded-full border border-black/8 bg-gradient-to-br from-black/[0.04] to-white/60 backdrop-blur-sm sm:h-64 sm:w-64 lg:h-80 lg:w-80">
                  <div className="relative h-44 w-44 overflow-hidden rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:h-56 sm:w-56 lg:h-72 lg:w-72">
                    <Image
                      src="/nitish-kumar-photo.jpg"
                      alt="NitishKumar Naik portrait"
                      fill
                      sizes="(min-width: 1024px) 18rem, (min-width: 640px) 14rem, 11rem"
                      className="object-cover object-top scale-[1.03]"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/8 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 sm:block">
        <button
          onClick={scrollToAbout}
          className="animate-bounce p-3 rounded-full bg-white/60 backdrop-blur-sm border border-black/10 hover:bg-white/80 transition-all duration-300"
        >
          <ChevronDown className="w-6 h-6 text-black/55" />
        </button>
      </div>
    </section>
  );
}
