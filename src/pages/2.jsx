import { motion } from "framer-motion";

const FadeUpDown = () => {
	return (
		<>
			<h1 className="text-5xl text-white text-center p-5">Fade Up / Down</h1>
			<div className="flex flex-wrap justify-center gap-10 max-w-[1300px] mx-auto p-5 mt-5">
				<motion.div
					className="bg-stone-100 aspect-square rounded-lg flex justify-center items-center gap-10 w-80"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
				></motion.div>
				<motion.div
					className="bg-stone-100 aspect-square flex justify-center items-center gap-10 w-80 h-80 rounded-full"
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
				></motion.div>
			</div>
		</>
	);
};

export default FadeUpDown;
