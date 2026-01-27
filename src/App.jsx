import Dock  from "./components/Dock.jsx"
import Nav from "./components/Nav.jsx"
import Github from "./components/windows/Github.jsx"
import Notes from "./components/windows/Notes.jsx"

const App = () => {
  return (
    <main className='bg-[url(public/mac-wallpaper.jpg)] bg-cover bg-center h-screen '>
      <Nav />
      <Dock />

      <Github />
      <Notes />
    </main>
  )
}

export default App
