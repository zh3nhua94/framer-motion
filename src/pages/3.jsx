import { motion } from "framer-motion";

const KeyframeAnimation = () => {
	return (
		<>
			<h1 className="text-5xl text-white text-center p-5">Keyframe Animation</h1>
			<div className="flex flex-wrap justify-center gap-10 max-w-[1300px] mx-auto p-5 mt-5">
				<motion.div
					className="bg-rose-500 aspect-square flex justify-center items-center gap-10 w-60 h-60 rounded-full mt-10"
					animate={{
						scale: [1, 1.2, 1.2, 1],
						rotate: [0, 90, 90, 0],
						borderRadius: ["10%", "10%", "50%", "10%"],
					}}
					transition={{
						duration: 5,
						ease: "easeInOut",
						repeat: Infinity,
						repeatDelay: 1,
					}}
				></motion.div>
			</div>
		</>
	);
};

export default KeyframeAnimation;
