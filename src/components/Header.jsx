import { useEffect, useRef } from 'react';

function Header(props) {
    const newDate = new Date(props.date);
    const options = { weekday: 'long' };
    const dayName = newDate.toLocaleDateString('en-US', options);

    const searchInputRef = useRef(null);

    useEffect(() => {
        const searchBtn = searchInputRef.current;
        
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                const data = searchBtn.value;
                searchBtn.value = "";
                props.getFromHeader(data);
            }
        };

        searchBtn.addEventListener('keypress', handleKeyPress);

        return () => {
            searchBtn.removeEventListener('keypress', handleKeyPress);
        };
    }, []);

    return (
        <header>
            <nav className="nav-bar flex flex-center">
                <div className="nav-location">
                    <span>{props.locationName} | {dayName}</span>
                </div>
                
                <div className="nav-buttons flex flex-center">
                    <input className="btn search-btn" type="text" id="searchBtn" name="search" placeholder="Search"ref={searchInputRef}></input>
                    <button className="btn">Imperial Units</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;