import React from "react";
import UserInfo from "./userInfo";


const UserProvider = () => {

        const users = [{
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "TheGref",
            shortName:"Rust",
            live:"🔴 10K",
        
        },{
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "Rubius",
            shortName:"Just Chatting",
            live:"🔴 19K",

        },{
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "Mizkif",
            shortName:"ElDEN RING",
            live:"🔴 34K",

        } ,{
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "HassanAbi",
            shortName:"Just Chatting",
            live:"🔴 11.4K",

        },{
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "lllloJuan",
            shortName:"Just Chatting",
            live:"🔴 20.4K",

        } ,
        {
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "Mixwell",
            shortName:"Rust",
            live:"🔴 5k",

        },
        {
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "elxokas",
            shortName:"Rust",
            live:"🔴 18.7K",

        } ,
        {
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "ricoy",
            shortName:"Rust",
            live:"🔴 16.5K",

        }    
    ]
    return (
        <div className="hidden lg:block ">
          {users.map((user, index) => (
            <UserInfo key={index} user={user} />
          ))}
        </div>
      );
    };

export default UserProvider