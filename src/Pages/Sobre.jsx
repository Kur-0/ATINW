import { Link } from 'react-router-dom'
export default function Sobre(){
    return(
        <div className={`bg-sobre ${location.pathname === '/sobre' ? 'bg-sobre' : ''}`}>
            <h1 className="text-teal-500 font-jacques text-[50px] mt-[157px] ml-[178px]">Sobre Nós!</h1>
            <div className="w-[1000px] mt-[10px] ml-[216px]">
                <p className="font-jacques text-[20px] ">Bem-vindo à Animex, sua nova casa para todos os animes que você ama! Na Animex, nossa missão é trazer o melhor do entretenimento japonês para a ponta dos seus dedos. Somos apaixonados por animes e sabemos que você também é. Por isso, reunimos uma vasta coleção de títulos que vão desde os clássicos atemporais até os lançamentos mais recentes.</p>
                <h3 className="text-teal-500 font-jacques text-[20px] mt-[30px]">O Que Oferecemos:</h3>
                <ul className='list-disc ml-[35px]'>
                    <li className='text-[20px] font-jacques'>Catálogo Extenso: Uma biblioteca diversificada com milhares de episódios e filmes, cobrindo todos os gêneros – ação, aventura, fantasia, romance, comédia e muito mais.</li>
                    <li className='text-[20px] font-jacques'>Qualidade de Transmissão: Experimente seus animes favoritos em alta definição, com opções de dublagem e legendas em vários idiomas.</li>
                    <li className='text-[20px] font-jacques'>Atualizações Constantes: Novos episódios adicionados regularmente para que você nunca perca os últimos lançamentos.</li>
                    <li className='text-[20px] font-jacques'>Comunidade Engajada: Participe de discussões, eventos e concursos com outros fãs de anime ao redor do mundo através do <Link to="noticias" className='text-teal-500 no-underline hover:underline'>portal de notícias</Link>.</li>
                </ul>
                <h3 className="text-teal-500 font-jacques text-[20px] mt-[30px]">Nossa Missão:</h3>
                <p className="font-jacques text-[20px]">Acreditamos que o anime tem o poder de inspirar, emocionar e unir pessoas de diferentes culturas. Nossa missão é proporcionar uma plataforma acessível e amigável, onde todos os fãs de anime possam descobrir, assistir e compartilhar suas séries e filmes favoritos.
                </p>
                <h3 className="text-teal-500 font-jacques text-[20px] mt-[30px]">Entre em Contato</h3>
                <p className="font-jacques text-[20px]">Tem alguma sugestão, dúvida ou problema? Nossa equipe de suporte está sempre pronta para ajudar. Acesse a seção de <Link to="contato" className='text-teal-500 no-underline hover:underline'>contato</Link> para falar conosco.
                </p>
                <br />
                <p className="font-jacques text-[20px]">Obrigado por escolher a <span className='text-teal-500 font-jacques text-[20px]'>Animex</span>. Prepare a pipoca, acomode-se e aproveite a jornada no mundo dos animes!</p>
            </div>
        </div>
    );
}