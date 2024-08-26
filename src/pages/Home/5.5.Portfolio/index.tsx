
import portfolio_items from './portfolio_items'




const Portfolio = () => {
	return (
		<div className='max-w-[707px] mb-[50px] mx-auto'>
			<h2 className="text-[25px] md:text-[35px] text-center whitespace-nowrap mb-3 md:mb-8 px-4">Portfolio</h2>
			<p className="font-medium text-[15px] md:text-[20px] font-[Inter] mb-12 text-center">As a VC, we've invested in numerous Tier-1 projects, honing our expertise in incubating and accelerating your protocol. Here are some of our most recent investments:</p>

			<div className="flex gap-y-4 flex-wrap border-x border-[#C2C2C2]">
				{portfolio_items.map((item, index) => {
					return (
						<a href={item.href} className={`${4 < index && index < 8 ? 'w-[25%]' : 'w-[20%]' } cursor-pointer flex flex-col items-center justify-center `}>
							<div className="size-[100px] flex items-center justify-center">
								<item.img className='fill-black hover:fill-[#1CF1D5] transition-colors drop-shadow-2xl shadow-[#1CF1D5]'/>
							</div>

							<h4 className="text-center font-[Inter] text-[10px] md:text-[15px]">{item.name}</h4>
						</a>
					)
				})}
			</div>
		</div>
	)
}

export default Portfolio