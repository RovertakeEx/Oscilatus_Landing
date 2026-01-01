import { motion } from "framer-motion";
import { MessageSquare, Search, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Request Audit",
    description: "Fill out a brief form telling us about your business and current operations.",
  },
  {
    number: "02",
    icon: Search,
    title: "Business Review",
    description: "We analyze your workflows, identify bottlenecks, and map out improvement opportunities.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Receive Clarity",
    description: "Get a clear roadmap with actionable recommendations tailored to your needs.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple three-step process to get clarity on your operations.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px bg-gradient-to-r from-border via-primary/50 to-border" />
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step Number & Icon */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-card border border-border/50 flex items-center justify-center relative z-10 mx-auto hover:border-primary/50 hover:shadow-card transition-all duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
