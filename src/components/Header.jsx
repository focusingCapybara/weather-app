import SearchButton from './Button/SearchButton';
import UnitsButton from './Button/UnitsButton';

function Header(props) {
    function getFromSearchButton(place) {
        props.getPlaceNameFromHeader(place);
    }

    function getUnitsFromUnitsButton(isMetric) {
        props.getUnitsFromHeader(isMetric);
    }

    const newDate = new Date(props.date);
    const options = { weekday: 'long' };
    const dayName = newDate.toLocaleDateString('en-US', options);

    return (
        <header>
            <nav className="nav-bar flex flex-center">
                <div className="nav-location truncate">
                    <span>{props.locationName} | {dayName}</span>
                </div>
                
                <div className="nav-buttons flex flex-center">
                    <SearchButton getFromSearchButton={getFromSearchButton} />
                    <UnitsButton getUnitsFromUnitsButton={getUnitsFromUnitsButton}/>
                </div>
            </nav>
        </header>
    );
}

export default Header;