import { RiCalendar2Fill, RiFilePdf2Line, RiGithubFill, RiLinksFill, RiMailFill, RiSafariFill, RiSafariLine, RiSpotifyFill, RiStickyNoteFill, RiTerminalLine } from "@remixicon/react"

const Dock = () => {

  const iconHover = "hover:scale-[1.2] hover:-translate-y-2 transition-all ease-out duration-300";

  return (
    <footer className="flex gap-4 items-center
            absolute bottom-4 left-1/2 -translate-x-1/2
            px-6 py-3
            bg-[#47474756]
            backdrop-blur-xl
            rounded-xl
            "
    >
        <RiGithubFill className={`w-9.5 h-9.5 text-white bg-black p-1 rounded-md ${iconHover}`} />
        <RiCalendar2Fill className={`w-9 h-9 text-white bg-linear-to-br from-blue-600 to-blue-400 p-1 rounded-md ${iconHover}`}/>
        <RiTerminalLine className={`w-10 h-10 text-white bg-black p-1 rounded-md ${iconHover}`} />
        <RiStickyNoteFill className={`w-9 h-9 text-white bg-linear-to-br from-orange-400 to-orange-300 p-1 rounded-md ${iconHover}`} />
        <RiFilePdf2Line className={`w-9 h-9 text-white bg-red-500 p-1 rounded-md ${iconHover}`} />
        <RiSpotifyFill className={`w-9 h-9 text-white bg-green-600 p-1 rounded-md ${iconHover}`} />
        <RiSafariFill className={`w-9.5 h-9 text-white bg-linear-to-br from-blue-600 to-blue-400 p-1 rounded-md ${iconHover}`} />
    </footer>
  )
}

export default Dock

