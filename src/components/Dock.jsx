import { RiCalendar2Fill, RiFilePdf2Line, RiGithubFill, RiLinksFill, RiMailFill, RiSpotifyFill, RiStickyNoteFill, RiTerminalBoxLine } from "@remixicon/react"

const Dock = () => {
  return (
    <footer className="flex gap-2.5
      absolute bottom-4 left-1/2 -translate-x-1/2
      px-6 py-4
      bg-white/10
      backdrop-blur-md
      border border-white/30
      rounded-2xl">
      <div><RiGithubFill /></div>
      <div><RiCalendar2Fill /></div>
      <div><RiTerminalBoxLine /></div>
      <div><RiStickyNoteFill /></div>
      <div><RiFilePdf2Line /></div>
      <div><RiSpotifyFill /></div>
      <div><RiMailFill /></div>
      <div><RiLinksFill /></div>
    </footer>
  )
}

export default Dock

