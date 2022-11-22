import React from 'react'

export interface UserCardProps {
  imgUrl: string
  name: string
}

const UserCard = ({ imgUrl, name }: UserCardProps) => {
  return (
    <div
      className={
        'flex gap-3 items-center justify-center mt-5 md:mt-0'
      }>
      <img
        className={'w-8 h-8 rounded-full'}
        src={imgUrl}
        alt='profile'
      />
      <p>{name}</p>
    </div>
  )
}

export default UserCard
