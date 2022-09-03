import SimpleDrowdown from "../dropdown/simple"

// var NavTree = {
//     "プログラミング":[
//         "Python",
//         "Linux",
//         "C++",
//         "C#"
//     ],
//     "Unity":[
//         "Rigidbody"
//     ],
//     "数学":[
//         "三角関数"
//     ],
//     "その他技術":[
//         "Raspberry Pi"
//     ],
//     "料理":[
//         "マフィン"
//     ]
// }

var NavTree = [
    {
        "category":"プログラミング",
        "items":[
            "Python",
            "C#"
        ]
    },
    {
        "category":"Unity",
        "items":[
            "Rigidbody",
        ]
    }
]
let NavMenuJSX = NavTree.forEach(item =>
    {
        var Items = []
        item.items.forEach(element => {Items.push(<li>{element}</li>)})
        return (
            <dev className={"uk-navbar-left"}>
                <ul className={"uk-navbar-nav"}>
                    <li>
                         <a>{item.category}</a>
                     </li>
                     <div className={"uk-navbar-dropdown"}>
                         <ul className={"uk-nav","uk-navbar-dropdown-nav"}>
                            {Items}
                         </ul>
                     </div>
                 </ul>
            </dev>
        )
    })
function NavMenu() {
    return (
        <dev className={"uk-navbar-container"} uk-navbar="true">
            <dev className={"uk-navbar-left"}>
                <ul className={"uk-navbar-nav"}>
                    {/* <li>
                        <a>ほげ</a>
                    </li>
                    <div className={"uk-navbar-dropdown"}>
                        <ul className={"uk-nav","uk-navbar-dropdown-nav"}>
                            <li>ふが</li>
                        </ul>
                    </div> */}
                </ul>
            </dev>
        </dev>
    )
}

export default NavMenu