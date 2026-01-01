import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Calendar, Shield, Clock } from "lucide-react";

const auditIncludes = [
  "Complete operational review",
  "Identify automation opportunities",
  "System optimization recommendations",
  "Custom roadmap for your business",
];

const trustPoints = [
  { icon: Shield, text: "No commitment required" },
  { icon: Calendar, text: "Limited availability" },
  { icon: Clock, text: "30-minute session" },
];

export const Audit = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="audit" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-glow rounded-full blur-3xl opacity-30" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <div className="relative p-8 sm:p-12 rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-xl shadow-glow-lg">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Limited This Month</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Free Business Systems Audit
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Get a clear understanding of your current operations and discover exactly how 
              technology can eliminate inefficiencies and accelerate growth—no strings attached.
            </p>

            {/* What's Included */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {auditIncludes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6 mb-10">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <point.icon className="w-4 h-4" />
                  <span className="text-sm">{point.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button onClick={scrollToContact} className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow-md hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] h-14 rounded-xl px-10 text-lg group">
              Book Free Audit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};