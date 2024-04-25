import BreadCrumb from "../BreadCrumb/BreadCrumb"
import Header from "../Header/Header"

const Main = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <Header />
      <BreadCrumb/>
    </div>
  )
}

export default Main