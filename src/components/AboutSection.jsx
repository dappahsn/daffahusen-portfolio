import { useState } from "react";
import { personal, education } from "../data";
import DetailModal from "./DetailModal";

export default function AboutSection() {
  const [selectedEdu, setSelectedEdu] = useState(null);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-32">
      <div className="flex flex-col gap-12">
        {/* About */}
        <div className="flex flex-col gap-6">
          <h2 className="font-headline-md text-headline-md text-on-surface bg-brick-yellow border-4 border-on-surface px-4 py-2 inline-block w-fit brick-shadow uppercase">
            ABOUT ME
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bio Card */}
            <div className="brick-card p-8 bg-white h-full flex flex-col justify-center relative">
              <div className="absolute -top-3 left-4 flex gap-4 px-2 pointer-events-none">
                <span className="w-4 h-4 rounded-full bg-white border-2 border-on-surface z-10" />
                <span className="w-4 h-4 rounded-full bg-white border-2 border-on-surface z-10" />
                <span className="w-4 h-4 rounded-full bg-white border-2 border-on-surface z-10" />
              </div>
              <h3 className="font-display-lg-mobile text-primary uppercase font-extrabold mb-3">
                {personal.about.intro}
              </h3>
              <p className="font-body-md text-body-md text-on-surface mb-4 leading-relaxed">
                {personal.about.description}
              </p>
              <div className="mt-auto pt-4 border-t-2 border-on-surface flex items-center gap-2 text-xs font-bold text-on-surface-variant font-label-caps">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  location_on
                </span>
                {personal.location}
              </div>
            </div>

            {/* Education & Stats */}
            <div className="flex flex-col gap-6">
              <h3 className="font-button-text text-button-text text-on-surface bg-surface-container-high border-4 border-on-surface px-4 py-2 inline-block w-fit uppercase">
                EDUCATION
              </h3>

              <div className="flex flex-col gap-4">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="brick-card p-6 relative bg-white flex gap-4 items-start group"
                  >
                    <div className="w-16 h-16 border-3 border-on-surface bg-white rounded-xl flex-shrink-0 overflow-hidden flex items-center justify-center p-2 brick-shadow">
                      {edu.logo ? (
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="material-symbols-outlined text-primary text-[28px]">
                          school
                        </span>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-wrap md:flex-row md:justify-between md:items-start gap-1 mb-1">
                        <h4 className="font-headline-md text-on-surface uppercase text-[16px] md:text-[18px] leading-snug break-words">
                          {edu.institution}
                        </h4>
                        <div className="bg-brick-yellow border-2 border-on-surface px-2 py-1 font-label-caps font-bold text-[10px] text-on-surface w-fit flex-shrink-0">
                          {edu.period}
                        </div>
                      </div>
                      <div className="font-button-text text-primary uppercase text-[13px] md:text-[14px] leading-snug break-words">
                        {edu.degree}
                      </div>
                      <p className="mt-2 font-body-md text-on-surface text-[13px] leading-relaxed line-clamp-2">
                        {edu.description}
                      </p>

                      <button
                        type="button"
                        onClick={() => setSelectedEdu(edu)}
                        className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-surface text-on-surface border-2 border-on-surface font-label-caps text-[11px] font-bold uppercase brick-btn cursor-pointer"
                      >
                        <span>VIEW DETAILS</span>
                        <span className="material-symbols-outlined text-[14px]">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-auto">
                <div className="brick-card p-3 sm:p-4 text-center bg-white text-on-surface hover:-translate-y-1 transition-transform group">
                  <div className="font-headline-md text-[22px] sm:text-[26px] font-extrabold text-on-surface mb-0.5">
                    6+
                  </div>
                  <div className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant font-bold uppercase leading-tight">
                    Projects Completed
                  </div>
                </div>

                <div className="brick-card p-3 sm:p-4 text-center bg-white text-on-surface hover:-translate-y-1 transition-transform group">
                  <div className="font-headline-md text-[22px] sm:text-[26px] font-extrabold text-on-surface mb-0.5">
                    3+
                  </div>
                  <div className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant font-bold uppercase leading-tight">
                    Years of Experience
                  </div>
                </div>

                <div className="brick-card p-3 sm:p-4 text-center bg-white text-on-surface hover:-translate-y-1 transition-transform group">
                  <div className="font-headline-md text-[22px] sm:text-[26px] font-extrabold text-on-surface mb-0.5">
                    15+
                  </div>
                  <div className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant font-bold uppercase leading-tight">
                    Tech Mastered
                  </div>
                </div>

                <div className="brick-card p-3 sm:p-4 text-center bg-white text-on-surface hover:-translate-y-1 transition-transform group">
                  <div className="font-headline-md text-[22px] sm:text-[26px] font-extrabold text-on-surface mb-0.5">
                    100%
                  </div>
                  <div className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant font-bold uppercase leading-tight">
                    Passion for Code
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal for Education */}
      <DetailModal
        isOpen={Boolean(selectedEdu)}
        onClose={() => setSelectedEdu(null)}
        data={selectedEdu}
        type="education"
      />
    </section>
  );
}
