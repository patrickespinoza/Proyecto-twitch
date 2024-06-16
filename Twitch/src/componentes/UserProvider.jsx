import React, { useState, useEffect } from "react";
import UserInfo from "./userInfo";


const UserProvider = () => {

        const [users, setUsers ]= useState ([{
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "TheGref",
            shortName:"Rust",
            live:"🔴 10K",
            isLive: true
        
        },{
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "Rubius",
            shortName:"Just Chatting",
            live:"🔴 19K",
            isLive: true

        },{
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "Mizkif",
            shortName:"ElDEN RING",
            live:"🔴 34K",
            isLive: false

        } ,{
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "HassanAbi",
            shortName:"Just Chatting",
            live:"🔴 11.4K",
            isLive: true

        },{
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "lllloJuan",
            shortName:"Just Chatting",
            live:"🔴 20.4K",
            isLive: false

        } ,
        {
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "Mixwell",
            shortName:"Rust",
            live:"🔴 5k",
            isLive: true

        },
        {
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "elxokas",
            shortName:"Rust",
            live:"🔴 18.7K",
            isLive: true

        } ,
        {
            icon:"https://api.dicebear.com/8.x/adventurer/svg?seed=Muffin",
            name: "ricoy",
            shortName:"Rust",
            live:"🔴 16.5K",
            isLive: true

        }    
    ])

    useEffect(() => {
        const interval = setInterval(() => {
          setUsers((prevUsers) =>
            prevUsers.map((user) => ({
              ...user,
              isLive: Math.random() > 0.5,
            }))
          );
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);
    
      return (
        <div className="hidden lg:block">
          {users.map((user, index) => (
            <UserInfo key={index} user={user} isLive={user.isLive} />
          ))}
        </div>
      );
    };
    
    export default UserProvider;
    