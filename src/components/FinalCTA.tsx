import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-glow rounded-full blur-3xl opacity-40" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready to simplify operations and{" "}
            <span className="gradient-text">scale with confidence?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Take the first step toward operational clarity. 
            Our free audit will show you exactly where technology can make the biggest impact.
          </p>

          <button onClick={scrollToContact} className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow-md hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] h-14 rounded-xl px-10 text-lg group text-xs sm:text-lg">
            Get Your Free Business Systems Audit
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};