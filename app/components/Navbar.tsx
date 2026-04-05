'use client';

import { Ellipsis } from 'lucide-react';
import { useEffect, useState } from 'react';
import PillNav from './PillNav';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => {
        const id = item.href.replace('#', '');
        return document.getElementById(id);
      })
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        const nextSection = `#${visibleEntries[0].target.id}`;
        setActiveSection(nextSection);
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    setActiveSection(href);
    setMenuOpen(false);

    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 px-4 md:block">
        <PillNav
          logoAlt="NitishKumar Naik logo"
          logoText="NK"
          items={navItems}
          activeHref={activeSection}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#f7f5f1"
          pillColor="#111111"
          hoveredPillTextColor="#111111"
          pillTextColor="#f7f5f1"
          theme="light"
          initialLoadAnimation={false}
          onItemClick={scrollToSection}
        />
      </div>

      <div className="fixed left-4 right-4 top-4 z-50 md:hidden">
        <div className="rounded-[2rem] border border-black/10 bg-[#fbfaf7]/88 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('#home')}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-semibold text-[#111111]"
              aria-label="Go to home"
            >
              NK
            </button>

            <div className="min-w-0 flex-1 px-2">
              <p className="truncate text-sm font-semibold text-[#111111]">NitishKumar Naik</p>
              <p className="truncate text-xs text-black/45">
                {navItems.find((item) => item.href === activeSection)?.label ?? 'Home'}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-[#111111] text-[#f7f5f1]"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <Ellipsis className="h-5 w-5" />
            </button>
          </div>

          {menuOpen ? (
            <div className="mt-3 grid gap-2 border-t border-black/10 pt-3">
              {navItems.map((item) => {
                const isActive = item.href === activeSection;

                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#111111] text-[#f7f5f1]'
                        : 'bg-white/70 text-black/70 hover:bg-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
