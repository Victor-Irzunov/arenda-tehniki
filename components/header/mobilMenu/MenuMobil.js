// "use client"
// import { useState } from 'react'
import { Divider } from 'antd'
import { ToolOutlined } from '@ant-design/icons'
import Link from 'next/link'


export const MenuMobil = ({ onClose }) => {
	// const [isOpen, setIsOpen] = useState(false)

	// const showDrawerMenuMobil = () => {
	// 	setIsOpen(true)
	// }


	return (
		<div className='h-full'>
			<nav className='h-full'>
				<ul className='h-full flex flex-col justify-start items-start text-sm cursor-pointer'>
					<li>
						<Link href='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Главная страница
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-start items-center w-full'>
						<Link href='/remont/tehniki'
							className="cursor-pointer mr-2"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт спецтехники
						</Link>
						 <ToolOutlined /> 
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/arenda-samosvala'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Аренда самосвала
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/arenda-trala'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Аренда трала
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/arenda-frontalnyh-pogruzchikov'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Аренда фронтального погрузчика
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/arenda-kolesnogo-ekskavatora'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Аренда колесных экскаваторов
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/arenda-exkavatora-pogruzchika'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Аренда экскаваторов-погрузчиков
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/arenda-gusenichnogo-ekskavatora'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Аренда гусеничного экскаватора
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/o-kompanii'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							О компании
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

				

					<li className='flex justify-between items-center w-full'>
						<Link href='/kontakty'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Контакты
						</Link>
					</li>

				</ul>
			</nav>
		</div>
	)
}
