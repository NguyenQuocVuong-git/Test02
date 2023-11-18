import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchAlbum, fetchPhotoFromAlbumId , capitalizeFirstLetter } from '../../utils/helper'
import ItemCategory from '../../components/ItemCategory'


export default function Category() {
    const { id } = useParams();

    const [category, setCategory] = useState({})
    const [photos, setPhotos] = useState([])

    const getCategory = async () => {
        const response = await fetchAlbum(id)
        setCategory(response)
    }

    const getPhotoOfCategory = async () => {
        const response = await fetchPhotoFromAlbumId(id)
        setPhotos(response)
    }


    useEffect(() => {
        getCategory()
        getPhotoOfCategory()
    }, [])

    return (
        <div>
            <h1 className="font-bold text-4xl pb-5 font-dancing-script pl-4">{capitalizeFirstLetter(category.title)}</h1>
            <div className='w-full min-h-fit p-10 md:p-20 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10mx-auto'>
                {
                    photos && photos.map((item) => <ItemCategory item={item} />)
                }
            </div>
        </div>
    )
}
