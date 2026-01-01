import { motion } from "framer-motion";
import { Layers, Workflow, LayoutDashboard, Settings } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Custom Internal Systems",
    description: "Purpose-built platforms designed around your unique business processes.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks and let technology handle the routine work.",
  },
  {
    icon: LayoutDashboard,
    title: "Real-Time Dashboards",
    description: "See everything happening in your business at a glance.",
  },
  {
    icon: Settings,
    title: "Ongoing Maintenance",
    description: "Continuous optimization and support to keep systems running smoothly.",
  },
];

export const Solution = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-blue-glow rounded-full blur-3xl opacity-20 -translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Technology That Simplifies{" "}
              <span className="gradient-text">Business Operations</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We design and build internal systems tailored to your business needs. 
              From automation to dashboards, we create technology infrastructure that 
              scales with you—without the complexity.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border/30 bg-card/20 hover:border-primary/30 hover:bg-card/40 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-border/30 animate-[spin_60s_linear_infinite]" />
                
                {/* Middle Ring */}
                <div className="absolute inset-8 rounded-full border border-primary/20" />
                
                {/* Inner Ring */}
                <div className="absolute inset-16 rounded-full border border-primary/40" />
                
                {/* Center Element */}
                <div className="absolute inset-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-xl border border-primary/30 flex items-center justify-center">
                  <div className="text-center">
                    <Layers className="w-12 h-12 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium text-foreground">Systems</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-card"
                >
                  <Workflow className="w-8 h-8 text-primary" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-12 left-4 w-14 h-14 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-card"
                >
                  <LayoutDashboard className="w-7 h-7 text-primary" />
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 15, -5] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/3 left-0 w-12 h-12 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-card"
                >
                  <Settings className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};