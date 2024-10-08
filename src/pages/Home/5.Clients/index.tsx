import { Navigation, A11y, Autoplay, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';

import { twMerge as cn } from 'tailwind-merge';

import bg_img from '@assets/5.Clients/bg_2.png'

import arrow_icon from '@assets/1.Hero/arrow.png'
import { useRef, useState } from 'react';

import './slider.scss'
import sliderItems from './sliderItems';

const Clients = () => {
	const windowWidth = window.innerWidth

	const squareSize = windowWidth > 500 ? 110 : 30

	const [activeIndex, setActiveIndex] = useState(0);

	const sliderRef = useRef<SwiperRef>(null);
	const handleSlideChange = () => {
		const activeIndex = sliderRef.current?.swiper?.realIndex;

		setActiveIndex(activeIndex || 0);
	};


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
					<img src={arrow_icon} alt="" className="inline-block w-5  md:hidden cursor-pointer" onClick={() => sliderRef.current?.swiper?.slideNext()} />
				</p>
				<div className="relative">

					<Swiper
						className='grid grid-cols-3 gap-2 w-[calc(100vw)] md:w-full mt-[50px]  relative  md:px-0 overflow-hidden py-1 '
						effect='slide'
						ref={sliderRef}

						grabCursor={true}
						centeredSlides={true}
						initialSlide={6}
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
							depth: 100,
							modifier: 3,
							slideShadows: true
						}}
						loop={true}
						slidesPerView={1.7}


						modules={[A11y, Autoplay, Controller, Navigation]}

						onSlideChange={handleSlideChange}


						spaceBetween={20}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false
						}}
						breakpoints={
							{
								768: {
									slidesPerView: 3,
									spaceBetween: 20
								}
							}
						}

					>

						{sliderItems.map((item, index) => (
							<SwiperSlide key={index} className={cn("min-w-[190px] md:opacity-100 md:min-w-0 border relative flex flex-col justify-between items-center pb-1",
								activeIndex === index ? 'opacity-100' : 'opacity-60')}
								style={{ backgroundColor: item.color }}
							>
								<a href={item.href} target='_blank' className="">
									<img src={item.img} alt="" className="" />
								</a>
									<a href={item.href} className={cn("text-[20px]", item.isLight ? 'text-[#071627]' : '')}>{item.title}</a>
							</SwiperSlide>
						))}


					</Swiper>

					<img src={arrow_icon} alt="" onClick={() => sliderRef.current?.swiper?.slideNext()} className="absolute top-1/2 left-[calc(100%+20px)] w-[35px] hidden md:block cursor-pointer " />
				</div>

				{/* </div> */}

				<div className="mx-auto bg-white w-[calc(100vw-100px)] md:w-[380px] mt-[30px] md:mt-[85px] h-[2px] flex justify-between overflow-visible">
					<div className="size-2 rotate-45 aspect-square bg-white -mt-1"></div>
					<div className="size-2 rotate-45 aspect-square bg-white -mt-1"></div>
				</div>

			</div>
		</section>
	)
}

export default Clients