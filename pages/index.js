import CommonMeta from "../components/meta"
import NavMenu from "../components/nav"
import SimpleDrowdown from "../components/dropdown/simple"
import Title from "../components/title"

var hoge = [1,2,3,4,5];
var list = [];
for(var i in hoge){
  list.push(<h2>{i}</h2>);
}

export default function Home() {
  return (
    <div>
      <CommonMeta title={"Home"}></CommonMeta>
      <div>
        <Title></Title>
        <NavMenu></NavMenu>
        <SimpleDrowdown parent={"hoge"} children={["foo","bar"]}></SimpleDrowdown>
      </div>
    </div>
  )
}