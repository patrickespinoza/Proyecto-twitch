export default function NavBar () {
    return (
        <nav className="col-start-1 col-end-3  grid grid-cols-3 bg-slate-600">  
          <div className="flex flex-row items-start gap-[0.5rem] pl-4">
                <img className="h-7 w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KxDIOt4Oat4yKPJGIJWP6wBxzKbr4pYq1FOMyh123-70BMpnu5Ci4MaNGOFn18IN-_0&usqp=CAU" alt="icon twitch" />
                <span className="text-[#a855f7] text-xl"  >Browse</span>
                <span className="text-[#f8fafc] pl-8 text-2xl">:</span>
            </div>
            <div className="flex flex-row items-start gap-[0.5rem] pl-4" >
                <input className="w-80 p-[0.5rem_1rem] border-2 border-[#6b7280] rounded-2xl bg-transparent text-[#f0f0f0] hover:border-4 hover:border-[#a855f7]" type="text" placeholder="Search" />
                <img className="w-10 " src="data:image/png;base64,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" alt="Search" />
            </div>
            <div className="flex flex-row items-start py-2 gap-4 justify-end ">
                <img className="w-7 h-7 rounded-[50%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxC4UDpjgb9hqjFT0rkd3f9bHgG4H7zE2ig1psOoNfwy-sbPSCIGEvtwDtsJSTtTr1dKs&usqp=CAU" alt="buzon" />  
                <button className="text-white bg-slate-700 w-20 border rounded-md" >Log in</button>
                <button className="text-white w-20 rounded-md bg-purple-500" >Sign Up</button>
                <img className="w-7 h-7" src="data:image/png;base64,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" alt="usuario" />
                
            </div>
        </nav>
    )
}