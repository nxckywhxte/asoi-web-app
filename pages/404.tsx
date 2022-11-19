import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12 flex min-h-screen w-full items-center justify-center'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className='flex flex-col items-center'>
          <Link
            href='/'
            className='inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5 mb-8'
            aria-label='logo'>
            Кафедра АИТ
          </Link>

          <h1 className='text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2'>
            Страница не найдена или еще не создана
          </h1>

          <p className='max-w-screen-md text-gray-500 md:text-lg text-center mb-12'>
            Возможно в будущем она все-таки появится
          </p>

          <Link
            href='/'
            className='inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'>
            Вернуться в родную гавань
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
