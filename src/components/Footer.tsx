import { motion } from "framer-motion";
import oscilatusLogo from "../assets/img/oscilatus-logo.png";
import AuditForm from "./AuditForm";
import { Linkedin, Facebook, Instagram, MessageCircle } from "lucide-react";

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
        {/* Footer Bottom */}
        <div className="border-t border-border/30 pt-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Brand */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={oscilatusLogo}
                  alt="Oscilatus Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold text-foreground">Oscilatus</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Digital · Systems · Creative
              </p>
              <p className="text-xs text-muted-foreground/70 italic">
                Engineering the Next.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center md:items-start gap-3">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Quick Links</h4>
                <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <a href="#services" className="hover:text-primary transition-colors">Services</a>
                  <a href="#audit" className="hover:text-primary transition-colors">Free Audit</a>
                  <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </nav>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col item-center md:items-end ">
              <div className="flex flex-col items-center md:items-start gap-3">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Follow Us</h4>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.linkedin.com/company/oscilatus" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/Oscilatus" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/oscilatus" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://wa.me/94740360711" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    aria-label="Whatsapp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>           
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <p>© {new Date().getFullYear()} {" "}
                <a className="text-muted-foreground hover:text-primary/80 font-medium transition-colors" href="https://oscilatus.com">Oscilatus.</a> All rights reserved.       
              </p>
              {/* <span className="hidden sm:inline text-border/50">|</span>
              <p>Powered by{" "}
                  <a 
                    href="https://rovertake.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary/80 font-medium transition-colors"
                  >
                    Rovertake
                  </a>
              </p> */}
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <span className="hidden sm:inline text-border/50">|</span>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
