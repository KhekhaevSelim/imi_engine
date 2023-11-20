import {useState } from "react";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import {TemplateCard} from "./horizontalScrolling/TemplateCard";
import useDrag from './horizontalScrolling/useDrag';
import React from 'react';
import { LeftArrowTemplates, RightArrowTemplates } from "./horizontalScrolling/Arrows";
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
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
    const chooseActiveButton = (template: string) => {
      setActiveButton(template);
    };
    const { dragStart, dragStop, dragMove, dragging } = useDrag();
    const handleDrag = ({ scrollContainer }: scrollVisibilityApiType) => 
    ( ev: React.MouseEvent ) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });
    return (
      <div className='w-full h-[32px] mt-[16px] relative md:h-[34px] md:pl-[20px] md:vsm:pl-[16px]' style={{overflow : "hidden", userSelect: "none"}}>
          <div onMouseLeave={dragStop} >
            <ScrollMenu
              LeftArrow={LeftArrowTemplates}
              RightArrow={RightArrowTemplates}
              onMouseDown={() => dragStart}
              onMouseUp={() => dragStop}
              onMouseMove={handleDrag}
            >
            {
              fakeTempsData.map((item,i) => {
                return (
                  <TemplateCard activeButton={activeButton} btnID={item.id} callBack={chooseActiveButton} key={item.id} title={item.title}/>
                )
              })
            }
            </ScrollMenu>
          </div>
      </div>
    )
}