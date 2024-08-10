// import bg_img from '@assets/1.Hero/bg.png'
import bg_img from '@assets/1.Hero/bg_blocks.png'

import logo_0 from '@assets/1.Hero/logo.png'
import arrow_icon from '@assets/1.Hero/arrow.png'

const Hero = () => {
	const squareSize = 150

	return (
		<section
			style={{
				background: `#071627 url(${bg_img}) center no-repeat`,
				backgroundSize: 'cover',
				height: '100vh',
				clipPath: `polygon(0% 0%, 100% 0%, 100% calc(100% - ${squareSize * 3}px), calc(100% - ${squareSize}px) calc(100% - ${squareSize*3}px), calc(100% - ${squareSize}px) calc(100% - ${squareSize*2}px), calc(100% - ${squareSize*3}px) calc(100% - ${squareSize*2}px), calc(100% - ${squareSize*3}px) calc(100% - ${squareSize}px), calc(${squareSize*3}px) calc(100% - ${squareSize}px), calc(${squareSize*3}px) calc(100% - ${squareSize*2}px), calc(${squareSize}px) calc(100% - ${squareSize*2}px),  calc(${squareSize}px) calc(100% - ${squareSize*3}px), 0% calc(100% - ${squareSize*3}px)`,
			}}
			className='w-screen min-h-screen text-white '
		>
			<div className="max-w-[580px] mx-auto pt-4 ">

				<div className="flex items-start justify-start mb-[4%]">
					<img src={logo_0} alt="" className="block pt-2 mr-2" />
					<p className="text-[70px] flex items-center justify-start"><span className="text-[40px] block pt-5">x</span>TRACK</p>
				</div>

				<p className="font-[Inter] mb-[4%]">It's not about ideas. It's about <span className="font-['Press_Start_2P'] ml-1 align-top text-green">making ideas happen</span></p>

				<div className="full grid grid-cols-4 mt-[4%] text-[11px] text-center mb-[72px]">
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


				<div className="absolute top-1/2 -translate-y-1/2">

					<h1 className="text-center text-[32px] whitespace-nowrap mb-[60px] tracking-tighter mx-auto">”Top-tier marketing”</h1>

					<div className="">
						<p className="font-[Inter] text-center text-[15px] mb-[63px]">At 0xTrack, we specialize in delivering top-tier marketing <br /> solutions for the most promising WEB3 projects.</p>
					</div>

					<button className=" text-center mx-auto flex items-center justify-center gap-1 border-[2px] border-white p-4">
						<span className="text-xs tracking-tighter">Contact us today !</span> <img src={arrow_icon} alt="" className="" />
					</button>
				</div>
			</div>


		</section>
	)
}

export default Hero