import { personal } from "../data";

const roleConfigs = [
  {
    // Computer Engineering Graduate - Blue
    hover:
      "hover:bg-[#0055A4] hover:text-white hover:-rotate-3 hover:-translate-y-1.5 hover:shadow-[4px_4px_0px_0px_#1a1c1c]",
  },
  {
    // Front-End Developer - Yellow
    hover:
      "hover:bg-brick-yellow hover:text-on-surface hover:rotate-3 hover:-translate-y-1.5 hover:shadow-[4px_4px_0px_0px_#1a1c1c]",
  },
  {
    // UI/UX Designer - Green
    hover:
      "hover:bg-[#00852B] hover:text-white hover:-rotate-2 hover:-translate-y-1.5 hover:shadow-[4px_4px_0px_0px_#1a1c1c]",
  },
  {
    // Machine Learning Enthusiast - Red
    hover:
      "hover:bg-primary hover:text-white hover:rotate-3 hover:-translate-y-1.5 hover:shadow-[4px_4px_0px_0px_#1a1c1c]",
  },
];

export default function HeroSection() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-32 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Text Content */}
        <div className="md:col-span-7 flex flex-col gap-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brick-yellow border-4 border-on-surface brick-shadow w-fit">
            <span className="w-3 h-3 rounded-full bg-primary animate-pulse border-2 border-on-surface" />
            <span className="font-label-caps text-label-caps text-on-surface font-bold">
              STATUS: READY TO BUILD
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface uppercase">
            Muhammad daffa
            <br />
            <span className="text-primary">husen</span>
          </h1>

          {/* Bio Card */}
          <div className="brick-card p-6 max-w-xl bg-white">
            <p className="font-body-lg text-body-lg text-on-surface">
              {personal.description}
            </p>
            <div className="flex flex-wrap gap-2.5 mt-4">
              {personal.roles.map((role, idx) => {
                const config = roleConfigs[idx % roleConfigs.length];
                return (
                  <span
                    key={role}
                    className={`inline-block px-3 py-1.5 bg-surface-container border-2 border-on-surface font-label-caps text-[11px] font-bold text-on-surface cursor-pointer select-none transition-all duration-200 ease-out hover:scale-105 ${config.hover}`}
                  >
                    {role}
                  </span>
                );
              })}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-button-text text-button-text brick-btn uppercase relative cursor-pointer"
              href="#projects"
            >
              <div className="absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none">
                <span className="w-3 h-3 rounded-full bg-primary border-2 border-on-surface" />
                <span className="w-3 h-3 rounded-full bg-primary border-2 border-on-surface" />
                <span className="w-3 h-3 rounded-full bg-primary border-2 border-on-surface" />
              </div>
              VIEW PROJECTS{" "}
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:col-span-5 relative">
          <div className="relative w-full aspect-[3/4] md:aspect-square overflow-hidden border-4 border-on-surface brick-shadow bg-brick-blue">
            <img
              alt={personal.name}
              className="w-full h-full object-cover transition-all duration-300"
              src={personal.heroImage}
            />
          </div>
          {/* Floating Badges */}
          <div className="absolute top-6 right-2 sm:-right-3 md:-right-6 bg-brick-yellow px-3 sm:px-4 py-2 sm:py-2.5 border-3 sm:border-4 border-on-surface brick-shadow flex items-center gap-2 animate-float-badge-1 hover:scale-105 transition-transform duration-200 cursor-default z-10 select-none">
            <div className="absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-brick-yellow border-2 border-on-surface" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-brick-yellow border-2 border-on-surface" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-brick-yellow border-2 border-on-surface" />
            </div>
            <span className="material-symbols-outlined text-on-surface text-[18px] sm:text-[20px]">
              brush
            </span>
            <span className="font-label-caps text-[11px] sm:text-label-caps font-bold text-on-surface">
              UI/UX &amp; DEV
            </span>
          </div>

          <div className="absolute bottom-6 left-2 sm:-left-3 md:-left-6 bg-primary text-on-primary px-3 sm:px-4 py-2 sm:py-2.5 border-3 sm:border-4 border-on-surface brick-shadow flex items-center gap-2 font-label-caps text-[11px] sm:text-label-caps font-bold animate-float-badge-2 hover:scale-105 transition-transform duration-200 cursor-default z-10 select-none">
            <div className="absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-primary border-2 border-on-surface" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-primary border-2 border-on-surface" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-primary border-2 border-on-surface" />
            </div>
            <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
              psychology
            </span>
            <span>MACHINE LEARNING</span>
          </div>
        </div>
      </div>
    </section>
  );
}
