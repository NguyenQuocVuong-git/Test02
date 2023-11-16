import React, { useEffect, useState } from 'react'
import { fetchPhotoFromAlbumId, capitalizeFirstLetter } from '../../utils/helper'
import PhotoAlbums from '../PhotoAlbums'
import { Link } from 'react-router-dom'

export default function Album({ item }) {

    const [photos, setPhotos] = useState([])

    const getPhotosOfAlbum = async () => {
        const responsive = await fetchPhotoFromAlbumId(item.id)
        setPhotos(responsive)
    }

    useEffect(() => {
        getPhotosOfAlbum()
    }, [])

    return (
        <div className='py-5 px-4 my-4 bg-white rounded-2xl'>
            <div className='flex justify-between'>
                <h3 className='text-xl font-normal font-dancing-script'>{capitalizeFirstLetter(item.title)}</h3>
                <Link to={`/category/${item.id}`}>
                    <img src='/images/icon-arrow.svg' alt='icon arrow' />
                </Link>
            </div>
            <div className='pt-1'>
                <PhotoAlbums photos={photos} />
            </div>
        </div>
    )
}
