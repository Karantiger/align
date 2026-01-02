// filepath: d:\HAbit tracker\showcaseapp\src\components\DemoSection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Align?",
    answer:
      "Align is a simple habit tracker that helps you build routines, stay consistent, and see your daily progress in a clean dashboard.",
  },
  {
    question: "Is Align free to use?",
    answer:
      "Yes, the current version of Align is completely free. In the future we may add optional premium features, but the core habit tracking will stay free.",
  },
  {
    question: "Can I track multiple habits?",
    answer:
      "You can track as many habits as you want—like study, workout, reading, meditation, and more. Each habit has its own streaks and stats.",
  },
  {
    question: "How do reminders and notifications work?",
    answer:
      "You can set custom reminder times for each habit. Align sends smart notifications to keep you on track without spamming you.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Your habit data is stored securely. We only use anonymized analytics (if enabled) to improve the product experience.",
  },
  {
    question: "On which platforms is Align available?",
    answer:
      "Align is currently available on mobile. We’re exploring a desktop and web version based on user feedback.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 relative">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-wider text-primary font-medium">
            Support & Help
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Frequently Asked Questions
          </h2>

          <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
            Answers to the things people ask us the most about Align.
          </p>
        </motion.div>

        {/* FAQ layout */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          {/* Left column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Need a quick overview?</h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Learn how Align tracks your habits, calculates streaks and keeps
              you consistent with gentle reminders.
            </p>

            <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
              <li>How streaks & stats work</li>
              <li>What you can customize</li>
              <li>How reminders behave</li>
            </ul>

            <p className="text-sm text-muted-foreground">
              Still stuck? Email{" "}
              <a
                href="mailto:hello@align.app"
                className="text-primary underline-offset-2 hover:underline"
              >
                hello@align.app
              </a>
            </p>
          </div>

          {/* Right column – Accordion */}
          <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border bg-background/60 backdrop-blur-sm shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between text-left px-4 py-4 gap-3 group"
                  >
                    <span className="font-medium text-sm md:text-base leading-snug">
                      {item.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        className="px-4 pb-4"
                      >
                        <div className="h-px bg-border/70 mb-3" />

                        <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
