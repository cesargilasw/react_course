//import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {



    const { data: images, loading } = useFetchGifs(category);

    console.log(loading);

    // api.giphy.com/v1/gifs/search?api_key=LLNyLBvIxqQMQutnDIaYjHIh645E1wp3&limit=10&q=Rick and morty
    // LLNyLBvIxqQMQutnDIaYjHIh645E1wp3
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading</p>}
            <div className='card-grid'>
                {
                    images.map(img => {
                        return <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    })
                }
            </div>
        </>
    )
}
