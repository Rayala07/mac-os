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
      {windowState.github && <Github windowName="github" setWindowState={setWindowState}/>}
      {windowState.notes && <Notes windowName="notes" setWindowState={setWindowState}/>}
      {windowState.terminal && <Terminal windowName="terminal" setWindowState={setWindowState}/>}
      {windowState.spotify && <Spotify windowName="spotify" setWindowState={setWindowState}/>}
      {windowState.pdf && <Pdf windowName="pdf" setWindowState={setWindowState}/>}
      {windowState.calendar && <Calendar windowName="calendar" setWindowState={setWindowState}/>}
      {windowState.browser && <Browser windowName="browser" setWindowState={setWindowState}/>}
    </main>
  )
}

export default App
