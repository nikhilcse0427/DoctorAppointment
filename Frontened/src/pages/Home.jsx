import Banner from "../component/Banner"
import Header from "../component/Header"
import SpecialityMenu from "../component/specialityMenu"
import TopDoctors from "../component/TopDoctors"

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home