import './App.css';
import { useState, useEffect } from "react"


/*
const App = () => {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([{id:0}]);
  const Submit = () => {
    fetchRequest();
    setImg("");
    useEffect(() => {
      <div>
      {res.map((val) => {
        return (
          <>
            <img
              src={val.urls.small}
              alt="val.alt_description"
            />
          </>
        );
      })}
    </div>
      }
    )}
    
  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=QnW67Q4WplwE5bPkIcLdBPXsHFIyW7bg_qUjYXl9o84`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result)
    setRes(result)
  };
  useEffect(() => {
    fetchRequest();
    
  }, []);
  
  return (
    <>
      <h1>Image Gallery</h1>
      <input
        type="text"
        placeholder="Search Anything..."
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <button type='submit' onClick={Submit} >Search</button>
      
    </>
    
  )
}
*/

function ImageGallery() {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);
  const [count, setCount] = useState(18);

  return (
    <>
    <div className='title'>Image Gallery</div>
    <input 
    className='imgSearch'
        type="text"
        placeholder="Search Anything..."
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <input 
      className='imgCount'
        type='number'
        placeholder='10'
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
    <button
      className='searchButton'
      onClick={() => {
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=QnW67Q4WplwE5bPkIcLdBPXsHFIyW7bg_qUjYXl9o84&per_page=${count}`, [])
        .then((res) => res.json())
        .then((data) => {
          const result = data.results;
          console.log(result)
          setRes(result)
        }
          
        )} 
    }>Search</button>
    <div>
      {res.map((val) => {
        return (
          <>
          <a target='_blank' href={val.urls.full}>
            <img
              className='image'
              src={val.urls.small}
              alt="val.alt_description"
              href="google.com"
            />
          </a>  
          </>
        );
      })}
    </div>
    </>
  )
}

function App() {
  return (
    <ImageGallery />
  )
}
export default App;
