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
var NavMenuJSX = NavTree.map(item => 
    {
        var Items = item.items.map(element => {return <li>{element}</li>})
        return (
            <dev>
                <li>
                    <a>{item.category}</a>
                </li>
                <div className={"uk-navbar-dropdown"}>
                    <ul className={"uk-nav","uk-navbar-dropdown-nav"}>
                        <li>{Items}</li>
                    </ul>
                </div>
            </dev>
        )
    }
)

function NavMenu() {
    return (
        <div className={"uk-navbar-container"} uk-navbar="true">
            <div className={"uk-navbar-left"}>
                <ul className={"uk-navbar-nav"}>
                    {NavMenuJSX}
                </ul>
            </div>
            <div>
            </div>
        </div>
    )
}

export default NavMenu