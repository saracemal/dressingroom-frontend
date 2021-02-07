import React, {useState} from "react"

function SortingContainer({onSearch}) {
const [sortBy, setSortBy] = useState('id');
const [searchedClothingItems, setSearchedClothingItems] = useState("")

function handleSearchSubmit(e) {
    e.preventDefault();
    onSearch(searchedClothingItems)
}
    return (
        <div className="clothingitem-search-and-sort">
            <h1>sorting/sorting section</h1>
            <div className="clothingitem-sort">
            <button onClick={() => setSortBy('id')}>Sort by Default</button>
            <button onClick={() => setSortBy('brand')}>Sort by Brand </button>
            </div>
            <div className="clothingitem-search">
            <form className="searchbar" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    id="search"
                    placeholder="search clothing"
                    value={searchedClothingItems}
                    onChange={(e) => setSearchedClothingItems(e.target.value)}
                />
                <button type="submit">🔍</button>
            </form>
            </div>
        </div>
    )
   
}

export default SortingContainer;