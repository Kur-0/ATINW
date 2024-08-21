import {Outlet, useLocation} from"react-router-dom"
import Header from "./componentes/Header/Header"

function App() {

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isPlayerPage = location.pathname === "/player";
  console.log(location.pathname)

  return (
    
    <>
    
    <div className={isHomePage ? "bg-home" : ""}>
      {!isPlayerPage && <Header />}
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default App
