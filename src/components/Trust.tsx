import { motion } from "framer-motion";
import { Cpu, Scale, Clock, Shield } from "lucide-react";

const trustItems = [
  {
    icon: Cpu,
    title: "Technology-First",
    description: "Modern solutions built with cutting-edge tools and methodologies.",
  },
  {
    icon: Scale,
    title: "Built for Scale",
    description: "Systems designed to grow with your business, not hold you back.",
  },
  {
    icon: Clock,
    title: "Long-Term Systems",
    description: "Sustainable infrastructure that delivers value for years.",
  },
  {
    icon: Shield,
    title: "Reliable Execution",
    description: "Proven process and consistent delivery you can count on.",
  },
];

export const Trust = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-elevated/20 to-background" />
      
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
            Why Oscilatus
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Engineering the Next
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to building technology that makes a real difference in how you operate.
          </p>
        </motion.div>

        {/* Trust Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Future Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by forward-thinking businesses
          </p>
          <div className="flex items-center justify-center gap-8 opacity-30">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-8 rounded bg-border/50" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};