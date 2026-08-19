import { useState, useEffect } from "react";
import CvModal from "./CvModal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [showCvModal, setShowCvModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["home", "about", "projects", "contact"];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if near bottom of page
      if (windowHeight + scrollY >= documentHeight - 100) {
        setActiveSection("#contact");
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + scrollY;
          if (scrollY + 300 >= top) {
            setActiveSection(`#${id}`);
            return;
          }
        }
      }
      setActiveSection("#home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface border-b-4 border-on-surface">
        <div className="flex justify-between items-center w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-4">
          <a
            className="text-headline-md font-headline-md font-black tracking-tighter text-primary"
            href="#home"
            onClick={() => setActiveSection("#home")}
          >
            DAFFA HUSEN
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`font-label-caps text-label-caps px-4 py-2 transition-all ${
                  activeSection === link.href
                    ? "bg-brick-yellow border-4 border-on-surface brick-shadow text-on-surface font-bold"
                    : "text-on-surface-variant hover:text-primary border-4 border-transparent"
                }`}
                href={link.href}
                onClick={() => setActiveSection(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons (Preview CV + Hire Now) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Preview CV Button */}
            <button
              type="button"
              onClick={() => setShowCvModal(true)}
              className="inline-flex items-center gap-2 px-4 py-3 font-button-text text-button-text text-on-surface bg-brick-yellow brick-btn relative uppercase cursor-pointer"
            >
              <div className="absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none">
                <span className="w-3 h-3 rounded-full bg-brick-yellow border-2 border-on-surface" />
                <span className="w-3 h-3 rounded-full bg-brick-yellow border-2 border-on-surface" />
              </div>
              <span className="material-symbols-outlined text-[18px]">
                description
              </span>
              CV
            </button>

            {/* CTA Button */}
            <a
              className="inline-flex items-center justify-center px-5 py-3 font-button-text text-button-text text-on-primary bg-primary brick-btn relative uppercase cursor-pointer"
              href="#contact"
              onClick={() => setActiveSection("#contact")}
            >
              <div className="absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none">
                <span className="w-3 h-3 rounded-full bg-primary border-2 border-on-surface" />
                <span className="w-3 h-3 rounded-full bg-primary border-2 border-on-surface" />
                <span className="w-3 h-3 rounded-full bg-primary border-2 border-on-surface" />
              </div>
              HIRE Now!
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-on-surface"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-surface border-t-4 border-on-surface px-margin-desktop py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`font-label-caps px-4 py-2 transition-all ${
                  activeSection === link.href
                    ? "bg-brick-yellow border-4 border-on-surface brick-shadow text-on-surface font-bold w-fit"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.href);
                  setMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-3 mt-2">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-button-text text-button-text text-on-surface bg-brick-yellow brick-btn relative uppercase"
                onClick={() => {
                  setShowCvModal(true);
                  setMenuOpen(false);
                }}
              >
                <span className="material-symbols-outlined text-[18px]">
                  description
                </span>
                PREVIEW CV
              </button>

              <a
                className="inline-flex items-center justify-center px-6 py-3 font-button-text text-button-text text-on-primary bg-primary brick-btn relative uppercase"
                href="#contact"
                onClick={() => {
                  setActiveSection("#contact");
                  setMenuOpen(false);
                }}
              >
                HIRE Now!
              </a>
            </div>
          </div>
        )}
      </header>

      {/* CV Preview Modal */}
      <CvModal
        isOpen={showCvModal}
        onClose={() => setShowCvModal(false)}
      />
    </>
  );
}
