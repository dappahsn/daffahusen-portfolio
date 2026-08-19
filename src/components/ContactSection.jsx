import { useState } from "react";
import emailjs from "@emailjs/browser";
import { personal, socials, socialIcons } from "../data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all fields before sending!");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_wbttiyf";
    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_9mytz7l";
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "zKVX1QMfXWK-EpDIL";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          user_email: formData.email,
          message: formData.message,
          to_name: personal.name,
        },
        publicKey
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMessage(
        err?.text || "Failed to send message. Please try again or email directly."
      );
    }
  };

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-32 scroll-mt-28" id="contact">
      <div className="mb-8">
        <h2 className="font-headline-md text-headline-md text-on-surface bg-brick-yellow border-4 border-on-surface px-4 py-2 inline-block w-fit brick-shadow uppercase">
          CONTACT
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div>
          <h3 className="font-display-lg text-on-surface uppercase mb-4 leading-tight text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg">
            LET&apos;S BUILD
            <br />
            <span className="text-primary">SOMETHING TOGETHER</span>
          </h3>
          <p className="font-body-lg text-on-surface mb-6 text-body-lg leading-relaxed">
            Have a project in mind, an opportunity to discuss, or just want to connect? Send me a message or find me on social media!
          </p>

          <div className="flex flex-col gap-2 mb-8 text-on-surface">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[20px]">
                mail
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="font-button-text hover:underline text-sm"
              >
                {personal.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-brick-blue text-[20px]">
                location_on
              </span>
              <span className="font-body-md text-sm">{personal.location}</span>
            </div>
          </div>

          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={social.name}
                  className="w-14 h-14 bg-white text-on-surface border-4 border-on-surface brick-shadow hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#1a1c1c] transition-all inline-flex items-center justify-center rounded-xl cursor-pointer group"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  {Icon && (
                    <Icon className="w-6 h-6 fill-current text-on-surface group-hover:scale-110 transition-transform" />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="brick-card p-8 bg-white relative">
          <div className="absolute -top-3 left-8 flex gap-6 px-2 pointer-events-none z-20">
            <span className="w-6 h-6 rounded-full bg-white border-2 border-on-surface" />
            <span className="w-6 h-6 rounded-full bg-white border-2 border-on-surface" />
            <span className="w-6 h-6 rounded-full bg-white border-2 border-on-surface" />
          </div>

          {status === "success" ? (
            <div className="pt-6 pb-4 flex flex-col items-center text-center gap-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-brick-yellow border-4 border-on-surface flex items-center justify-center brick-shadow">
                <span className="material-symbols-outlined text-on-surface text-[32px]">
                  check_circle
                </span>
              </div>
              <h4 className="font-headline-md text-on-surface uppercase text-xl">
                MESSAGE DELIVERED!
              </h4>
              <p className="font-body-md text-on-surface-variant max-w-sm text-sm">
                Thank you for reaching out! Your message has been sent successfully to {personal.name}. I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 py-2.5 bg-primary text-white font-button-text text-xs uppercase brick-btn cursor-pointer"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 pt-2">
              {status === "error" && (
                <div className="p-3 bg-red-100 border-2 border-primary text-primary text-xs font-bold font-label-caps flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    error
                  </span>
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-caps font-bold text-on-surface uppercase text-xs"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="border-3 border-on-surface p-3 font-body-md bg-surface-container focus:outline-none focus:bg-white transition-colors brick-shadow text-sm"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  type="text"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-caps font-bold text-on-surface uppercase text-xs"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  className="border-3 border-on-surface p-3 font-body-md bg-surface-container focus:outline-none focus:bg-white transition-colors brick-shadow text-sm"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  type="email"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-caps font-bold text-on-surface uppercase text-xs"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  className="border-3 border-on-surface p-3 font-body-md bg-surface-container focus:outline-none focus:bg-white transition-colors brick-shadow min-h-[120px] text-sm"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What would you like to build or discuss?"
                  required
                />
              </div>

              <button
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-on-primary font-button-text text-button-text brick-btn uppercase relative mt-2 w-full cursor-pointer disabled:opacity-50"
                type="submit"
                disabled={status === "sending"}
              >
                <div className="absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none">
                  <span className="w-3 h-3 rounded-full bg-primary border-2 border-on-surface" />
                  <span className="w-3 h-3 rounded-full bg-primary border-2 border-on-surface" />
                  <span className="w-3 h-3 rounded-full bg-primary border-2 border-on-surface" />
                </div>
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    SENDING...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
