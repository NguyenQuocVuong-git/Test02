import { useEffect, useState } from "react";
import { fetchAlbums } from '../../utils/helper';
import Album from '../Album';

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
      <h1 className="font-bold text-4xl pb-5 font-dancing-script">All Albums</h1>
      <div className="p-2 px-4 bg-slate-400 rounded-2xl">
        {
          albums && albums.map((item) => <Album key={item.id} item={item} />)
        }
      </div>
    </div>
  );
};

export default Home;
