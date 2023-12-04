import NavButton from "@/app/components/NavButton";
import Image from "next/image";
import arrow from "../../../../../public/arrowInput.svg";
export default function SideBarFooter() {
    return (
        <div className="w-full h-[77px] flex items-center border-t-[2px] border-t-bg-lite dark:border-t-bg-dark px-[24px] py-[16px]">
            <NavButton component="tempSidebarInfo" callBack={()=>{}}/>
            <div className="w-[173px] h-[44px] rounded-[12px] bg-bg-lite dark:bg-bg-dark">
                <div className="w-[60px] h-[44px] relative">
                    <input type="number" id="tempVariantsInput" className="w-1/2 h-[44px] rounded-[12px] bg-bg-lite dark:bg-bg-dark py-[12px] pl-[14px] outline-none focus:outline-none"/>
                    <Image src={arrow} alt="arrowTop" width={10} height={10} className=""/>
                </div>
            </div>
        </div>
    )
}