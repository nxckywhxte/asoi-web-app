import React from 'react'
import {NewsData} from "../data/NewsData";
import NewsCard from "./NewsCard";

const News = () => {
    return (
        <section className='body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-col w-full mb-10 md:mb-20'>
                    <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4'>
                        Новости института и нашей кафедры
                    </h1>
                </div>
                <div className='flex flex-wrap -m-4'>
                    {
                        NewsData.map((n, id) => {
                            return (
                                <NewsCard key={id} id={n.id} title={n.title} description={n.description}
                                          imgUrl={n.imgUrl} category={n.category}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default News
