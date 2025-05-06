export default function CustomInput({label, placeholder, type}) {
    return (
        <div className="flex flex-col w-full gap-2">
            <label className="text-[17px] font-bold">{label}""</label>
            <input
                className="w-full h-[45px] bg-[#141414] border border-[#ffffff1a] rounded-lg pl-2 t86f4] outline-none focus:border-purple-400"
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}