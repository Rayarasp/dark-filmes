import PageWrapper from "@/components/PageWrapper"
import { useRouter } from "next/router"
import { LuArrowLeft } from "react-icons/lu"

export default function Filme() {
    const router = useRouter()
    const { id } = router.query
    
    return (
        <PageWrapper
            showHeader={false}
        >
            <div className="w-full h-full flex flex-col px-[350px] pt-12 items-start">
                <button className="px-5 py-2 text-[#8a898c] gap-2 flex 
                    items-center justify-center rounded-lg">
                    <LuArrowLeft />
                    <p>Voltar para lista de filmes</p>
                </button>
            </div>
        </PageWrapper>
    )
}