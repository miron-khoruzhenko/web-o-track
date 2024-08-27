import bg_img from '@assets/3.Package/bg.png'
import { useEffect, useRef, useState } from 'react';
import { twMerge as cn } from 'tailwind-merge';
import arrow_icon from '@assets/1.Hero/arrow.png'

const fake_db = [
	{
		id: 0,
		title: 'PIT STOP',
		subtitle: 'fast highlight',
		followers: '250,000',
		KOL: '6',
		price: '8,500',
		color: 'default'
	},
	{
		id: 1,
		title: 'SPRINT',
		subtitle: 'reliable product campaign',
		followers: '500,000',
		KOL: '12',
		price: '15,000',
		color: 'default'
	},
	{
		id: 2,
		title: 'GRAND PRIX',
		subtitle: 'Optimal plan to kick it off',
		followers: '750,000',
		KOL: '15',
		price: '22,500',
		color: '#F43A66'
	},
	{
		id: 3,
		title: 'LE MAN',
		subtitle: 'Deep coverage for the max audience',
		followers: '1,000,000',
		KOL: '20',
		price: '30,000',
		color: 'default'
	},
]

const Package = () => {
	const [activeIndex, setActiveIndex] = useState(-1);
	const containerRef = useRef(null);

	useEffect(() => {
		const options = {
			threshold: 0.5,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.target instanceof HTMLElement) {
					setActiveIndex(Number(entry.target.dataset.index));
				}
			});
		}, options);

		if (!containerRef.current) return;

		const container = containerRef.current as HTMLElement;
		if (container) {
			const elements = container.querySelectorAll('.package-card');
			elements.forEach((element) => observer.observe(element));
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	const handleScrollToNext = () => {
		if (!containerRef.current)
			return;
		
		const container = containerRef.current as HTMLElement;
		const elements = container.querySelectorAll('.package-card');
		const nextIndex = activeIndex + 1;

		if (nextIndex < elements.length) {
			elements[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
		}
	}



	return (
		<section
			className='bg-dark relative px-6'
			style={{
				background: `linear-gradient(to right, #071627 47%, rgba(7, 22, 39, 0) 100%), #071627 url(${bg_img}) no-repeat right bottom`,
				backgroundSize: 'contain'
			}}
			id='package'
		>

			<div className="max-w-[580px] mx-auto text-white pt-9 pb-16">
				<h2 className="text-[20px] md:text-[45px] mb-4">Packages</h2>

				<p className="text-[8px] md:text-[20px] font-medium font-[Inter] mb-[26px] max-w-[200px] md:max-w-none relative">
					We provide tailored strategies for the most sophisticated projects to achieve the best outcome. <br /> <br />

					Just tell us your goals, and we will make sure to come up with an optimal solution. Here are our 4 most popular promo packages:
					<img
						src={arrow_icon}
						alt=""
						className="absolute left-[calc(245px+2rem)] bottom-0 w-5 md:hidden"
						onClick={handleScrollToNext}
					/>
				</p>


				<div ref={containerRef} className="flex overflow-x-scroll snap-x snap-mandatory md:grid grid-cols-2 gap-5">
					{fake_db.map((item, index) => (
						<PackageCardDark isActive={index === activeIndex} index={index} key={index} {...item} />
					))}
				</div>
			</div>
		</section>
	)
}


const PackageCardDark = (
	{ title, subtitle, followers, KOL, price, isActive, index }: { title: string, subtitle: string, followers: string, KOL: string, price: string, color: string, isActive: boolean, index: number }
) => {

	return (
		<div
			className={cn("package-card group border snap-start md:opacity-100 transition-opacity border-white bg-white text-black text-center p-4 pb-[10px] w-[235px] aspect-auto md:aspect-auto md:w-auto hover:shadow-[0px_0px_60px_-10px_#F43A66] hover:border-[#f43a66] ", isActive ? 'opacity-100' : 'opacity-50')}
			style={{
				// borderColor: color,
				// boxShadow: `0px 0px 60px -10px ${color}`
			}}
			data-index={index}
		>
			<div className="min-h-[80px]">
				<h3
					className={" text-[25px] transition-colors group-hover:text-[#F43A66] "}
				// style={{ color: color }}
				>{title}</h3>
				<h4 className="text-[15px] font-[Inter] min-h-[50px]">{subtitle}</h4>
			</div>


			<div className="">
				<div className="flex items-center justify-between gap-6">
					<p className="font-medium font-[Inter] whitespace-nowrap text-[12px] md:text-[15px]  ">Followers Cowered</p>
					<div
						className="min-w-[70px] text-center text-[12px] md:text-[15px] bg-[#46D2B0] transition-colors group-hover:bg-[#F43A66] text-[#081627]  group-hover:text-[#fff]"
						style={{
							// backgroundColor: color === 'default' ? "#46D2B0" : color,
							// color: color === 'default' ? "#081627" : 'white'
						}}>{followers}</div>
				</div>

				{/* <hr className="mx-[26px] my-3" style={{ borderColor: color }} /> */}
				<hr className="mx-[26px] my-3 border-black" />

				<div className="flex items-center justify-between gap-6">
					<p className="font-medium font-[Inter] whitespace-nowrap text-[12px] md:text-[15px] ">KOLs participaiting</p>
					<div
						className="min-w-[70px] text-center text-[12px] md:text-[15px] bg-[#46D2B0] transition-colors group-hover:bg-[#F43A66] text-[#081627]  group-hover:text-[#fff]"
						style={{
							// backgroundColor: color === 'default' ? "#46D2B0" : color,
							// color: color === 'default' ? "#081627" : 'white'
						}}>{KOL}</div>
				</div>

				<strong className="mt-[10px] text-[25px] block">${price}</strong>

				<a
					href='https://t.me/finishtg'
					className="text-[13px] block p-1 w-[166px] mx-auto bg-[#080127] transition-colors group-hover:bg-[#F43A66] text-white"
					style={{
						// backgroundColor: color === 'default' ? "#081627" : color,
						// color: color === 'default' ? "#fff" : 'white'
					}}
				>Get</a>
				<p
					className="text-xs font-[Inter] font-medium text-[#46D2B0] transition-colors group-hover:text-[#F43A66]"
				// style={{ color: color === 'default' ? "#46D2B0" : color }}
				>Active till 15.09.24</p>
			</div>
		</div>
	)
}

export default Package


// const PackageCard = (
// 	{ title, subtitle, followers, KOL, price, color }: { title: string, subtitle: string, followers: string, KOL: string, price: string, color: string }
// ) => {

// 	return (
// 		<div
// 			className="border border-white bg-dark text-center p-4 pb-[10px] "
// 			style={{
// 				borderColor: color,
// 				boxShadow: `0px 0px 60px -10px ${color}`
// 			}}
// 		>
// 			<div className="min-h-[80px] mb-4">
// 				<h3
// 					className={"mb-[10px] "}
// 					style={{ color: color }}
// 				>{title}</h3>
// 				<h4 className="text-[15px] font-[Inter] ">{subtitle}</h4>
// 			</div>


// 			<div className="">
// 				<div className="flex items-center justify-between">
// 					<p className="font-medium font-[Inter] whitespace-nowrap text-[15px] ">Followers Cowered</p>
// 					<div 
// 						className="min-w-[70px] text-center text-[11px]" 
// 						style={{ 
// 							backgroundColor: color === 'default' ? "#46D2B0" : color, 
// 							color: color === 'default' ? "#081627" : 'white'
// 						}}>{followers}</div>
// 				</div>
// 				<hr className="mx-[26px] my-3" style={{ borderColor: color }} />
// 				<div className="flex items-center justify-between">
// 					<p className="font-medium font-[Inter] whitespace-nowrap text-[15px] ">KOLs participaiting</p>
// 					<div 
// 						className="min-w-[70px] text-center text-[11px]" 
// 						style={{ 
// 							backgroundColor: color === 'default' ? "#46D2B0" : color, 
// 							color: color === 'default' ? "#081627" : 'white'
// 						}}>{KOL}</div>
// 				</div>

// 				<strong className="my-[10px] text-[18px] block">${price}</strong>

// 				<div 
// 					className="text-[13px] p-1 w-[166px] mx-auto mb-[10px]"
// 					style={{
// 						backgroundColor: color === 'default' ? "white" : color,
// 						color: color === 'default' ? "#081627" : 'white'
// 					}}
// 				>Get</div>
// 				<p 
// 					className="text-xs font-[Inter] font-medium"
// 					style={{ color: color === 'default' ? "#46D2B0" : color }}
// 				>Active till 15.09.24</p>
// 			</div>
// 		</div>
// 	)
// }