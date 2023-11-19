import Image from "next/image";
import vk from "../../../public/vk.svg";
import telegram from "../../../public/tg.svg";
import inst from "../../../public/instagram.svg";
import twitter from "../../../public/twitter.svg";
import reels from "../../../public/reels.svg";
import shortPost from "../../../public/shortPost.svg";
import story from "../../../public/story.svg";
import dzen from "../../../public/dzen.svg";
import threads from "../../../public/threads.svg";
import reddit from "../../../public/reddit.svg";
import content from "../../../public/content.svg";
import hashtag from "../../../public/hashtag.svg";
import longrid from "../../../public/longrid.svg";
import voronka from "../../../public/voronka.svg";

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
        <div className="md:w-full md:px-[20px] md:sm:w-[49%] md:sm:pl-[20px] md:sm:pr-[0px] ">
            <div className='xl:w-full xl:h-[436px] lg:w-[460px] lg:h-[386px] flex justify-between border border-[#D0D5DD] dark:border-[#333741] rounded-[20px]
                        md:w-full md:h-[268px] md:rounded-[16px] md:sm:w-full md:sm:h-[642px]'>
                <div className='w-[596px] h-full xl:p-[32px] xl:pb-[40px] xl:pr-[28px] lg:p-[24px] lg:pb-[32px] lg:pr-[20px] flex flex-col md:p-[24px] md:pb-[32px]
                                md:w-full '>
                    <span className='xl:font-NeueMachinaBold xl:text-[24px] lg:font-InterBold lg:text-[20px] xl:mb-[20px] lg:mb-[3px] 
                                    relative bottom-[6px] right-[1px] text-heading-text-lite dark:text-heading-text-dark
                                    md:text-[18px] md:font-InterBold md:right-[4px] md:whitespace-nowrap md:sm:whitespace-normal md:sm:text-[16px] md:sm:leading-[20px]'>
                                        Создать контент для соцсетей
                                    </span>
                    <div className='flex flex-col justify-start w-full h-full flex-wrap md:sm:flex-nowrap'>
                    {
                    fakeTemplateItems["social"].map(item => {
                        return (
                            <div  key={item.id} className='flex xl:w-[280px] xl:h-[46px] lg:w-[206px] lg:h-[42px] xl:items-start lg:items-center cursor-pointer md:h-[39px]
                                            md:items-center md:w-1/3 md:sm:w-full'>
                                <Image src={item.src} alt={item.id} width={22} height={22} className="mr-[12px]"/>
                                <span className="TTNormsRegular  font-normal xl:text-[16px] lg:text-[14px] text-template-card-item-text-lite 
                                            dark:text-template-card-item-text-dark md:text-[14px]">{item.title}</span>
                            </div>
                            )
                    })
                    }
                    </div>
                </div>
            </div>
        </div>
        
    )
}