import { Chart } from "../../components/chart/Chart"
import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../dummyData"
import WidgedSm from "../../components/widgedSm/WidgedSm"
import WidgedLg from "../../components/widgedLg/WidgedLg"

export const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        <div className="homeWidgeds">
          <WidgedSm />
          <WidgedLg />
        </div>
    </div>
  )
}
