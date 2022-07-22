function SimpleDrowdown({parent,children}) {
    var list = [];
    for(var i in children){
        list.push(<li className={"uk-active"}><a href="#">{children[i]}</a></li>);
    }
    return (
        <div className={"uk-inline"}>
            <button className={"uk-button","uk-button-default"} type="button">{parent}</button>
            <div uk-dropdown="true">
                <ul className={"uk-nav","uk-dropdown-nav"}>
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default SimpleDrowdown