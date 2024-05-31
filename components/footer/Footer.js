'use client'
import telegram from '../../public/social-icon/telegram.svg'
import viber from '../../public/social-icon/viber.svg'
import instagram from '../../public/social-icon/instagram.svg'
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { useScreens } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	const screens = useScreens()
	return (
		<footer className="mt-auto relative pt-6 pb-3 bg-yellow-500">
			<div className="container mx-auto">
				<div className='flex justify-between items-start text-black flex-wrap'>

					<div className='font-light text-base xs:mb-4'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid text-lg'>
							Информация
						</p>
						<ul className='no-underline list-none pl-0'>
							<li className='no-underline list-none'>
								<Link href='/kontakty'>
									Контакты
								</Link>
							</li>
							<li className='no-underline list-none'>
								<Link href='/o-kompanii'>
									О компании
								</Link>
							</li>
						</ul>
					</div>

					<div className='font-light text-base xs:mb-4'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid text-lg'>
							Контакты
						</p>
						<p>
							<PhoneOutlined className='mr-3 rotate-90 text-lg' />
							<a href='tel:8029' className=''>
							+375 29 000-00-00
							</a>
						</p>
						<p>
							<MailOutlined className='mr-3 text-lg' />
							vmtehno@mail.ru
						</p>
					</div>

					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid font-light text-lg'>
							Адрес
						</p>
						<p>
						223062, Минская обл., Минский р-он,
						</p>
						<p>
						Луговослободской с/с., п. Привольный ул. Мира 20А.
						</p>
					</div>
					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid font-light text-lg'>
							График работы
						</p>
						<p>
							Пн-Пт - 08:00 - 18:00
						</p>
						<p>
							Сб-Вс - выходной
						</p>
					</div>

					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid font-light text-lg'>
							Мы в соц. сетях
						</p>
						<div className='flex justify-evenly items-center pt-3'>
							<a href='https://www.instagram.com/' target='_blank' >
								<Image src={instagram} width={25} alt='иконка инстаграма' />
							</a>
							<a href={`${screens.md ? 'https://t.me/' : 'https://t.me/@'}`} target='_blank' >
								<Image src={telegram} width={25} alt='иконка телеграма' />
							</a>
							<a href='viber://chat?number=%2B375' target='_blank' >
								<Image src={viber} width={25} alt='иконка вайбера' />
							</a>
						</div>
					</div>
				</div>
				<div
					className='mt-6 border-t border-black pt-2'
				>
					<p className='text-black/50 xs:text-xs xz:text-[10px]' >Copyright © 2024 | Разработка и Продвижение
						<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-blue-700 no-underline'> VI:TECH</a>
					</p>
				</div>
			</div>
		</footer>
	)
}


export default Footer
