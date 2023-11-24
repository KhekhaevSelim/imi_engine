"use client"
import { Button } from "@/components/ui/button"
import Icon from "./Icon"

type NavButtonPropsType = {
    activeBtn ?: string
    callBack : (value : string ) => void
    title ?: string
    icon ?: string
    btnID ?: string
    component : string
    isNeedGrow ?: boolean
    singleActiveBtn ?: boolean
}

export default function NavButton(props : NavButtonPropsType){
    let isActive =  props.icon ? props.activeBtn ===  props.icon : props.activeBtn === props.btnID;
    switch(props.component){
        case "navBtn" :
            return (
                <Button variant={isActive ? 'activeNavBtn' : 'defaultNavBtn'} 
                        size="defaultNavBtn"
                        onClick={()=>{props.callBack(props.icon ? props.icon : "")}}
                        className="md:flex md:flex-col"
                        >
                     
                    <Icon icon={props.icon ? props.icon : ""} isActive={isActive}/>
                    {
                        props.icon === "templates" 
                        ? 
                        <span className="md:relative md:bottom-[8px] md:left-[16px]">{props.title}</span>
                        :
                        props.icon === "imichat" 
                        ?
                        <span className="md:relative md:bottom-[8px] md:left-[32px]">{props.title}</span>
                        :
                        props.icon === "learning" 
                        ?
                        <span className="md:relative md:bottom-[8px] md:left-[44px]">{props.title}</span>
                        :
                        <span className="md:relative md:bottom-[8px] md:left-[63px]">{props.title}</span>
                    }
                    {/* <span className="md:relative md:bottom-[8px] md:left-[16px]">{props.title}</span> */}
                </Button>
            )
        case "categoriesBtn" :
            return (
                <Button variant={isActive ? 'activeCategoriesBtn' : 'defaultCategoriesBtn'} 
                        size="defaultCategoriesBtn"
                        onClick={()=>{props.callBack(props.icon ? props.icon : "")}}
                        >
                    <Icon icon={props.icon ? props.icon : ""} isActive={isActive}/>
                    <span className="relative left-[4px] dark:text-[#F5F5F6] xl:text-[14px] lg:text-[12px] md:text-[12px] md:vsm:text-[11px]
                                    vsm:relative vsm:bottom-[3px] vsm:left-[1px]">{props.title}</span>
                </Button>
            )
        case "tempBtn" : 
            return (
                <Button 
                // variant={isActive ? 'activeTempBtn' : 'defaultTempBtn'} 
                        variant={isActive ? 'activeTempBtn' : 'defaultTempBtn' } 
                        size="defaultTempBtn"
                        onClick={()=>{props.callBack(props.btnID ? props.btnID : "")}}
                    
                        >
                    <span className="xl:text-[14px] lg:text-[12px] md:text-[12px]">{props.title}</span>
                </Button> 
            )
        case "arrow-r-20" :
            return (
                <Button variant={"defaultTempArrowRight"} 
                        size="default"
                        onClick={()=>{props.callBack(props.icon ? props.icon : "")}}
                        className="md:hidden"
                        >
                    <Icon icon={props.icon ? props.icon : ""}/>
                </Button>
            )
        case "arrow-l-20" :
            return (
                <Button variant={"defaultTempArrowLeft"} 
                        size="default"
                        onClick={()=>{props.callBack(props.icon ? props.icon : "")}}
                        className="md:hidden"
                        >
                    <Icon icon={props.icon ? props.icon : ""}/>
                </Button>
            )
        case "sendInput" :
            return (
                <Button variant={"defaultTempArrowLeft"} 
                size="default"
                onClick={()=>{props.callBack(props.icon ? props.icon : "")}}
                >
                    <Icon icon={props.icon ? props.icon : ""}/>
                </Button>
            )
        case "newChat" :
            return (
                <Button variant={"searchTempBtn"} 
                size="defaultNewChatBtn"
                onClick={()=>{props.callBack(props.icon ? props.icon : "")}}
                >
                    <Icon icon={props.icon ? props.icon : ""} />
                    <span className="">{props.title}</span>
                </Button>
            )
        case "searchTempBtn" :
            return (
                <Button variant={"searchTempBtn"} 
                size="defaultSearchTempBtn"
                onClick={()=>{props.callBack(props.icon ? props.icon : "")}}
                >
                    <Icon icon={props.icon ? props.icon : ""} />
                </Button>
            )
        case "favoriteTempBtn" :
            return (
                <Button variant={"favoriteTempBtn"} 
                size="favoriteTempBtn"
                onClick={()=>{props.callBack(props.icon ? props.icon : "")}}
                >
                    <Icon icon={props.icon ? props.icon : ""} />
                    <span>{props.title}</span>
                </Button>
            )
        case "llmBtn" : 
                return (
                    <Button variant={isActive ? 'activeToggleBtn' : 'defaultToggleBtn'} 
                                size="toggleBtn"
                                onClick={()=>props.callBack(props.btnID ? props.btnID : "")}>
                        <span>{props.title}</span>
                    </Button>
                )
        case "chatHeadingBtn" : 
        return (
            <Button variant={"chatHeadingBtn"} 
            size="defaultChatHeadingBtn"
            onClick={()=>props.callBack("")}
            >
                <Icon icon={props.icon ? props.icon : ""} isActive={props.singleActiveBtn}/>
            </Button>
        )
    }
    
}