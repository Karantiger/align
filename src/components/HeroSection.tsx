import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden md:top-20 top-20">

      {/* Optional floating soft glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[65vw] h-[65vw] bg-primary/15 blur-3xl opacity-40 rounded-full" />

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 mt-10"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Version 1.0 Now Available</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Build Better Habits,
            <br />
            <span className="gradient-text">One Day at a Time</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Align helps you track, build, and maintain powerful habits with 
            streak tracking, smart reminders, and beautiful insights. 
            Available on all your devices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="gradient" size="xl" className="group">
              <Download className="w-4 h-4 mr-4" />
              Download Free
            </Button>

            <Button variant="glass" size="xl" className="group" asChild>
              <a href="#screenshots">
                See Align
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating App Preview */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="relative mx-auto max-w-5xl mb-40">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <div className="relative glass-card p-3 md:p-4 rounded-3xl shadow-glow overflow-hidden">
              <img 
                src="/2.png"
                alt="Align app interface showing habit tracking dashboard with streaks and progress bars"
                className="w-full h-auto rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
