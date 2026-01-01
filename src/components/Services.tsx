import { motion } from "framer-motion";
import { 
  Server, 
  Workflow, 
  LayoutDashboard, 
  Wrench, 
  HeadphonesIcon,
  Megaphone,
  TrendingUp,
  Video,
  CheckCircle2
} from "lucide-react";

const primaryServices = [
  { icon: Server, text: "Custom internal systems" },
  { icon: Workflow, text: "Workflow automation" },
  { icon: LayoutDashboard, text: "Dashboards & platforms" },
  { icon: Wrench, text: "System optimization" },
  { icon: HeadphonesIcon, text: "Maintenance & support" },
];

const secondaryServices = [
  { icon: Megaphone, text: "Performance marketing" },
  { icon: TrendingUp, text: "Growth campaigns" },
  { icon: Video, text: "Ad creatives & video" },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-glow rounded-full blur-3xl opacity-15" />
      
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
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Services Built for Scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Core systems engineering backed by strategic digital enablement.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Primary Service - Internal Systems Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl group-hover:from-primary/15 transition-all duration-300" />
            <div className="relative p-8 rounded-3xl border border-primary/30 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Primary Service</span>
                  <h3 className="text-xl font-bold text-foreground">Internal Systems Engineering</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We build the technology infrastructure that powers your business—custom platforms, 
                automated workflows, and intelligent dashboards designed for your specific needs.
              </p>

              <div className="space-y-3">
                {primaryServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{service.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Secondary Service - Digital & Creative Enablement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl border border-border/40 bg-card/20 backdrop-blur-sm hover:border-border/60 transition-all duration-300 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Megaphone className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Supporting Service</span>
                  <h3 className="text-xl font-bold text-foreground">Digital & Creative Enablement</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Strategic marketing support to amplify your systems-driven growth. 
                We help you reach the right audience with the right message.
              </p>

              <div className="space-y-3">
                {secondaryServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-5 h-5 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                    </div>
                    <span>{service.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};