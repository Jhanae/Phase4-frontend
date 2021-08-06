import React from 'react'
import { Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'
import { useState } from 'react'

function Filter({setType, setSearch, sortPrice, sortQuantity}){
    const [searchText, setSearchText] = useState("")
    return (
        <div>
            <div >
                <InputGroup className="mb-3 ">
                    <Button className="filter-btns" id="nav-dropdown" style={{"background": "#FCC4D6", "borderColor" : "#FCC4D6"}} onClick={(e) => setType(e.target.value)}value="All">All</Button>
                    <Button className="filter-btns" style={{"background": "#FCC4D6", "borderColor" : "#FCC4D6"}}  onClick={(e) => setType("IPhone")} value="Apple">Apple</Button>
                    <Button className="filter-btns" style={{"background": "#FCC4D6", "borderColor" : "#FCC4D6"}}  onClick={(e) => setType(e.target.value)} value="Samsung">Samsung</Button> 
                    <div className="dropdown">
                    <button className="btn dropdown-toggle" style={{"background": "#FCC4D6", "color" : "#FFF", "borderRadius" : "0"}}  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort
                    </button>
                    <div className=" dropdown-menu" aria-labelledby="dropdownMenuButton" >
                            <a className="dropdown-item" href="#" onClick={sortPrice}>Price: Lowest to Highest</a>
                            <a className="dropdown-item" href="#" onChange={sortQuantity}>Quantity: Highest to Lowest</a>
                    </div>        
                    </div>          
                    <FormControl
                    onChange={(e) => setSearchText(e.target.value)}
                    className="productInput"
                    placeholder="Search Inventory..."
                    aria-label="Search Inventory..."
                    aria-describedby="basic-addon2"
                    />
                    <Button style={{"background": "#FCC4D6", "borderColor" : "#FCC4D6"}}  onClick={() => setSearch(searchText)} variant="primary" id="button-addon2">
                    Search
                    </Button>
                </InputGroup>            
            </div>
        </div>
    )
}
export default Filter;