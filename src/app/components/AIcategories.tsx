"use client"
import NavButton from './NavButton'
import SearchTempInput from './SearchTempInput';
import { useEffect, useState } from 'react';


export default function Tempates() {

const [activeButton, setActiveButton] = useState<string>('text');
const [screenWidth, setScreenWidth] = useState<number>(0);

const chooseActiveButton = (template : string) => {
    setActiveButton(template)
}


  useEffect(() => {
    const updateScreenWidth = () => {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      setScreenWidth(width);
    };
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []); 


    return (
        <div className='w-full flex items-center lg:justify-between  h-[44px] xl:mt-[32px] lg:mx-[32px] lg:mt-[24px] md:mt-[24px] md:mb-[16px] md:px-[20px] 
                        md:vsm:px-[16px] md:vsm:my-[16px]'>
            <span className='font-NeueMachinaBold font-bold xl:text-[36px] lg:text-[30px] md:text-[30px] relative bottom-[3px] right-[3px] md:right-[1px] 
                            text-heading-text-lite dark:text-heading-text-dark md:mr-[20px] 
                                md:vsm:text-[24px]'>Шаблоны</span>
            <div className='xl:w-[680px] h-full lg:w-auto border border-active-btn-white rounded-[16px] flex items-center xl:mx-[26.5px] lg:mx-[19px] px-[2px] md:hidden'>
                <NavButton activeBtn={activeButton} callBack={chooseActiveButton} icon='text' title='Текст / контент' component='categoriesBtn'/>
                {screenWidth <= 1280 && screenWidth >= 980 ? 
                 <NavButton activeBtn={activeButton} callBack={chooseActiveButton} icon='code' title='Код' component='categoriesBtn'/>
                 :
                 <NavButton activeBtn={activeButton} callBack={chooseActiveButton} icon='code' title='Генерация кода' component='categoriesBtn'/>
                }
               
                <NavButton activeBtn={activeButton} callBack={chooseActiveButton} icon='pic' title='Изображения' component='categoriesBtn'/>
                <NavButton activeBtn={activeButton} callBack={chooseActiveButton} icon='magic' title='Обработка' component='categoriesBtn'/>
            </div>
            <SearchTempInput callBack={()=>{}} placeholder='Найти шаблон'/>
        </div>
    )
}