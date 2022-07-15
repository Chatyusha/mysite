import CommonMeta from '../components/meta'
import NavMenu from '../components/nav'

export default function Home() {
  // return (
  //   <h1 className="text-3xl font-bold underline">
  //     Hello world!
  //   </h1>
  // )
  return (
    <div>
      <CommonMeta title={"MainPage"}/>
      <div>
        <NavMenu />
      </div>
    </div>
  )
}