"use client"

import Header from "@/app/components/Header";
import { useSearchParams } from "next/navigation";
import Heading from "./components/Heading";
import SideBar from "./components/SideBar";
import Note from "./components/Note";
import vk from "../../../../public/vk.svg";
import telegram from "../../../../public/tg.svg";
import inst from "../../../../public/instagram.svg";
import twitter from "../../../../public/twitter.svg";
import reels from "../../../../public/reels.svg";
import shortPost from "../../../../public/shortPost.svg";
import story from "../../../../public/story.svg";
import dzen from "../../../../public/dzen.svg";
import threads from "../../../../public/threads.svg";
import reddit from "../../../../public/reddit.svg";
import content from "../../../../public/content.svg";
import hashtag from "../../../../public/hashtag.svg";
import longrid from "../../../../public/longrid.svg";
import voronka from "../../../../public/voronka.svg";
import { useState } from "react";
export type FakeItemType = {
    id : string
    title : string
    src : string
  }
export default function Template(){
    const [isFavoriteTemp, setIsFavoriteTemp] = useState<boolean>(false);
    const [isActiveSubPage, setIsActiveSubPage] = useState<string>("generation")
    const chooseFavoriteTemp = () => {
        setIsFavoriteTemp(!isFavoriteTemp)
    }
    const chooseActiveSubPage = (activeSubPage : string) => {
        setIsActiveSubPage(activeSubPage)
    }
    type fakeTemplateItemsType = {
        [key : string] : Array<FakeItemType>
       }
       const fakeTemplateItems : fakeTemplateItemsType = {
         "social" : [
         {id : "vk" , title : "Статья в VK", src : vk},
         {id : "telegram" , title : "Пост в Телеграм", src : telegram},
         {id : "inst" , title : "Пост в instagram", src : inst},
         {id : "twitter" , title : "Пост в X (Twitter)", src : twitter},
         {id : "reels" , title : "Идеи для Reels", src : reels},
         {id : "shortPost" , title : "Короткий пост", src : shortPost},
         {id : "story" , title : "Создание сторителлинга", src : story},
         {id : "dzen" , title : "Статья Яндекс.Дзен", src : dzen},
         {id : "threads" , title : "Пост в Threads", src : threads},
         {id : "reddit" , title : "Пост в Reddit", src : reddit},
         {id : "content" , title : "Создать контент-план", src : content},
         {id : "hashtag" , title : "Хэштеги к посту", src : hashtag},
         {id : "longrid" , title : "Динный пост", src : longrid},
         {id : "voronka" , title : "Создание воронки прогрева", src : voronka},
       ]
       }
    
    const searchParams = useSearchParams();
    const id = searchParams.get("id")
    let currentTemplate = fakeTemplateItems["social"].filter(i => i.id === id)[0]
    return (
        <main className="h-screen max-h-screen w-full flex flex-col items-center bg-bg-lite dark:bg-bg-dark pb-[16px]">
            <Header/>
            <Heading/>
            <div className="w-full flex flex-grow px-[24px] overflow-hidden">
                <SideBar data={currentTemplate} 
                         chooseActiveSubPage={chooseActiveSubPage} 
                         chooseFavoriteTemp={chooseFavoriteTemp} 
                         isActiveSubPage={isActiveSubPage} 
                         isFavoriteTemp={isFavoriteTemp} />
                <Note/>
            </div>
        </main>
    )
}