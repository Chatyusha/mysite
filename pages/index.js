import CommonMeta from "../components/meta"
import NavMenu from "../components/nav"
import SimpleDrowdown from "../components/dropdown/simple"

export default function Home() {
  return (
    <div>
      <CommonMeta title={"Home"}></CommonMeta>
      <div>
        <NavMenu></NavMenu>
        <SimpleDrowdown parent={"hoge"} child={"piyo"}></SimpleDrowdown>
      </div>
    </div>
  )
}