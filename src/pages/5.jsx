import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollProgression = () => {
	const { scrollYProgress } = useScroll();

	// Translate Animation
	const translateAnimation = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

	//useInView usage
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true });

	return (
		<>
			<h1 className="text-5xl text-white text-center p-5">Scroll Progression</h1>
			<div className="flex flex-col justify-center items-center gap-10 max-w-[1300px] mx-auto p-5 mt-5">
				<div className="h-[30vh]"></div>
				<h3 className="text-white text-3xl">Just Keep Scrolling</h3>

				{/* Scrollbar progression */}
				<motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
					<motion.div
						className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
						style={{ scaleY: scrollYProgress }}
					/>
				</motion.div>
				<motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
					<motion.div
						className="w-full bg-gray-400 rounded-xl h-full origin-left"
						style={{ scaleX: scrollYProgress }}
					/>
				</motion.div>

				{/* Translate Animation */}
				<motion.p
					style={{ translateX: translateAnimation }}
					className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
				>
					This is a basic tutorial on how to get up and running with Framer Motion with some TailwindCSS.
				</motion.p>
				<div className="h-[30vh]"></div>

				{/* useInView: when viewport reaches the element, the animation starts */}
				<motion.h1
					className="text-5xl text-slate-100 text-center"
					ref={containerRef}
					style={{
						transform: isInView ? "none" : "translateY(-200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}
				>
					Now you see me...
				</motion.h1>

				<div className="h-[70vh]"></div>
			</div>
		</>
	);
};

export default ScrollProgression;
