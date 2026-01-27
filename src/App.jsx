import Dock  from "./components/Dock.jsx"
import Nav from "./components/Nav.jsx"
import Github from "./components/windows/Github.jsx"
import Notes from "./components/windows/Notes.jsx"
import Terminal from "./components/windows/Terminal.jsx"

const App = () => {
  return (
    <main className='bg-[url(public/mac-wallpaper.jpg)] bg-cover bg-center h-screen '>
      <Nav />
      <Dock />

      {/* Windows */}
      <Github />
      <Notes />
      <Terminal />
    </main>
  )
}

export default App
