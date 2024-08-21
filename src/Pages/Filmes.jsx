import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'


function Filmes() {

    const [filmes, setFilmes] = useState([])
    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w780/'

    useEffect( () => {
        fetch(`${urlBase}popular?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(erro => console.log(erro))
    },[])
    

    return ( 
        <>
        <div className={`bg-filmes ${location.pathname === '/filmes' ? 'bg-filmes' : ''}`}>
            <h1 className="mt-[130px] text-teal-500 text-[40px] font-jacques text-center">♥ Filmes Populares ♥</h1>
            <div className="listaFilmes flex gap-3 flex-wrap mt-[51px] justify-center items-center self-center">
            {
                filmes.map(filme => (
                    <div className="flex flex-col items-center" key={filme.id}>
                        <img className="w-[190px] h-[292px] rounded-[10px] mt-[56px] mr-[30px]" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                        <div className="flex items-center justify-center mt-[22px] mr-[30px]">
                            <h2 className=" mb-1 text-center justify-center items-center underline">{filme.title}</h2>
                            <Link to={`${filme.id}`} className="bg-teal-500  rounded-[20px] text-white ml-[10px] p-1">+info</Link>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        </>
     );
}

export default Filmes;