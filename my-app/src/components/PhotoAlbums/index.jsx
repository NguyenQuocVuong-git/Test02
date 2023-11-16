import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const PhotoAlbum = ({ photos }) => {
    const [visiblePhotosCount, setVisiblePhotosCount] = useState(0);
    const albumRef = useRef(null);

    const updateVisiblePhotosCount = () => {
        if (albumRef.current) {
            const containerWidth = albumRef.current.offsetWidth;
            const photoWidth = 100;
            const photosInRow = Math.floor(containerWidth / photoWidth);
            setVisiblePhotosCount(photosInRow);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateVisiblePhotosCount);
        updateVisiblePhotosCount();

        return () => {
            window.removeEventListener('resize', updateVisiblePhotosCount);
        };
    }, []);

    const displayedPhotos = photos.slice(0, visiblePhotosCount - 1);
    const remainingPhotos = photos.length - displayedPhotos.length;

    return (
        <div ref={albumRef} className="flex overflow-x-auto py-2 whitespace-nowrap ">
            {displayedPhotos.map((photo, index) => (
                <div key={index} className="flex-none w-24 h-24 bg-gray-300 m-1 cursor-pointer">
                    <Link to={`/photo/${photo.id}`} >
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </Link>
                </div>
            ))}
            {remainingPhotos > 0 && (
                <div className="flex-none w-24 h-24 bg-black text-white flex justify-center items-center m-1 cursor-pointer">
                    +{remainingPhotos}
                </div>
            )}
        </div>
    );
};

export default PhotoAlbum;
