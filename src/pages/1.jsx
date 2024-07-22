import { motion } from "framer-motion";

// 1. Set Container Variants
const fadeInContainerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
		},
	},
};

// 2. Set Child Variants
const fadeInChildVariants = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

const StaggerChildren = () => {
	return (
		<div className="flex flex-col gap-10 overflow-x-hidden max-w-[1300px] mx-auto">
			<h1 className="text-5xl text-white text-center pt-5">Stagger Children</h1>
			<motion.section
				className="grid grid-cols-3 p-10 gap-10"
				variants={fadeInContainerVariants}
				initial="hidden"
				animate="show"
			>
				{/* <div className="bg-slate-700 aspect-square rounded-lg flex justify-center items-center gap-10"></div>
			<div className="bg-slate-700 aspect-square rounded-lg flex justify-center items-center gap-10"></div>
			<div className="bg-slate-700 aspect-square rounded-lg flex justify-center items-center gap-10"></div>
			<div className="bg-slate-700 aspect-square rounded-lg flex justify-center items-center gap-10"></div>
			<div className="bg-slate-700 aspect-square rounded-lg flex justify-center items-center gap-10"></div> */}
				<motion.div
					variants={fadeInChildVariants}
					className="bg-slate-700 aspect-square rounded-lg flex justify-center items-center gap-10"
				></motion.div>
				<motion.div
					variants={fadeInChildVariants}
					className="bg-slate-700 aspect-square rounded-lg flex justify-center items-center gap-10"
				></motion.div>
				<motion.div
					variants={fadeInChildVariants}
					className="bg-slate-700 aspect-square rounded-lg flex justify-center items-center gap-10"
				></motion.div>
				<motion.div
					variants={fadeInChildVariants}
					className="bg-slate-700 aspect-square rounded-lg flex justify-center items-center gap-10"
				></motion.div>
				<motion.div
					variants={fadeInChildVariants}
					className="bg-slate-700 aspect-square rounded-lg flex justify-center items-center gap-10"
				></motion.div>
				<motion.div
					variants={fadeInChildVariants}
					className="bg-slate-700 aspect-square rounded-lg flex justify-center items-center gap-10"
				></motion.div>
			</motion.section>
		</div>
	);
};

export default StaggerChildren;
