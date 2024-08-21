import play from '/play_circle.png'
import barrinha from '/movieBar.png'

function Player(){
    return(
        <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/violetPlayer.png)', minHeight: '100vh' }}>
            <div className="absolute inset-0 flex">
                <h1 className='text-white underline text-[30px] ml-[131px] mt-[57px]'>Violet Evergarden</h1>
                <div className="flex justify-center items-center w-[65%]">
                    <img src={ play } alt="play" />
                </div>
                <div className="flex flex-col w-[2500px] justify-end items-end ml-[-2500px] mb-[51px]">
                    <img src={ barrinha } alt="barraFilme" />
                </div>
            </div>
        </div>
    );
}

export default Player;