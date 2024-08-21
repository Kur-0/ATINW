import noticiasData from '/noticias.json';
import { useState, useEffect } from "react";

export default function Noticias(){

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        // Simulação de fetch ou carregamento de dados assíncronos
        setNoticias(noticiasData);
    }, []);

    return(
        <>
                    {noticias.map((noticia) => (
                        <div key={noticia.id} className="w-[700px] my-4 p-4 border border-teal-400 rounded-lg">
                        <h2 className="text-lg text-teal-500 font-semibold font-jacques">{noticia.titulo}</h2><br />
                        <p className="text-sm font-jacques">{noticia.data} - Fonte: {noticia.fonte}</p> <br /><br />
                        <p className="text-base font-jacques">{noticia.descricao}</p>
                        </div>
                    ))}
        </>
    );
}