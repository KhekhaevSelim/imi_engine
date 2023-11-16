'use client'

import Logo from './Logo';
import { useState } from 'react';
import NavButton from './NavButton';
import { useTheme } from "next-themes"
import ProfileDropDown from './ProfileDropDown';
import Icon from './Icon';
import Image from "next/image";
import navMenu from "../../../public/navMenu.svg";
export default function Header() {
    const [activeButton, setActiveButton] = useState<string>('templates');
    const { theme,setTheme } = useTheme();
    const handleTheme = () => {
        theme === "dark" ? setTheme("lite") : setTheme("dark")
    }
    const chooseActiveButton = (template : string) => {
        setActiveButton(template)
    }
    const handleClickMenu = () => {
        alert("тут красиво откроется менюшка")
    }
    return  (
        <header className="w-full xl:h-[89px] lg:h-[81px] md:h-[67px] flex items-center">
            <nav className="w-full lg:h-[65px] md:h-[55px] xl:mx-[12px] lg:mx-[8px] md:mx-[6px] flex items-center justify-between rounded-[20px] md:rounded-[16px] bg-header-bg-lite dark:bg-header-bg-dark">
                <div className='flex items-center md:w-[302px] md:vsm:w-[200px]'>
                    <Logo/>
                    <Image src={navMenu} alt='menuIcon' width={24} height={24} className='lg:hidden md:hidden md:vsm:block ml-[18px]' onClick={()=>handleClickMenu()}/>
                    <NavButton activeBtn={activeButton} callBack={chooseActiveButton} title='Шаблоны' icon='templates' component='navBtn'/>
                    <NavButton activeBtn={activeButton} callBack={chooseActiveButton} title='IMI чат' icon='imichat' component='navBtn'/>
                    <NavButton activeBtn={activeButton} callBack={chooseActiveButton} title='Обучение' icon='learning' component='navBtn'/>
                    <NavButton activeBtn={activeButton} callBack={chooseActiveButton} title='История' icon='history' component='navBtn'/>
                </div>
                <div className='flex xl:w-[300px] lg:w-[292px]'>
                    <ProfileDropDown/>
                    <div className='flex items-center justify-between w-[148px] xl:ml-[28px] lg:ml-[20px] md:w-[103px] md:justify-end'>
                        <Icon icon='theme' callBack={() =>handleTheme()}/>
                        <Icon icon='settings'/>
                        <Icon icon='notify'/>
                    </div>
                </div>
            </nav>
        </header>
    )
}