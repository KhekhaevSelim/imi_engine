import Image from "next/image";
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
import Link from "next/link";

export default function TemplateCardSocial() {

    type FakeItemType = {
        id : string
        title : string
        src : string
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
    return (
        <div className="w-full h-[364px] rounded-[16px] pr-[24px] mb-[8px]">
            <div className='w-[482px] h-[364px] rounded-[16px] flex border border-[#D0D5DD] dark:border-[#333741]
                            '>
                <div className='w-full h-full px-[20px] pt-[16px] pb-[24px]'>
                    <span className='font-InterBold text-[18px] 
                                   text-heading-text-lite dark:text-heading-text-dark'>
                                        Создать контент для соцсетей
                                    </span>
                    <div className='flex flex-col justify-start w-full h-full flex-wrap mt-[10px] '>
                    {
                    fakeTemplateItems["social"].map(item => {
                        return (
                            <Link href={{
                                pathname : `/templates/${item.id}`,
                                query : {id : item.id}
                            }}>
                                <div  key={item.id} className='flex w-[213px] h-[41px] cursor-pointer items-center'>
                                    <Image src={item.src} alt={item.id} width={22} height={22} className="mr-[12px]"/>
                                    <span className="TTNormsRegular font-normal text-[14px] leading-[20px] text-template-card-item-text-lite 
                                                dark:text-template-card-item-text-dark ">{item.title}</span>
                                </div>
                            </Link>
                            )
                    })
                    }
                    </div>
                </div>
            </div>
        </div>
        
    )
}