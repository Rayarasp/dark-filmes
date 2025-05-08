export default function CardFilm({}) {
  return (
    <div className="w-[340px] h-[310px] flex flex-col bg-[#222222] rounded-lg">
      <div className="w-full h-[70%] rounded-t-lg ">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCExm5EkBepFNBuobLwzrc3i7AlZvEB4JdPBZ-NrE418rZ0-RfX4aEnQdSLdsjSOfjl8v2EH7NMUUWy8WyIGVqQyKUDlSk_I1oBWHb61aAJbboEpZ0IQkr0aGdvjE8rD6xPJFTRgbFEwM/s1600/o+castelo+no+c%25C3%25A9u.png"
          alt=""
          className="w-full h-full rounded-t-lg object-cover"
        />
      </div>
      <div className="w-full h-[30%] flex flex-col pt-2 px-4">
        <p className="text-[15px] font-bold text-[#ffffff]">O Castelo no Céu</p>
        <p className="text-[12px] text-[#8a898c]">Diretor: Hayao Miyazaki</p>
        <div className="w-full flex justify-between">
          <p className="text-[12px] text-[#8a898c]">Ano: 1986</p>
          <p className=" px-2 py-0 bg-[#8f7bd8]/10 text-[12px] text-[#8a898c] rounded-lg">
            Nota: 10.0
          </p>
        </div>
      </div>
    </div>
  );
}
