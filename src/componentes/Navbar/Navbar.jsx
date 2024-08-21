import {Link} from 'react-router-dom'
import '../../index.css'


function Navbar() {

    const hoverStyle = {
        transition: 'all 0.3s ease',
        ':hover': {
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            WebkitTextStroke: '1px #2dd4bf ',
            textStroke: '1px #2dd4bf ',
        }
    };

    return ( 
        
        <nav>
            <ul className='flex gap-3'>
                <li><Link to ="/" className='hover:text-white hover-stroke'>Home</Link></li>
                <li><Link to ="filmes" className='hover:text-white hover-stroke'>Filmes</Link></li>
                <li><Link to ="noticias" className='hover:text-white hover-stroke'>Notícias</Link></li>
                <li><Link to ="sobre" className='hover:text-white hover-stroke'>Sobre</Link></li>
                <li><Link to ="contato" className='hover:text-white hover-stroke'>Contato</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;