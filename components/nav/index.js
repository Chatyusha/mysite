function NavMenu() {
    return (
        <div className={"uk-navbar-container"} uk-navbar="true">
            <div className={"uk-navbar-left"}>
                <ul className={"uk-navbar-nav"}>
                    <li className={"uk-active"}><a href="">hoge</a></li>
                    <li className={"uk-parent"}><a href="">fuga</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavMenu