import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_arriwyv";
    const TEMPLATE_ID = "template_yejwt2q";
    const PUBLIC_KEY = "RRH9-DHDXwsNuvauY";

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(() => {
          setStatus("success");
          form.current?.reset();
        })
        .catch(() => {
          setStatus("error");
        })
        .finally(() => {
          setIsSubmitting(false);
          setTimeout(() => setStatus("idle"), 5000);
        });
    }
  };

  return (
    <section className="bg-[#F4F6FD] py-12 md:py-12 fluid__container text-center">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-[#005CFF]"></div>
          <div className="h-[2px] w-8 bg-[#005CFF]"></div>
        </div>
        <span className="text-[#005CFF] font-inter font-bold text-xs md:text-sm tracking-widest uppercase">
          Let's Connect
        </span>
        <div className="flex items-center gap-2">
          <div className="h-[2px] w-8 bg-[#005CFF]"></div>
          <div className="w-1 h-1 rounded-full bg-[#005CFF]"></div>
        </div>
      </div>

      <h2 className="font-sansita text-3xl md:text-5xl mb-4 text-black leading-tight">
        Let's Build Something Great
      </h2>
      <p className="font-medium font-poppins mb-8 text-base md:text-lg">
        Have a project or a idea? Send me a message
      </p>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="max-w-[452px] mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full px-6 py-4 rounded-[5px] border border-border focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-inter placeholder:text-gray-400"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full px-6 py-4 rounded-[5px] border border-border focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-inter placeholder:text-gray-400"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-base bg-[#005CFF] text-white font-inter font-bold py-4 rounded-[5px] hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98] disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 font-inter font-medium">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-inter font-medium">
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      <div className="mt-12 pt-4 relative max-w-[555px] mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex items-center justify-center gap-4">
          <div className="h-px bg-[#879194] grow"></div>
          <span className="font-inter font-medium text-sm whitespace-nowrap">
            Or
          </span>
          <div className="h-px bg-[#879194] grow"></div>
        </div>
        <p className="font-inter text-gray-800 text-lg md:text-xl mt-4">
          Or contact me directly via email{" "}
          <a
            href="mailto:oviesalvay@gmail.com"
            className="text-primary font-bold hover:underline"
          >
            oviesalvay@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};
