'use client';

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

    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2 px-4">
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
  );
}
