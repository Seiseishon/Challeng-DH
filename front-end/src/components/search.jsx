import React, {useState, useEffect} from "react"


const search = () => {
//hooks useState
const [users, setUsers] = useState([])
const [search, setSearch] = useState("")

//Api

const URL = "http://localhost:3000/api/applicants"

const showDataAppllicants = async()=>{
    const response = await fetch(URL)
    const data = await response.json(URL)
    console.log(data)
}
showDataAppllicants()


const URL2 = "http://localhost:3000/api/professions"

const showDataProfession = async()=>{
    const response = await fetch(URL2)
    const data = await response.json(URL2)
    console.log(data)
}
showDataProfession()

//buscador

const searcher = (e)=>{
    setSearch(e.target.value)
    console.log(e.target.value)
}


return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder="Search" className="form-control"/>
        <input
            type="text"
            className="pl-[1em] py-[1px] pr-[2px] h-full ml-1 border-0 bg-white focus:bg-slate-100 text-slate-800
            dark:bg-bunker-950 dark:focus:bg-bunker-900 dark:text-bunker-200 transition-colors duration-300
            "
          />
    </div>
  )
}

export default search