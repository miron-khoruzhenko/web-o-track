import plane_img from '@assets/2.Mission/plane.png'
import { useState, useEffect, useRef } from 'react';
import img_abstract from '@assets/4.Services/icon1.png'
const Mission = () => {


	return (
		<section className='w-screen relative py-10 mb-12 min-h-[500px] flex justify-center items-center' id="mission">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[580px] w-full ">

			<div 
			style={{
				boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.35)"
			}}
			className="p-5 bg-white max-w-[400px] relative">
				{/* <FloatingDiv className='left-full bottom-full translate-y-[20%] -translate-x-[20%] -rotate-45' /> */}
				{/* <FloatingDiv className='right-full top-full rotate-[-30deg] -translate-y-[20%] translate-x-[20%] animate-' /> */}

				<div className="flex items-center justify-start mb-5">
					<h2 className="text-[30px] whitespace-nowrap tracking-tighter">Our Mission</h2>
					<img src={plane_img} alt="" className="ml-1 size-10" />
				</div>
				<p className="text-20 font-medium font-[Inter] text-[#071627]">
					0xTrack bridges the gap between <br />innovative projects and top-tier <br /> marketing  strategies. <br /><br />

					With the biggest KOL base on the <br /> market and deep understanding of the <br /> WEB3 space, we ensure your project <br /> gets the attention it deserves.
				</p>
			</div>
			</div>


			<GridContainer />
		</section>
	)
}

// const FloatingDiv = ({ className = '' }: { className?: string }) => {
// 	return (
// 		<div className={cn("absolute rounded-[10px] bg-[#8fe3cf] outline outline-[#81ccb9] size-[145px] aspect-square  ", className)}>
// 			<div className="absolute rounded-[10px] bg-[#fff] opacity-80 w-[145px] h-[140px] aspect-square bottom-2 left-[3px] border"></div>
// 		</div>
// 	)
// }


function GridContainer() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [divCount, setDivCount] = useState(0);
	const [styles, setStyles] = useState({
		container: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, 100px)',
			gridTemplateRows: 'repeat(auto-fill, 100px)',
			gap: '5px',
			width: '100%',
			padding: '10px',
			backgroundColor: '#fff'
		},
		divItem: {
			width: '100px',
			height: '100px',
			backgroundColor: 'lightblue',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			border: '1px solid #ccc'
		}
	})
	const windowWidth = window.innerWidth

	useEffect(() => {
		const container = containerRef.current as HTMLElement;
		if (container === null) return;


		const observer = new ResizeObserver(() => {
			const containerWidth = container.clientWidth;
			// const containerHeight = container.clientHeight;
			// const divSize = 100; // размер div 40x40 px
			const gap = 0
			const padding = 0
			const divRowCount = windowWidth > 600 ? 14 : windowWidth > 400 ? 9 : 5
			const divSize = Math.floor((containerWidth - padding * 2 - (divRowCount - 1) * gap) / divRowCount)

			setStyles({
				container: {
					display: 'grid',
					gridTemplateColumns: `repeat(auto-fill, ${divSize}px)`,
					gridTemplateRows: `repeat(auto-fill, ${divSize}px)`,
					gap: gap + 'px',
					width: '100%',
					padding: padding + 'px',
					backgroundColor: '#fff'
				},
				divItem: {
					width: divSize + 'px',
					height: divSize + 'px',
					backgroundColor: '#fff',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					border: '1px solid #FCCAD6'
				}
			})


			const cols = Math.floor(containerWidth / divSize);
			// const rows = Math.floor(containerHeight / divSize);
			const rows = 5
			const count = cols * rows;
			setDivCount(count);
		});

		observer.observe(container);

		return () => {
			observer.disconnect();
		};
	}, []);

	const activeIndexes = [11, 15, 37, 58]

	return (
		<div ref={containerRef} style={styles.container}>
			{Array.from({ length: divCount }).map((_, index) => (
				<div key={index} style={styles.divItem}>
					{ activeIndexes.includes(index) &&
						<img src={img_abstract} alt="" className="" />
						}
				</div>
			))}
		</div>
	);
}





export default Mission