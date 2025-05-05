import { LuFilm } from "react-icons/lu";

export default function Header({showButton = true}){
    return(
        <header className="w-full h-[70px] flex bg-[#0c0f15] justify-between pr-2 items-center">
            <div className="flex h-full gap-2 items-center justify-center pl-2">
                <LuFilm color="#9887f5" size={28}/>
                <h2 className="font-bold text-[20px]">Dark Filmes</h2>              
            </div>
            {showButton && (
                <button className="w-[150px] h-[60%] rounded-md bg-[#9887f5] font-bold hover:bg-[#9887f5]/70 cursor-pointer">Adicionar Filme</button>
            ) }

        </header>
    )
}