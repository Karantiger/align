import { motion } from "framer-motion";
import { 
  Flame, Bell, WifiOff, BarChart3, Target, Shield 
} from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Habit Streaks",
    description: "Build momentum with visual streak tracking. Never break the chain!",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Customizable notifications that adapt to your schedule and habits.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: WifiOff,
    title: "Offline Support",
    description: "Track your habits anywhere, anytime. No internet required.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: BarChart3,
    title: "Beautiful Analytics",
    description: "Visualize your progress with stunning charts and insights.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set daily, weekly, and monthly goals with smart tracking.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays on your devices. We never sell your information.",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <br />
            <span className="gradient-text">Build Great Habits</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Packed with powerful features designed to help you stay consistent 
            and achieve your goals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <motion.div
                className="
                  glass-card 
                  p-6 
                  rounded-2xl 
                  h-full 
                  group 
                  cursor-pointer 
                  border 
                  border-border/60
                  hover:border-primary
                  transition-all
                  duration-300
                  hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]
                "
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>

                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>

                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
