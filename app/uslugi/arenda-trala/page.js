import CardComp from "@/components/servicePageComp/CardComp"
import { obj2 } from "@/constants/service/ArendaTralaConst"

export const metadata = {
	title: 'Аренда трала в Минске | Трал для перевозки спецтехники',
	description: 'Арендуйте тралы грузоподъемностью до 50 тонн для перевозки крупногабаритной техники в Минске и по Беларуси. У нас большой парк тралов от ведущих производителей. Доставка в любую точку страны!'
}


const Page = () => {

	return (
		<section className="py-36 min-h-screen">

			<div className="container mx-auto">
				<div className="mb-20">
					<h1 className="uppercase font-bold text-2xl">
						{obj2.title.h1}
					</h1>

					<h2 className="uppercase font-semibold mt-3 text-yellow-500">
						{obj2.title.h2}
					</h2>
					<p className="font-light text-sm mt-4 leading-5">
						{obj2.title.p}
					</p>
				</div>
				<CardComp data={obj2} />

			</div>

			<div className="mt-32">
				{obj2.content.map(el => {
					return (
						<div key={el.id} className="container mx-auto text-justify mb-10">
							{el.text}
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default Page;