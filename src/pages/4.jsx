import { motion } from "framer-motion";

const DragComponent = () => {
	return (
		<>
			<h1 className="text-5xl text-white text-center p-5">Drag Component</h1>
			<div className="flex flex-wrap justify-center gap-10 max-w-[1300px] mx-auto p-5 mt-5">
				<div className="w-80 h-80 border border-white rounded-lg justify-center flex items-center">
					<motion.div
						className="w-[100px] h-[100px] bg-orange-500 rounded-3xl cursor-grab"
						drag
						dragConstraints={{
							top: -100,
							right: 100,
							bottom: 100,
							left: -100,
						}}
						dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
						//bounceStiffness gives the feeling of friction, bounceDamping gives the elastic feeling on release
					/>
				</div>
			</div>
		</>
	);
};

export default DragComponent;
