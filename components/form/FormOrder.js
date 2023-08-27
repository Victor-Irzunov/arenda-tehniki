"use client"
import { useState } from 'react';
import { Form, Button, Input, message, Select, DatePicker, TimePicker } from 'antd';
import InputMask from 'react-input-mask';
import ResultComp from '../result/ResultComp';
import { sendOrderTelegram } from '@/http/telegramAPI';

const { TextArea } = Input;


export const FormOrder = ({ handleCancel, link, title = 'Заказ с сайта Аренда технике', order2 }) => {
	const [tel, setTel] = useState('')
	const [isActive, setIsActive] = useState(false)

	const onFinish = (values) => {
		let messageForm = `<b>${title}</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Клиент по имени ${values.name || '-'} хочет заказать технику </b>\n`
		messageForm += `<b>Техника: ${values.technika} </b>\n`
		messageForm += `<b>На дату: ${values.date || '-'} </b>\n`
		messageForm += `<b>Время: ${values.time || '-'} </b>\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<b>Примечание: ${values.primechanie || '-'} </b>\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<b>Телефон:</b> ${values.tel}\n`

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) {
					message.success('Ваш запрос принят!')
					setIsActive(true)
					if (handleCancel) {
						handleCancel()
					}
				}
			})

	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState
		var selection = newState.selection
		var cursorPosition = selection ? selection.start : null
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}
		return {
			value,
			selection
		}
	}
	return (
		<>
			{
				!isActive ?
					<>
						<Form
							name="order"
							labelCol={{
								span: 24,
							}}
							wrapperCol={{
								span: 24,
							}}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete="off"
						>
							<Form.Item
								label="Ваше имя"
								name="name"
								tooltip=""
							>
								<Input style={{
									width: 200,
								}} />
							</Form.Item>

							<Form.Item
								label="Ваш телефон"
								name="tel"
								tooltip="код оператора и номер"
								rules={[
									{
										required: true,
										message: 'Пожалуйста введите номер!',
									},
								]}
							>
								<InputMask
									placeholder="29 123-45-67"
									mask="+3\7\5 99 999 99 99"
									maskChar={'-'}
									className='border py-1 px-3 rounded-md w-full'
									beforeMaskedValueChange={beforeMaskedValueChange}
									value={tel}
									onChange={(e) => setTel(e.target.value)}
									style={{
										width: 200,
									}}
								/>
							</Form.Item>

							{
								!order2 && (
									<Form.Item
										label="Выберите технику для аренды"
										name="technika"
										tooltip=""
										rules={[
											{
												required: true,
												message: 'Пожалуйста выберите технику!',
											},
										]}
									>
										<Select
											// defaultValue="lucy"

											options={[
												{
													label: 'Аренда самосвала',
													options: [
														{
															label: 'Аренда МАЗ',
															value: 'МАЗ',
														},
														{
															label: 'Аренда самосвала MAN',
															value: 'MAN',
														},
													],
												},
												{
													label: 'Аренда трала',
													options: [
														{
															label: 'Полуприцеп-тяжеловоз',
															value: 'Полуприцеп-тяжеловоз',
														},
														{
															label: 'Трал Max Trailer',
															value: 'Трал Max Trailer',
														},
													],
												},
												{
													label: 'Аренда фронтального погрузчика',
													options: [
														{
															label: 'Погрузчик АМКОДОР',
															value: 'Погрузчик АМКОДОР',
														},

													],
												},
												{
													label: 'Аренда колесных экскаваторов',
													options: [
														{
															label: 'Аренда Hitachi ZX170W-3',
															value: 'Аренда Hitachi ZX170W-3',
														},
														{
															label: 'Аренда KOMATSU PW160-7',
															value: 'Аренда KOMATSU PW160-7',
														},

													],
												},
												{
													label: 'Аренда экскаваторов-погрузчиков',
													options: [
														{
															label: 'Экскаватор-погрузчик JCB 4CX',
															value: 'Экскаватор-погрузчик JCB 4CX',
														},
														{
															label: 'Экскаватор JCB 3CX',
															value: 'Экскаватор JCB 3CX',
														},

													],
												},
												{
													label: 'Аренда гусеничного экскаватора',
													options: [
														{
															label: 'Аренда JCB JS260 LC полуболотный',
															value: 'Аренда JCB JS260 LC полуболотный',
														},
														{
															label: 'Аренда HITACHI ZX280 LC полуболотный',
															value: 'Аренда HITACHI ZX280 LC полуболотный',
														},

													],
												},
											]}
										/>
									</Form.Item>
								)
							}


							<Form.Item
								label="Выберите дату аренды"
								name="date"
								tooltip="Дата на которую необходима спецтехника"
							>
								<DatePicker />
							</Form.Item>
							<Form.Item
								label="Выберите на какое время"
								name="time"
								tooltip="Время на которое необходима спецтехника"
							>
								<TimePicker format="YYYY-MM-DD HH:mm" />
							</Form.Item>

							<Form.Item
								label="Примечание"
								name="primechanie"
								tooltip=""
							>
								<TextArea

									placeholder=""
									autoSize={true}
								/>
							</Form.Item>



							<Form.Item
								wrapperCol={{
									offset: 8,
									span: 16,
								}}
							>
								<Button type="primary" htmlType="submit">
									Заказать
								</Button>
							</Form.Item>
						</Form>
					</>
					:
					<ResultComp link={link} />
			}

		</>
	)
}
