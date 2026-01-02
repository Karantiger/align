import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const screenshots = [
	{
		id: 1,
		title: "Dashboard",
		description: "Your personalized habit overview at a glance",
		image: "/4.png",
	},
	{
		id: 2,
		title: "Habit Tracking",
		description: "Simple one-tap habit logging",
		image: "/2.png",
	},
	{
		id: 3,
		title: "Statistics",
		description: "Beautiful charts and insights",
		image: "/7.png",
	},
	{
		id: 4,
		title: "Calendar View",
		description: "Track your progress over time",
		image: "/a1.png",
	},
	{
		id: 5,
		title: "Settings",
		description: "Customize your experience",
		image: "/setting.jpeg",
	},
	{
		id: 6,
		title: "Notification",
		description:
			"Smart notifications that keep you on track without overwhelming you.",
		image: "/3.png",
	},
	{
		id: 7,
		title: "Reminder",
		description: "Flexible reminders so you never miss an important habit.",
		image: "/6.png",
	},
	{
		id: 8,
		title: "Align Icon",
		description: "Clean, modern icons that match the overall Align design.",
		image: "/5.png",
	},
];

const ScreenshotsSection = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [lightboxOpen, setLightboxOpen] = useState(false);

	const next = () => {
		setCurrentIndex((prev) => (prev + 1) % screenshots.length);
	};

	const prev = () => {
		setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
	};

	const visibleIndices = [0, 1, 2].map(
		(offset) => (currentIndex + offset) % screenshots.length
	);

	return (
		<section id="screenshots" className="py-24 relative overflow-hidden">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold mb-4">
						See Align in Action
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Take a peek at our beautiful, intuitive interface designed for
						seamless habit tracking.
					</p>
				</motion.div>

				{/* Carousel */}
				<div className="relative max-w-5xl mx-auto">
					{/* Main Display - 3 images at once */}
					<div className="relative rounded-3xl overflow-hidden glass-card p-3">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							{visibleIndices.map((idx) => (
								<div
									key={idx}
									className="relative aspect-[9/16] max-h-[600px] rounded-2xl overflow-hidden group cursor-pointer"
									onClick={() => {
										setCurrentIndex(idx);
										setLightboxOpen(true);
									}}
								>
									<img
										src={screenshots[idx].image}
										alt={screenshots[idx].title}
										className="w-full h-full object-cover"
									/>

									<div className="absolute inset-0 bg-foreground/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
										<div className="glass-card p-3 rounded-full">
											<Maximize2 className="w-6 h-6" />
										</div>
									</div>

									<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/95 via-background/60 to-transparent">
										<h3 className="text-lg font-semibold text-white">
											{screenshots[idx].title}
										</h3>
										<p className="text-sm text-gray-200">
											{screenshots[idx].description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Navigation Arrows */}
					<motion.button
						onClick={prev}
						className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 glass-card p-3 rounded-full"
						whileHover={{ scale: 1.1, x: -5 }}
						whileTap={{ scale: 0.9 }}
					>
						<ChevronLeft className="w-6 h-6" />
					</motion.button>
					<motion.button
						onClick={next}
						className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 glass-card p-3 rounded-full"
						whileHover={{ scale: 1.1, x: 5 }}
						whileTap={{ scale: 0.9 }}
					>
						<ChevronRight className="w-6 h-6" />
					</motion.button>

					{/* Dots */}
					<div className="flex items-center justify-center gap-2 mt-6">
						{screenshots.map((_, i) => (
							<motion.button
								key={i}
								onClick={() => setCurrentIndex(i)}
								className={`w-2 h-2 rounded-full transition-all ${
									i === currentIndex
										? "w-8 bg-primary"
										: "bg-muted-foreground/30"
								}`}
								whileHover={{ scale: 1.2 }}
							/>
						))}
					</div>
				</div>

				{/* Thumbnail Strip */}
				<div className="flex items-center justify-center gap-4 mt-8 overflow-x-auto pb-4">
					{screenshots.map((screenshot, i) => (
						<motion.button
							key={screenshot.id}
							onClick={() => setCurrentIndex(i)}
							className={`flex-shrink-0 w-14 h-20 rounded-xl overflow-hidden border-2 transition-all ${
								i === currentIndex ? "border-primary" : "border-transparent"
							}`}
							whileHover={{ scale: 1.05 }}
						>
							<img
								src={screenshot.image}
								alt={screenshot.title}
								className="w-full h-full object-cover"
							/>
						</motion.button>
					))}
				</div>
			</div>

			{/* Lightbox */}
			<AnimatePresence>
				{lightboxOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
						onClick={() => setLightboxOpen(false)}
					>
						<motion.div
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
							className="relative max-w-sm w-full max-h-[90vh] rounded-3xl overflow-hidden"
							onClick={(e) => e.stopPropagation()}
						>
							<img
								src={screenshots[currentIndex].image}
								alt={screenshots[currentIndex].title}
								className="w-full h-full object-contain"
							/>
							<button
								onClick={() => setLightboxOpen(false)}
								className="absolute top-4 right-4 p-2 glass-card rounded-full"
							>
								<X className="w-6 h-6" />
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default ScreenshotsSection;
