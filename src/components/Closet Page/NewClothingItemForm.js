import React from "react"

function NewClothingItemForm({
    newBrand,
    setNewBrand,
    newSize,
    setNewSize,
    newDescription,
    setNewDescription,
    newSeason,
    setNewSeason,
    newImgUrl,
    setNewImgUrl,
    handleNewClothingItemSubmit}) {
    
   return (
       <div className="new-clothingitem-form">
           <h1>new clothing item form</h1>
           <form onSubmit={handleNewClothingItemSubmit}>
            <label hmtlfor="brand">brand:</label> 
                <input 
                    type="text"
                    name="brand"
                    placeholder="brand"
                    value={newBrand}
                    onChange={(e) => setNewBrand(e.target.value)}/>
                <label hmtlfor="size">size:</label> 
                    <input 
                    type="number"
                    name="size"
                    placeholder="size"
                    value={newSize}
                    onChange={(e) => setNewSize(parseInt(e.target.value))}/>
                <label hmtlfor="description">description:</label> 
                    <input 
                    type="text"
                    name="description"
                    placeholder="description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}/>
                <label hmtlfor="description">season:</label> 
                    <input 
                    type="text"
                    name="season"
                    placeholder="season"
                    value={newSeason}
                    onChange={(e) => setNewSeason(e.target.value)}/>
                <label hmtlfor="description">image</label> 
                    <input 
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={newImgUrl}
                    onChange={(e) => setNewImgUrl(e.target.value)}/>
                <button type="submit">add new item</button>
           </form>
       </div>
   )
}

export default NewClothingItemForm;