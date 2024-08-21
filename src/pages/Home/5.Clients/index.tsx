import bg_img from '@assets/5.Clients/bg_2.png'

import img1 from '@assets/5.Clients/img1.png'
import img2 from '@assets/5.Clients/img2.png'
import img3 from '@assets/5.Clients/img3.png'

import arrow_icon from '@assets/1.Hero/arrow.png'

const Clients = () => {
	const windowWidth = window.innerWidth

	const squareSize = windowWidth > 400 ? 110 : 30

	
	return (
		<section
			id='clients'
			style={{
				background: `#071627 url(${bg_img}) top no-repeat `,
				backgroundSize: '100% 90%',
				clipPath: `polygon(0% 0%, 100% 0%, 100% calc(100% - ${squareSize * 3}px), calc(100% - ${squareSize}px) calc(100% - ${squareSize * 3}px), calc(100% - ${squareSize}px) calc(100% - ${squareSize * 2}px), calc(100% - ${squareSize * 3}px) calc(100% - ${squareSize * 2}px), calc(100% - ${squareSize * 3}px) calc(100% - ${squareSize}px), calc(${squareSize * 3}px) calc(100% - ${squareSize}px), calc(${squareSize * 3}px) calc(100% - ${squareSize * 2}px), calc(${squareSize}px) calc(100% - ${squareSize * 2}px),  calc(${squareSize}px) calc(100% - ${squareSize * 3}px), 0% calc(100% - ${squareSize * 3}px)`,
				// clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
			}}
			className='bg-dark pb-[120px] md:pb-[200px]'
		>
			<div className="max-w-[580px] mx-auto pt-[53px] text-white ">
				<h2 className="text-[25px] md:text-[35px] text-left md:text-right whitespace-nowrap mb-3 md:mb-8 px-4">Clients & Partners</h2>
				<p className="text-[12px] md:text-[20px] font-[Inter] text-left md:text-right font-medium px-4 flex justify-start gap-4 items-center md:block">
					Our most prominent partnerships:
					<img src={arrow_icon} alt="" className="inline-block w-5  md:hidden" />
				</p>

				{/* <img src={arrow_icon} alt="" className="absolute top-1/2 left-[calc(100%+20px)] w-[35px]" /> */}

				<div className="flex md:grid grid-cols-3 gap-2 w-full mt-[50px] relative px-[70px] md:px-0 overflow-x-scroll md:overflow-visible snap-x snap-mandatory">
					<div className="min-w-[190px] snap-start md:min-w-0 border relative flex flex-col justify-between items-center pb-1 bg-[#f4f1ec]">
						<img src={img1} alt="" className="" />
						<p className="text-[20px] text-[#071627]">StaderLabs</p>
					</div>

					<div className="min-w-[190px] snap-start md:min-w-0 border relative flex flex-col justify-between items-center pb-1">
						<img src={img2} alt="" className="" />
						<p className="text-[20px]">Ryze</p>
					</div>

					<div className="min-w-[190px] snap-start md:min-w-0 border relative flex flex-col justify-between items-center pb-1 bg-[#e16a86]">
						<img src={img3} alt="" className="" />
						<p className="text-[20px]">Cega</p>
					</div>

					<img src={arrow_icon} alt="" className="absolute top-1/2 left-[calc(100%+20px)] w-[35px] hidden md:block " />
				</div>

				<div className="mx-auto bg-white w-[calc(100vw-100px)] md:w-[380px] mt-[30px] md:mt-[85px] h-[2px] flex justify-between overflow-visible">
					<div className="size-2 rotate-45 aspect-square bg-white -mt-1"></div>
					<div className="size-2 rotate-45 aspect-square bg-white -mt-1"></div>
				</div>

			</div>
		</section>
	)
}

export default Clients