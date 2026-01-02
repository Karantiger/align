import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden"
    >
      {/* 🔥 Background Highlight / Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto ">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Meet the Developer
            </h2>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              glass-card 
              p-8 
              md:p-12 
              rounded-3xl 
              border 
              border-border/60 
              border-primary 
              transition-all 
              duration-300 
              hover:shadow-[0_0_35px_rgba(99,102,241,0.25)]
            "
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">

              {/* Avatar */}
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="rounded-3xl bg-gradient-primary flex items-center justify-center">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsNy_iyLj_XcVbAoDMOZDbpV9_39zng1ROQ&s" 
                    alt="Developer Avatar" 
                    className="w-36 h-36 md:w-60 md:h-60 rounded-2xl object-cover border-4 border-primary-foreground" 
                  />
                </div>
              </motion.div>

              {/* Bio */}
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Karan Kumar Bind
                </h3>

                <p className="text-primary font-medium mb-4">
                  Full-Stack Java Developer & Creator
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Hi! I'm a passionate developer who believes that building good habits is the 
                  foundation of a successful life. Align started as a personal project to 
                  help me stay consistent with my daily routines, and it has grown into something 
                  that helps thousands of people worldwide.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  I'm committed to keeping Align simple, beautiful, and effective. 
                  Every feature is thoughtfully designed with you in mind.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
