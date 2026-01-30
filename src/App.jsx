import { useState } from "react"
import Dock  from "./components/Dock.jsx"
import Nav from "./components/Nav.jsx"
import Browser from "./components/windows/Browser.jsx"
import Calendar from "./components/windows/Calendar.jsx"
import Github from "./components/windows/Github.jsx"
import Notes from "./components/windows/Notes.jsx"
import Pdf from "./components/windows/Pdf.jsx"
import Spotify from "./components/windows/Spotify.jsx"
import Terminal from "./components/windows/Terminal.jsx"

const App = () => {

  const [windowState, setWindowState] = useState({
    github: false,
    notes: false,
    terminal: false,
    spotify: false,
    pdf: false,
    calendar: false,
    browser: false
  })

  return (
    <main className='bg-[url(public/mac-wallpaper.jpg)] bg-cover bg-center h-screen '>
      <Nav />
      <Dock windowState={windowState} setWindowState={setWindowState} />

      {/* Windows */}
      {windowState.github && <Github />}
      {windowState.notes && <Notes />}
      {windowState.terminal && <Terminal />}
      {windowState.spotify && <Spotify />}
      {windowState.pdf && <Pdf />}
      {windowState.calendar && <Calendar />}
      {windowState.browser && <Browser />}
    </main>
  )
}

export default App
