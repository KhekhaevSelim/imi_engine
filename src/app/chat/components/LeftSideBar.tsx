import NavButton from "@/app/components/NavButton"
import consultantMini from "../../../../public/consultantMini.png";
import marketologMini from "../../../../public/marketologMini.png";
import writerMini from "../../../../public/writerMini.png";
import businessMini from "../../../../public/businessMini.png";
import investorMini from "../../../../public/investorMini.png";
import seoMini from "../../../../public/seoMini.png";
import fitnesMini from "../../../../public/fitnesMini.png";
import ChatBotMiniItem from "./ChatBotMiniItem";
import WordsWidget from "./WordsWidget";
import { StaticImageData } from "next/image";


type LeftSideBarPropsType = {
    callBack : (role : string) => void
}

export default function LeftSideBar(props : LeftSideBarPropsType) {
    type FakeRolesMiniDataType = {
        id : string
        src : StaticImageData
        title : string
      }
    const fakeRolesMiniData : Array<FakeRolesMiniDataType> = [
        { id : "consultant", src : consultantMini, title : "Личный консультант" },
        { id : "marketolog", src : marketologMini , title : "Маркетолог" },
        { id : "writer", src : writerMini , title : "Писатель"},
        { id : "business", src : businessMini, title : "Бизнес ангел"},
        { id : "investor", src : investorMini, title : "Инвестор"},
        { id : "seo", src : seoMini , title : "SEO специалист"},
        { id : "fitnes", src : fitnesMini , title : "Фитнес специалист"},
        // { id : "consultant", src : consultantMini,  title : "Личный консультант" },
        // { id : "marketolog", src : marketologMini,  title : "Маркетолог"},
        // { id : "writer", src : writerMini , title : "Писатель"},
        // { id : "business", src : businessMini, title : "Бизнес ангел"},
      ]
    return (
        <div className="h-full w-[280px] xl:p-[20px] flex flex-col justify-between">
            <div className="h-full flex flex-col">
                <div className="w-[280px] h-[44px] flex xl:mb-[24px]">
                    <NavButton title="Новый чат" icon="add" callBack={()=>{}} component="newChat"/>
                    <NavButton icon="searchTempBtn" callBack={()=>{}} component="searchTempBtn"/>  
                </div>
                <NavButton icon="favorite" callBack={()=>{}} component="favoriteTempBtn" title="Избранное"/>
                <span className="w-[248px] h-[14px] font-InterMedium text-[12px] leading-[14px] text-[#98A2B3] dark:text-[#85888E] px-[8px]">
                    Роли
                </span>
                <div className="flex-grow"> 
                    {
                    fakeRolesMiniData.map(item => {
                        return (
                            <ChatBotMiniItem id={item.id} src={item.src} title={item.title} key={item.id} callBack={props.callBack}/>
                        )
                    })
                    }
                </div>
            </div>
            <WordsWidget/>
        </div>
    )
}