import React, {useState} from "react"

function SortingContainer({onSearchChange, searchedClothingItems}) {
const [sortBy, setSortBy] = useState('id');
// const [searchedClothingItems, setSearchedClothingItems] = useState("")

// function handleSearchSubmit(e) {
//     e.preventDefault();
//     onSearchChange(searchedClothingItems)
// }

// onSubmit={handleSearchSubmit}
    return (
        <div className="clothingitem-search-and-sort">
            <h1>seach/sorting section</h1>
            <div className="clothingitem-sort">
            <button className="id-btn" onClick={() => setSortBy('id')}>Sort by Default</button>
            <button className="brand-btn" onClick={() => setSortBy('brand')}>Sort by Brand </button>
            </div>
            <div className="clothingitem-search">
            
            <label htmlFor="search">Looking for something? 👀</label>
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
            </div>
        </div>
    )
   
}

export default SortingContainer;