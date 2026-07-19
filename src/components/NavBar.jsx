function NavBar(){
    return(
        <nav classname="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" classname="nav-link"> Home</Link>
                <Link to="/favorite" classname="nav-link"> Home</Link>
            </div>
        </nav>
    )
}

export default NavBar;