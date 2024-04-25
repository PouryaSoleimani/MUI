import BreadCrumb from "../BreadCrumb/BreadCrumb"
import CardsContainer from "../CardsContainer/CardsContainer"
import Header from "../Header/Header"

const Main = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <Header />
      <BreadCrumb/>
      <CardsContainer/>
    </div>
  )
}

export default Main