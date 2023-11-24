import ProfileDropDownChat from "./ProfileDropDownChat";
import ProgressCircleBar from "./ProgressCircleBar";
import improvePlan from "../../../../public/improvePlan.svg";
import makeWords from "../../../../public/makeWords.svg";
import Image from "next/image";

export default function WordsWidget(){
    return (
        // <div className="w-[240px] h-[168px] rounded-[16px] fixed bottom-[16px] bg-[#DAE3E9] dark:bg-search-template-input-bg-dark 
        // p-[16px] z-30">
        <div className="w-[240px] h-[168px] rounded-[16px] bg-[#DAE3E9] dark:bg-search-template-input-bg-dark 
                    p-[16px] z-30">
            <div className="flex h-[38px] relative right-[4px]">
                <ProgressCircleBar percentage={35}/>
                <ProfileDropDownChat/>
            </div>
            <div className="flex items-center my-[16px] cursor-pointer">
                <span className="font-TTNormsMedium text-[14px] leading-[14px] mr-[6px] text-template-item-text-active-lite dark:text-[#fff]">Улучшить план</span>
                <Image src={improvePlan} alt="improvePlan" width={14} height={16}/>
            </div>
            <div className="w-[208px] h-[44px] flex items-center py-[12px] px-[16px] rounded-[10px] bg-white dark:bg-black cursor-pointer">
                <Image src={makeWords} alt="makeWords" width={16} height={16}/>
                <span className="font-TTNormsMedium text-[16px] leading-[19px] ml-[8px] text-template-item-text-active-lite dark:text-[#fff]">
                    Заработать слова
                </span>
            </div>
        </div>
    )
}