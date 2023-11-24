import Icon from "./Icon";
import SendInput from "./SendInput";


export default function FixedInput() {
    return (
      <div className='w-full xl:h-[218px] lg:h-[174px] md:h-[174px] flex items-end fixed bottom-[0px] left-[0px] 
                      dark:bg-opacity-50 bg-opacity-50 '>
                        {/* bg-bg-lite dark:bg-bg-dark  пофиксить туман... относится к первой дивке */}
        <div className='w-full h-[px] flex justify-center md:h-[67px] md:vsm:h-[59px] vsm:px-[6px]'>
        <div className='xl:w-[800px] lg:h-[65px] lg:w-[600px] flex border border-[#101828] rounded-[16px] bg-header-bg-lite 
                      dark:bg-header-bg-dark justify-between items-center p-[12px] 
                        md:w-[450px] md:h-[55px] md:pt-[24px] md:pb-[25px] md:pl-[4px] md:pr-[6px]
                        
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
      </div>
    </div>
    )
}