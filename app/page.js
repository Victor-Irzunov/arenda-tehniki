'use client'
import { ModalUniversal } from '@/components/modal/ModalUniversal';
import ServiceSectionComp from '@/components/mainPageSections/serviceSection/ServiceSectionComp';
import Image from 'next/image';
import { useState } from "react";
import { contentMainPage } from '@/constants/data/ContentMainPage';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [isActive, setIsActive] = useState({
    order: false,
    tel: false
  });
  const handleCancel = () => {
    setIsModalOpen(false)
  };

  const showModal = (title, active) => {
    setIsModalOpen(true)
    setTitle(title)
    if (active === "order") {
      setIsActive(prev => ({ ...prev, order: true, tel: false }))
    }
    if (active === "tel") {
      setIsActive(prev => ({ ...prev, order: false, tel: true, }))
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='w-full min-h-screen bg-cover fon bg-center' />

      <section className='container mx-auto relative xz:pt-10 xs:pt-24'>
        <div className='flex justify-between sd:w-1/2 xz:w-full'>
          <div className='pt-20 text-white'>
            <h1 className='font-bold xs:text-3xl xz:text-2xl uppercase'>
              Аренда <span className='text-yellow-400'>спецтехники</span> в Минске
            </h1>
            <p className="font-light mt-4 text-sm">
              Аренда строительной техники в нашей компании - это гарантия надежности и безопасности. Мы предоставляем в аренду только исправную технику от проверенных производителей. Наши специалисты регулярно проводят техобслуживание и ремонт. Вы можете быть уверены, что арендованная у нас техника не подведет на стройке. Обращайтесь к нам за качественной арендой строительной техники по выгодным ценам!
            </p>

            <p className='uppercase font-light xx:text-base xz:text-sm mt-8 text-yellow-400'>
              Оказываем ремонт вашей техники с выездом на место
            </p>

            <div className="mt-12 flex xz:flex-col-reverse xs:flex-row xz:items-start">
              <button
                className='border border-yellow-400 text-black px-5 xz:mt-6 xs:mt-0 py-1 font-light rounded-2xl text-sm bg-yellow-400'
                onClick={() => showModal("Заказать технику", "order")}
              >
                Заказать технику
              </button>
              <button
                className='border border-white xz:ml-0 xs:ml-5 px-5 py-1 font-light rounded-2xl text-sm bg-[#65BB1E]'
                onClick={() => showModal("Заказать звонок", "tel")}
              >
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </section>

      <ServiceSectionComp />

      <section className='relative xz:py-10 xs:py-24 bg-yellow-400 w-full'>
        {contentMainPage.map(el => {
          return (
            <article className='container mx-auto' key={el.id}>
              <h3>
                {el.title}
              </h3>
              <div className='mt-4'>
                {el.content}
              </div>
            </article>
          )
        })}
      </section>

      <section className='container mx-auto relative py-24'>
        <p className='text-center font-semibold text-white'>
          Нужна строительная техника? Снимите заботы с покупкой и обслуживанием парка машин - арендуйте все необходимое у нас! Экскаваторы, самосвалы, бульдозеры, тралы - любая спецтехника для ваших задач. Гибкие условия аренды, доставка по стране. Звоните уже сегодня, чтобы арендовать технику с доставкой завтра! Наши менеджеры готовы проконсультировать вас и подобрать оптимальный вариант. Ждем вашего звонка!
        </p>
      </section>

      <ModalUniversal
        isModalOpen={isModalOpen}
        title={title}
        handleCancel={handleCancel}
        isActive={isActive}
      />
    </main>
  )
}
