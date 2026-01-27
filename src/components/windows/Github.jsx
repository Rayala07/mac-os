import { useEffect, useState } from 'react'
import MacWindow from './MacWindow'
import axios from 'axios'

const GitWindow = () => {

    const [repos, setRepos] = useState([])

    // Function to fetchl the the API
    const fetchRepos = async() => {
        const getData = await axios.get("https://api.github.com/search/repositories?q=stars:>50000&sort=stars&order=desc")

        setRepos(getData.data.items.slice(0,5));
    }

    // Fetch Repos using Github API
    useEffect(() => {
        fetchRepos();
    }, [])

    return (
        <div className='text-white text-sm p-3 flex flex-col gap-2.5'>
           <p className='text-xs opacity-60 mb-1'>Trending Repositories</p>
           {repos.map((repo) => {
            return <div key={repo.id}
            className='bg-white/5 hover:bg-white/10 transition duration-300 rounded-md p-2 cursor-pointer'
            onClick={() => window.open(repo.html_url, "_blank")}
            >
                <p className='font-medium text-sm'>{repo.name}</p>
                <p className='text-[11px] opacity-60 truncate'>{repo.description}</p>
                <div className='flex gap-3 text-[10px] opacity-60 mt-1'>
                    <span>{repo.language}</span>
                    <span>⭐ {repo.stargazers_count}</span>
                </div>
            </div>
           })}
        </div>
    )
}

const Github = () => {
    return (
    <MacWindow>
        <GitWindow />
    </MacWindow>
  )
}

export default Github
