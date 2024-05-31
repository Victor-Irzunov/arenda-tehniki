import CardComp from "@/components/servicePageComp/CardComp"
import { obj6 } from "@/constants/service/ArendaEkskavatoryGusenichnye"

export const metadata = {
	title: 'Аренда гусеничного экскаватора в Минске | Доставка по Беларуси',
	description: 'Предлагаем в аренду гусеничные экскаваторы ведущих мировых брендов грузоподъемностью 10-50 тонн в Минске с доставкой на объект по всей Беларуси. Большой парк техники, опытные операторы. Гибкие условия аренды, приемлемые цены. Звоните!'
}


const Page = () => {

	return (
		<section className="py-36 min-h-screen">

			<div className="container mx-auto">
				<div className="mb-20">
					<h1 className="uppercase font-bold text-2xl">
						{obj6.title.h1}
					</h1>

					<h2 className="uppercase font-semibold mt-3 text-yellow-500">
						{obj6.title.h2}
					</h2>
					<p className="font-light text-sm mt-4 leading-5">
						{obj6.title.p}
					</p>
				</div>
				<CardComp data={obj6} />

			</div>

			<div className="mt-32">
				{obj6.content.map(el => {
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