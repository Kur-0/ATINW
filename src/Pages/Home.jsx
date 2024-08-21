import star from '/star.png'
import avaliacao from '/gostaro.png'
import addQueue from '/add_to_queue.png'
import { Link } from 'react-router-dom'
import CardsHome from '../componentes/CardsHome/CardsHome'

function Home() {
    return ( 
        <>  
        <div className="min-h-screen " style={{ backgroundImage: 'url(/texturaHome.png)'}}>
            <div className="main ml-[124px] ">
                <div className="detalhes-filme mt-[102px]">
                    <h1 className='font-fleur text-[86px] text-white text-stroke'> Violet Evergarden </h1>
                    <p className='text-white text-[20px]'>2018 ‧ Drama ‧ 1 temporada</p>
                    <div className="decor flex mt-[10px]">
                        <img className='w-[151px]' src={star} alt="estrelinhaaa" />
                        <img className='ml-[17px]' src={avaliacao} alt="gostaro" />
                        <img className='ml-[20px]' src={addQueue} alt="botaNaFilaAi" />
                    </div>                        
                    <p className='text-white text-[20px] w-[509px] mt-[10px]'>Com o fim da guerra, Violet Evergarden precisa encontrar um trabalho. Cheia de cicatrizes, ela aceita trabalhar como escritora de cartas para entender a si mesma e seu passado.</p>
                    <div className="bttns flex mt-[42px] justify-between w-[410px]">
                        <Link to="Player" className="outline outline-teal-500 w-[190px] h-[67px] text-white text-[20px] rounded-[40px] flex items-center justify-center">Ver Trailer</Link>
                        <Link to="Player" className=" w-[190px] h-[67px] text-white text-[20px] rounded-[40px] bg-teal-500 flex items-center justify-center">Assistir</Link>
                    </div>
                </div>   
                <CardsHome/>
            </div>            
        </div>
        </>
        
     );
}

export default Home;