import CardComp from "@/components/servicePageComp/CardComp"
import { useDataService } from "@/hook/dataServiceHook"
import { Empty } from "antd"

export function generateMetadata({ params: { link } }) {
	let title
	let description

	switch (link) {

		case 'arenda-samosvala':
			title = 'Аренда самосвала в Гродно | Доставка по Беларуси'
			description = 'Арендуйте самосвалы в Гродно и других городах Беларуси - доставим технику на ваш объект. В наличии самосвалы грузоподъемностью от 10 до 40 тонн. Выгодные цены, удобные условия аренды. Звоните!'
			break

		case 'arenda-trala':
			title = 'Аренда трала в Гродно | Трал для перевозки спецтехники';
			description = 'Арендуйте тралы грузоподъемностью до 50 тонн для перевозки крупногабаритной техники в Гродно и по Беларуси. У нас большой парк тралов от ведущих производителей. Доставка в любую точку страны!';
			break;
		case 'arenda-frontalnyh-pogruzchikov':
			title = 'Аренда фронтального погрузчика в Гродно | Доставка по Беларуси';
			description = 'Арендуйте фронтальные погрузчики грузоподъемностью 1-10 тонн в Гродно с доставкой на объект по всей Беларуси. Большой выбор техники. Опытные операторы. Гибкие условия аренды, выгодные цены. Звоните!';
			break;
		case 'arenda-kolesnogo-ekskavatora':
			title = 'Аренда колесного экскаватора в Гродно | Полноповоротные экскаваторы';
			description = 'Предлагаем в аренду колесные экскаваторы грузоподъемностью 5-20 тонн в Гродно с доставкой на объект по всей Беларуси. Большой выбор техники Hitachi, JCB, Doosan, Hyundai. Есть полноповоротные модели. Опытные операторы. Выгодные условия аренды. Звоните!';
			break;
		case 'arenda-exkavatora-pogruzchika':
			title = 'Аренда экскаватора-погрузчика в Гродно | Доставка по Беларуси';
			description = 'Предлагаем в аренду экскаваторы-погрузчики (ЭП) грузоподъемностью 1-5 тонн в Гродно с доставкой на объект по всей Беларуси. Большой выбор техники от ведущих производителей. Опытные операторы, гибкие условия аренды, приемлемые цены. Звоните!';
			break;
		case 'arenda-gusenichnogo-ekskavatora':
			title = 'Аренда гусеничного экскаватора в Гродно | Доставка по Беларуси';
			description = 'Предлагаем в аренду гусеничные экскаваторы ведущих мировых брендов грузоподъемностью 10-50 тонн в Гродно с доставкой на объект по всей Беларуси. Большой парк техники, опытные операторы. Гибкие условия аренды, приемлемые цены. Звоните!';
			break;
	}

	return {
		title: title,
		description: description
	}
}

const UniversalServicePage = async ({ params: { link } }) => {
	const { data } = await useDataService(link);



	if (!data) return <Empty className="h-[60vh] pt-32" />
	return (
		<section className="py-36 min-h-screen">

			<div className="container mx-auto">
				<div className="mb-20">
					<h1 className="uppercase font-bold text-2xl">
						{data.title.h1}
					</h1>

					<h2 className="uppercase font-semibold mt-3 text-yellow-500">
						{data.title.h2}
					</h2>
					<p className="font-light text-sm mt-4 leading-5">
						{data.title.p}
					</p>
				</div>
				<CardComp data={data} />

			</div>

			<div className="mt-32">
				{data.content.map(el => {
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

export default UniversalServicePage