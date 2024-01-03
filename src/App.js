import { useState } from "react";
import Cards from "./components/Cards";
import Home from "./pages/Home";

function App() {

  const [cards, setCards] = useState([
    {
      id: 1,
      likes: 51,
      views: 55,
      isLiked: false
    },
    {
      id: 2,
      likes: 0,
      views: 12,
      isLiked: false
    },
    {
      id: 3,
      likes: 23,
      views: 35,
      isLiked: true
    },
    {
      id: 4,
      likes: 885,
      views: 1233,
      isLiked: false
    },
    {
      id: 5,
      likes: 650,
      views: 884,
      isLiked: true
    },
    {
      id: 6,
      likes: 445,
      views: 884,
      isLiked: true
    },
    {
      id: 7,
      likes: 320,
      views: 445,
      isLiked: true
    },
    {
      id: 8,
      likes: 3225,
      views: 4200,
      isLiked: true
    }
  ])


  return (
    <div className="container_xl flex flex-col">
      <Home />
      <div className="text-center py-10">
        <h1 className="font-bold text-[36px]">Photo Gallery</h1>
        <h2 className="text-[#4a4a4a]">499 inspirational designs, illustrations, and graphic elements from the world’s best designers.
          <br />Want more inspiration? Browse our <span className="text-[#000]">search results...</span></h2>
      </div>
      <div className='flex gap-[40px] flex-wrap w-[100%] justify-center'>
        {cards.map((item) => {
          return (
            <Cards key={item.id} item={item} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
