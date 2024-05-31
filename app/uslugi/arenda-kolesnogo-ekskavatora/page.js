import CardComp from "@/components/servicePageComp/CardComp"
import { obj4 } from "@/constants/service/ArendaKolesnogoConst"

export const metadata = {
	title : 'Аренда колесного экскаватора в Минске | Полноповоротные экскаваторы',
	description : 'Предлагаем в аренду колесные экскаваторы грузоподъемностью 5-20 тонн в Минске с доставкой на объект по всей Беларуси. Большой выбор техники Hitachi, JCB, Doosan, Hyundai. Есть полноповоротные модели. Опытные операторы. Выгодные условия аренды. Звоните!'
}


const Page = () => {

	return (
		<section className="py-36 min-h-screen">

			<div className="container mx-auto">
				<div className="mb-20">
					<h1 className="uppercase font-bold text-2xl">
						{obj4.title.h1}
					</h1>

					<h2 className="uppercase font-semibold mt-3 text-yellow-500">
						{obj4.title.h2}
					</h2>
					<p className="font-light text-sm mt-4 leading-5">
						{obj4.title.p}
					</p>
				</div>
				<CardComp data={obj4} />

			</div>

			<div className="mt-32">
				{obj4.content.map(el => {
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