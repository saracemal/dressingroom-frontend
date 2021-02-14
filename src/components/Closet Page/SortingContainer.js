import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"

function SortingContainer({onSearchChange, searchedClothingItems}) {
// const [searchedClothingItems, setSearchedClothingItems] = useState("")

// function handleSearchSubmit(e) {
//     e.preventDefault();
//     onSearchChange(searchedClothingItems)
// }

// const sortedClothingItems = filteredClothingItems.sort((clothingItemA, clothingItemB) => {
//     if (sortBy === 'id') {
//         return clothingItemA.id - clothingItemB.id;
//     } else {
//         return clothingItemA.brand.localeCompare(clothingItemB.brand)
//     }
// })

// onSubmit={handleSearchSubmit}
    return (
        <SearchWrapper>
            
            <Rotate>👀</Rotate>
            <form className="searchbar">
                <input
                    type="text"
                    id="search"
                    placeholder="Search clothing..."
                    value={searchedClothingItems}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <button type="submit" className="search-btn">🔍</button>
            </form>
        </SearchWrapper>
    )
   
}

export default SortingContainer;

const SearchWrapper = styled.div`
    text-align: center;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;