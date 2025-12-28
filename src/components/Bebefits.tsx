import { motion } from "framer-motion";
import {Clock,Briefcase,Shield,CircleCheck,Zap,TrendingUp,HeartPulse,} from "lucide-react";
import { fadeUp, stagger } from "../lib/animations";

const BenefitsSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-elevated/20 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-medium text-primary uppercase tracking-wider"
          >
            Why It Matters
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6"
          >
            The Benefits of Better Systems
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Transform how your business operates with technology designed for
            efficiency and growth.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <BenefitCard
            icon={<Clock />}
            title="Save Time"
            desc="Reclaim hours every week by automating repetitive manual tasks."
          />
          <BenefitCard
            icon={<Briefcase />}
            title="Reduce Workload"
            desc="Streamline operations so your team can focus on what matters."
          />
          <BenefitCard
            icon={<Shield />}
            title="Improve Control"
            desc="Gain full visibility into every aspect of your business operations."
          />
          <BenefitCard
            icon={<CircleCheck />}
            title="Fewer Errors"
            desc="Systematic processes eliminate human error and inconsistencies."
          />
          <BenefitCard
            icon={<Zap />}
            title="Faster Decisions"
            desc="Real-time data means you can act quickly with confidence."
          />
          <BenefitCard
            icon={<TrendingUp />}
            title="Scalable Growth"
            desc="Systems that grow with you, not ones you outgrow."
          />
          <BenefitCard
            icon={<HeartPulse />}
            title="Peace of Mind"
            desc="Know that your operations run smoothly, even when you're away."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;

const BenefitCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <motion.div
    variants={fadeUp}
    className="group relative p-6 rounded-2xl
      bg-background/60 backdrop-blur-xl
      border border-border/40
      hover:border-primary/40 hover:bg-background/80 hover:shadow-card
      transition-all duration-300"
  >
    <div
      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4
      group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 text-primary"
    >
      {icon}
    </div>

    <h3 className="text-lg font-semibold text-foreground mb-2">
      {title}
    </h3>

    <p className="text-sm text-muted-foreground leading-relaxed">
      {desc}
    </p>
  </motion.div>
);
