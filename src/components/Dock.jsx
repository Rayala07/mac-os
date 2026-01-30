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
        <RiSpotifyFill 
        onClick={() => (setWindowState((prev) => ({...prev, spotify:true})))}
        className={`w-8.5 h-8.5 text-white bg-green-600 p-1 rounded-md ${iconHover}`} />
        <img 
        onClick={() => (setWindowState((prev) => ({...prev, notes:true})))} 
        src="https://cdn.jim-nielsen.com/macos/1024/reminders-2025-11-14.png?rf=1024" 
        className="w-10 h-10 cursor-pointer" 
        />
        <img 
        onClick={() => (setWindowState((prev) => ({...prev, terminal:true})))} 
        src="https://cdn.jim-nielsen.com/macos/1024/terminal-2025-11-14.png?rf=1024" 
        className="w-10.5 h-10.5 cursor-pointer" 
        />
        <img 
        onClick={() => (setWindowState((prev) => ({...prev, pdf:true})))} 
        src="https://cdn.jim-nielsen.com/macos/1024/craft-write-docs-ai-editing-2025-11-10.png?rf=1024" 
        className="w-10 h-10 cursor-pointer" 
        />
        <img 
        onClick={() => (setWindowState((prev) => ({...prev, calendar:true})))} 
        src="https://cdn.jim-nielsen.com/macos/1024/calendar-2025-11-13.png?rf=1024" 
        className="w-10 h-10 cursor-pointer" 
        />
        <img 
        onClick={() => (setWindowState((prev) => ({...prev, browser:true})))} 
        src="https://cdn.jim-nielsen.com/macos/1024/safari-2025-11-14.png?rf=1024" 
        className="w-10 h-10 cursor-pointer" 
        />
    </footer>
  )
}

export default Dock

