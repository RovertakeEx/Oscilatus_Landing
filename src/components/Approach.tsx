import { motion } from "framer-motion";
import {Layers,Workflow,LayoutDashboard,Settings,} from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
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

const ApproachSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              className="text-sm font-medium text-primary uppercase tracking-wider"
            >
              Our Approach
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight"
            >
              Technology That Simplifies{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Business Operations
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              We design and build internal systems tailored to your business
              needs. From automation to dashboards, we create technology
              infrastructure that scales with you—without the complexity.
            </motion.p>

            <div className="space-y-4">
              <Feature
                icon={<Layers />}
                title="Custom Internal Systems"
                desc="Purpose-built platforms designed around your unique business processes."
              />
              <Feature
                icon={<Workflow />}
                title="Workflow Automation"
                desc="Eliminate repetitive tasks and let technology handle the routine work."
              />
              <Feature
                icon={<LayoutDashboard />}
                title="Real-Time Dashboards"
                desc="See everything happening in your business at a glance."
              />
              <Feature
                icon={<Settings />}
                title="Ongoing Maintenance"
                desc="Continuous optimization and support to keep systems running smoothly."
              />
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-border/30 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-primary/20" />
              <div className="absolute inset-16 rounded-full border border-primary/40" />

              <div className="absolute inset-24 rounded-full bg-background/60 backdrop-blur-xl border border-border/50 flex items-center justify-center">
                <div className="text-center">
                  <Layers className="w-12 h-12 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-foreground">
                    Systems
                  </span>
                </div>
              </div>

              <FloatingIcon className="top-8 right-8">
                <Workflow className="w-8 h-8 text-primary" />
              </FloatingIcon>

              <FloatingIcon className="bottom-12 left-4">
                <LayoutDashboard className="w-7 h-7 text-primary" />
              </FloatingIcon>

              <FloatingIcon className="top-1/3 left-0">
                <Settings className="w-6 h-6 text-primary" />
              </FloatingIcon>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;

const Feature = ({
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
    className="flex items-start gap-4 p-4 rounded-xl
      bg-background/60 backdrop-blur-xl
      border border-border/50
      hover:border-primary/40 hover:bg-background/80
      transition-all duration-300"
  >
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </motion.div>
);


const FloatingIcon = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => (
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className={`absolute w-14 h-14 rounded-xl
      bg-background/80 backdrop-blur-xl
      border border-border/50
      flex items-center justify-center shadow-lg ${className}`}
  >
    {children}
  </motion.div>
);

