import Dock  from "./components/Dock.jsx"
import Nav from "./components/Nav.jsx"

const App = () => {
  return (
    <main className='bg-[url(public/mac-wallpaper.jpg)] bg-cover bg-center h-screen '>
      <Nav />
      <Dock />
    </main>
  )
}

export default App
