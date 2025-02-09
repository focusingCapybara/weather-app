function Header() {
    return (
        <header>
            <nav className="nav-bar flex flex-center">
                <div className="nav-location">
                    <span>Location | Monday</span>
                </div>
                
                <div className="nav-buttons flex flex-center">
                    <input className="btn search-btn" type="text" id="search" name="search" placeholder="Search"></input>
                    <button className="btn">Imperial Units</button>
                </div>
            </nav>
        </header>
    )
}

export default Header