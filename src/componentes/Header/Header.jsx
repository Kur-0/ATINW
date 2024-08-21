import Buttons from "../Buttons/Buttons";
import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex p-4 justify-around fixed top-0 left-0 right-0 bg-transparent">
            <img src="/AniMex.png" alt="logo"/>
            <Navbar></Navbar>
            <div className="btt flex "><Buttons/></div>           
        </header>
     );
}

export default Header;