import { useState, useEffect } from "react"
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

  const wallpapers = [
    "https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1710184713246-91865a6123dc?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1704476944918-c1258561ebb9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1667318749529-117b0b9e0be0?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  const [wallpaper, setWallpaper] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if(e.ctrlKey && e.key.toLowerCase() === "b") {
        e.preventDefault()

        setWallpaper((prev) => (prev + 1) % wallpapers.length)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

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
    <main className={`bg-[url(${wallpapers[wallpaper]})] transition-all duration-300 bg-cover bg-center h-screen`}>
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
