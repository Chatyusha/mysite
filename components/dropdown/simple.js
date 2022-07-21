function SimpleDrowdown({parent,child}) {
    return (
        <div className={"uk-inline"}>
            <button className={"uk-button","uk-button-default"} type="button">{parent}</button>
            <div uk-dropdown="true">
                <ul className={"uk-nav","uk-dropdown-nav"}>
                    <li className={"uk-active"}><a href="#">{child}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SimpleDrowdown