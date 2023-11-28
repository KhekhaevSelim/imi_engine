import NavButton from "@/app/components/NavButton";
import HistoryItem from "./HistoryItem";
import HistoryDynamicWindow from "./HistoryDynamicWindow";
import AutoSizer from "react-virtualized-auto-sizer";


export default function RightSideBar() {

 
    return (
        <div className="h-full w-[280px] xl:p-[20px] xl:pr-[10px] flex flex-col">
            <div className="w-[240px] h-[44px] flex items-center justify-between mb-[20px]">
                <span className="font-TTNormsMedium font-[20px] leading-[30px] text-heading-text-lite dark:text-heading-text-dark">История чата</span>
                <NavButton icon="searchTempBtn" callBack={()=>{}} component="searchTempBtn"/>
            </div>
            <div className="flex flex-col flex-grow">      
               <HistoryDynamicWindow/>
            </div>
            
        </div>
    )
}