import axios from 'axios';

export const fetchAlbums = async() => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/albums`)
    if (response) return response.data
    return []
}

export const fetchPhotoFromAlbumId = async(id) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/albums/${id}/photos`)
    if (response) return response.data.slice(0,20)
    return []
}

export const fetchAlbum = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/albums/${id}`)
    if (response) return response.data
    return {}
}

export const fetchPhotoFromId = async(id) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/photos/${id}`)
    if (response) return response.data
    return {}
}

export const capitalizeFirstLetter = (string) => {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
}