import { motion } from "framer-motion";
import { 
  Monitor, 
  Smartphone, 
  Download, 
  CheckCircle, 
  Laptop, 
  TabletSmartphone 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    name: "Windows",
    icon: Monitor,
    version: "Coming Soon ...",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "macOS",
    icon: Laptop,
    version: "Coming Soon ...",
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "Android",
    icon: Smartphone,
    version: "v1.0.0",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "iPhone / iOS",
    icon: TabletSmartphone,
    version: "v1.0.0",
    color: "from-sky-500 to-indigo-500",
  },
];

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 relative overflow-hidden">

      {/* Smooth section gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download for Your Platform
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Align is available on all major platforms. Download now and start building 
            better habits today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.div
                className="glass-card p-6 rounded-2xl h-full flex flex-col items-center text-center group cursor-pointer"
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <platform.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {platform.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {platform.version}
                </p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Verified & Secure</span>
                </div>

                <Button variant="outline" className="w-full group/btn mt-auto">
                  <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                  Download
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
