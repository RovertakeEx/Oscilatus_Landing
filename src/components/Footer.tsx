import { motion } from "framer-motion";
import oscilatusLogo from "../assets/img/oscilatus-logo.png";
import AuditForm from "./AuditForm";

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
            <AuditForm/>
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

            {/* Legal */}
            <div className="flex flex-col items-center md:items-end gap-2 text-sm text-muted-foreground">
              <a
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <span>© 2025 Oscilatus. All rights reserved.</span>
              {/* Credit */}
            <p className="text-xs text-muted-foreground text-center">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
