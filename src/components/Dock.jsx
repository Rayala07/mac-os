import { RiCalendar2Fill, RiFilePdf2Line, RiGithubFill, RiLinksFill, RiMailFill, RiSafariFill, RiSafariLine, RiSpotifyFill, RiStickyNoteFill, RiTerminalLine } from "@remixicon/react"
import "../styles/dock.css"

const Dock = ({setWindowState}) => {

  return (
    <footer className="flex gap-2 items-center
            absolute bottom-4 left-1/2 -translate-x-1/2
            px-7 py-[0.4rem]
            bg-[#84848462]
            backdrop-blur-md
            rounded-xl
            "
    >
        <div className="dock-item">
          <img 
          onClick={() => (setWindowState((prev) => ({...prev, github:true})))}
          src="../../Public/assets/icons/github.png" 
          className="icon github cursor-pointer"
          alt="" 
          />
        </div>
        <div className="dock-item">
          <img 
          onClick={() => (setWindowState((prev) => ({...prev, spotify:true})))}
          src="../../Public/assets/icons/spotify.png" 
          className="icon spotify cursor-pointer"
          alt="" 
          />
        </div>
        <div className="dock-item">
          <img 
        onClick={() => (setWindowState((prev) => ({...prev, notes:true})))} 
        src="https://cdn.jim-nielsen.com/macos/1024/reminders-2025-11-14.png?rf=1024" 
        className="icon cursor-pointer" 
          />
        </div>
        <div className="dock-item">
          <img 
        onClick={() => (setWindowState((prev) => ({...prev, terminal:true})))} 
        src="https://cdn.jim-nielsen.com/macos/1024/terminal-2025-11-14.png?rf=1024" 
        className="icon cursor-pointer" 
          />
        </div>
        <div className="dock-item">
          <img 
        onClick={() => (setWindowState((prev) => ({...prev, pdf:true})))} 
        src="https://cdn.jim-nielsen.com/macos/1024/craft-write-docs-ai-editing-2025-11-10.png?rf=1024" 
        className="icon cursor-pointer" 
          />
        </div>
        <div className="dock-item">
          <img 
        onClick={() => (setWindowState((prev) => ({...prev, calendar:true})))} 
        src="https://cdn.jim-nielsen.com/macos/1024/calendar-2025-11-13.png?rf=1024" 
        className="icon cursor-pointer" 
          />
        </div>
        <div className="dock-item">
          <img 
        onClick={() => (setWindowState((prev) => ({...prev, browser:true})))} 
        src="https://cdn.jim-nielsen.com/macos/1024/safari-2025-11-14.png?rf=1024" 
        className="icon cursor-pointer" 
          />
        </div>
    </footer>
  )
}

export default Dock

