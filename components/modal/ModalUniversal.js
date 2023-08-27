"use client"
import { Modal } from 'antd'
import { FormOrder } from '../form/FormOrder'
import { FormTel } from '../form/FormTel'

export const ModalUniversal = ({ isModalOpen, title = '', handleCancel, isActive }) => {

	return (
		<Modal
			title={title}
			open={isModalOpen}
			onCancel={handleCancel}
			centered
			footer={null}
		>
			{
				isActive.order && <FormOrder handleCancel={handleCancel} />
			}
			{
				isActive.order2 && <FormOrder handleCancel={handleCancel} order2={isActive.order2} />
			}
			{
				isActive.uznat && <FormTel handleCancel={handleCancel} title={title} uznat={isActive.uznat} btn='Узнать' />
			}

			{
				isActive.tel && <FormTel handleCancel={handleCancel} />
			}

			{
				isActive.utochnit && <FormTel  handleCancel={handleCancel} title={title} isActive={isActive.utochnit} btn='Уточнить' />
			}
		</Modal>
	)
}
