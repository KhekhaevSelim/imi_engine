import { useEffect, useState } from "react";
import Image from "next/image"
import consultantMini from "../../../../public/consultant mini.svg";
import marketologMini from "../../../../public/marketologMini.svg";
import writerMini from "../../../../public/writerMini.svg";
import businessMini from "../../../../public/businessMini.svg";
import investorMini from "../../../../public/investorMini.svg";
import seoMini from "../../../../public/seoMini.svg";
import fitnesMini from "../../../../public/fitnesMini.svg";
import NavButton from "@/app/components/NavButton";
import Icon from "@/app/components/Icon";

type ChatSectionPropsType = {
    currentRoleId : string
}
export default function ChatHeading(props : ChatSectionPropsType) {
    let [currentRole, setCurrentRole] = useState<any>({ id : "consultant", src : consultantMini, title : "Личный консультант" });
    useEffect(()=> {
        let newCurrentRole = chatSectionRoles.filter(r => r.id === props.currentRoleId)
        setCurrentRole(newCurrentRole[0])
    }, [props.currentRoleId])
    const chatSectionRoles = [
        { id : "consultant", src : consultantMini, title : "Личный консультант" },
        { id : "marketolog", src : marketologMini , title : "Маркетолог" },
        { id : "writer", src : writerMini , title : "Писатель"},
        { id : "business", src : businessMini, title : "Бизнес ангел"},
        { id : "investor", src : investorMini, title : "Инвестор"},
        { id : "seo", src : seoMini , title : "SEO специалист"},
        { id : "fitnes", src : fitnesMini , title : "Фитнес специалист"},
    ]
    let [activeBtn, setActiveBtn] = useState<string>("gpt3");
    const chooseActiveButton = (id: string) => {
        setActiveBtn(id);
      };
    let [favoriteChat, setFavoriteChat] = useState<boolean>(false);
    const chooseFavoriteChat = (costyil : string) => {
        setFavoriteChat(!favoriteChat)
    }
    return (
        <div className="w-full h-[84px] flex items-center justify-between border-b-[1px] border-b-[#DAE3E9] dark:border-b-bg-dark rounded-t-[16px] py-[12px] px-[24px]">
            <div className="flex items-center"> 
                <Image src={currentRole.src} alt="roleIcon" width={57} height={45} className="mr-[16px]"/>
                <span className="font-NeueMachinaBold text-[24px] leading-[32px] text-header-bg-lite dark:text-[#fff]
                                ">{currentRole.title}</span>
                <Icon icon="edit" callBack={()=>{}}/>
            </div>
            <div className="flex items-center">
                <div className="w-[150px] h-[44px] rounded-[12px] bg-bg-lite dark:bg-bg-dark p-[4px] flex items-center justify-between mr-[16px]">
                    <NavButton callBack={chooseActiveButton} component="llmBtn" btnID="gpt3" title="GPT 3.5" activeBtn={activeBtn}/>
                    <NavButton callBack={chooseActiveButton} component="llmBtn" btnID="gpt4" title="GPT 4" activeBtn={activeBtn}/> 
                </div>
                <div className="w-[184px] h-[40px] flex justify-between">
                    <NavButton callBack={chooseFavoriteChat} component="chatHeadingBtn" icon="favoriteChat" singleActiveBtn={favoriteChat}/>
                    <NavButton callBack={()=>{}} component="chatHeadingBtn" icon="downloadChat"/>
                    <NavButton callBack={()=>{}} component="chatHeadingBtn" icon="settingsChat"/>
                    <NavButton callBack={()=>{}} component="chatHeadingBtn" icon="fullWidthChat"/>
                </div>
            </div>
        </div>
    )
}