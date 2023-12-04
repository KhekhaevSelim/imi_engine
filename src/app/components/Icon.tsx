"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type IconPropsType = {
    icon : string,
    isActive ?: boolean
    callBack ?: ()=> void
}

export default function Icon (props : IconPropsType){
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const {theme} = useTheme();
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

  switch(props.icon){
    case "templates" :
    return props.isActive 
        ?
        <svg width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[46px] md:h-[39px] md:relative md:top-[5px] md:left-[16px]">
        <g filter="url(#filter0_ddddd_8948_4337)">
        <path d="M16.5 30.5V25.5M16.5 15.5V10.5M14 13H19M14 28H19M25 11.5L23.2658 16.0089C22.9838 16.7421 22.8428 17.1087 22.6235 17.4171C22.4292 17.6904 22.1904 17.9292 21.9171 18.1235C21.6087 18.3428 21.2421 18.4838 20.5089 18.7658L16 20.5L20.5089 22.2342C21.2421 22.5162 21.6087 22.6572 21.9171 22.8765C22.1904 23.0708 22.4292 23.3096 22.6235 23.5829C22.8428 23.8913 22.9838 24.2579 23.2658 24.9911L25 29.5L26.7342 24.9911C27.0162 24.2579 27.1572 23.8913 27.3765 23.5829C27.5708 23.3096 27.8096 23.0708 28.0829 22.8765C28.3913 22.6572 28.7579 22.5162 29.4911 22.2342L34 20.5L29.4911 18.7658C28.7579 18.4838 28.3913 18.3428 28.0829 18.1235C27.8096 17.9292 27.5708 17.6904 27.3765 17.4171C27.1572 17.1087 27.0162 16.7421 26.7342 16.0089L25 11.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
        </g>
        <defs>
        <filter id="filter0_ddddd_8948_4337" x="0.25" y="-3.25" width="47.5" height="47.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8948_4337"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.4875 0 0 0 0 0.658333 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_8948_4337" result="effect2_dropShadow_8948_4337"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_8948_4337" result="effect3_dropShadow_8948_4337"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.4 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect3_dropShadow_8948_4337" result="effect4_dropShadow_8948_4337"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect4_dropShadow_8948_4337" result="effect5_dropShadow_8948_4337"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_8948_4337" result="shape"/>
        </filter>
        </defs>
       
        </svg>
        :
        <div className="w-[48px] h-[41px] flex justify-center items-center md:w-[46px] md:h-[39px] md:relative md:top-[5px] md:left-[16px]">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[22px] md:h-[21.5px]">
                <path d="M3.5 21.5V16.5M3.5 6.5V1.5M1 4H6M1 19H6M12 2.5L10.2658 7.00886C9.98381 7.74209 9.8428 8.10871 9.62353 8.41709C9.42919 8.6904 9.1904 8.92919 8.91709 9.12353C8.60871 9.34281 8.24209 9.48381 7.50886 9.76582L3 11.5L7.50886 13.2342C8.24209 13.5162 8.60871 13.6572 8.91709 13.8765C9.1904 14.0708 9.42919 14.3096 9.62353 14.5829C9.84281 14.8913 9.98381 15.2579 10.2658 15.9911L12 20.5L13.7342 15.9911C14.0162 15.2579 14.1572 14.8913 14.3765 14.5829C14.5708 14.3096 14.8096 14.0708 15.0829 13.8765C15.3913 13.6572 15.7579 13.5162 16.4911 13.2342L21 11.5L16.4911 9.76582C15.7579 9.48381 15.3913 9.3428 15.0829 9.12353C14.8096 8.92919 14.5708 8.6904 14.3765 8.41709C14.1572 8.10871 14.0162 7.74209 13.7342 7.00886L12 2.5Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
       
    case "chat" :
        return props.isActive 
        ?
        <svg width="46" height="41" viewBox="0 0 46 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[44px] md:h-[39px] md:relative md:top-[5px] md:left-[30px]"> 
        <g filter="url(#filter0_ddddd_8945_5226)"> 
        <path d="M19.5 21C19.5 21 20.8125 22.5 23 22.5C25.1875 22.5 26.5 21 26.5 21M25.75 16H25.76M20.25 16H20.26M18 26.5V28.8355C18 29.3684 18 29.6348 18.1092 29.7716C18.2042 29.8906 18.3483 29.9599 18.5005 29.9597C18.6756 29.9595 18.8837 29.7931 19.2998 29.4602L21.6852 27.5518C22.1725 27.162 22.4162 26.9671 22.6875 26.8285C22.9282 26.7055 23.1844 26.6156 23.4492 26.5613C23.7477 26.5 24.0597 26.5 24.6837 26.5H27.2C28.8802 26.5 29.7202 26.5 30.362 26.173C30.9265 25.8854 31.3854 25.4265 31.673 24.862C32 24.2202 32 23.3802 32 21.7V16.3C32 14.6198 32 13.7798 31.673 13.138C31.3854 12.5735 30.9265 12.1146 30.362 11.827C29.7202 11.5 28.8802 11.5 27.2 11.5H18.8C17.1198 11.5 16.2798 11.5 15.638 11.827C15.0735 12.1146 14.6146 12.5735 14.327 13.138C14 13.7798 14 14.6198 14 16.3V22.5C14 23.43 14 23.895 14.1022 24.2765C14.3796 25.3117 15.1883 26.1204 16.2235 26.3978C16.605 26.5 17.07 26.5 18 26.5ZM26.25 16C26.25 16.2761 26.0261 16.5 25.75 16.5C25.4739 16.5 25.25 16.2761 25.25 16C25.25 15.7239 25.4739 15.5 25.75 15.5C26.0261 15.5 26.25 15.7239 26.25 16ZM20.75 16C20.75 16.2761 20.5261 16.5 20.25 16.5C19.9739 16.5 19.75 16.2761 19.75 16C19.75 15.7239 19.9739 15.5 20.25 15.5C20.5261 15.5 20.75 15.7239 20.75 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
        </g>
        <defs>
        <filter id="filter0_ddddd_8945_5226" x="0.25" y="-2.25" width="45.5" height="45.9597" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8945_5226"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.4875 0 0 0 0 0.658333 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_8945_5226" result="effect2_dropShadow_8945_5226"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_8945_5226" result="effect3_dropShadow_8945_5226"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.4 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect3_dropShadow_8945_5226" result="effect4_dropShadow_8945_5226"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect4_dropShadow_8945_5226" result="effect5_dropShadow_8945_5226"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_8945_5226" result="shape"/>
        </filter>
        </defs>
        </svg>
        :
        <div className="w-[46px] h-[41px] flex justify-center items-center md:w-[44px] md:h-[39px] md:relative md:top-[5px] md:left-[30px]" >
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[18px] md:h-[18.5px]">
                <path d="M6.5 11C6.5 11 7.8125 12.5 10 12.5C12.1875 12.5 13.5 11 13.5 11M12.75 6H12.76M7.25 6H7.26M5 16.5V18.8355C5 19.3684 5 19.6348 5.10923 19.7716C5.20422 19.8906 5.34827 19.9599 5.50054 19.9597C5.67563 19.9595 5.88367 19.7931 6.29976 19.4602L8.68521 17.5518C9.17252 17.162 9.41617 16.9671 9.68749 16.8285C9.9282 16.7055 10.1844 16.6156 10.4492 16.5613C10.7477 16.5 11.0597 16.5 11.6837 16.5H14.2C15.8802 16.5 16.7202 16.5 17.362 16.173C17.9265 15.8854 18.3854 15.4265 18.673 14.862C19 14.2202 19 13.3802 19 11.7V6.3C19 4.61984 19 3.77976 18.673 3.13803C18.3854 2.57354 17.9265 2.1146 17.362 1.82698C16.7202 1.5 15.8802 1.5 14.2 1.5H5.8C4.11984 1.5 3.27976 1.5 2.63803 1.82698C2.07354 2.1146 1.6146 2.57354 1.32698 3.13803C1 3.77976 1 4.61984 1 6.3V12.5C1 13.43 1 13.895 1.10222 14.2765C1.37962 15.3117 2.18827 16.1204 3.22354 16.3978C3.60504 16.5 4.07003 16.5 5 16.5ZM13.25 6C13.25 6.27614 13.0261 6.5 12.75 6.5C12.4739 6.5 12.25 6.27614 12.25 6C12.25 5.72386 12.4739 5.5 12.75 5.5C13.0261 5.5 13.25 5.72386 13.25 6ZM7.75 6C7.75 6.27614 7.52614 6.5 7.25 6.5C6.97386 6.5 6.75 6.27614 6.75 6C6.75 5.72386 6.97386 5.5 7.25 5.5C7.52614 5.5 7.75 5.72386 7.75 6Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
         
    case "learning" :
       return props.isActive ?
        <svg width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[43px] md:h-[39px] md:relative md:top-[5px] md:left-[45px]">
            <g filter="url(#filter0_ddddd_8948_1991)">
            <path d="M20.4645 16.9645L16.9289 13.429M16.9289 27.5711L20.4645 24.0355M27.5355 24.0355L31.0711 27.571M31.0711 13.4289L27.5355 16.9645M34 20.5C34 26.0228 29.5228 30.5 24 30.5C18.4772 30.5 14 26.0228 14 20.5C14 14.9772 18.4772 10.5 24 10.5C29.5228 10.5 34 14.9772 34 20.5ZM29 20.5C29 23.2614 26.7614 25.5 24 25.5C21.2386 25.5 19 23.2614 19 20.5C19 17.7386 21.2386 15.5 24 15.5C26.7614 15.5 29 17.7386 29 20.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
            </g>
            <defs>
            <filter id="filter0_ddddd_8948_1991" x="0.25" y="-3.25" width="47.5" height="47.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="6.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8948_1991"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.4875 0 0 0 0 0.658333 0 0 0 0 1 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_8948_1991" result="effect2_dropShadow_8948_1991"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="5.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_8948_1991" result="effect3_dropShadow_8948_1991"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.4 0 0 0 0 1 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_8948_1991" result="effect4_dropShadow_8948_1991"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="6"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect4_dropShadow_8948_1991" result="effect5_dropShadow_8948_1991"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_8948_1991" result="shape"/>
            </filter>
            </defs>
        </svg>
        :
        <div className="w-[48px] h-[41px] flex justify-center items-center md:w-[44px] md:h-[39px] md:relative md:top-[5px] md:left-[45px]">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[19px] md:h-[19.5px]">
                <path d="M7.46445 7.96448L3.92893 4.42896M3.92893 18.5711L7.46448 15.0355M14.5355 15.0355L18.0711 18.571M18.0711 4.42891L14.5355 7.96445M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C16.5228 1.5 21 5.97715 21 11.5ZM16 11.5C16 14.2614 13.7614 16.5 11 16.5C8.23858 16.5 6 14.2614 6 11.5C6 8.73858 8.23858 6.5 11 6.5C13.7614 6.5 16 8.73858 16 11.5Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    case "history" :
        return props.isActive ?
        <svg width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[44px] md:h-[39px] md:relative md:top-[5px] md:left-[63px]">
        <g filter="url(#filter0_ddddd_8946_1997)">
        <path d="M33.7 20L31.7005 22L29.7 20M31.9451 21.5C31.9814 21.1717 32 20.838 32 20.5C32 15.5294 27.9706 11.5 23 11.5C18.0294 11.5 14 15.5294 14 20.5C14 25.4706 18.0294 29.5 23 29.5C25.8273 29.5 28.35 28.1963 30 26.1573M23 15.5V20.5L26 22.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
        </g>
        <defs>
        <filter id="filter0_ddddd_8946_1997" x="0.25" y="-2.25" width="47.2002" height="45.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8946_1997"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.4875 0 0 0 0 0.658333 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_8946_1997" result="effect2_dropShadow_8946_1997"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_8946_1997" result="effect3_dropShadow_8946_1997"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.4 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect3_dropShadow_8946_1997" result="effect4_dropShadow_8946_1997"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect4_dropShadow_8946_1997" result="effect5_dropShadow_8946_1997"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_8946_1997" result="shape"/>
        </filter>
        </defs>
        </svg>
        :
        <div className="w-[48px] h-[41px] flex justify-center items-center md:w-[44px] md:h-[39px] md:relative md:top-[5px] md:left-[63px]">
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[19px] md:h-[19.5px]">
                <path d="M20.7 10L18.7005 12L16.7 10M18.9451 11.5C18.9814 11.1717 19 10.838 19 10.5C19 5.52944 14.9706 1.5 10 1.5C5.02944 1.5 1 5.52944 1 10.5C1 15.4706 5.02944 19.5 10 19.5C12.8273 19.5 15.35 18.1963 17 16.1573M10 5.5V10.5L13 12.5" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    case "theme" :

       return <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.callBack} className="fill-[#2D384B] hover:fill-[#fff] mr-[4px] relative left-[1px] cursor-pointer md:hidden">
       <path d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5H24C30.6274 0.5 36 5.87258 36 12.5V24.5C36 31.1274 30.6274 36.5 24 36.5H12C5.37258 36.5 0 31.1274 0 24.5V12.5Z"/>
       <path d="M22.9998 10.167L23.5147 11.1966C23.7359 11.6391 23.8465 11.8604 23.9943 12.0521C24.1254 12.2222 24.278 12.3747 24.4481 12.5059C24.6398 12.6536 24.861 12.7643 25.3035 12.9855L26.3332 13.5003L25.3035 14.0152C24.861 14.2364 24.6398 14.347 24.4481 14.4948C24.278 14.6259 24.1254 14.7784 23.9943 14.9486C23.8465 15.1403 23.7359 15.3615 23.5147 15.804L22.9998 16.8337L22.485 15.804C22.2638 15.3615 22.1531 15.1403 22.0054 14.9486C21.8742 14.7784 21.7217 14.6259 21.5516 14.4948C21.3599 14.347 21.1386 14.2364 20.6962 14.0152L19.6665 13.5003L20.6962 12.9855C21.1386 12.7643 21.3599 12.6536 21.5516 12.5059C21.7217 12.3747 21.8742 12.2222 22.0054 12.0521C22.1531 11.8604 22.2638 11.6391 22.485 11.1966L22.9998 10.167Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
       <path d="M25.4998 19.6581C24.4073 21.5745 22.3453 22.8666 19.9815 22.8666C16.4757 22.8666 13.6338 20.0246 13.6338 16.5189C13.6338 14.1549 14.9261 12.0928 16.8428 11.0003C12.8163 11.3821 9.6665 14.7728 9.6665 18.8991C9.6665 23.2812 13.2189 26.8337 17.6011 26.8337C21.7272 26.8337 25.1178 23.6842 25.4998 19.6581Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
        
    case "settings" :
        return <svg width="37" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#2D384B] hover:fill-[#fff] relative left-[2px] cursor-pointer">
        <path d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5H24C30.6274 0.5 36 5.87258 36 12.5V24.5C36 31.1274 30.6274 36.5 24 36.5H12C5.37258 36.5 0 31.1274 0 24.5V12.5Z" />
        <path d="M15.8294 24.6427L16.3164 25.738C16.4612 26.0641 16.6975 26.3412 16.9966 26.5356C17.2957 26.73 17.6448 26.8335 18.0016 26.8334C18.3583 26.8335 18.7075 26.73 19.0066 26.5356C19.3057 26.3412 19.542 26.0641 19.6868 25.738L20.1738 24.6427C20.3472 24.254 20.6388 23.93 21.0071 23.7168C21.3778 23.5029 21.8066 23.4119 22.2321 23.4566L23.4238 23.5834C23.7785 23.6209 24.1365 23.5547 24.4544 23.3929C24.7722 23.231 25.0363 22.9803 25.2145 22.6714C25.393 22.3626 25.4781 22.0086 25.4593 21.6525C25.4406 21.2963 25.3189 20.9532 25.109 20.6649L24.4034 19.6955C24.1522 19.3477 24.018 18.9291 24.0201 18.5001C24.02 18.0722 24.1555 17.6554 24.4071 17.3093L25.1127 16.3399C25.3226 16.0515 25.4443 15.7085 25.463 15.3523C25.4818 14.9961 25.3967 14.6422 25.2183 14.3334C25.04 14.0244 24.7759 13.7738 24.4581 13.6119C24.1402 13.4501 23.7822 13.3839 23.4275 13.4214L22.2358 13.5482C21.8103 13.5929 21.3815 13.5018 21.0108 13.288C20.6418 13.0736 20.3501 12.7479 20.1775 12.3575L19.6868 11.2621C19.542 10.9361 19.3057 10.659 19.0066 10.4646C18.7075 10.2702 18.3583 10.1667 18.0016 10.1667C17.6448 10.1667 17.2957 10.2702 16.9966 10.4646C16.6975 10.659 16.4612 10.9361 16.3164 11.2621L15.8294 12.3575C15.6568 12.7479 15.3651 13.0736 14.996 13.288C14.6254 13.5018 14.1966 13.5929 13.771 13.5482L12.5757 13.4214C12.2209 13.3839 11.8629 13.4501 11.5451 13.6119C11.2272 13.7738 10.9632 14.0244 10.7849 14.3334C10.6064 14.6422 10.5214 14.9961 10.5401 15.3523C10.5589 15.7085 10.6806 16.0515 10.8905 16.3399L11.596 17.3093C11.8476 17.6554 11.9831 18.0722 11.9831 18.5001C11.9831 18.9279 11.8476 19.3448 11.596 19.6908L10.8905 20.6603C10.6806 20.9486 10.5589 21.2917 10.5401 21.6479C10.5214 22.004 10.6064 22.358 10.7849 22.6667C10.9633 22.9756 11.2274 23.226 11.5453 23.3879C11.8631 23.5498 12.221 23.6161 12.5757 23.5788L13.7673 23.4519C14.1929 23.4072 14.6217 23.4983 14.9923 23.7121C15.3628 23.9259 15.6558 24.2517 15.8294 24.6427Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.0001 21.0001C19.3808 21.0001 20.5001 19.8808 20.5001 18.5001C20.5001 17.1194 19.3808 16.0001 18.0001 16.0001C16.6194 16.0001 15.5001 17.1194 15.5001 18.5001C15.5001 19.8808 16.6194 21.0001 18.0001 21.0001Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "notify" :
        return <svg width="59" height="51" viewBox="0 0 59 51" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#2D384B] hover:fill-[#fff] relative bottom-[7px] left-[7px] cursor-pointer">
        <path d="M0 26.5C0 19.8726 5.37258 14.5 12 14.5H24C30.6274 14.5 36 19.8726 36 26.5V38.5C36 45.1274 30.6274 50.5 24 50.5H12C5.37258 50.5 0 45.1274 0 38.5V26.5Z" />
        <path d="M15.7952 40.0001C16.3828 40.5187 17.1547 40.8334 18.0001 40.8334C18.8454 40.8334 19.6173 40.5187 20.2049 40.0001M23.0001 29.1667C23.0001 27.8407 22.4733 26.5689 21.5356 25.6312C20.5979 24.6935 19.3261 24.1667 18.0001 24.1667C16.674 24.1667 15.4022 24.6935 14.4645 25.6312C13.5268 26.5689 13.0001 27.8407 13.0001 29.1667C13.0001 31.7419 12.3504 33.505 11.6248 34.6713C11.0127 35.655 10.7066 36.1468 10.7178 36.284C10.7303 36.436 10.7624 36.4939 10.8849 36.5847C10.9954 36.6667 11.4939 36.6667 12.4908 36.6667H23.5093C24.5062 36.6667 25.0047 36.6667 25.1152 36.5847C25.2377 36.4939 25.2699 36.436 25.2823 36.284C25.2935 36.1468 24.9875 35.655 24.3753 34.6713C23.6497 33.505 23.0001 31.7419 23.0001 29.1667Z"  className="stroke-[#98A2B3]" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <g filter="url(#filter0_di_8780_1214)">
        <circle cx="33" cy="19.5" r="8" fill="#0B3BEC"/>
        </g>
        <path d="M30.7693 22.491V21.546L33.5413 19.0755C33.7573 18.8835 33.9073 18.702 33.9913 18.531C34.0753 18.36 34.1173 18.195 34.1173 18.036C34.1173 17.82 34.0708 17.628 33.9778 17.46C33.8848 17.289 33.7558 17.154 33.5908 17.055C33.4288 16.956 33.2413 16.9065 33.0283 16.9065C32.8033 16.9065 32.6038 16.959 32.4298 17.064C32.2588 17.166 32.1253 17.3025 32.0293 17.4735C31.9333 17.6445 31.8883 17.829 31.8943 18.027H30.7783C30.7783 17.595 30.8743 17.2185 31.0663 16.8975C31.2613 16.5765 31.5283 16.3275 31.8673 16.1505C32.2093 15.9735 32.6038 15.885 33.0508 15.885C33.4648 15.885 33.8368 15.978 34.1668 16.164C34.4968 16.347 34.7563 16.602 34.9453 16.929C35.1343 17.253 35.2288 17.6265 35.2288 18.0495C35.2288 18.3585 35.1868 18.618 35.1028 18.828C35.0188 19.038 34.8928 19.2315 34.7248 19.4085C34.5598 19.5855 34.3543 19.782 34.1083 19.998L32.1418 21.7395L32.0428 21.4695H35.2288V22.491H30.7693Z" fill="white"/>
        <defs>
        <filter id="filter0_di_8780_1214" x="15" y="0.5" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="4" dy="3"/>
        <feGaussianBlur stdDeviation="7"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.28 0 0 0 0 1 0 0 0 0.8 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8780_1214"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8780_1214" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="4"/>
        <feGaussianBlur stdDeviation="3.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.2125 0 0 0 0 0.95275 0 0 0 0 1 0 0 0 0.61 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_8780_1214"/>
        </filter>
        </defs>
        </svg>
    case "text" :
        return <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative right-[3px] vsm:left-[1px]">
        <path d="M13.8333 8.33333H3M17.1667 5H3M17.1667 11.6667H3M13.8333 15H3" stroke={props.isActive ? "white" : "rgba(11, 59, 236, 1)"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "code" :
        return <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative right-[3px] vsm:left-[1px]">
        <path d="M12.5833 12.5L15.0833 10L12.5833 7.5M8.41667 7.5L5.91667 10L8.41667 12.5M7 17.5H14C15.4001 17.5 16.1002 17.5 16.635 17.2275C17.1054 16.9878 17.4878 16.6054 17.7275 16.135C18 15.6002 18 14.9001 18 13.5V6.5C18 5.09987 18 4.3998 17.7275 3.86502C17.4878 3.39462 17.1054 3.01217 16.635 2.77248C16.1002 2.5 15.4001 2.5 14 2.5H7C5.59987 2.5 4.8998 2.5 4.36502 2.77248C3.89462 3.01217 3.51217 3.39462 3.27248 3.86502C3 4.3998 3 5.09987 3 6.5V13.5C3 14.9001 3 15.6002 3.27248 16.135C3.51217 16.6054 3.89462 16.9878 4.36502 17.2275C4.8998 17.5 5.59987 17.5 7 17.5Z" stroke={props.isActive ? "white" : "#0B3BEC"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "pic" :
        return <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative right-[2px] vsm:left-[1px]">
        <path d="M16.3333 17.5H17.1753C17.9846 17.5 18.3892 17.5 18.6123 17.3313C18.8066 17.1843 18.9269 16.9596 18.9414 16.7163C18.958 16.4371 18.7336 16.1004 18.2847 15.4271L15.776 11.6641C15.4051 11.1077 15.2196 10.8295 14.9858 10.7325C14.7815 10.6478 14.5518 10.6478 14.3474 10.7325C14.1136 10.8295 13.9282 11.1077 13.5572 11.6641L12.9371 12.5943M16.3333 17.5L9.92954 8.25015C9.56126 7.71818 9.37712 7.4522 9.1471 7.3587C8.94589 7.2769 8.72069 7.2769 8.51947 7.3587C8.28946 7.4522 8.10531 7.71818 7.73703 8.25015L2.78179 15.4077C2.3126 16.0854 2.078 16.4243 2.09136 16.7061C2.10299 16.9515 2.22234 17.1793 2.41751 17.3286C2.64162 17.5 3.05376 17.5 3.87804 17.5H16.3333ZM18 5C18 6.38071 16.8807 7.5 15.5 7.5C14.1192 7.5 13 6.38071 13 5C13 3.61929 14.1192 2.5 15.5 2.5C16.8807 2.5 18 3.61929 18 5Z" stroke={props.isActive ? "white" : "#0B3BEC"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "magic" :
        return <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="vsm:relative vsm:left-[2px]">
        <path d="M11.3335 11.6667L8.83345 9.16675M13.0087 2.91675V1.66675M16.2915 4.2173L17.1754 3.33341M16.2915 10.8334L17.1754 11.7173M9.67541 4.2173L8.79153 3.33341M17.5921 7.50008H18.8421M5.60959 17.3906L13.3073 9.69289C13.6373 9.36288 13.8023 9.19787 13.8642 9.0076C13.9185 8.84023 13.9185 8.65994 13.8642 8.49257C13.8023 8.30229 13.6373 8.13729 13.3073 7.80727L12.6929 7.19289C12.3629 6.86288 12.1979 6.69787 12.0076 6.63605C11.8403 6.58166 11.66 6.58166 11.4926 6.63605C11.3023 6.69787 11.1373 6.86288 10.8073 7.19289L3.10959 14.8906C2.77958 15.2206 2.61457 15.3856 2.55275 15.5759C2.49837 15.7433 2.49837 15.9236 2.55275 16.0909C2.61457 16.2812 2.77958 16.4462 3.10959 16.7762L3.72398 17.3906C4.05399 17.7206 4.219 17.8856 4.40927 17.9475C4.57664 18.0018 4.75693 18.0018 4.9243 17.9475C5.11457 17.8856 5.27958 17.7206 5.60959 17.3906Z" stroke={props.isActive ? "white" : "#0B3BEC"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "search" :
        return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-[14px] top-[11px] cursor-pointer" onClick={props.callBack ? props.callBack : ()=>{}}>
        <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "searchTempBtn" :
        return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "arrow-r-20" :
        return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 15L12.5 10L7.5 5" stroke="#2D384B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "arrow-l-20" :
        return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
        <path d="M7.5 15L12.5 10L7.5 5" stroke="#2D384B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "roleDescription" :
        return theme === "light" 
        ? 
        screenWidth <= 979 ?
        <svg width="128" height="130" viewBox="0 0 128 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16C0 7.16344 7.16344 0 16 0H87.7292C93.8482 0 99.4313 3.48986 102.112 8.99033L125.504 56.9865C128.232 62.5838 128.197 69.1324 125.41 74.7005L102.154 121.162C99.4429 126.579 93.9045 130 87.8466 130H16C7.16344 130 0 122.837 0 114V16Z" fill="white"/>
        </svg>
        :
        <svg width="189" height="150" viewBox="0 0 189 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20C0 8.9543 8.95431 0 20 0H138.132C145.49 0 152.254 4.03994 155.742 10.5183L185.826 66.3906C189.051 72.38 189.01 79.5979 185.718 85.5508L155.786 139.679C152.265 146.047 145.562 150 138.284 150H20C8.9543 150 0 141.046 0 130V20Z" fill="white"/>
        </svg>

        :
        screenWidth <= 979 ?
        <svg width="128" height="130" viewBox="0 0 128 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16C0 7.16344 7.16344 0 16 0H87.7292C93.8482 0 99.4313 3.48986 102.112 8.99033L125.504 56.9865C128.232 62.5838 128.197 69.1324 125.41 74.7005L102.154 121.162C99.4429 126.579 93.9045 130 87.8466 130H16C7.16344 130 0 122.837 0 114V16Z" fill="black"/>
        </svg>
        :
        <svg width="189" height="150" viewBox="0 0 189 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20C0 8.9543 8.95431 0 20 0H138.132C145.49 0 152.254 4.03994 155.742 10.5183L185.826 66.3906C189.051 72.38 189.01 79.5979 185.718 85.5508L155.786 139.679C152.265 146.047 145.562 150 138.284 150H20C8.9543 150 0 141.046 0 130V20Z" fill="black"/>
        </svg>
    case "roleDescriptionAI" :
        return <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[28px] left-[31px] md:top-[22px] md:left-[16px] md:vsm:relative md:vsm:top-[6px] md:vsm:left-[0px]">
        <path d="M21.2956 0H8.71935C3.25662 0 0 2.821 0 7.553V18.434C0 23.179 3.25662 26 8.71935 26H21.2806C26.7433 26 29.9999 23.179 29.9999 18.447V7.553C30.015 2.821 26.7583 0 21.2956 0Z" fill="#0B3BEC"/>
        </svg>
    case "microphoneInput" :
        return <div className="w-[44px] h-[44px] rounded-[16px] hover:bg-[#fff] cursor-pointer flex justify-center items-center p-[12px] vsm:w-[40px] vsm:h-[40px] vsm:p-[10px] vsm:rounded-[12px] md:relative md:left-[10px] vsm:left-[13px]">  
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8334 8.83342V10.5001C15.8334 13.7217 13.2217 16.3334 10.0001 16.3334M4.16675 8.83342V10.5001C4.16675 13.7217 6.77842 16.3334 10.0001 16.3334M10.0001 16.3334V18.8334M6.66675 18.8334H13.3334M10.0001 13.0001C8.61937 13.0001 7.50008 11.8808 7.50008 10.5001V4.66675C7.50008 3.28604 8.61937 2.16675 10.0001 2.16675C11.3808 2.16675 12.5001 3.28604 12.5001 4.66675V10.5001C12.5001 11.8808 11.3808 13.0001 10.0001 13.0001Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
    case "settingsInput" :
        return <div className="w-[44px] h-[44px] rounded-[16px] hover:bg-[#fff] cursor-pointer flex justify-center items-center p-[10px] xl:ml-[4px] xl:mr-[8px] lg:ml-[3px]
        lg:mr-[6px] md:p-[8px] vsm:w-[40px] vsm:h-[40px] vsm:p-[10px] vsm:rounded-[12px]"> 
         <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.82936 16.6427L8.3164 17.738C8.46118 18.0641 8.69747 18.3412 8.99659 18.5356C9.29571 18.73 9.64483 18.8335 10.0016 18.8334C10.3583 18.8335 10.7075 18.73 11.0066 18.5356C11.3057 18.3412 11.542 18.0641 11.6868 17.738L12.1738 16.6427C12.3472 16.254 12.6388 15.93 13.0071 15.7168C13.3778 15.5029 13.8066 15.4119 14.2321 15.4566L15.4238 15.5834C15.7785 15.6209 16.1365 15.5547 16.4544 15.3929C16.7722 15.231 17.0363 14.9803 17.2145 14.6714C17.393 14.3626 17.4781 14.0086 17.4593 13.6525C17.4406 13.2963 17.3189 12.9532 17.109 12.6649L16.4034 11.6955C16.1522 11.3477 16.018 10.9291 16.0201 10.5001C16.02 10.0722 16.1555 9.65537 16.4071 9.30934L17.1127 8.3399C17.3226 8.05154 17.4443 7.70847 17.463 7.35231C17.4818 6.99615 17.3967 6.6422 17.2183 6.33341C17.04 6.02444 16.7759 5.77382 16.4581 5.61194C16.1402 5.45005 15.7822 5.38386 15.4275 5.42138L14.2358 5.54823C13.8103 5.59292 13.3815 5.50185 13.0108 5.28804C12.6418 5.07363 12.3501 4.74788 12.1775 4.35749L11.6868 3.26212C11.542 2.93606 11.3057 2.65901 11.0066 2.46458C10.7075 2.27015 10.3583 2.16669 10.0016 2.16675C9.64483 2.16669 9.29571 2.27015 8.99659 2.46458C8.69747 2.65901 8.46118 2.93606 8.3164 3.26212L7.82936 4.35749C7.6568 4.74788 7.36509 5.07363 6.99603 5.28804C6.62538 5.50185 6.19659 5.59292 5.77103 5.54823L4.57566 5.42138C4.22094 5.38386 3.86294 5.45005 3.54509 5.61194C3.22724 5.77382 2.96317 6.02444 2.78492 6.33341C2.60644 6.6422 2.52141 6.99615 2.54014 7.35231C2.55888 7.70847 2.68058 8.05154 2.89048 8.3399L3.59603 9.30934C3.84765 9.65537 3.98315 10.0722 3.98307 10.5001C3.98315 10.9279 3.84765 11.3448 3.59603 11.6908L2.89048 12.6603C2.68058 12.9486 2.55888 13.2917 2.54014 13.6479C2.52141 14.004 2.60644 14.358 2.78492 14.6667C2.96335 14.9756 3.22744 15.226 3.54525 15.3879C3.86306 15.5498 4.22096 15.6161 4.57566 15.5788L5.76733 15.4519C6.19288 15.4072 6.62167 15.4983 6.99233 15.7121C7.36277 15.9259 7.65583 16.2517 7.82936 16.6427Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.0001 13.0001C11.3808 13.0001 12.5001 11.8808 12.5001 10.5001C12.5001 9.11937 11.3808 8.00008 10.0001 8.00008C8.61939 8.00008 7.5001 9.11937 7.5001 10.5001C7.5001 11.8808 8.61939 13.0001 10.0001 13.0001Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
    case "uploadInput" :
        return <div className="w-[44px] h-[44px] rounded-[16px] hover:bg-[#fff] cursor-pointer flex justify-center items-center p-[10px] xl:ml-[-5px] xr:ml-[4px] lg:ml-[-5px]
        lg:mr-[3px] md:p-[8px] vsm:w-[40px] vsm:h-[40px] vsm:p-[10px] vsm:rounded-[12px]"> 
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6271 9.58296L10.1141 17.096C8.40556 18.8045 5.63546 18.8045 3.92692 17.096C2.21837 15.3874 2.21837 12.6173 3.92692 10.9088L11.4399 3.39578C12.579 2.25675 14.4257 2.25675 15.5647 3.39578C16.7037 4.5348 16.7037 6.38154 15.5647 7.52057L8.34633 14.7389C7.77682 15.3085 6.85345 15.3085 6.28394 14.7389C5.71442 14.1694 5.71442 13.2461 6.28394 12.6766L12.6184 6.34205" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> 
        </div>
    case "arrow-l-60" :
        return theme === "light" ?
        screenWidth <= 1280 && screenWidth >= 980 ? 
            <svg width="55" height="69" viewBox="0 0 55 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={props.callBack}>
                <path d="M0 20C0 8.9543 8.95431 0 20 0H35C46.0457 0 55 8.9543 55 20V49C55 60.0457 46.0457 69 35 69H20C8.95431 69 0 60.0457 0 49V20Z" fill="white"/>
                <g opacity={props.isActive ? "1" : "0.5"}>
                <path d="M30.5 40.5L24.5 34.5L30.5 28.5" stroke="#2D384B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>
            :
            <svg width="60" height="69" viewBox="0 0 60 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={props.callBack}>
                <g opacity={props.isActive ? "1" : "0.5"}>
                <path d="M0 20C0 8.9543 8.95431 0 20 0H40C51.0457 0 60 8.9543 60 20V49C60 60.0457 51.0457 69 40 69H20C8.9543 69 0 60.0457 0 49V20Z" fill="white"/>
                <g opacity={props.isActive ? "1" : "0.5"}>
                <path d="M33 40.5L27 34.5L33 28.5" stroke="#2D384B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </g>
            </svg>   
        :
        screenWidth <= 1280 && screenWidth >= 980 ? 
        <svg width="55" height="69" viewBox="0 0 55 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={props.callBack}>
            <g opacity={props.isActive ? "1" : "0.5"}>
            <path d="M0 20C0 8.9543 8.95431 0 20 0H35C46.0457 0 55 8.9543 55 20V49C55 60.0457 46.0457 69 35 69H20C8.95431 69 0 60.0457 0 49V20Z" fill="black"/>
            <g opacity={props.isActive ? "1" : "0.5"}>
            <path d="M30.5 40.5L24.5 34.5L30.5 28.5" stroke="#CECFD2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </g>
        </svg>

        :
        <svg width="60" height="69" viewBox="0 0 60 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={props.callBack}>
            <g opacity={props.isActive ? "1" : "0.5"}>
            <path d="M0 20C0 8.9543 8.95431 0 20 0H40C51.0457 0 60 8.9543 60 20V49C60 60.0457 51.0457 69 40 69H20C8.9543 69 0 60.0457 0 49V20Z" fill="black"/>
            <g opacity={props.isActive ? "1" : "0.5"}>
            <path d="M33 40.5L27 34.5L33 28.5" stroke="#CECFD2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </g>
        </svg>

    case "arrow-r-60" :
        return theme === "light" ?
        screenWidth <= 1280 && screenWidth >= 980 ?  
        <svg width="55" height="69" viewBox="0 0 55 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={props.callBack}>
            <path d="M0 20C0 8.9543 8.95431 0 20 0H35C46.0457 0 55 8.9543 55 20V49C55 60.0457 46.0457 69 35 69H20C8.95431 69 0 60.0457 0 49V20Z" fill="white" opacity={props.isActive ? "1" : "0.5"}/>
            <path d="M24.5 40.5L30.5 34.5L24.5 28.5" stroke="#2D384B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity={ props.isActive ? "1" : "0.5"}/>
        </svg>

        :
        <svg width="60" height="69" viewBox="0 0 60 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={props.callBack}>
            <path d="M0 20C0 8.9543 8.95431 0 20 0H40C51.0457 0 60 8.9543 60 20V49C60 60.0457 51.0457 69 40 69H20C8.9543 69 0 60.0457 0 49V20Z" fill="white" opacity={props.isActive ? "1" : "0.5"}/>
            <path d="M27 40.5L33 34.5L27 28.5" stroke="#2D384B" opacity={ props.isActive ? "1" : "0.5"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        :
        screenWidth <= 1280 && screenWidth >= 980 ? 
        <svg width="55" height="69" viewBox="0 0 55 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={props.callBack}>
            <path d="M0 20C0 8.9543 8.95431 0 20 0H35C46.0457 0 55 8.9543 55 20V49C55 60.0457 46.0457 69 35 69H20C8.95431 69 0 60.0457 0 49V20Z" fill="black" opacity={props.isActive ? "1" : "0.5"}/>
            <path d="M24.5 40.5L30.5 34.5L24.5 28.5" stroke="#CECFD2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity={props.isActive ? "1" : "0.5"}/>
        </svg>
        :
        <svg width="60" height="69" viewBox="0 0 60 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={props.callBack}>
            <path d="M0 20C0 8.9543 8.95431 0 20 0H40C51.0457 0 60 8.9543 60 20V49C60 60.0457 51.0457 69 40 69H20C8.9543 69 0 60.0457 0 49V20Z" fill="black" opacity={props.isActive ? "1" : "0.5"}/>
            <path d="M27 40.5L33 34.5L27 28.5" stroke="#CECFD2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "improve" :
       return <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[4px] md:relative md:left-[10px] md:m-[0px] vsm:left-[13px]">
            <path d="M11.5 2.83341V1.16675M11.5 12.8334V11.1667M5.66667 7.00008H7.33333M15.6667 7.00008H17.3333M13.8333 9.33341L14.8333 10.3334M13.8333 4.66675L14.8333 3.66675M1.5 17.0001L9 9.50008M9.16667 4.66675L8.16667 3.66675" stroke="#2970FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "input" :
        return <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:pl-[2px] cursor-pointer">
        <path d="M15.4167 6.1665V1.99984M4.58341 16.9998V12.8332M13.3334 4.08317H17.5001M2.50008 14.9165H6.66675M5.41675 1.1665L4.76303 2.47393C4.54179 2.91642 4.43117 3.13766 4.28339 3.32938C4.15225 3.4995 3.99974 3.65201 3.82962 3.78315C3.6379 3.93093 3.41666 4.04155 2.97418 4.26279L1.66675 4.9165L2.97418 5.57022C3.41666 5.79146 3.6379 5.90208 3.82962 6.04986C3.99974 6.181 4.15225 6.33351 4.28339 6.50363C4.43117 6.69535 4.54179 6.91659 4.76303 7.35907L5.41675 8.6665L6.07046 7.35907C6.2917 6.91659 6.40233 6.69535 6.55011 6.50363C6.68124 6.33351 6.83375 6.181 7.00388 6.04986C7.19559 5.90208 7.41684 5.79146 7.85932 5.57022L9.16675 4.9165L7.85932 4.26279C7.41684 4.04155 7.19559 3.93093 7.00388 3.78315C6.83375 3.65201 6.68124 3.4995 6.55011 3.32938C6.40233 3.13766 6.2917 2.91642 6.07046 2.47394L5.41675 1.1665ZM14.1667 9.49984L13.3741 11.085C13.1529 11.5275 13.0423 11.7488 12.8945 11.9405C12.7634 12.1106 12.6109 12.2631 12.4407 12.3943C12.249 12.542 12.0278 12.6527 11.5853 12.8739L10.0001 13.6665L11.5853 14.4591C12.0278 14.6803 12.249 14.791 12.4407 14.9388C12.6109 15.0699 12.7634 15.2224 12.8945 15.3925C13.0423 15.5842 13.1529 15.8055 13.3741 16.248L14.1667 17.8332L14.9594 16.248C15.1806 15.8055 15.2912 15.5842 15.439 15.3925C15.5701 15.2224 15.7226 15.0699 15.8928 14.9388C16.0845 14.791 16.3057 14.6804 16.7482 14.4591L18.3334 13.6665L16.7482 12.8739C16.3057 12.6527 16.0845 12.542 15.8928 12.3943C15.7226 12.2631 15.5701 12.1106 15.439 11.9405C15.2912 11.7488 15.1806 11.5275 14.9594 11.085L14.1667 9.49984Z" stroke="#2970FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "add" :
        return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[6px]">
        <path d="M10.0001 6.66699V13.3337M6.66675 10.0003H13.3334M18.3334 10.0003C18.3334 14.6027 14.6025 18.3337 10.0001 18.3337C5.39771 18.3337 1.66675 14.6027 1.66675 10.0003C1.66675 5.39795 5.39771 1.66699 10.0001 1.66699C14.6025 1.66699 18.3334 5.39795 18.3334 10.0003Z" stroke="#0B3BEC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "favorite" : 
    return theme === "light" ?
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[12px]">
        <path d="M1 11.56C1 6.58195 1 4.09295 2.54648 2.54648C4.09295 1 6.58195 1 11.56 1H12.44C17.4181 1 19.907 1 21.4535 2.54648C23 4.09295 23 6.58195 23 11.56V12.44C23 17.4181 23 19.907 21.4535 21.4535C19.907 23 17.4181 23 12.44 23H11.56C6.58195 23 4.09295 23 2.54648 21.4535C1 19.907 1 17.4181 1 12.44V11.56Z" fill="#B2CCFF"/>
        <path d="M11.4673 5.59578C11.6384 5.25803 11.724 5.08916 11.8402 5.03521C11.9413 4.98826 12.0587 4.98826 12.1598 5.03521C12.276 5.08916 12.3616 5.25803 12.5327 5.59578L14.1567 8.80005C14.2072 8.89976 14.2325 8.94961 14.2694 8.98832C14.3021 9.02259 14.3413 9.05036 14.3848 9.07009C14.434 9.09237 14.4905 9.10041 14.6035 9.11649L18.236 9.63361C18.6185 9.68807 18.8097 9.7153 18.8982 9.80629C18.9752 9.88546 19.0115 9.99425 18.9968 10.1024C18.98 10.2266 18.8415 10.358 18.5646 10.6207L15.9371 13.1133C15.8552 13.191 15.8142 13.2298 15.7878 13.2761C15.7644 13.317 15.7494 13.362 15.7436 13.4085C15.737 13.461 15.7467 13.5159 15.766 13.6256L16.386 17.1463C16.4514 17.5176 16.4841 17.7033 16.4226 17.8135C16.3692 17.9093 16.2742 17.9765 16.164 17.9964C16.0375 18.0193 15.8663 17.9316 15.5239 17.7562L12.2765 16.0929C12.1754 16.0411 12.1248 16.0152 12.0715 16.005C12.0243 15.996 11.9757 15.996 11.9285 16.005C11.8752 16.0152 11.8247 16.0411 11.7235 16.0929L8.47609 17.7562C8.13373 17.9316 7.96254 18.0193 7.83597 17.9964C7.72584 17.9765 7.63081 17.9093 7.57736 17.8135C7.51591 17.7033 7.54861 17.5176 7.614 17.1463L8.23396 13.6256C8.25329 13.5159 8.26295 13.461 8.25642 13.4085C8.25063 13.362 8.23561 13.317 8.21222 13.2761C8.18579 13.2298 8.14484 13.191 8.06293 13.1133L5.43544 10.6207C5.15851 10.358 5.02005 10.2266 5.0032 10.1024C4.98854 9.99425 5.02476 9.88546 5.10177 9.80629C5.19028 9.7153 5.38153 9.68807 5.76405 9.63361L9.39651 9.11649C9.50948 9.10041 9.56596 9.09237 9.61515 9.07009C9.65871 9.05036 9.69792 9.02259 9.73061 8.98832C9.76753 8.94961 9.7928 8.89976 9.84333 8.80005L11.4673 5.59578Z" fill="#0B3BEC"/>
        </svg>
        :
        theme === "dark" ?
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[12px]">
        <path d="M1 11.56C1 6.58195 1 4.09295 2.54648 2.54648C4.09295 1 6.58195 1 11.56 1H12.44C17.4181 1 19.907 1 21.4535 2.54648C23 4.09295 23 6.58195 23 11.56V12.44C23 17.4181 23 19.907 21.4535 21.4535C19.907 23 17.4181 23 12.44 23H11.56C6.58195 23 4.09295 23 2.54648 21.4535C1 19.907 1 17.4181 1 12.44V11.56Z" fill="#0040C1"/>
        <path d="M11.4673 5.59578C11.6384 5.25803 11.724 5.08916 11.8402 5.03521C11.9413 4.98826 12.0587 4.98826 12.1598 5.03521C12.276 5.08916 12.3616 5.25803 12.5327 5.59578L14.1567 8.80005C14.2072 8.89976 14.2325 8.94961 14.2694 8.98832C14.3021 9.02259 14.3413 9.05036 14.3848 9.07009C14.434 9.09237 14.4905 9.10041 14.6035 9.11649L18.236 9.63361C18.6185 9.68807 18.8097 9.7153 18.8982 9.80629C18.9752 9.88546 19.0115 9.99425 18.9968 10.1024C18.98 10.2266 18.8415 10.358 18.5646 10.6207L15.9371 13.1133C15.8552 13.191 15.8142 13.2298 15.7878 13.2761C15.7644 13.317 15.7494 13.362 15.7436 13.4085C15.737 13.461 15.7467 13.5159 15.766 13.6256L16.386 17.1463C16.4514 17.5176 16.4841 17.7033 16.4226 17.8135C16.3692 17.9093 16.2742 17.9765 16.164 17.9964C16.0375 18.0193 15.8663 17.9316 15.5239 17.7562L12.2765 16.0929C12.1754 16.0411 12.1248 16.0152 12.0715 16.005C12.0243 15.996 11.9757 15.996 11.9285 16.005C11.8752 16.0152 11.8247 16.0411 11.7235 16.0929L8.47609 17.7562C8.13373 17.9316 7.96254 18.0193 7.83597 17.9964C7.72584 17.9765 7.63081 17.9093 7.57736 17.8135C7.51591 17.7033 7.54861 17.5176 7.614 17.1463L8.23396 13.6256C8.25329 13.5159 8.26295 13.461 8.25642 13.4085C8.25063 13.362 8.23561 13.317 8.21222 13.2761C8.18579 13.2298 8.14484 13.191 8.06293 13.1133L5.43544 10.6207C5.15851 10.358 5.02005 10.2266 5.0032 10.1024C4.98854 9.99425 5.02476 9.88546 5.10177 9.80629C5.19028 9.7153 5.38153 9.68807 5.76405 9.63361L9.39651 9.11649C9.50948 9.10041 9.56596 9.09237 9.61515 9.07009C9.65871 9.05036 9.69792 9.02259 9.73061 8.98832C9.76753 8.94961 9.7928 8.89976 9.84333 8.80005L11.4673 5.59578Z" fill="#84ADFF"/>
        </svg>
        :
        ""
    case "edit" :
        return <div className="p-[6px] w-[32px] h-[32px] flex items-end justify-center ml-[4px] cursor-pointer relative top-[1px]">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M16.5 13.9995L15.6666 14.9112C15.2245 15.3946 14.6251 15.6662 14.0001 15.6662C13.3751 15.6662 12.7757 15.3946 12.3337 14.9112C11.891 14.4288 11.2916 14.1579 10.6668 14.1579C10.042 14.1579 9.44261 14.4288 8.99998 14.9112M1.5 15.6662H2.89545C3.3031 15.6662 3.50693 15.6662 3.69874 15.6202C3.8688 15.5793 4.03138 15.512 4.1805 15.4206C4.34869 15.3175 4.49282 15.1734 4.78107 14.8852L15.25 4.4162C15.9404 3.72585 15.9404 2.60656 15.25 1.9162C14.5597 1.22585 13.4404 1.22585 12.75 1.9162L2.28105 12.3852C1.9928 12.6734 1.84867 12.8175 1.7456 12.9857C1.65422 13.1348 1.58688 13.2974 1.54605 13.4675C1.5 13.6593 1.5 13.8631 1.5 14.2708V15.6662Z" stroke={theme === "light" ? "#667085" : "#667085"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div> 
    case "favoriteChat" :
        return props.isActive ? 
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M8.40205 1.8778C8.59412 1.48869 8.69015 1.29413 8.82053 1.23197C8.93396 1.17789 9.06574 1.17789 9.17918 1.23197C9.30955 1.29413 9.40558 1.48869 9.59766 1.8778L11.4199 5.56944C11.4766 5.68432 11.5049 5.74176 11.5464 5.78635C11.5831 5.82584 11.6271 5.85783 11.6759 5.88056C11.7311 5.90623 11.7945 5.91549 11.9213 5.93402L15.9973 6.5298C16.4266 6.59253 16.6412 6.6239 16.7405 6.72874C16.8269 6.81995 16.8675 6.94529 16.8511 7.06985C16.8322 7.21302 16.6768 7.36436 16.3661 7.66702L13.4177 10.5387C13.3258 10.6282 13.2798 10.673 13.2502 10.7263C13.2239 10.7734 13.2071 10.8252 13.2006 10.8788C13.1933 10.9393 13.2041 11.0025 13.2258 11.129L13.9215 15.1851C13.9948 15.6129 14.0315 15.8269 13.9626 15.9538C13.9026 16.0642 13.796 16.1417 13.6724 16.1646C13.5304 16.1909 13.3383 16.0899 12.9541 15.8879L9.31015 13.9716C9.19662 13.9119 9.13985 13.882 9.08004 13.8703C9.02709 13.8599 8.97262 13.8599 8.91966 13.8703C8.85986 13.882 8.80309 13.9119 8.68955 13.9716L5.04561 15.8879C4.66143 16.0899 4.46935 16.1909 4.32731 16.1646C4.20374 16.1417 4.09711 16.0642 4.03712 15.9538C3.96817 15.8269 4.00486 15.6129 4.07823 15.1851L4.77391 11.129C4.7956 11.0025 4.80644 10.9393 4.7991 10.8788C4.79261 10.8252 4.77576 10.7734 4.74951 10.7263C4.71986 10.673 4.6739 10.6282 4.58199 10.5387L1.63364 7.66702C1.32289 7.36436 1.16752 7.21302 1.14861 7.06985C1.13216 6.94529 1.1728 6.81995 1.25921 6.72874C1.35853 6.6239 1.57315 6.59253 2.00237 6.5298L6.07843 5.93402C6.20519 5.91549 6.26857 5.90623 6.32377 5.88056C6.37264 5.85783 6.41664 5.82584 6.45333 5.78635C6.49476 5.74176 6.52311 5.68432 6.57982 5.56944L8.40205 1.8778Z" fill="#EAAA08" stroke="#EAAA08" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        : 
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M8.40205 1.8778C8.59412 1.48869 8.69015 1.29413 8.82053 1.23197C8.93396 1.17789 9.06574 1.17789 9.17918 1.23197C9.30955 1.29413 9.40558 1.48869 9.59766 1.8778L11.4199 5.56944C11.4766 5.68432 11.5049 5.74176 11.5464 5.78635C11.5831 5.82584 11.6271 5.85783 11.6759 5.88056C11.7311 5.90623 11.7945 5.91549 11.9213 5.93402L15.9973 6.5298C16.4266 6.59253 16.6412 6.6239 16.7405 6.72874C16.8269 6.81995 16.8675 6.94529 16.8511 7.06985C16.8322 7.21302 16.6768 7.36436 16.3661 7.66702L13.4177 10.5387C13.3258 10.6282 13.2798 10.673 13.2502 10.7263C13.2239 10.7734 13.2071 10.8252 13.2006 10.8788C13.1933 10.9393 13.2041 11.0025 13.2258 11.129L13.9215 15.1851C13.9948 15.6129 14.0315 15.8269 13.9626 15.9538C13.9026 16.0642 13.796 16.1417 13.6724 16.1646C13.5304 16.1909 13.3383 16.0899 12.9541 15.8879L9.31015 13.9716C9.19661 13.9119 9.13985 13.882 9.08004 13.8703C9.02709 13.8599 8.97262 13.8599 8.91966 13.8703C8.85986 13.882 8.80309 13.9119 8.68955 13.9716L5.04561 15.8879C4.66143 16.0899 4.46935 16.1909 4.32731 16.1646C4.20374 16.1417 4.09711 16.0642 4.03712 15.9538C3.96817 15.8269 4.00486 15.6129 4.07823 15.1851L4.77391 11.129C4.7956 11.0025 4.80644 10.9393 4.7991 10.8788C4.79261 10.8252 4.77576 10.7734 4.74951 10.7263C4.71986 10.673 4.6739 10.6282 4.58199 10.5387L1.63364 7.66702C1.32289 7.36436 1.16752 7.21302 1.14861 7.06985C1.13216 6.94529 1.1728 6.81995 1.25921 6.72874C1.35853 6.6239 1.57315 6.59253 2.00237 6.5298L6.07843 5.93402C6.20519 5.91549 6.26857 5.90623 6.32377 5.88056C6.37264 5.85783 6.41664 5.82584 6.45333 5.78635C6.49476 5.74176 6.52311 5.68432 6.57982 5.56944L8.40205 1.8778Z" stroke={theme === "light" ? "#2D384B" : "#CECFD2"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
     case "downloadChat" :
        return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 9V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V9M12.3333 4.83333L9 1.5M9 1.5L5.66667 4.83333M9 1.5V11.5" stroke={theme === "light" ? "#2D384B" : "#CECFD2"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "settingsChat" :     
        return <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 3.66699L11.5 3.66699M11.5 3.66699C11.5 5.0477 12.6193 6.16699 14 6.16699C15.3807 6.16699 16.5 5.0477 16.5 3.66699C16.5 2.28628 15.3807 1.16699 14 1.16699C12.6193 1.16699 11.5 2.28628 11.5 3.66699ZM6.5 10.3337L16.5 10.3337M6.5 10.3337C6.5 11.7144 5.38071 12.8337 4 12.8337C2.61929 12.8337 1.5 11.7144 1.5 10.3337C1.5 8.95295 2.61929 7.83366 4 7.83366C5.38071 7.83366 6.5 8.95295 6.5 10.3337Z" stroke={theme === "light" ? "#2D384B" : "#CECFD2"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "fullWidthChat" :
        return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.66667 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V5.66667M5.66667 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V12.3333M16.5 5.66667V5.5C16.5 4.09987 16.5 3.3998 16.2275 2.86502C15.9878 2.39462 15.6054 2.01217 15.135 1.77248C14.6002 1.5 13.9001 1.5 12.5 1.5H12.3333M16.5 12.3333V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H12.3333" stroke={theme === "light" ? "#2D384B" : "#CECFD2"} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "playMessage" :
        return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99984 18.3337C14.6022 18.3337 18.3332 14.6027 18.3332 10.0003C18.3332 5.39795 14.6022 1.66699 9.99984 1.66699C5.39746 1.66699 1.6665 5.39795 1.6665 10.0003C1.6665 14.6027 5.39746 18.3337 9.99984 18.3337Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.9165 7.47144C7.9165 7.0737 7.9165 6.87483 7.99962 6.76381C8.07206 6.66705 8.18293 6.60652 8.30349 6.59791C8.44182 6.58803 8.60911 6.69557 8.94368 6.91065L12.8775 9.43954C13.1678 9.62618 13.313 9.71949 13.3631 9.83815C13.4069 9.94183 13.4069 10.0588 13.3631 10.1625C13.313 10.2812 13.1678 10.3745 12.8775 10.5611L8.94368 13.09C8.60911 13.3051 8.44182 13.4126 8.30349 13.4027C8.18293 13.3941 8.07206 13.3336 7.99962 13.2368C7.9165 13.1258 7.9165 12.927 7.9165 12.5292V7.47144Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "refreshMessage" :
        return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0443 8.7439C14.8128 10.9188 13.5805 12.9569 11.5413 14.1342C8.15342 16.0902 3.82132 14.9295 1.86531 11.5415L1.65698 11.1807M0.95527 7.25553C1.18677 5.08062 2.4191 3.04252 4.45825 1.86521C7.84616 -0.0907998 12.1783 1.06998 14.1343 4.45789L14.3426 4.81873M0.911133 13.0547L1.52118 10.778L3.79788 11.3881M12.2022 4.61137L14.4789 5.22141L15.0889 2.9447" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>       
    case "copyMessage" :
        return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.6665 13.3337V15.667C6.6665 16.6004 6.6665 17.0671 6.84816 17.4236C7.00795 17.7372 7.26292 17.9922 7.57652 18.152C7.93304 18.3337 8.39975 18.3337 9.33317 18.3337H15.6665C16.5999 18.3337 17.0666 18.3337 17.4232 18.152C17.7368 17.9922 17.9917 17.7372 18.1515 17.4236C18.3332 17.0671 18.3332 16.6004 18.3332 15.667V9.33366C18.3332 8.40024 18.3332 7.93353 18.1515 7.57701C17.9917 7.2634 17.7368 7.00844 17.4232 6.84865C17.0666 6.66699 16.5999 6.66699 15.6665 6.66699H13.3332M4.33317 13.3337H10.6665C11.5999 13.3337 12.0666 13.3337 12.4232 13.152C12.7368 12.9922 12.9917 12.7372 13.1515 12.4236C13.3332 12.0671 13.3332 11.6004 13.3332 10.667V4.33366C13.3332 3.40024 13.3332 2.93353 13.1515 2.57701C12.9917 2.2634 12.7368 2.00844 12.4232 1.84865C12.0666 1.66699 11.5999 1.66699 10.6665 1.66699H4.33317C3.39975 1.66699 2.93304 1.66699 2.57652 1.84865C2.26292 2.00844 2.00795 2.2634 1.84816 2.57701C1.6665 2.93353 1.6665 3.40024 1.6665 4.33366V10.667C1.6665 11.6004 1.6665 12.0671 1.84816 12.4236C2.00795 12.7372 2.26292 12.9922 2.57652 13.152C2.93304 13.3337 3.39975 13.3337 4.33317 13.3337Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>      
    case "settingsMessage" :
        return <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.99984 8.83301C2.46007 8.83301 2.83317 8.45991 2.83317 7.99967C2.83317 7.53944 2.46007 7.16634 1.99984 7.16634C1.5396 7.16634 1.1665 7.53944 1.1665 7.99967C1.1665 8.45991 1.5396 8.83301 1.99984 8.83301Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.99984 2.99967C2.46007 2.99967 2.83317 2.62658 2.83317 2.16634C2.83317 1.7061 2.46007 1.33301 1.99984 1.33301C1.5396 1.33301 1.1665 1.7061 1.1665 2.16634C1.1665 2.62658 1.5396 2.99967 1.99984 2.99967Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.99984 14.6663C2.46007 14.6663 2.83317 14.2932 2.83317 13.833C2.83317 13.3728 2.46007 12.9997 1.99984 12.9997C1.5396 12.9997 1.1665 13.3728 1.1665 13.833C1.1665 14.2932 1.5396 14.6663 1.99984 14.6663Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>     
    case "scrollToEnd" : 
        return <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.833496 6.83333L5.00016 11L9.16683 6.83333M0.833496 1L5.00016 5.16667L9.16683 1" stroke={theme === "light" ? "#2D384B" : "#CECFD2"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "back" :
        return theme === "light" ?
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6666 6H1.33325M1.33325 6L6.33325 11M1.33325 6L6.33325 1" stroke="#2D384B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        :
        theme === "dark" ?
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6666 6H1.33325M1.33325 6L6.33325 11M1.33325 6L6.33325 1" stroke="#CECFD2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        :
        ""
    case "document" :
        return theme === "light" ?
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[12px]">
        <path d="M15.6168 0H6.39419C2.38819 0 0 2.387 0 6.391V15.598C0 19.613 2.38819 22 6.39419 22H15.6058C19.6118 22 22 19.613 22 15.609V6.391C22.011 2.387 19.6228 0 15.6168 0Z" fill="#B2CCFF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7935 10.0417C12.1888 10.5667 12.1888 11.4326 12.7935 11.9583L12.8766 12.0297C14.4267 13.3765 15.6245 14.416 15.9845 16.5951C16.1138 17.363 15.3906 18 14.5198 18H7.48068C6.60983 18 5.88669 17.363 6.0144 16.5951C6.37597 14.416 7.573 13.3765 9.12314 12.0297L9.20546 11.9583C9.34873 11.835 9.46286 11.6865 9.54086 11.5217C9.61886 11.3569 9.65909 11.1794 9.65909 11C9.65909 10.8206 9.61886 10.6431 9.54086 10.4783C9.46286 10.3135 9.34873 10.165 9.20546 10.0417L9.12314 9.9703C7.573 8.6235 6.3752 7.584 6.0144 5.4049C5.88592 4.637 6.60906 4 7.47991 4H14.519C15.3899 4 16.113 4.637 15.9853 5.4049C15.6237 7.584 14.4267 8.6235 12.8766 9.9703L12.7935 10.0417ZM12.268 8.8531L12.2742 8.8489C13.4551 7.8878 14.3344 7.1724 14.449 5.4028C14.4524 5.35148 14.4425 5.30015 14.42 5.25296C14.3976 5.20578 14.3632 5.16407 14.3198 5.1312C14.2509 5.0784 14.1636 5.04962 14.0736 5.05H7.92534C7.81456 5.05 7.71455 5.092 7.64608 5.1606C7.58146 5.2236 7.54454 5.309 7.55069 5.4028C7.66532 7.1724 8.54386 7.8878 9.72474 8.8489C10.0371 9.103 10.371 9.3746 10.7171 9.6875C10.7924 9.75517 10.894 9.79312 10.9999 9.79312C11.1057 9.79312 11.2073 9.75517 11.2826 9.6875C11.6265 9.3767 11.958 9.1065 12.268 8.8531Z" fill="#0B3BEC"/>
        </svg>
        :
        theme === "dark" ?
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[12px]">
        <path d="M16.6168 1H7.39419C3.38819 1 1 3.387 1 7.391V16.598C1 20.613 3.38819 23 7.39419 23H16.6058C20.6118 23 23 20.613 23 16.609V7.391C23.011 3.387 20.6228 1 16.6168 1Z" fill="#0040C1"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7935 11.0417C13.1888 11.5667 13.1888 12.4326 13.7935 12.9583L13.8766 13.0297C15.4267 14.3765 16.6245 15.416 16.9845 17.5951C17.1138 18.363 16.3906 19 15.5198 19H8.48068C7.60983 19 6.88669 18.363 7.0144 17.5951C7.37597 15.416 8.573 14.3765 10.1231 13.0297L10.2055 12.9583C10.3487 12.835 10.4629 12.6865 10.5409 12.5217C10.6189 12.3569 10.6591 12.1794 10.6591 12C10.6591 11.8206 10.6189 11.6431 10.5409 11.4783C10.4629 11.3135 10.3487 11.165 10.2055 11.0417L10.1231 10.9703C8.573 9.6235 7.3752 8.584 7.0144 6.4049C6.88592 5.637 7.60906 5 8.47991 5H15.519C16.3899 5 17.113 5.637 16.9853 6.4049C16.6237 8.584 15.4267 9.6235 13.8766 10.9703L13.7935 11.0417ZM13.268 9.8531L13.2742 9.8489C14.4551 8.8878 15.3344 8.1724 15.449 6.4028C15.4524 6.35148 15.4425 6.30015 15.42 6.25296C15.3976 6.20578 15.3632 6.16407 15.3198 6.1312C15.2509 6.0784 15.1636 6.04962 15.0736 6.05H8.92534C8.81456 6.05 8.71455 6.092 8.64608 6.1606C8.58146 6.2236 8.54454 6.309 8.55069 6.4028C8.66532 8.1724 9.54386 8.8878 10.7247 9.8489C11.0371 10.103 11.371 10.3746 11.7171 10.6875C11.7924 10.7552 11.894 10.7931 11.9999 10.7931C12.1057 10.7931 12.2073 10.7552 12.2826 10.6875C12.6265 10.3767 12.958 10.1065 13.268 9.8531Z" fill="#84ADFF"/>
        </svg>
        :
        ""
    case "question" :
        return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_9598_2281)">
        <path d="M6.05992 6.00016C6.21665 5.55461 6.52602 5.1789 6.93322 4.93958C7.34042 4.70027 7.81918 4.61279 8.2847 4.69264C8.75022 4.77249 9.17246 5.01451 9.47664 5.37585C9.78081 5.73718 9.94729 6.19451 9.94659 6.66683C9.94659 8.00016 7.94659 8.66683 7.94659 8.66683M7.99992 11.3335H8.00659M14.6666 8.00016C14.6666 11.6821 11.6818 14.6668 7.99992 14.6668C4.31802 14.6668 1.33325 11.6821 1.33325 8.00016C1.33325 4.31826 4.31802 1.3335 7.99992 1.3335C11.6818 1.3335 14.6666 4.31826 14.6666 8.00016Z" stroke={theme === "light" ? "#98A2B3" : "#667085"} stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_9598_2281">
        <rect width="16" height="16" fill={theme === "light" ? "white" : "#21242C"}/>
        </clipPath>
        </defs>
        </svg>
    case "favoriteTemp" :
        return props.isActive ? 
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={()=> props.callBack ? props.callBack() : ""}>
        <path d="M8.40205 1.8778C8.59412 1.48869 8.69015 1.29413 8.82053 1.23197C8.93396 1.17789 9.06574 1.17789 9.17918 1.23197C9.30955 1.29413 9.40558 1.48869 9.59766 1.8778L11.4199 5.56944C11.4766 5.68432 11.5049 5.74176 11.5464 5.78635C11.5831 5.82584 11.6271 5.85783 11.6759 5.88056C11.7311 5.90623 11.7945 5.91549 11.9213 5.93402L15.9973 6.5298C16.4266 6.59253 16.6412 6.6239 16.7405 6.72874C16.8269 6.81995 16.8675 6.94529 16.8511 7.06985C16.8322 7.21302 16.6768 7.36436 16.3661 7.66702L13.4177 10.5387C13.3258 10.6282 13.2798 10.673 13.2502 10.7263C13.2239 10.7734 13.2071 10.8252 13.2006 10.8788C13.1933 10.9393 13.2041 11.0025 13.2258 11.129L13.9215 15.1851C13.9948 15.6129 14.0315 15.8269 13.9626 15.9538C13.9026 16.0642 13.796 16.1417 13.6724 16.1646C13.5304 16.1909 13.3383 16.0899 12.9541 15.8879L9.31015 13.9716C9.19662 13.9119 9.13985 13.882 9.08004 13.8703C9.02709 13.8599 8.97262 13.8599 8.91966 13.8703C8.85986 13.882 8.80309 13.9119 8.68955 13.9716L5.04561 15.8879C4.66143 16.0899 4.46935 16.1909 4.32731 16.1646C4.20374 16.1417 4.09711 16.0642 4.03712 15.9538C3.96817 15.8269 4.00486 15.6129 4.07823 15.1851L4.77391 11.129C4.7956 11.0025 4.80644 10.9393 4.7991 10.8788C4.79261 10.8252 4.77576 10.7734 4.74951 10.7263C4.71986 10.673 4.6739 10.6282 4.58199 10.5387L1.63364 7.66702C1.32289 7.36436 1.16752 7.21302 1.14861 7.06985C1.13216 6.94529 1.1728 6.81995 1.25921 6.72874C1.35853 6.6239 1.57315 6.59253 2.00237 6.5298L6.07843 5.93402C6.20519 5.91549 6.26857 5.90623 6.32377 5.88056C6.37264 5.85783 6.41664 5.82584 6.45333 5.78635C6.49476 5.74176 6.52311 5.68432 6.57982 5.56944L8.40205 1.8778Z" fill="#EAAA08" stroke="#EAAA08" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        : 
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={()=> props.callBack ? props.callBack() : ""}>
        <path d="M8.40205 1.8778C8.59412 1.48869 8.69015 1.29413 8.82053 1.23197C8.93396 1.17789 9.06574 1.17789 9.17918 1.23197C9.30955 1.29413 9.40558 1.48869 9.59766 1.8778L11.4199 5.56944C11.4766 5.68432 11.5049 5.74176 11.5464 5.78635C11.5831 5.82584 11.6271 5.85783 11.6759 5.88056C11.7311 5.90623 11.7945 5.91549 11.9213 5.93402L15.9973 6.5298C16.4266 6.59253 16.6412 6.6239 16.7405 6.72874C16.8269 6.81995 16.8675 6.94529 16.8511 7.06985C16.8322 7.21302 16.6768 7.36436 16.3661 7.66702L13.4177 10.5387C13.3258 10.6282 13.2798 10.673 13.2502 10.7263C13.2239 10.7734 13.2071 10.8252 13.2006 10.8788C13.1933 10.9393 13.2041 11.0025 13.2258 11.129L13.9215 15.1851C13.9948 15.6129 14.0315 15.8269 13.9626 15.9538C13.9026 16.0642 13.796 16.1417 13.6724 16.1646C13.5304 16.1909 13.3383 16.0899 12.9541 15.8879L9.31015 13.9716C9.19661 13.9119 9.13985 13.882 9.08004 13.8703C9.02709 13.8599 8.97262 13.8599 8.91966 13.8703C8.85986 13.882 8.80309 13.9119 8.68955 13.9716L5.04561 15.8879C4.66143 16.0899 4.46935 16.1909 4.32731 16.1646C4.20374 16.1417 4.09711 16.0642 4.03712 15.9538C3.96817 15.8269 4.00486 15.6129 4.07823 15.1851L4.77391 11.129C4.7956 11.0025 4.80644 10.9393 4.7991 10.8788C4.79261 10.8252 4.77576 10.7734 4.74951 10.7263C4.71986 10.673 4.6739 10.6282 4.58199 10.5387L1.63364 7.66702C1.32289 7.36436 1.16752 7.21302 1.14861 7.06985C1.13216 6.94529 1.1728 6.81995 1.25921 6.72874C1.35853 6.6239 1.57315 6.59253 2.00237 6.5298L6.07843 5.93402C6.20519 5.91549 6.26857 5.90623 6.32377 5.88056C6.37264 5.85783 6.41664 5.82584 6.45333 5.78635C6.49476 5.74176 6.52311 5.68432 6.57982 5.56944L8.40205 1.8778Z" stroke={theme === "light" ? "#98A2B3" : "#667085"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>   
    case "reloadTemp" :
        return <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.66675 7.33333C1.66675 7.33333 3.33757 5.05685 4.69494 3.69854C6.05232 2.34022 7.92808 1.5 10.0001 1.5C14.1422 1.5 17.5001 4.85786 17.5001 9C17.5001 13.1421 14.1422 16.5 10.0001 16.5C6.58084 16.5 3.69601 14.2119 2.79322 11.0833M1.66675 7.33333V2.33333M1.66675 7.33333H6.66675" stroke={theme === "light" ? "#98A2B3" : "#667085"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "closeTemp" :
        return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1L1 11M1 1L11 11" stroke={theme === "light" ? "#98A2B3" : "#667085"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    case "tempSidebarInfo" :
        return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99992 16.6667V7.5M9.99992 16.6667H8.33325M9.99992 16.6667H11.6666" stroke={theme === "light" ? "#2D384B" : "#CECFD2"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 4.16699C10 4.16699 10.0051 4.16699 10.0083 4.16699" stroke={theme === "light" ? "#2D384B" : "#CECFD2"} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
           
  }
}
