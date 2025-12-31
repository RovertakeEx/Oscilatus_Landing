import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";
import { toast } from "react-toastify";

const AuditForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Email sent successfully!");
          form.current?.reset();
          console.log(result.text);
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="h-10 w-full rounded-md border border-border/50 bg-card/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email Address"
          required
          className="h-10 w-full rounded-md border border-border/50 bg-card/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
        />
      </div>

      <input
        type="text"
        name="company_name"
        placeholder="Company Name"
        className="h-10 w-full rounded-md border border-border/50 bg-card/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
      />

      <textarea
        name="message"
        rows={4}
        required
        placeholder="Tell us briefly about your business and current operational challenges..."
        className="min-h-[80px] w-full resize-none rounded-md border border-border/50 bg-card/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
      />

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground shadow-glow-md transition-all duration-300 hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98]"
      >
        {loading ? "Sending..." : "Submit Audit Request"}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
};

export default AuditForm;
