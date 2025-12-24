import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import oscilatusLogo from "../assets/img/oscilatus-logo.png";


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToAudit = () => {
        document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
    };

  return (
        <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src={oscilatusLogo}
            alt="Oscilatus Logo"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-bold text-foreground tracking-tight">
            Oscilatus
          </span>
        </a>

        {/* CTA Button */}
        <button onClick={scrollToAudit} className="items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm ring-offset-background transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-md hover:shadow-glow-lg font-semibold h-10 px-5 py-2 hidden sm:inline-flex">Get Free Audit</button>

        <button onClick={scrollToAudit} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-md hover:shadow-glow-lg font-semibold h-9 rounded-md px-4 sm:hidden">Free Audit</button>
      </div>
    </motion.header>
  )
}

export default Header