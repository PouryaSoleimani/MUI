import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {

  return (
    <>
    <div className="flex">
      <Header />
      <Navbar />
    </div>
    </>
  )
}

export default App
