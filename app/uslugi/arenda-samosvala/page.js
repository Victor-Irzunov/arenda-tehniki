import CardComp from "@/components/servicePageComp/CardComp"
import { obj } from "@/constants/service/ArendaSamosvalaConst"

export const metadata = {
	title: 'Аренда самосвала в Минске | Доставка по Беларуси',
	description: 'Арендуйте самосвалы в Минске и других городах Беларуси - доставим технику на ваш объект. В наличии самосвалы грузоподъемностью от 10 до 40 тонн. Выгодные цены, удобные условия аренды. Звоните!'
}


const Page = () => {

	return (
		<section className="py-36 min-h-screen">

			<div className="container mx-auto">
				<div className="mb-20">
					<h1 className="uppercase font-bold text-2xl">
						{obj.title.h1}
					</h1>

					<h2 className="uppercase font-semibold mt-3 text-yellow-500">
						{obj.title.h2}
					</h2>
					<p className="font-light text-sm mt-4 leading-5">
						{obj.title.p}
					</p>
				</div>
				<CardComp data={obj} />

			</div>

			<div className="mt-32">
				{obj.content.map(el => {
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