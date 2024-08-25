import tri_img from '@assets/2.5.Highlights/triangle.png'
import highlight_items from './highlights_items'

const Highlights = () => {
	return (
		<div className='bg-dark pt-[71px] relative overflow-visible z-20 pb-[123px]'>
			<h2 className="font-ascii font-medium relative text-center text-[24px] md:text-[45px] p1-px">
				<span className="absolute  -top-[3px] left-[calc(50%-3px)] -translate-x-1/2 block text-dark"
					style={{textShadow: "0.5px 0 #fff, -0.5px 0 #fff, 0 0.5px #fff, 0 -0.5px #fff, 0.5px 0.5px #fff, -0.5px -0.5px #fff, 0.5px -0.5px #fff, -0.5px 0.5px #fff"}}
				>Highlights</span>
				<span className="z-10 relative top-0 left-0 block text-white">Highlights</span>
			</h2>


			<div className="max-w-[900px] grid grid-cols-1 gap-8 md:grid-cols-3 mx-auto mt-[97px] relative">
			<img src={tri_img} alt="" className="absolute top-0 left-0 -translate-y-[50%] -translate-x-[60%] md:-translate-x-[80%] rotate-[60deg] max-w-[300px]" />
			<img src={tri_img} alt="" className="absolute right-0 bottom-0 translate-y-[80%] translate-x-[60%] md:translate-x-[80%] max-w-[300px]" />

				{highlight_items.map((item, index) => (
					<Card key={index} {...item} />
				))}
			</div>
			
		</div>
	)
}

interface CardProps {
	title: string
	img: string
	text: string
	descr: string
}
const Card = ({title, img, descr, text}:CardProps) => {

	return(
		<div className="text-white flex flex-col items-center justify-center first-of-type:border-l md:border-b-0 md:border-r border-[#373737]">
			<h3 className="mb-6 text-[15px] md:text-[20px]">{title}</h3>

			<div className="flex items-start justify-center gap-3">
				<img src={img} alt="" className="w-14 md:w-20 -mt-2" />
				<p className="text-green text-[30px] md:text-[55px]">{text}</p>
			</div>

			<p className="text-[15px] md:text-[20px]">{descr}</p>
		</div>
	)
}
export default Highlights