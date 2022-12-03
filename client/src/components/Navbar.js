export default function NavbarComp() {
    const userLoggedIn = true;

    return (
        <div className="navbarContainer">
            <div className={"placeholder"}></div>

            <div className="navbarLinks">
                <ul>
                    <li>
                        <a className={"link"} href="/">LogBooks</a>
                    </li>
                    <li>
                        <a className={"link"} href="/demo">Demo</a>
                    </li>
                    <li>
                        <a className={"link"} href="/about">About</a>
                    </li>
                </ul>
                <div className="searchBar">
                    <input className="searchInput" type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="navbarUser">
                {userLoggedIn ? (<a className={"link"} href={"/logout"}>Logout</a>) : (<a className={"link"} href={"/login"}>Login</a>) }
                {userLoggedIn? (<div className="userIcon">Canaan White</div>) : null}
            </div>

        </div>
    )
}