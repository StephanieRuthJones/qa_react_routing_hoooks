import React from 'react'

const FavDogs = ({favDogs, displayDogBreeds}) => {
    return (
        <div className="favDogs">
            <h1>Favorite Dog Breeds</h1>
            <ul>{!!favDogs.length && displayDogBreeds(favDogs, 'fav-dogs')}</ul>
        </div>    
    )
}
export default FavDogs