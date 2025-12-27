import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import oscilatusLogo from "../assets/img/oscilatus-logo.png";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden pt-24 pb-12"
    >
      <div className="relative z-10 container mx-auto px-6">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Request Your Free Audit
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Tell us about your business and current operations. We&apos;ll
                review your submission and get back to you within 24 hours to
                schedule your free systems audit.
              </p>

              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <span className="text-foreground font-medium">Email:</span>{" "}
                  hello@oscilatus.com
                </p>
                <p>
                  <span className="text-foreground font-medium">Website:</span>{" "}
                  <a
                    href="https://oscilatus.com"
                    className="text-primary hover:underline"
                  >
                    oscilatus.com
                  </a>
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="h-10 w-full rounded-md border border-border/50 bg-card/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="h-10 w-full rounded-md border border-border/50 bg-card/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
                />
              </div>

              <input
                type="text"
                placeholder="Company Name"
                className="h-10 w-full rounded-md border border-border/50 bg-card/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
              />

              <textarea
                rows={4}
                required
                placeholder="Tell us briefly about your business and current operational challenges..."
                className="min-h-[80px] w-full resize-none rounded-md border border-border/50 bg-card/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
              />

              <button
                type="submit"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground shadow-glow-md transition-all duration-300 hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                Submit Audit Request
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* footer Bar section */}
        <div className="border-t border-border/30 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* logo */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-3">
                <img
            src={oscilatusLogo}
            alt="Oscilatus Logo"
            className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-105"
          />
                <span className="text-lg font-bold text-foreground">
                  Oscilatus
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Digital · Systems · Creative
              </p>
              <p className="text-xs text-muted-foreground">
                Engineering the Next.
              </p>
            </div>

            {/* Credit */}
            <p className="text-sm text-muted-foreground text-center">
              Developed by{" "}
              <a
                href="https://rovertake.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Rovertake
              </a>
            </p>

            {/* Legal */}
            <div className="flex flex-col items-center md:items-end gap-2 text-sm text-muted-foreground">
              <a
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <span>© 2025 Oscilatus. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
