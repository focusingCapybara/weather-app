import { useEffect, useRef } from 'react';
import styles from "./Button.module.css";

function SearchButton(props) {
    const searchInputRef = useRef(null);

    useEffect(() => {
        const searchBtn = searchInputRef.current;
        
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                const data = searchBtn.value;
                searchBtn.value = "";
                props.getFromSearchButton(data);
            }
        };

        searchBtn.addEventListener('keypress', handleKeyPress);

        return () => {
            searchBtn.removeEventListener('keypress', handleKeyPress);
        };
    }, []);

    return (
        <input className={`${styles.btn} ${styles.searchBtn}`} type="text" id="searchBtn" name="search" placeholder="Search"ref={searchInputRef}></input>
    );
}

export default SearchButton;