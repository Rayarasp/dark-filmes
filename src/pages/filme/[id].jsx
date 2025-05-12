import PageWrapper from "@/components/PageWrapper"
import { useRouter } from "next/router"
import { LuArrowLeft } from "react-icons/lu"
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import instance from "../api/instance";

export default function Filme() {
    const router = useRouter()
    const { id } = router.query
    const [filme, setFilme] = useState({})

    useEffect(() => {
        async function getFilmeById(){
            const response = await instance.get(`/api/movies/${id}`)
            setFilme(response.data)
        }

        if(id){
             getFilmeById()
        }
       

    }, [])
    
    return (
        <PageWrapper
            showHeader={false}
        >
            <div className="w-full h-full min-h-screen flex flex-col px-[350px] pt-12 items-start">
                <button className="px-5 py-2 text-[#8a898c] gap-2 flex 
                    items-center justify-center rounded-lg">
                    <LuArrowLeft />
                    <p>Voltar para lista de filmes</p>
                </button>
                <div className="flex">
                    <div className="w-[45%] h-full flex flex-col">
                    <div className="w-full h-[70vh]">
                        <img
                            className="w-full h-full rounded-lg object-cover"
                            src="https://br.web.img3.acsta.net/c_310_420/pictures/15/11/10/21/08/171263.jpg"
                            alt=""
                        />
                    </div>
                    <div className="w-full flex h-[10%] pt-4 justify-between">
                        <button className="w-[46%] h-full border border-[#9b87f5] bg-[#9b87f5] rounded-md hover:bg-[#c57eee] flex items-center justify-center gap-2 py-2"><FaEdit size={20} />Editar filmes</button>
                        <button className="w-[46%] h-full border border-[#ef444433] text-[#dd4242] hover:bg-[#ef4444]/20 rounded-md flex items-center justify-center gap-2 py-2"><FaTrashAlt />Excluir filme</button>
                    </div>
                </div>
                <div className="w-[55%] h-full flex flex-col pl-3">
                    <div className="w-full flex gap-2 items-baseline">
                        <h1 className="text-[25px] text-[#9b87f5] font-bold">Memórias de Marnie</h1>
                        <p className="text-[#8a898c] font-semibold text-[17px]">(2015)</p>
                    </div>
                    <div className="w-full gap-4 flex">
                        <div className="py-1 px-4 rounded-2xl bg-[#4ade80]/20 text-[#4ade80]">
                            <p className="text-[15px] font-bold">10/10</p>
                        </div>
                        <div className="py-1 px-4 rounded-2xl bg-[#9b87f5]/20 text-[#9b87f5]">
                            <p className="text-[15px] font-bold">Animação</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col mt-8">
                        <h4 className="font-bold text-[20px]">Diretor</h4>
                        <p className="text-[#8a898c]">Hiromasa Yonebayashi</p>  
                    </div>
                    <div className="w-full flex flex-col mt-8">
                        <h4 className="font-bold text-[20px]">Sinopse</h4>
                        <p className="text-[#8a898c]">Anna, uma menina solitária e curiosa, decide explorar uma velha mansão abandonada e conhece uma garota loira misteriosa que somente ela consegue ver.</p>
                    </div>
                </div>
                </div>
            </div>
        </PageWrapper>
    )
}