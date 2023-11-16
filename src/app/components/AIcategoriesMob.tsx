import { useEffect, useState } from "react";
import NavButton from "./NavButton";



export default function MobileCategoriesPanel () {
    
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
        <div className="md:w-full md:h-[44px] lg:hidden md:px-[20px] md:vsm:h-[53px] md:vsm:px-[16px]">
            <div className='md:w-full md:h-[44px] md:vsm:h-[53px] border border-active-btn-white rounded-[16px] flex items-center px-[2px] lg:hidden md:sm:justify-between'>
                    {screenWidth <= 550 ?
                    <NavButton activeBtn={activeButton} callBack={chooseActiveButton} icon='text' title='Текст' component='categoriesBtn'/>
                    :
                    <NavButton activeBtn={activeButton} callBack={chooseActiveButton} icon='text' title='Текст / контент' component='categoriesBtn'/>
                    }
                    
                    {screenWidth <= 679 ? 
                    <NavButton activeBtn={activeButton} callBack={chooseActiveButton} icon='code' title='Код' component='categoriesBtn'/>
                    :
                    <NavButton activeBtn={activeButton} callBack={chooseActiveButton} icon='code' title='Генерация кода' component='categoriesBtn'/>
                    }
                    
                    <NavButton activeBtn={activeButton} callBack={chooseActiveButton} icon='pic' title='Изображения' component='categoriesBtn'/>
                    <NavButton activeBtn={activeButton} callBack={chooseActiveButton} icon='magic' title='Обработка' component='categoriesBtn'/>
            </div>
        </div>
        
    )
}