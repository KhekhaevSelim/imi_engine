import Icon from '../components/Icon';
import Image from "next/image";
import consultant from "../../../public/consultant.svg";
import marketolog from "../../../public/marketolog.svg";
import writer from "../../../public/writer.svg";
import business from "../../../public/business.svg"; 
import investor from "../../../public/investor.svg";
import seo from "../../../public/seo.svg";
import fitnes from "../../../public/fitnes.svg";
import consultantDark from "../../../public/consultantDark.svg";
import marketologDark from "../../../public/marketologDark.svg";
import writerDark from "../../../public/writerDark.svg";
import businessDark from "../../../public/businessDark.svg";
import investorDark from "../../../public/investorDark.svg";
import seoDark from "../../../public/seoDark.svg";
import fitnesDark from "../../../public/fitnesDark.svg";
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';


export default function ChatBots () {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [scrollLeftValue, setScrollLeftValue] = useState<number>(0);
    const [scrollWidth,  setScrollWidth] = useState<number>(0);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeftAtStart, setScrollLeftAtStart] = useState<number>(0);
    const {theme} = useTheme();
    const [screenWidth, setScreenWidth] = useState<number>(0);
  
    
    type FakeRolesDataType = {
        id : string
        srcLite : string
        srcDark : string
      }
    const fakeRolesData : Array<FakeRolesDataType> = [
        { id : "consultant", srcLite : consultant, srcDark : consultantDark },
        { id : "marketolog", srcLite : marketolog , srcDark : marketologDark },
        { id : "writer", srcLite : writer, srcDark : writerDark },
        { id : "business", srcLite : business, srcDark : businessDark},
        { id : "investor", srcLite : investor, srcDark : investorDark },
        { id : "seo", srcLite : seo , srcDark : seoDark},
        { id : "fitnes", srcLite : fitnes , srcDark : fitnesDark},
        { id : "consultant", srcLite : consultant, srcDark : consultantDark},
        { id : "marketolog", srcLite : marketolog, srcDark : marketologDark },
      ]

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
        <div className='w-full h-[150px] xl:my-[32px] lg:my-[24px] flex md:my-[24px] md:pl-[20px] md:pr-[0px] md:h-[130px] 
                        md:vsm:pl-[16px] vsm:flex-col md:vsm:h-[158px] md:vsm:my-[16px]'>
          
            <div className='relative w-[191px] mr-[6px] md:w-[129.8px] vsm:hidden'>
                <Icon icon='roleDescription'/>
                <Icon icon='roleDescriptionAI'/>
                <span className='text-[#fff] font-NeueMachinaBold text-[12px] absolute top-[32px] left-[38px] md:top-[26px] md:left-[23px]'>AI</span>
                <span className='text-heading-text-lite dark:text-heading-text-dark font-NeueMachinaBold text-[24px] md:text-[20px] 
                                   absolute top-[22px] left-[74px] md:top-[18px] md:left-[52px]'>Чат</span>
                <span className='text-heading-text-lite dark:text-heading-text-dark font-NeueMachinaBold text-[24px] md:text-[20px] 
                                   absolute top-[54px] left-[31px] md:top-[45px] md:left-[16px]'>с ботом</span>
                <span className='text-heading-text-lite dark:text-heading-text-dark font-NeueMachinaBold text-[24px] md:text-[20px] 
                                   absolute top-[86px] left-[31px] md:top-[72px] md:left-[16px]'>профи:</span>
            </div>
            <div className='lg:hidden md:hidden md:vsm:inline-block vsm:pl-[4px] vsm:mb-[15px] vsm:h-[26px]'>
              <Icon icon='roleDescriptionAI'/>
              <span className='vsm:inline text-[#fff] font-NeueMachinaBold text-[12px] vsm:relative vsm:bottom-[20px] vsm:left-[7px]'>AI</span>
              <span className='vsm:inline text-heading-text-lite dark:text-heading-text-dark font-InterBold text-[16px] 
                               vsm:relative vsm:bottom-[20px] vsm:left-[22px]'>Чат с ботом профи :</span>
            </div>
            <div className='w-[85%] h-[150px] flex overflow-x-auto vsm:w-[100%]'
                 style={{ scrollBehavior: "smooth", overflowY: "hidden", scrollbarWidth: "thin",userSelect: "none"}}
                 id="scrollContainer"  
                 ref={scrollContainerRef}
                 onMouseDown={handleMouseDown}
                 onMouseUp={handleMouseUp}
                 onMouseMove={handleMouseMove}
                 
                >
            {
            fakeRolesData.length 
            && 
            fakeRolesData.map(item => {
                return (
        
                <Image key={item.id} src={ theme === "lite" ? item.srcLite : item.srcDark} alt={item.id} className='mx-[6px] cursor-pointer md:mx-[4px]' 
                       width={(screenWidth < 980) && (screenWidth > 549) ? 110 : screenWidth < 549 ? 100 : 124} style={{height : (screenWidth < 980) && (screenWidth > 549) ? "132px" : screenWidth < 549 ? "120px" : "150px"}} draggable={false}/>
       
                )
            }) 
            }
               
            </div> 
            <div className='xl:w-[60px] h-[145px] flex flex-col ml-[6px] bg-bg-lite dark:bg-bg-dark justify-between relative right-[5px] md:hidden'>
                    <Icon icon='arrow-l-60' callBack={scrollLeft} isActive={scrollLeftValue > 0}/>
                    <Icon icon='arrow-r-60' callBack={scrollRight} isActive={scrollLeftValue < scrollWidth}/>
            </div>
      </div>
    )
}