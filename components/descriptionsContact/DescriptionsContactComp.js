"use client"
import { Descriptions, Badge, Space } from 'antd'
import { useScreens } from '@/constants/constants'

const DescriptionsContactComp = () => {
	const screens = useScreens()

	return (
		<Descriptions
			style={screens.xs ? { paddingLeft: '.5em' } : undefined}
			title="Контактные данные"
			layout="vertical"
			column={1}
			bordered={false}
			labelStyle={{ fontWeight: "bold" }}
		>
			<Descriptions.Item label="Наименование">
				ООО «ВМТехноГруз»
			</Descriptions.Item>
			<Descriptions.Item label="Адрес">
				Республика Беларусь<br />
				220015, г. Минск, ул. Минская, 100А
			</Descriptions.Item>
			<Descriptions.Item label="Время работы">
				<Space direction="vertical">
					<Badge status="success" text="Пн: 8:00-18:00" />
					<Badge status="success" text="Вт: 8:00-18:00" />
					<Badge status="success" text="Ср: 8:00-18:00" />
					<Badge status="success" text="Чт: 8:00-18:00" />
					<Badge status="success" text="Пт: 8:00-18:00" />
					<Badge status="warning" text="Сб: 9:00-17:00" />
					<Badge status="error" style={{ color: 'red' }} text="Вс: выходной" />
				</Space>
			</Descriptions.Item>
			<Descriptions.Item label="Телефон">
				<a href='tel:80295086162' className=''>
					+375 29 000 00 00
				</a>
			</Descriptions.Item>
			<Descriptions.Item label="Почта">
				....@gmail.com
			</Descriptions.Item>
		</Descriptions>
	)
}
export default DescriptionsContactComp