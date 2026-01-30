import { RiCalendar2Fill, RiFilePdf2Line, RiGithubFill, RiLinksFill, RiMailFill, RiSafariFill, RiSafariLine, RiSpotifyFill, RiStickyNoteFill, RiTerminalLine } from "@remixicon/react"

const Dock = ({setWindowState}) => {

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
        <RiGithubFill 
        onClick={() => (setWindowState((prev) => ({...prev, github:true})))}
        className={`w-9.5 h-9.5 text-white bg-black p-1 rounded-md ${iconHover}`} 
        />
        <RiCalendar2Fill 
        onClick={() => (setWindowState((prev) => ({...prev, calendar:true})))}
        className={`w-9 h-9 text-white bg-linear-to-br from-blue-600 to-blue-400 p-1 rounded-md ${iconHover}`}/>
        <RiTerminalLine 
        onClick={() => (setWindowState((prev) => ({...prev,terminal:true})))}
        className={`w-10 h-10 text-white bg-black p-1 rounded-md ${iconHover}`} />
        <RiStickyNoteFill 
        onClick={() => (setWindowState((prev) => ({...prev, notes:true})))}
        className={`w-9 h-9 text-white bg-linear-to-br from-orange-400 to-orange-300 p-1 rounded-md ${iconHover}`} />
        <RiFilePdf2Line 
        onClick={() => (setWindowState((prev) => ({...prev, pdf:true})))}
        className={`w-9 h-9 text-white bg-red-500 p-1 rounded-md ${iconHover}`} />
        <RiSpotifyFill 
        onClick={() => (setWindowState((prev) => ({...prev, spotify:true})))}
        className={`w-9 h-9 text-white bg-green-600 p-1 rounded-md ${iconHover}`} />
        <RiSafariFill 
        onClick={() => (setWindowState((prev) => ({...prev, browser:true})))}
        className={`w-9.5 h-9 text-white bg-linear-to-br from-blue-600 to-blue-400 p-1 rounded-md ${iconHover}`} />
    </footer>
  )
}

export default Dock

