import {useState, useEffect} from 'react';
import "./SearchBar.scss"
const SearchBar = ({ setSearchParam }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        setSearchParam(inputValue);
    }, [inputValue])

    return (
        <input className="input-bar" type="text" onChange={handleInputChange} placeholder="Search By Description"/>
    )
}

export default SearchBar;