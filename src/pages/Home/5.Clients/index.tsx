import bg_img from '@assets/5.Clients/bg_2.png'

import img1 from '@assets/5.Clients/img1.png'
import img2 from '@assets/5.Clients/img2.png'
import img3 from '@assets/5.Clients/img3.png'

import arrow_icon from '@assets/1.Hero/arrow.png'

const Clients = () => {
	const squareSize = 110
	return (
		<section
			id='clients'
			style={{
				background: `#071627 url(${bg_img}) top no-repeat `,
				backgroundSize: '100% 90%',
				clipPath: `polygon(0% 0%, 100% 0%, 100% calc(100% - ${squareSize * 3}px), calc(100% - ${squareSize}px) calc(100% - ${squareSize * 3}px), calc(100% - ${squareSize}px) calc(100% - ${squareSize * 2}px), calc(100% - ${squareSize * 3}px) calc(100% - ${squareSize * 2}px), calc(100% - ${squareSize * 3}px) calc(100% - ${squareSize}px), calc(${squareSize * 3}px) calc(100% - ${squareSize}px), calc(${squareSize * 3}px) calc(100% - ${squareSize * 2}px), calc(${squareSize}px) calc(100% - ${squareSize * 2}px),  calc(${squareSize}px) calc(100% - ${squareSize * 3}px), 0% calc(100% - ${squareSize * 3}px)`,
				// clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
			}}
			className='bg-dark pb-[200px]'
		>
			<div className="max-w-[580px] mx-auto pt-[53px] text-white">
				<h2 className="text-[25px] text-right whitespace-nowrap mb-8">Clients & Partners</h2>
				<p className="text-[20px] font-[Inter] text-right font-medium">Our most prominent partnerships:</p>

				<div className="grid grid-cols-3 gap-2 w-full mt-[50px] relative">
					<div className="border relative flex flex-col justify-between items-center pb-1 bg-[#f4f1ec]">
						<img src={img1} alt="" className="" />
						<p className="text-[#071627]">StaderLabs</p>
					</div>

					<div className="border relative flex flex-col justify-between items-center pb-1">
						<img src={img2} alt="" className="" />
						<p className="">Ryze</p>
					</div>

					<div className="border relative flex flex-col justify-between items-center pb-1 bg-[#e16a86]">
						<img src={img3} alt="" className="" />
						<p className="">Cega</p>
					</div>

					<img src={arrow_icon} alt="" className="absolute top-1/2 left-[calc(100%+20px)] w-[35px]" />
				</div>

				<div className="mx-auto bg-white w-[380px] mt-[85px] h-[2px] flex justify-between overflow-visible">
					<div className="size-2 rotate-45 aspect-square bg-white -mt-1"></div>
					<div className="size-2 rotate-45 aspect-square bg-white -mt-1"></div>
				</div>

			</div>
		</section>
	)
}

export default Clients