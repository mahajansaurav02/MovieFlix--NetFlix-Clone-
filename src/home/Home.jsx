// import AcUnit from '@material-ui/icons/AcUnit';
import { Featured } from "../components/featured/Featured"
import { Navbar } from "../components/Navbar/Navbar"
import "./home.scss"

export const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <Featured />

</div>
  )
}
