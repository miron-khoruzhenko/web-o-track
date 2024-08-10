import person_icon from '@assets/6.Contact/icon_person.png'

import social_icon_1 from '@assets/6.Contact/icon_mail.svg'
import social_icon_2 from '@assets/6.Contact/icon_x.svg'
import social_icon_3 from '@assets/6.Contact/icon_tg.svg'

import img1 from '@assets/6.Contact/img1.png'
import img2 from '@assets/6.Contact/img2.png'
import img3 from '@assets/6.Contact/img3.png'

import logo_0 from '@assets/1.Hero/logo.png'


const Contact = () => {
	return (
		<section className='' id='contactUs'>
			<div className="max-w-[580px] mx-auto text-[#081728] mb-[100px]">
				<div className="flex items-center justify-start gap-3">
					<h2 className="text-[35px] text-left  ">Contact Us</h2>
					<img src={person_icon} alt="" className="" />
				</div>

				<p className="font-medium font-[Inter] text-[15px]">
					Ready to amplify your project's reach?  <br />
					Contact us today!
				</p>

				<div className="grid grid-cols-3 gap-5 font-medium font-[Inter] text-[12px] mt-[10px]">
					<div className="bg-[#081728] text-white p-1 pt-4">
						<div className="flex items-center justify-start gap-1 mb-2 ml-2">
							<img src={social_icon_1} alt="" className="" />
							<h3 className="">Mail</h3>
						</div>
						<img src={img1} alt="" className="" />

					</div>
					<div className="bg-[#081728] text-[#1CF1D5] p-1 pt-4">
						<div className="flex items-center justify-start gap-1 mb-2 ml-2">
							<img src={social_icon_2} alt="" className="" />
							<h3 className="">Twitter</h3>
						</div>
						<img src={img2} alt="" className="" />

					</div>
					<div className="bg-[#081728] text-[#FD5D90] p-1 pt-4">
						<div className="flex items-center justify-start gap-1 mb-2 ml-2">
							<img src={social_icon_3} alt="" className="" />
							<h3 className="">Telegram</h3>
						</div>
						<img src={img3} alt="" className="" />

					</div>
				</div>
			</div>

			<div className="bg-dark py-[43px] text-white">
				<div className="w-[580px] bg-gradient-to-r from-white to-white/0 p-px mx-auto ">
					<div className="h-full w-full bg-dark flex items-center justify-between py-[13px] px-[17px]">
						<p className="leading-[3] text-[10px] whitespace-nowrap">
							Fuelling top-tier projects <br /> with advisory and marketing
						</p>

						<button className='bg-white text-[#081728] whitespace-nowrap px-9 py-4 block text-[9px]'>
							Get in touch
						</button>
					</div>
				</div>

			</div>

			<div className="max-w-[580px] mx-auto py-[40px] flex justify-between items-center">

				<div className="flex items-center justify-start">
					<img src={logo_0} alt="" className="block pb-2 mr-2 h-9" />
					<p className="text-[25px] flex items-center justify-start align-bottom"><span className="text-[15px] block pt-2">x</span>TRACK</p>
				</div>

				<ul className="flex items-center justify-between text-[9px] gap-8">
					<li className="">SOCIAL</li>
					<li className="">PACKAGES</li>
					<li className="">Clients</li>
					<li className="">Services</li>
				</ul>
			</div>

		</section>
	)
}

export default Contact