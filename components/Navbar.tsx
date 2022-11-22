import React from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import UserCard from './UserCard'

const Navbar = () => {
  const { data: session } = useSession()
  return (
    <header className='body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center mt-5'>
        <Link
          href={'/'}
          className='flex title-font text-2xl font-semibold items-center mb-4 md:mb-0 hover:text-indigo-700'>
          АГНИ Автоматизация
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link
            href={'/'}
            className='mr-5 hover:text-indigo-700'>
            Главная
          </Link>
          <Link
            href={'/'}
            className='mr-5 hover:text-indigo-700'>
            Каталог
          </Link>
        </nav>
        {!session ? (
          <button
            onClick={() => signIn()}
            className='inline-flex items-center text-gray-50 bg-indigo-800 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0'>
            Авторизация
          </button>
        ) : (
          <UserCard
            imgUrl={session?.user?.image!}
            name={session?.user?.name!}
          />
        )}
      </div>
    </header>
  )
}

export default Navbar
