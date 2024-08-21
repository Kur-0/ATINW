import { useState } from 'react';
import emailjs from '@emailjs/browser'

export default function Contato(){
    const [email, setEmail] = useState('')
    const [about, setAbout] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(email === '' || about ==='' || message === ''){
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            email: email,
            about: about,
            message: message
        }

        emailjs.send("service_fuj8cpp", "template_z0l68wq", templateParams, "VA1DZbFPg783ePbMa")
        .then((response)=> {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setEmail('')
            setAbout('')
            setMessage('')
        },  (err) => {
            console.log("ERRO:", err)
        })
    }


    return(
        <div className={`bg-contato ${location.pathname === '/contato' ? 'bg-contato' : ''}`}>

            <h1 className="font-jacques text-white text-[50px] mt-[227px] ml-[196px]">Fale Com a Gente!</h1>
            <div className="flex justify-center items-center">
                <form className="flex flex-col w-[734px] mt-[49px]" action="post" method="post" onSubmit={sendEmail}>
                    <label htmlFor="titulo" className="font-jacques text-white text-[20px] bg-teal-500 h-[47px] rounded-t-[30px] flex items-center">Formulário de Contato:</label>

                    <input 
                        className="font-jacques text-[20px] border-x-2 border-t-2 border-teal-500 h-[34px]" 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="Seu Email:" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}
                    />

                    <input 
                        className="font-jacques text-[20px] border-2 border-teal-500 h-[44px]" 
                        type="text" 
                        name="assunto" 
                        id="assunto" 
                        placeholder="Assunto:" 
                        onChange={(e) => setAbout(e.target.value)} 
                        value={about}
                    />

                    <textarea 
                        placeholder="Sua Mensagem:" 
                        name="mensagem" 
                        d="mensagem" 
                        className="font-jacques text-[20px] border-x-2 border-b-2 border-teal-500 h-[335px] rounded-b-[30px]"
                        onChange={(e) => setMessage(e.target.value)} 
                        value={message}
                        />
                    

                    <div className="flex justify-end mt-[16px]">
                        <button 
                            className="font-jacques w-[199px] h-[57px] text-white text-[20px] rounded-[40px] bg-teal-500 flex items-center justify-center" 
                            value="Enviar"
                            type="submit"
                        >Enviar:</button>
                    </div>
                </form>
            </div>
        </div>
    );
}