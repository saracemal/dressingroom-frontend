import React from "react"

function NewInspoForm({newInspoImg, setNewInspoImg, newInspoCaption, setNewInspoCaption, handleNewInspoSubmit}) {
    return (
    <div className="new-inspo-form">
        <h1>new inspooooooo  </h1>
        <form onSubmit={handleNewInspoSubmit}>
                <input 
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={newInspoImg}
                    onChange={(e) => setNewInspoImg(e.target.value)}/>
                    <input 
                    type="text"
                    name="caption"
                    placeholder="caption"
                    value={newInspoCaption}
                    onChange={(e) => setNewInspoCaption(e.target.value)}/>
                <input type="submit" value="add new inspo" />
           </form>
    </div>
    )
}

export default NewInspoForm;