import React from "react"

const UserInfo =({user})=> {

        return (   
            
     <div className="flex items-star p-2 rounded ">
      <img src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${user.name}`} alt="user" className="w-12 h-12 rounded-full mr-4" />
      <div className="flex flex-col">
        <div className="font-bold text-white">{user.name}</div>
        <div className="text-gray-500">{user.shortName}</div>
      </div>
      <div className="ml-auto  text-white px-3 py-1 rounded-full font-bold">
        <span>{user.live}</span>
      </div>
    </div>
        )
    }

    export default UserInfo