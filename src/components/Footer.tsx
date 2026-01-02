import { motion } from "framer-motion";
import { Heart, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border/60 bg-gradient-to-t from-background to-background/40">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-4 lg:grid-cols-6 mb-10">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <motion.a
              href="/"
              className="inline-flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-glow">
                <img src="/icon.png" alt="Align Logo" className="w-10 h-10 inline-block color-transition" />
              </div>
              <span className="text-2xl font-bold">Align</span>
            </motion.a>
            <p className="text-muted-foreground mb-4 max-w-md text-sm">
              Align helps you build consistent habits with a clean, distraction-free experience. 
              Track your day, celebrate your streaks, and stay aligned with your goals.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-background/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Currently in active development</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-background/60">
                <Mail className="w-3 h-3" />
                <a href="mailto:hello.align@gmail.com" className="hover:text-foreground">
                  hello.align@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Product links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-3 text-sm tracking-wide uppercase text-foreground/80">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              {["Features", "Screenshots", "Video", "Download", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-3 text-sm tracking-wide uppercase text-foreground/80">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                    href="/habit-building-guide"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Habit-building guide
                </a>
              </li>
              <li>
                <a
                    href="/daily-productivity-tips"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Daily productivity tips
                </a>
              </li>
              <li>
                <a
                    href="/routine-templates"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Routine & planner templates
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/your-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Join the Align community
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@align.app?subject=Align%20Feedback%20or%20Bug"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Report a bug / share feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-3 text-sm tracking-wide uppercase text-foreground/80">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Align
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Product roadmap
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog & resources
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-3 text-sm tracking-wide uppercase text-foreground/80">
              Social
            </h4>
            <p className="text-xs text-muted-foreground mb-3">
              Follow Align for new features, productivity tips, and launch updates.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-border/60 bg-background/60 hover:bg-secondary transition-colors"
                  whileHover={{ scale: 1.07, y: -1 }}
                >
                  <span className="sr-only">{social.label}</span>
                  <social.icon className="w-4 h-4 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border/40 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs md:text-sm text-muted-foreground">
          <p className="flex items-center gap-1 justify-center md:justify-start text-center md:text-left">
            © {currentYear} Align. Built with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            for students and habit builders.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-3 text-center md:text-right">
            <span>Version 1.0.0</span>
            <span className="hidden md:inline-block text-border">•</span>
            <a href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </a>
            <span className="hidden md:inline-block text-border">•</span>
            <a href="/terms" className="hover:text-foreground">
              Terms &amp; Conditions
            </a>
            <span className="hidden md:inline-block text-border">•</span>
            <span>Made in India</span>
            <span className="hidden md:inline-block text-border">•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;