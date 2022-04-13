import React from 'react'

const Dogs = ({ dogBreedsList, displayDogBreeds }) => {
    return (
        <div className="dogs">
            <h1>List of Dog Breeds</h1>
            <ul>{!!dogBreedsList.length && displayDogBreeds(dogBreedsList, 'dogs')}</ul>
        </div>
    )
}
export default Dogs