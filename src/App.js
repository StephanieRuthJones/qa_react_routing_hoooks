import React, {useState, useEffect} from 'react'
import './App.css';
import FavDogs from './components/FavDogs';
import Dogs from './components/Dogs'
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
    return <li key={dogBreed}><button onClick={!favDogs.includes(dogBreed) ? addFavDogBreed : removeFavDogBreed} value={dogBreed}>{dogBreed}</button></li>
  })
  return (
    <div className="App">
      <Dogs dogBreedsList={dogBreedsList} displayDogBreeds={displayDogBreeds} />
      <FavDogs favDogs={favDogs} displayDogBreeds={displayDogBreeds}/>
    </div>
  );
}

export default App;
