import Icon from "../../components/Icon";
import SendInput from "../../components/SendInput";


export default function FixedInput() {
    return (
      
        <div className='w-full max-w-[880px] lg:h-[65px]  flex border border-[#101828] rounded-[16px] bg-header-bg-lite 
                      dark:bg-header-bg-dark justify-between items-center p-[12px] 
                         md:h-[55px] md:pt-[24px] md:pb-[25px] md:pl-[4px] md:pr-[6px]
                        
                        md:vsm:h-[47px] md:vsm:w-full vsm:rounded-[16px] md:vsm:pr-[5px]'>
            <div className='flex items-center'>
              <Icon icon='input' callBack={()=>{}}/>
              <input type="text" 
              className='xl:w-[507px] lg:w-[323px] h-[43px] bg-header-bg-lite dark:bg-header-bg-dark placeholder:text-[#98A2B3] text-[#fff] 
                        font-TTNormsRegular xl:text-[16px] lg:text-[14px] md:text-[14px] lg:pl-[12px] focus:outline-none 
                        md:pl-[12px] md:pr-[5px]
                        md:vsm:text-[12px] md:vsm:pl-[7px]' placeholder='Задать вопрос в IMI чат'/>
            </div>
            <div className='flex'>
              <div className="flex items-center cursor-pointer" onClick={()=>{}}>
                <Icon icon='improve'/>
                <span className="font-InterRegular text-[12px] text-[#528BFF] p-[6px] dark:text-[#155EEF] md:hidden">Улучшить</span>
              </div>
              <Icon icon='microphoneInput'/>
              <Icon icon='uploadInput'/>
              {/* <Icon icon='settingsInput'/> */}
              <SendInput callBack={()=> {}}/>
            </div>
        </div>
     
    )
}