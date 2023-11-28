import NavButton from "@/app/components/NavButton"
import WordsWidget from "./WordsWidget";
import RolesHalfDynamicWindow from "./RolesHalfDynamicWindow";


type LeftSideBarPropsType = {
    callBack : (role : string) => void
}

export default function LeftSideBar(props : LeftSideBarPropsType) {
    return (
        <div className="h-full w-[280px] xl:p-[20px] xl:pr-[10px] flex flex-col justify-between">
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
                    <RolesHalfDynamicWindow callBack={props.callBack}/>
                </div>
            </div>
            <WordsWidget/>
        </div>
    )
}