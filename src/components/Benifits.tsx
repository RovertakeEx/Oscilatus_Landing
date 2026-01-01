import { motion } from "framer-motion";
import { 
  Clock, 
  Briefcase, 
  Shield, 
  CheckCircle2, 
  Zap, 
  TrendingUp
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Reclaim hours every week by automating repetitive manual tasks.",
  },
  {
    icon: Briefcase,
    title: "Reduce Workload",
    description: "Streamline operations so your team can focus on what matters.",
  },
  {
    icon: Shield,
    title: "Improve Control",
    description: "Gain full visibility into every aspect of your business operations.",
  },
  {
    icon: CheckCircle2,
    title: "Fewer Errors",
    description: "Systematic processes eliminate human error and inconsistencies.",
  },
  {
    icon: Zap,
    title: "Faster Decisions",
    description: "Real-time data means you can act quickly with confidence.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Systems that grow with you, not ones you outgrow.",
  },
//   {
//     icon: HeartPulse,
//     title: "Peace of Mind",
//     description: "Know that your operations run smoothly, even when you're away.",
//   },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export const Benefits = () => {
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
            Why It Matters
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            The Benefits of Better Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform how your business operates with technology designed for efficiency and growth.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl border border-border/40 bg-card/20 backdrop-blur-sm hover:border-primary/40 hover:bg-card/40 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};