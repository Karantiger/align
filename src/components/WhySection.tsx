import { motion } from "framer-motion";
import { Heart, Lightbulb, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Built with Love",
    description: "Every feature is crafted with care to help you succeed in your habit-building journey.",
  },
  {
    icon: Lightbulb,
    title: "Science-Backed",
    description: "Our methods are based on proven behavioral psychology and habit formation research.",
  },
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Optimized for speed so tracking habits never feels like a chore.",
  },
];

const WhySection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Habit Tracker That
              <br />
              <span className="gradient-text">Actually Works</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We've built Align with one goal in mind: to help you build lasting habits 
              without the complexity. No overwhelming features, no steep learning curve—just 
              a beautiful, effective tool that works.
            </p>
            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
            <div className="relative glass-card p-8 rounded-3xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "Focus", label: "Distraction-free experience" },
                  { value: "Daily", label: "Built for everyday use" },
                  { value: "Simple", label: "No-compromise design" },
                  { value: "Private", label: "Your data stays with you" },
                  { value: "Offline", label: "Works even without internet" },
                  { value: "Free", label: "Start with a free download" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="text-center p-6 bg-secondary/50 rounded-2xl"
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
