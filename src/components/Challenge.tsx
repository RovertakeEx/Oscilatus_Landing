<<<<<<< HEAD
import { motion } from "framer-motion";
=======
import { motion, easeOut } from "framer-motion";
>>>>>>> main
import {
  AlertCircle,
  Clock,
  Users,
  Brain,
  BarChart3,
  TrendingDown,
} from "lucide-react";

const challenges = [
  {
    title: "Operational Stress",
    description:
      "Constant firefighting and reacting to problems instead of growing your business.",
    icon: AlertCircle,
  },
  {
    title: "Wasted Time",
    description:
      "Hours lost daily on repetitive manual tasks that should be automated.",
    icon: Clock,
  },
  {
    title: "Manpower Dependency",
    description:
      "Over-reliance on specific people to keep operations running smoothly.",
    icon: Users,
  },
  {
    title: "Lack of Clarity",
    description:
      "No clear view of what's happening across your operations in real-time.",
    icon: Brain,
  },
  {
    title: "Limited Control",
    description:
      "Decisions based on gut feeling instead of accurate, timely data.",
    icon: BarChart3,
  },
  {
    title: "Unpredictable Growth",
    description:
      "Scaling feels risky because systems can't keep up with demand.",
    icon: TrendingDown,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Challenge = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="text-sm font-medium text-primary uppercase tracking-wider"
          >
            The Challenge
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Running a Business Shouldn&apos;t Feel This Hard
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Most businesses struggle with operational complexity that slows
            growth and drains resources. Sound familiar?
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative p-6 rounded-2xl border border-border/50 bg-secondary/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-secondary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Challenge;
