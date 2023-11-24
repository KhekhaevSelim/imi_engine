"use client"


import Header from "../components/Header"
import LeftSideBar from "./components/LeftSideBar";
import ChatSection from "./components/ChatSection"
import { useState } from "react";
import RightSideBar from "./components/RightSideBar";
import { StaticImageData } from "next/image";

export type FakeRolesMiniDataType = {
    id : string
    src : StaticImageData
    title : string
  }
export default function Chat() {
    let [currentRoleId, setCurrentRoleId] = useState<string>("consultant");
    const chooseRole = (role : string) => {
        setCurrentRoleId(role)
    }


    return (
        <main className="h-screen w-full flex flex-col items-center bg-bg-lite dark:bg-bg-dark ">
            <Header/>
            <div className='w-full flex-grow flex'>
                <LeftSideBar callBack={chooseRole}/>
                <ChatSection currentRoleId={currentRoleId}/>
                <RightSideBar/>
            </div>
        </main>
    )
}