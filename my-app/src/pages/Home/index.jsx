import { useEffect, useState } from "react";
import { fetchAlbums } from '../../utils/helper';
import Album from '../../components/Album';
import SearchBar from '../../components/SearchBar'

const Home = () => {
  const [albums, setAlbums] = useState([])

  const fetchAllAlbums = async () => {
    const responsive = await fetchAlbums();
    setAlbums(responsive.slice(0,5))
  }

  useEffect(() => {
    fetchAllAlbums()
  }, [])

  return (
    <div>
      <SearchBar data={albums} setAlbums={setAlbums} />
      <h1 className="font-bold text-4xl pb-5 font-dancing-script">All Albums</h1>
      {
        albums.length > 0 && <div className="p-2 px-4 bg-slate-400 rounded-2xl">
        {
          albums.map((item) => <Album key={item.id} item={item} />)
        }
      </div>
      }
     
    </div>
  );
};

export default Home;
