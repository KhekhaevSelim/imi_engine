import { ChangeEvent, useState } from "react"

type LengthFieldPropsType = {

}

export default function LengthField(props : LengthFieldPropsType) {
    const [value, setValue] = useState<string>("");
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <div className="w-full h-[68px] flex flex-col justify-between mb-[24px]">
            
            <span 
                className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                        dark:text-template-item-text-dark">
                        Длина статьи
            </span>
          
            <input placeholder="Введите длину статьи"
                   value={value}
                   onChange={(e)=>handleChange(e)}
                   type="text" 
                   className="w-full h-[43px] px-[14px] py-[12px] bg-bg-lite dark:bg-bg-dark rounded-[12px] 
                   placeholder:font-TTNormsRegular font-InterMedium text-[16px] leading-[19px] text-[#101828] dark:text-[#F5F5F6]
                                          focus:border-[2px] focus:border-template-item-text-active-lite outline-none 
                                          focus:shadow-tempGenerateInput"
            />
        </div>
    )
}