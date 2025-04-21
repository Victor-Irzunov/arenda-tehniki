"use client"
import Image from 'next/image'
import logo from '../../public/logo/logo.webp'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'
import { dataService } from '@/constants/data/DataService'
import { MenuOutlined } from '@ant-design/icons'
import { useScreens } from '@/constants/constants'
import { DrawerComp } from '../drawer/DrawerComp'
// import { transliterate } from '@/transliterate/transliterate'

const Header = () => {
  const [hover, setHover] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [placement, setPlacement] = useState('')
  const [title, setTitle] = useState('')
  const screens = useScreens()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isForm, setIsForm] = useState(false)
  const showModal = (isForm) => {
    setIsForm(isForm)
    setIsModalOpen(true)
  }
  const handleMouseLeave = () => {
    setHover(false)
  }
  const handleMouseEnter = () => {
    setHover(true)
  }
  const showDrawer = (position, title) => {
    setOpenMenu(true)
    setPlacement(position)
    setTitle(title)
  }
  const navBar = [
    {
      id: 1,
      name: 'Главная',
      link: '/'
    },
    {
      id: 2,
      name: 'Услуги',
      link: ''
    },
    {
      id: 4,
      name: 'О компании',
      link: '/o-kompanii'
    },
    {
      id: 5,
      name: 'Контакты',
      link: '/kontakty'
    },
  ]

  // function gtag_report_conversion(url) {
  //   var callback = function () {
  //   };
  //   window.gtag('event', 'conversion', {
  //     'send_to': 'AW-11273957189/54HvCP2I48oYEMXe6_8p',
  //     'event_callback': callback
  //   });
  //   return false;
  // }


  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-1 bg-white shadow-xl"
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <div className=''>
            <Link href='/'>
              <Image
                src={logo}
                width={screens.lg ? 90 : 70}
                height='auto'
                alt='логотип компании ООО ГрузБел'
              />
            </Link>
          </div>
          <nav className='xz:hidden sd:block'>
            <ul className='flex justify-between items-center'>
              {
                navBar.map(el => {
                  return (
                    <li key={el.id}
                      className='mx-2 uppercase font-light text-sm'
                      onMouseEnter={el.id === 2 ? handleMouseEnter : handleMouseLeave}
                    >
                      <Link
                        href={el.link}
                      >
                        {el.name}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
          <div className=''>
            <a
              href='tel:8029'
              className='block xx:text-lg xz:pt-2 xz:text-sm'
            // onClick={() => gtag_report_conversion('/')}
            >
              +375 29 000-00-00
            </a>
          </div>

          <div className=''>
            {/* <LoginOutlined
              className='text-2xl'
              onClick={() => {
                showModal(false)
              }}
            /> */}
          </div>

          <div className='xz:inline-block sd:hidden'>
            <MenuOutlined
              className='text-3xl'
              onClick={() => showDrawer('right', 'Меню')}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {
          hover &&
          (<motion.div
            initial={{ heigth: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='w-full mt-2'
            style={{ borderTop: '1px solid #ccc', zIndex: '100000' }}
          >
            <div className='container mx-auto px-10'>
              <div className='pt-6 pb-4 text-sm border-t-black  font-light flex justify-between items-start flex-wrap'>
                <ul>
                  {
                    dataService.map(el => {
                      return (
                        <li className='mb-3 text-lg' key={el.id}>

                          <Link href={`${el.link}`}
                            className="cursor-pointer hover:text-blue-700"
                            onClick={handleMouseLeave}
                          >
                            {el.title}
                          </Link>
                        </li>
                      )

                    })
                  }
                </ul>
              </div>
            </div>
          </motion.div>)
        }
      </AnimatePresence>
      <DrawerComp
        openMenu={openMenu}
        placement={placement}
        title={title}
        setOpenMenu={setOpenMenu}
        isActiveForm={{ menu: true }}
      />
    </header>
  )
}

export default Header
