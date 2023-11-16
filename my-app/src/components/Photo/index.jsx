
import React, { useEffect, useState } from 'react'
import { fetchPhotoFromId, capitalizeFirstLetter } from '../../utils/helper'
import { useParams } from 'react-router-dom';

export default function Photo() {
  const { id } = useParams();
  const [photo, setPhoto] = useState({})

  const getPhoto = async () => {
    const response = await fetchPhotoFromId(id)
    setPhoto(response)
  }

  useEffect(() => {
    getPhoto()
  }, [])

  return (
    <>
      <h1 className="font-bold text-4xl pb-5 font-dancing-script">Photo</h1>
      <div className='flex gap-10 p-5 rounded-lg border-2 border-borderColor'>
        <img
          loading='lazy'
          className="w-full h-full md:w-80 max-h-[70px] md:max-h-80 object-cover mb-2 md:mb-0"
          alt={photo.title}
          src={photo.url}
        />
        <h1 className='pt-5 text-3xl font-dancing-script'>{capitalizeFirstLetter(photo.title)}</h1>
      </div>

    </>
  )
}

