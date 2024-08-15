import { useEffect, useRef, useState } from 'react'
import arrow_icon from '@assets/1.Hero/arrow.png'
import bg from '@assets/4.Services/bg.png'

import icon1 from '@assets/4.Services/icon1.png'
import icon2 from '@assets/4.Services/icon2.png'
import icon3 from '@assets/4.Services/icon3.png'

import img from '@assets/4.Services/o_img.png'

const Services = () => {
	return (
		<section className='relative pb-[94px] overflow-x-hidden' id='services'>
			<img src={img} alt="" className="absolute w-[160px] z-0 [transform:rotateY(0deg)_rotateZ(-60deg)] md:[transform:rotateY(0deg)] md:w-auto top-80 md:top-6 -right-16" style={{
				filter: 'hue-rotate(180deg)'
			}} />
			<img src={img} alt="" className="absolute w-[140px] z-0 [transform:rotateY(180deg)] md:[transform:rotateY(deg)] md:w-auto z-20 bottom-auto top-44 md:top-auto md:bottom-6 z-20 -left-16  " style={{
				filter: 'hue-rotate(180deg)'
			}} />

			<div className="max-w-[580px] mx-auto relative z-10 ">
				<h2 className="text-[35px] mb-4 text-center mt-[75px] ">Services</h2>
				<p className="font-medium text-[15px] font-[Inter] mb-12 text-center"> team takes care of everything from strategy <br /> development to execution</p>

				<div className="grid grid-cols-5 bg-white relative z-30 mb-[70px]">
					<div className="flex items-center justify-center col-span-2 bg-white bg-gradient-to-r from-[rgba(70,210,176,.35)] to-white">
						<img src={icon1} alt="" className="" />
					</div>
					<div className="col-span-3 pt-2 pb-4 pr-4 ">
						<h3 className="mb-5">On-hands Approach</h3>
						<p className="font-medium text-[10px] md:text-[15px] font-[Inter]">Our team takes care of everything from strategy development to execution, ensuring maximum engagement and profitability for your project.</p>
					</div>
				</div>

				<div className="grid grid-cols-5 bg-white relative z-30">
					<div className="col-span-3 pt-2 pb-4 pl-4 ">
						<h3 className="mb-5">Off-hands Approach</h3>
						<p className="font-medium text-[10px] md:text-[15px] font-[Inter]">As a connector, we link your project with top KOLs, fostering strong relationships and achieving expansive impact quickly.</p>
					</div>
					<div className="flex items-center justify-center col-span-2 bg-gradient-to-l from-[rgba(244,58,102,.35)] to-white">
						<img src={icon2} alt="" className="" />
					</div>
				</div>

				<div
					style={{
						boxShadow: '6px 4px 50px 0px rgba(0, 0, 0, 0.15)'
					}}
					className="mt-11"
				>
					<div
						style={{
							background: `url(${bg}) no-repeat center`,
							backgroundSize: 'cover',
						}}
						className="py-[40px] px-[50px] relative text-white">
						<div className='w-[3px] h-[calc(100%-16*2px)] bg-white absolute left-[14px] top-[16px]' />
						<h3 className="mb-4 text-[18px] md:text-[23px]">0 DIRECT cost</h3>
						<p className="font-medium text-[17px] font-[Inter]">There's no DIRECT cost to your project. </p>
						<img src={arrow_icon} alt="" className="absolute bottom-3 right-2 w-[37px]" />
					</div>

					<div className="py-[35px] px-[50px] relative">
						<p className="font-medium text-[17px] font-[Inter]">Our income is generated through partnerships with industry KOLs, providing a win-win for all parties. </p>
						<img src={icon3} alt="" className="absolute bottom-0 left-0" />
					</div>
				</div>


			</div>
			<GridContainer />
		</section>
	)
}


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


	useEffect(() => {
		const container = containerRef.current as HTMLElement;
		if (container === null) return;


		const observer = new ResizeObserver(() => {
			const containerWidth = container.clientWidth;
			// const containerHeight = container.clientHeight;
			// const divSize = 100; // размер div 40x40 px
			const gap = 0
			const padding = 0
			const divRowCount = 7
			const divSize = Math.floor((containerWidth - padding * 2 - (divRowCount - 1) * gap) / divRowCount)

			setStyles({
				container: {
					display: 'grid',
					gridTemplateColumns: `repeat(auto-fill, ${divSize}px)`,
					gridTemplateRows: `repeat(auto-fill, ${divSize}px)`,
					gap: gap + 'px',
					padding: padding + 'px',
					width: '50%',
					backgroundColor: '#fff'
				},
				divItem: {
					width: divSize + 'px',
					height: divSize + 'px',
					backgroundColor: '#fff',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					border: '1px solid #c7fff1'
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

	return (
		<div ref={containerRef} style={styles.container} className='absolute left-0 top-0'>
			{Array.from({ length: divCount }).map((_, index) => (
				<div key={index} style={styles.divItem}></div>
			))}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-white to-white/0"></div>
		</div>
	);
}




export default Services