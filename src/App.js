import React, {useState, useEffect} from 'react'
import './App.css';
import FavDogs from './components/list-components/FavDogs';
import Dogs from './components/list-components/Dogs'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  const [dogBreedsList, setDogBreedsList] = useState([])
  const [favDogs, setFavDogs] = useState([])

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const dogData = await response.json()
      const dogBreeds = Object.keys(dogData.message)
      setDogBreedsList(dogBreeds)
    }
    fetchDogs() 
  }, [])
  
  const addFavDogBreed = e => {
    const dog = e.target.value
    setFavDogs([...favDogs, dog])
  }
  const removeFavDogBreed = e => {
    const dog = e.target.value
    const newFavDogsList = favDogs.filter(dog => dog !== dog)
    setFavDogs(newFavDogsList)
  }
  
  const displayDogBreeds = (dogsList, cmp) => dogsList.map(dogBreed => {
    return <li key={`${dogBreed}-${cmp}`}><button onClick={!favDogs.includes(dogBreed) ? addFavDogBreed : removeFavDogBreed} value={dogBreed}>{dogBreed}</button></li>
  })
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/" >Dog Breed List</Link>
              </li>
              <li>
                <Link to="/favorites">Favorite Dogs</Link>
              </li>
             
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={<Dogs dogBreedsList={dogBreedsList} displayDogBreeds={displayDogBreeds} />}>
              
            </Route>
            <Route path="/favorites" element={              <FavDogs favDogs={favDogs} displayDogBreeds={displayDogBreeds} />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
