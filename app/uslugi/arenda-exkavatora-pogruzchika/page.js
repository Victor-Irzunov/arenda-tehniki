import CardComp from "@/components/servicePageComp/CardComp"
import { obj5 } from "@/constants/service/ArendaExkavatoraPogruzchika"

export const metadata = {
	title: 'Аренда экскаватора-погрузчика в Гродно | Доставка по Беларуси',
	description: 'Предлагаем в аренду экскаваторы-погрузчики (ЭП) грузоподъемностью 1-5 тонн в Гродно с доставкой на объект по всей Беларуси. Большой выбор техники от ведущих производителей. Опытные операторы, гибкие условия аренды, приемлемые цены. Звоните!'
}


const Page = () => {

	return (
		<section className="py-36 min-h-screen">

			<div className="container mx-auto">
				<div className="mb-20">
					<h1 className="uppercase font-bold text-2xl">
						{obj5.title.h1}
					</h1>

					<h2 className="uppercase font-semibold mt-3 text-yellow-500">
						{obj5.title.h2}
					</h2>
					<p className="font-light text-sm mt-4 leading-5">
						{obj5.title.p}
					</p>
				</div>
				<CardComp data={obj5} />

			</div>

			<div className="mt-32">
				{obj5.content.map(el => {
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