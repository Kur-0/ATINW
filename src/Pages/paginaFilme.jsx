import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PaginaFilmes(){

    const {id} = useParams();
    const [filme, setFilme] = useState([])

    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w1280/'


    useEffect( () => {
        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(erro => console.log(erro))
    },[])

    return(
        <>
        <div className="flex flex-col items-center mt-[100px]">
            <img className="w-auto rounded-[30px]" src={`${urlImg}${filme.backdrop_path}`}/>
            <h1 className="mt-[10px] font-jacques text-[40px] text-teal-500"> {filme.title} </h1>
            <p className="w-[1250px] mt-[20px] font-jacques text-[20px]">{filme.overview}</p>
        </div>
        </>
    );
}

export default PaginaFilmes