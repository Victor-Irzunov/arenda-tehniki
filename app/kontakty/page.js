import DescriptionsContactComp from "@/components/descriptionsContact/DescriptionsContactComp"
import DescriptionsContactUnnComp from "@/components/descriptionsContact/DescriptionsContactUnnComp"
import Image from "next/image"
import foto from '../../public/contact/contact.webp'

export const metadata = {
	title: 'Контакты компании ЭкоСанПроект',
	description: 'Контакты компании ЭкоСанПроект, режим работы, юридический адрес.',
}

const ContactPage = () => {
	return (
		<section className="py-32 min-h-screen">
			<div className="container mx-auto">

				<h1 className="uppercase text-xl font-bold">
					Контакты
				</h1>
				<div className="mt-20 flex justify-between xz:flex-col ss:flex-row">
					<div className="bg-[#f7f7f7] ss:w-1/4 xz:w-full rounded-md p-5">
						<DescriptionsContactComp />
					</div>
					<div className="ss:ml-5 xz:ml-0 xz:mt-5 ss:mt-0 ss:w-3/4 xz:w-full">
						<div className="bg-[#f7f7f7] rounded-md p-5">
							<DescriptionsContactUnnComp />
						</div>
						<div className="mt-5 bg-[#f7f7f7] rounded-md p-5">
							<p className="font-semibold mb-3 pl-5">
								Контактное лицо
							</p>
							<div className="flex xz:flex-col ss:flex-row">
								<div className="ss:w-1/3 xz:w-full">
									<Image src={foto} width={320} alt="контактное лицо" className="rounded-md" />
								</div>
								<div className="xz:mt-5 ss:m-5 ss:w-2/3 xz:w-full">

									<p className="text-lg mb-1">
										Иванов Иван Петрович
									</p>
									<p className="text-xs text-gray-500 uppercase">
										оператор
									</p>
									<p className="font-light text-xs mt-3 text-gray-500 text-justify">
										Иванов Иван Петрович - опытный и ответственный специалист компании "ВМТехноГруз" в области аренды и ремонта строительной и дорожной техники. За время работы в компании он продемонстрировал глубокие знания всех тонкостей и нюансов этой сферы. Иванов И.П. внимателен к деталям и всегда предлагает оптимальные решения для эффективной реализации каждого конкретного заказа на аренду или ремонт техники. Он оперативно реагирует на любые запросы клиентов, находит альтернативные варианты при отсутствии нужной техники и быстро организует выезд механиков для ремонта. Иван Петрович ценится в компании как ответственный специалист, нацеленный на результат.
									</p>
								</div>
							</div>
						</div>
						<article className="mt-5 font-light text-sm text-justify">
							<p>
								Если у вас возникли вопросы по аренде или ремонту спецтехники, наша команда с радостью поможет разобраться во всех нюансах и даст полезные рекомендации. Мы ценим каждого клиента и стремимся предоставить качественные услуги в сфере аренды и сервисного обслуживания спецтехники.
							</p>
							<p>
								Заказывая наши услуги, вы можете быть уверены в профессионализме специалистов. Мы гарантируем высокое качество работ и оперативное решение задач, связанных с арендой или ремонтом строительной и дорожной техники.
							</p>
							<p>
								Не откладывайте вопросы по аренде или техобслуживанию спецтехники. Позвоните нам уже сейчас - наша команда быстро и качественно обеспечит вас всей необходимой информацией и предоставит требуемую технику в аренду или проведет ее ремонт.

								Мы готовы оперативно решить любые задачи в сфере аренды и сервисного обслуживания спецтехники.
							</p>
						</article>

					</div>
				</div>
			</div>
		</section>
	)
}
export default ContactPage
