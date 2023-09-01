"use client"
import { Tag } from "antd"
import Image from "next/image"
import { useState } from "react";
import { ModalUniversal } from "../modal/ModalUniversal";

const CardComp = ({ data }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [isActive, setIsActive] = useState({
		order2: false,
		utochnit: false
	});
	const handleCancel = () => {
		setIsModalOpen(false)
	};

	const showModal = (title, active) => {
		setIsModalOpen(true)
		setTitle(title)
		if (active === "order2") {
			setIsActive(prev => ({ ...prev, order2: true, utochnit: false }))
		}
		if (active === "utochnit") {
			setIsActive(prev => ({ ...prev, order2: false, utochnit: true }))
		}
	}

	return (
		<div className="">
			{data && data.data.map(el => {
				return (
					<div className="bg-gray-50 py-6 px-3 rounded-md shadow-lg mb-10 border overflow-hidden" key={el.id}>
						<h3 className="font-semibold uppercase text-xl xz:mb-4 sd:mb-8">
							{el.title}
						</h3>

						<div className="flex xz:flex-col sd:flex-row">
							<Image src={el.img} alt={el.alt} width={350} height={250} className="rounded-md shadow-lg" />

							<div className="xz:mt-8 sd:mt-0 xz:ml-0 sd:ml-4">
								{el.info.length ? el.info.map((elem, idx) => {
									return (
										<p className="font-light text-sm" key={idx}>
											{elem}
										</p>
									)
								})
									:
									null
								}
							</div>
						</div>

						<div className="mt-4 text-xs font-light">
							{el.opisanie}
						</div>

						<div className="mt-4">
							<p className="font-semibold">
								Стоимость аренды за час:
							</p>
							<p className="mb-5">
								{el.price}
							</p>
							<div className="flex justify-between items-center">
								<Tag color={el.nalichie ? 'green' : 'orange'}>
									{el.nalichie ? 'свободен' : 'уточняйте наличие'}
								</Tag>

								{
									el.nalichie ?
										<Tag
											color="#87d068"
											className="uppercase"
											onClick={() => showModal(`${el.title}`, "order2")}
										>
											Заказать
										</Tag>
										:
										<Tag
											color="#eab308"
											className="uppercase"
											onClick={() => showModal(`${el.title}`, "utochnit")}
										>
											Уточнить
										</Tag>
								}

							</div>

						</div>



					</div>
				)
			})}
			<ModalUniversal
				isModalOpen={isModalOpen}
				title={title}
				handleCancel={handleCancel}
				isActive={isActive}
			/>
		</div>
	)
}

export default CardComp