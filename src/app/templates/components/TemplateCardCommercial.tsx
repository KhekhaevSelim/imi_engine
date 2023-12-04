import googleAdsCommercial from "../../../../public/googleAdsCommercial.svg";
import yandexCommercial from "../../../../public/yandexCommercial.svg";
import vkCommercial from "../../../../public/vkCommercial.svg";
import telegramCommercial from "../../../../public/telegramCommercial.svg";
import metaCommercial from "../../../../public/metaCommercial.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

type FakeItemType = {
    id : string
    title : string
    src : string
    srcDark ?: string 
  }
  type fakeTemplateItemsType = {
   [key : string] : Array<FakeItemType>
  }
  const fakeTemplateItems : fakeTemplateItemsType = {
    "commercial" : [
    {id : "googleAdsCommercial" , title : "Заголовок объявления Google Ads", src : googleAdsCommercial},
    {id : "yandexCommercial" , title : "Заголовок объявления Яндекс Директ", src : yandexCommercial},
    {id : "vkCommercial" , title : "Заголовок объявления VK Реклама", src : vkCommercial},
    {id : "telegramCommercial" , title : "Заголовок объявления Telegram", src : telegramCommercial},
    {id : "metaCommercial" , title : "Заголовок объявления Meta(Facebook, Instagram)", src : metaCommercial},
    {id : "googleAdsCommercial" , title : "Описание объявления Google Ads", src : googleAdsCommercial},
    {id : "yandexCommercial" , title : "Описание объявления Яндекс Директ", src : yandexCommercial},
    {id : "vkCommercial" , title : "Описание объявления VK Реклама", src : vkCommercial},
    {id : "telegramCommercial" , title : "Описание объявления Telegram", src : telegramCommercial},
    {id : "metaCommercial" , title : "Описание объявления Meta(Facebook, Instagram)", src : metaCommercial},
  ],
  }


export default function TemplateCardCommercial() {
    const {theme} = useTheme();
    return (
        <div className="w-full h-[348px] rounded-[16px] pr-[24px] mb-[8px]">
            <div className='w-[482px] h-[348px] rounded-[16px] flex border border-[#D0D5DD] dark:border-[#333741]
                            '>
                <div className='w-full h-full px-[20px] pt-[16px] pb-[24px]'>
                    <span className='font-InterBold text-[18px] 
                                   text-heading-text-lite dark:text-heading-text-dark'>
                                        Создать рекламные объявления
                                    </span>
                    <div className='flex flex-col justify-start w-full h-full flex-wrap mt-[10px]'>
                    {
                    fakeTemplateItems["commercial"].map(item => {
                         return (
                            <div key={item.id} className='flex w-[213px] h-[55px] cursor-pointer items-center'>
                                <Image src={item.src} alt={item.id} width={22} height={22} className="mr-[12px]"/>
                                <span className="TTNormsRegular font-normal text-[14px] leading-[20px] text-template-card-item-text-lite 
                                                dark:text-template-card-item-text-dark">{item.title}</span>
                            </div>
                        )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

