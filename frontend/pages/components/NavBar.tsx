import Link from 'next/link'

export default function NavbarComp() {
    const userLoggedIn:boolean = false;
    
    return (
        <div className="navbarContainer">
            <div className={"placeholder"}></div>
            
            <div className="navbarLinks">
                <ul>
                    <li>
                        <Link className={"link"} href="/">LogBooks</Link>
                    </li>
                    <li>
                        <Link className={"link"} href="/demo">Demo</Link>
                    </li>
                    <li>
                        <Link className={"link"} href="/about">About</Link>
                    </li>
                </ul>
                <div className="searchBar">
                    <input className="searchInput" type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="navbarUser">
                {userLoggedIn ? (<Link className={"link"} href={"/logout"}>Logout</Link>) : (<Link className={"link"} href={"/login"}>Login</Link>) }
                {userLoggedIn? (<div className="userIcon">Canaan White</div>) : null}
            </div>

        </div>
    )
}