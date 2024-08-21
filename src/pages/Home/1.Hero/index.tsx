// import bg_img from '@assets/1.Hero/bg.png'
// import bg_img from '@assets/1.Hero/bg_blocks.png'

// import logo_0 from '@assets/1.Hero/logo.png'
import logo_text from '@assets/1.Hero/logo_text.png'
import arrow_icon from '@assets/1.Hero/arrow.png'

import bg_img_1 from '@assets/1.Hero/img_o_1.png'
import bg_img_2 from '@assets/1.Hero/img_o_2.png'

const Hero = () => {
	// const squareSize = 150

	return (
		<section
			style={{
				// background: `#071627 url(${bg_img}) center no-repeat`,
				// backgroundSize: 'cover',
				// clipPath: `polygon(0% 0%, 100% 0%, 100% calc(100% - ${squareSize * 3}px), calc(100% - ${squareSize}px) calc(100% - ${squareSize*3}px), calc(100% - ${squareSize}px) calc(100% - ${squareSize*2}px), calc(100% - ${squareSize*3}px) calc(100% - ${squareSize*2}px), calc(100% - ${squareSize*3}px) calc(100% - ${squareSize}px), calc(${squareSize*3}px) calc(100% - ${squareSize}px), calc(${squareSize*3}px) calc(100% - ${squareSize*2}px), calc(${squareSize}px) calc(100% - ${squareSize*2}px),  calc(${squareSize}px) calc(100% - ${squareSize*3}px), 0% calc(100% - ${squareSize*3}px)`,
			}}
			className='w-screen min-h-screen text-black relative bg-white h-screen overflow-x-hidden '
		>

			<img src={bg_img_1} alt="" className="absolute max-w-[35%] md:max-w-[30%]  z-0 [transform:rotateY(180deg)] md:[transform:rotateY(0deg)] md:w-auto top-28 md:top-[5%] -right-6 md:right-auto md:left-0" />
			<img src={bg_img_2} alt="" className="absolute max-w-[35%] md:max-w-[25%]  z-0 [transform:rotateY(180deg)] md:[transform:rotateY(0deg)] md:w-auto bottom-12 md:bottom-[5%] -left-6 md:left-auto md:right-0" />

			<div className="max-w-[580px] mx-auto pt-4 ">

				<div className="border-b border-black md:border-none pb-1 pl-2 ">
					<div className="flex items-center justify-start md:justify-center mb-[4%]">
						{/* <img src={logo_0} alt="" className="block pt-2 mr-2" />
								<p className="text-[70px] flex items-center justify-start"><span className="text-[40px] block pt-5">x</span>TRACK</p> */}
						<img src={logo_text} alt="" className="h-[34px] md:h-auto" />
					</div>

					<p className="font-[Inter] mb-[4%] text-[8px] md:text-base text-center ">
						It's not about ideas. It's about <span className="font-ascii ml-1 align-top text-[#F43A66]">making ideas happen</span>
					</p>
				</div>

				<div className="full hidden md:grid grid-cols-4 mt-[4%] text-[17px] text-center mb-[72px]">
					<a href="#mission" className="relative py-6 px-3 w-full border-y border-[#183351] after:h-[calc(100%-10px)] after:w-px after:bg-[#183351] after:absolute after:top-[5px] after:left-full">
						our mission
					</a>
					<a id="#services" className="relative py-6 px-3 w-full border-y border-[#183351] after:h-[calc(100%-10px)] after:w-px after:bg-[#183351] after:absolute after:top-[5px] after:left-full">
						services
					</a>
					<a id="#clients" className="relative py-6 px-3 w-full border-y border-[#183351] after:h-[calc(100%-10px)] after:w-px after:bg-[#183351] after:absolute after:top-[5px] after:left-full">
						clients
					</a>

					<a id="#contactUs" className="relative py-6 px-3 w-full border-y border-[#183351] ">
						contact us
					</a>
				</div>


				{/* <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"> */}
				<div className=" absolute md:static top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 md:translate-y-0">

					<h1 className=" text-center text-[20px] md:text-[45px] whitespace-nowrap mb-[60px] tracking-tighter mx-auto">”Top-tier marketing”</h1>

					<div className="">
						<p className="font-[Inter] text-[8px] text-center md:text-[15px] mb-[63px]">At 0xTrack, we specialize in delivering top-tier marketing <br /> solutions for the most promising WEB3 projects.</p>
					</div>

					<button className=" text-center mx-auto flex items-center justify-center gap-1 border-[2px] border-black bg-white p-4">
						<span className="text-[10px] md:text-[15px] tracking-tighter whitespace-nowrap">Contact us today !</span> <img src={arrow_icon} alt="" className="invert w-[22px] ml-2" />
					</button>
				</div>
			</div>


		</section>
	)
}

export default Hero