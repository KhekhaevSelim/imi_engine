import Icon from '../components/Icon';
import consultant from "../../../public/consultant.png";
import marketolog from "../../../public/marketolog.png";
import writer from "../../../public/writer.png"; 
import business from "../../../public/business.png"; 
import investor from "../../../public/investor.png";
import seo from "../../../public/seo.png";
import fitnes from "../../../public/fitnes.png";
import consultantDark from "../../../public/consultantDark.png";
import marketologDark from "../../../public/marketologDark.png";
import writerDark from "../../../public/writerDark.png";
import businessDark from "../../../public/businessDark.png";
import investorDark from "../../../public/investorDark.png";
import seoDark from "../../../public/seoDark.png";
import fitnesDark from "../../../public/fitnesDark.png";
import { useTheme } from 'next-themes';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import {CustomArrowChatBot} from "./horizontalScrolling/Arrows";
import {ChatBotCard} from "./horizontalScrolling/ChatBotCard";
import useDrag from './horizontalScrolling/useDrag';
import React from 'react';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
export default function ChatBots () {
    const {theme} = useTheme();
    const { dragStart, dragStop, dragMove, dragging } = useDrag();
    const handleDrag = ({ scrollContainer }: scrollVisibilityApiType) => 
    ( ev: React.MouseEvent ) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });
    type FakeRolesDataType = {
        id : string
        srcLite : string
        srcDark : string
        title : string
      }
    const fakeRolesData : Array<FakeRolesDataType> = [
        { id : "consultant", srcLite : consultant, srcDark : consultantDark, title : "Личный консультант" },
        { id : "marketolog", srcLite : marketolog , srcDark : marketologDark, title : "Маркетолог" },
        { id : "writer", srcLite : writer, srcDark : writerDark , title : "Писатель"},
        { id : "business", srcLite : business, srcDark : businessDark, title : "Бизнес ангел"},
        { id : "investor", srcLite : investor, srcDark : investorDark , title : "Инвестор"},
        { id : "seo", srcLite : seo , srcDark : seoDark, title : "SEO специалист"},
        { id : "fitnes", srcLite : fitnes , srcDark : fitnesDark, title : "Фитнес специалист"},
        { id : "consultant", srcLite : consultant, srcDark : consultantDark,  title : "Личный консультант" },
        { id : "marketolog", srcLite : marketolog, srcDark : marketologDark ,  title : "Маркетолог"},
      ]
  
    return (
        <div className='w-full h-[150px] xl:my-[32px] lg:my-[24px] flex md:my-[24px] md:pl-[20px] md:pr-[0px] md:h-[130px] 
                        md:vsm:pl-[16px] vsm:flex-col md:vsm:h-[158px] md:vsm:my-[16px]'>
          
            <div className='relative w-[191px] mr-[7px] md:w-[129.8px] vsm:hidden'>
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
            <div className="w-[100%] h-[150px] vsm:w-[100%]" style={{overflow : "hidden" }}>
                <div onMouseLeave={dragStop} >
                  <ScrollMenu
                    RightArrow={CustomArrowChatBot}
                    onMouseDown={() => dragStart}
                    onMouseUp={() => dragStop}
                    onMouseMove={handleDrag}
                  >
                  {
                    fakeRolesData.map((item,i) => {
                      const isLastElement = i === fakeRolesData.length - 1;
                      const marginRightStyleFull = isLastElement ? '0px' : '6px';
              
                      return (
                        <ChatBotCard src={ theme === "light" ?  item.srcLite : theme === "dark" ? item.srcDark : "ss"}  
                                    itemId={i.toString()} mrFull={marginRightStyleFull}/>
                      )
                    })
                  }
                  </ScrollMenu>
                </div>
            </div> 
      </div>
    )
}


