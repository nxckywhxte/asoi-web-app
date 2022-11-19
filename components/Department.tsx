import React from 'react'
import {TeacherData} from "../data/TeacherData";
import TeacherCard from "./TeacherCard";

const Department = () => {
    return (
        <section className='body-font'>
            <div className='container px-5 py-10 mx-auto'>
                <div className='flex flex-col text-center w-full mb-10 md:mb-20'>
                    <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4'>
                        Наша Кафедра
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Предлагаем ознакомиться с преподавательским
                        составом нашей кафедры. Все преподаватели имеют
                        колоссальный опыт в сфере автоматизации
                        производства.
                    </p>
                </div>
                <div className='flex flex-wrap -m-2'>
                    {
                        TeacherData.map((t, id) => {
                            return (
                                <TeacherCard key={t.id} id={id} fullName={t.fullName} position={t.position} imgUrl={t.imgUrl}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Department
