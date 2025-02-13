import SearchButton from './Button/SearchButton';
import UnitsButton from './Button/UnitsButton';

function Header(props) {
    function getFromSearchButton(place) {
        props.getFromHeader(place);
    }

    const newDate = new Date(props.date);
    const options = { weekday: 'long' };
    const dayName = newDate.toLocaleDateString('en-US', options);

    return (
        <header>
            <nav className="nav-bar flex flex-center">
                <div className="nav-location">
                    <span>{props.locationName} | {dayName}</span>
                </div>
                
                <div className="nav-buttons flex flex-center">
                    <SearchButton getFromSearchButton={getFromSearchButton} />
                    <UnitsButton />
                </div>
            </nav>
        </header>
    );
}

export default Header;