import React, {useState, useEffect, useRef} from 'react'

const Dog = () => {
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
        !favDogs.includes(dog) && setFavDogs([...favDogs, dog])
        
    }

    const displayDogBreeds = (dogsList, lName) => dogsList.map((dogBreed, i) => {
        return <li key={`${dogsList}-${lName}-${i}`}><button onClick={addFavDogBreed} value={dogBreed}>{dogBreed}</button></li>
    })
    
 
    return (
        <>
            <div className="dogs">
                <h1>List of Dog Breeds</h1>
                <ul>{!!dogBreedsList.length && displayDogBreeds(dogBreedsList)}</ul>
            </div>
            <div className="favDogs">
                <h1>Favorite Dog Breeds</h1>
                <ul>{!!favDogs.length && displayDogBreeds(favDogs)}</ul>
            </div>
        </>
    
    )
}
export default Dog