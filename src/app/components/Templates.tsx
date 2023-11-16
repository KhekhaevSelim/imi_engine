import {MouseEventHandler, useEffect, useLayoutEffect, useRef, useState } from "react";
import NavButton from "./NavButton";
import { log } from "console";


export default function Templates() {

    type FakeTempsDataType = {
        id : string
        title : string
    }
    let fakeTempsData : Array<FakeTempsDataType> = [ 
        {id : "all", title : "Все"},
        {id : "chats", title : "Чатботы "},
        {id : "social", title : "Соцсети"},
        {id : "commercial", title : "Реклама"},
        {id : "blog", title : "Блог"},
        {id : "marketing", title : "Маркетинг"},
        {id : "goods", title : "Товары"},
        {id : "brands", title : "Бренд/PR"},
        {id : "hype", title : "Продвижение"},
        {id : "video", title : "Видео"},
        {id : "business", title : "Бизнес"},
        {id : "email", title : "Email"},
        {id : "notification", title : "Объявления"},
        {id : "presentation", title : "Презентации"},
        {id : "some", title : "чтотоjj"},
        {id : "some2", title : "чтотоjj"},
        {id : "some3", title : "чтотоjj"},
        {id : "some4", title : "чтотоjj"},
    ]
      
    const [activeButton, setActiveButton] = useState<string>('all');
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [scrollLeftValue, setScrollLeftValue] = useState<number>(0);
    const [scrollWidth,  setScrollWidth] = useState<number>(0);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeftAtStart, setScrollLeftAtStart] = useState<number>(0);

    const chooseActiveButton = (template: string) => {
      setActiveButton(template);
    };
  
    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
        setScrollLeftValue(scrollContainerRef.current.scrollWidth);
      }
    };
  
    const scrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = 0;
        setScrollLeftValue(0);
      }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if(scrollContainerRef.current){
            setIsDragging(true);
            setStartX(e.pageX - scrollContainerRef.current?.offsetLeft);
            setScrollLeftAtStart(scrollContainerRef.current?.scrollLeft || 0);
        }
       
      };
      
      const handleMouseUp = () => {
        setIsDragging(false);
      };
      
      const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if(scrollContainerRef.current){
            if (!isDragging) return;
        const x = e.clientX - scrollContainerRef.current?.offsetLeft;
        const walk = (x - startX) * 2; // Уменьшаем чувствительность движения для более плавного скроллинга
        scrollContainerRef.current!.scrollLeft = scrollLeftAtStart - walk;
        setScrollLeftValue(scrollLeftAtStart - walk);
        }
        
      };

    useEffect(()=> {
        if(scrollContainerRef.current){
            setScrollWidth(scrollContainerRef.current.scrollWidth)
        }
    },[scrollContainerRef.current])
    return (
        <div className='w-full h-[32px] mt-[16px] relative md:pl-[20px] md:vsm:pl-[16px]'>
            {scrollLeftValue > 0 && <NavButton callBack={scrollLeft} component="arrow-l-20" icon="arrow-l-20" />}
            <div className='flex w-full h-full overflow-x-auto' 
                 style={{ scrollBehavior: "smooth", overflowY: "hidden", scrollbarWidth: "thin",userSelect: "none"}}  
                 ref={scrollContainerRef} 
                 id="scrollContainer"
                 onMouseDown={handleMouseDown}
                 onMouseUp={handleMouseUp}
                 onMouseMove={handleMouseMove}
                 >
                {fakeTempsData.length 
                ?
                fakeTempsData.map((temp,i) => {
                return (
                    <NavButton activeBtn={activeButton} callBack={chooseActiveButton} component='tempBtn' title={temp.title} btnID={temp.id}/>
                    )
                })
                :
                ""
                }
            </div>
            {
            scrollLeftValue < scrollWidth
            &&
            <NavButton callBack={scrollRight} component="arrow-r-20" icon="arrow-r-20" />   
            }
        </div>
    )
}