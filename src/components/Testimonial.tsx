import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aditya Yadav",
    role: "Student",
    avatar: "AY",
    rating: 5,
    quote: "Align made it easy to build a consistent study routine before exams. The clean layout keeps me focused on what actually matters.",
  },
  {
    name: "Meet Mistry",
    role: "Student",
    avatar: "MC",
    rating: 5,
    quote: "I use Align to balance coding practice, lectures, and revision. Checking off habits every day feels super satisfying.",
  },
  {
    name: "Emily Rodriguez",
    role: "Student",
    avatar: "ER",
    rating: 5,
    quote: "Perfect for building study habits! I track reading, assignments, and mock tests in one place.",
  },
  {
    name: "David Kim",
    role: "Student",
    avatar: "DK",
    rating: 5,
    quote: "I use Align to stick to my morning routine and gym schedule before college. It keeps me consistent.",
  },
  {
    name: "Lisa Thompson",
    role: "Student",
    avatar: "LT",
    rating: 5,
    quote: "Even when I’m offline during classes or travel, I can still check my habits. Everything syncs later without problems.",
  },
  {
    name: "James Wilson",
    role: "Student",
    avatar: "JW",
    rating: 5,
    quote: "The progress charts in Align show exactly how consistent I’ve been with my goals like reading and note-making.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="md:py-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Students love using <span className="gradient-text">Align</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear how students stay consistent with their routines using Align.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <motion.div
                className="glass-card p-6 rounded-2xl h-full relative group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
