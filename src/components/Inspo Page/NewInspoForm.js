import React from "react"

function NewInspoForm({newInspoImg, setNewInspoImg, newInspoCaption, setNewInspoCaption, handleNewInspoSubmit}) {
    return (
    <div className="new-inspo-form">
        <h1>new inspo!</h1>
        <form onSubmit={handleNewInspoSubmit}>
            <label hmtlfor="description">image:</label> 
                <input 
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={newInspoImg}
                    onChange={(e) => setNewInspoImg(e.target.value)}/>
            <label hmtlfor="description">caption:</label> 
                <input 
                    type="text"
                    name="caption"
                    placeholder="caption"
                    value={newInspoCaption}
                    onChange={(e) => setNewInspoCaption(e.target.value)}/>
                <button type="submit">add inspo ♻️ </button>
           </form>
    </div>
    )
}

export default NewInspoForm;