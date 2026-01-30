import { useRef, useState } from 'react'
import MacWindow from './MacWindow'

const SpotifyWindow = () => {

    const playlist = [
  {
    id: 1,
    title: "Running Up that Hill",
    artist: "Kate Bush",
    url: "../../../Public/assets/Kate Bush - Running Up That Hill.mp3",
    cover: "https://i.scdn.co/image/ab67616d0000b273ad08f4b38efbff0c0da0f252"
  },
  {
    id: 2,
    title: "AURORA - Runaway",
    artist: "Aurora",
    url: "../../../Public/assets/AURORA - Runaway.mp3",
    cover: "https://f4.bcbits.com/img/a2003778449_16.jpg"
  },
  {
    id: 3,
    title: "End of Beginning",
    artist: "Djo",
    url: "../../../Public/assets/Djo - End Of Beginning (Lyrics) - Dan Music.mp3",
    cover: "https://i1.sndcdn.com/artworks-mtu3guT6uU24rhoj-Umkpbg-t500x500.jpg"
  },
  {
    id: 4,
    title: "Summertime Sadness",
    artist: "Lana Del Rey",
    url: "../../../Public/assets/Lana Del Rey - Summertime Sadness.mp3",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgGKaaVWZSoqjrLYUFnyEhxWbJqKwveQf0A&s"
  }
]

const [currentSong, setCurrentSong] = useState(null)
const [isPlaying, setIsPlaying] = useState(null)
const audioRef = useRef(null)

const playSong = (song) => {
    if(audioRef.current) {
        audioRef.current.pause()
    }

    const audio = new Audio(song.url)
    audioRef.current = audio
    audio.play()

    setCurrentSong(song)
    setIsPlaying(true)

    audio.onended = () => {
        setIsPlaying(false)
    }
}

const togglePlay = () => {
    if(!audioRef.current) return

    if(isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
    } else {
        audioRef.current.play()
        setIsPlaying(true)
    }
}


    return (
        <div className='h-full flex text-[#f1f1f1] bg-[#121212] bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]'>

            <div id='playlist' className='w-[50%] border-r border-white/10 p-3 flex flex-col'>
            <p className='text-sm font-semibold mb-3'>My Playlist</p>
            <div className='flex-1 flex flex-col gap-1 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
                {playlist.map((song) => {
                    return (
                        <div
                        key={song.id}
                        onClick={() => playSong(song)}
                        className={`p-2 rounded-md cursor-pointer transition duration-300
                        ${currentSong?.id === song.id ? "bg-green-600/20" : "hover:bg-white/10"}`}
                        >
                            <p className='text-sm font-medium truncate'>{song.title}</p>
                            <p className='text-[11px] opacity-60 truncate'>{song.artist}</p>
                        </div>
                    )
                })}
            </div>
            </div>

            <div id='player-bar' className='flex-1 flex flex-col items-center justify-center p-4 gap-4'>
                {
                    currentSong ? (
                        <>
                                    <div className='h-32 w-32 rounded-md flex items-center justify-center overflow-hidden relative'>
                                {currentSong ? (
                                    <img src={currentSong.cover} className='w-full h-full object-cover' />
                                ) : "No Cover Available"}
                            </div>
                            <div id='song-info' className='text-center'>
                                <p 
                                className='text-sm font-medium'>
                                    {currentSong ? currentSong.title : "No song playing"}
                                </p>
                                <p className='text-[13px] opacity-60'>
                                    {currentSong ? currentSong.artist : ""}
                                </p>
                            </div>

                            <button
                                id='play-pause'
                                onClick={togglePlay}
                                className='bg-green-500 hover:bg-green-400 transition duration-300 text-black text-sm px-6 py-2 rounded-full font-medium'
                            >
                                {isPlaying ? "Pause" : "Play"}
                            </button>
                        </>
                    ) : (
                        <p className='text-md font-semibold'>Select a song to play</p>
                    )
                }
            </div>
        </div>
    )
}

const Spotify = ({windowName, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <SpotifyWindow />
    </MacWindow>
  )
}

export default Spotify
