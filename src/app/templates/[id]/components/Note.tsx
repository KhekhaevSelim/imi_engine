export default function Note() {
    return (
        <div className="w-full h-full flex justify-center rounded-[20px] bg-[#fff] dark:bg-[#21242C] px-[24px] py-[32px]">
            <div className="w-[600px] h-[36px] flex items-center p-[8px] pl-[32px] mt-[10px] font-TTNormsRegular text-[14px] leading-[20px] text-[#667085] 
                            dark:text-[#85888E]">
                <span className="flex">
                Нажмите 
                    <span 
                        className="w-[68px] h-[23px] flex justify-center items-center rounded-[5px] bg-bg-lite dark:bg-bg-dark"
                        style={{margin : "0 5px"}}>    
                        пробел
                    </span>
                для обращения к AI или начните печатать здесь...
                </span>
            </div>
        </div>
    )
}