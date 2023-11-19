import googleAdsCommercial from "../../../public/googleAdsCommercial.svg";
import yandexCommercial from "../../../public/yandexCommercial.svg";
import vkCommercial from "../../../public/vkCommercial.svg";
import telegramCommercial from "../../../public/telegramCommercial.svg";
import metaCommercial from "../../../public/metaCommercial.svg";
import articleIdea from "../../../public/articleIdea.svg";
import articleIdeaDak from "../../../public/articleIdeaDark.svg";
import articleForBlog from "../../../public/articleForBlog.svg";
import articleForBlogDark from "../../../public/articleForBlogDark.svg";
import articleHeading from "../../../public/articleHeading.svg";
import articleHeadingDark from "../../../public/articleHeadingDark.svg";
import articleDescription from "../../../public/articleDescription.svg";
import articleDescriptionDark from "../../../public/articleDescriptionDark.svg";
import tagForArticle from "../../../public/tagForArticle.svg";
import tagForArticleDark from "../../../public/tagForArticleDark.svg";
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
   "article" : [
    {id : "ideaArticle" , title : "Идеи для статьи", src : articleIdea, srcDark : articleIdeaDak},
    {id : "yandexCommercial" , title : "Написать статью для блога", src : articleForBlog, srcDark : articleForBlogDark},
    {id : "vkCommercial" , title : "Заголовок статьи", src : articleHeading, srcDark : articleHeadingDark},
    {id : "telegramCommercial" , title : "Описание для статьи", src : articleDescription, srcDark : articleDescriptionDark},
    {id : "metaCommercial" , title : "Теги для статьи блога", src : tagForArticle, srcDark : tagForArticleDark},
    {id : "googleAdsCommercial" , title : "Описание объявления Google Ads", src : articleIdea, srcDark : articleIdeaDak},
    {id : "yandexCommercial" , title : "Идеи для статьи", src : articleForBlog, srcDark : articleForBlogDark},
    {id : "vkCommercial" , title : "Теги для статьи блога", src : articleHeading, srcDark : articleHeadingDark},
    {id : "telegramCommercial" , title : "Описание для статьи",  src : articleDescription, srcDark : articleDescriptionDark},
    {id : "metaCommercial" , title : "Теги для статьи блога",src : tagForArticle, srcDark : tagForArticleDark},
   ]
  }


export default function TemplateCardCommercial() {
    const {theme} = useTheme();
    return (
        <div className="md:w-full md:px-[20px] md:mt-[12px] md:flex md:sm:w-[49%] md:sm:mt-[0px] md:sm:px-[0]">
            <div className="md:w-[56%] md:pr-[12px] md:sm:pr-[20px] md:sm:w-full">
                <div className='xl:w-full xl:h-[436px] lg:w-[460px] lg:h-[386px] flex border border-[#D0D5DD] dark:border-[#333741] rounded-[20px]
                                md:w-full md:h-auto md:ml-[0px] md:rounded-[16px]'>
                    <div className='w-[596px] h-full xl:p-[32px] xl:pb-[40px] xl:pr-[28px] lg:p-[24px] lg:pb-[32px] lg:pr-[20px] flex flex-col 
                                    md:w-full md:p-[24px] md:pb-[32px]'>
                        <span className='xl:font-NeueMachinaBold xl:text-[24px] lg:font-InterBold lg:text-[20px] mb-[0px] relative bottom-[6px] right-[1px] 
                                        text-heading-text-lite dark:text-heading-text-dark
                                        md:text-[18px] md:font-InterBold md:right-[4px] md:whitespace-nowrap
                                        md:sm:whitespace-normal md:sm:text-[16px] md:sm:leading-[20px]'
                                        >
                                            Создать рекламные объявления
                        </span>
                        <div className='flex flex-col justify-start w-full h-full flex-wrap'>
                        {
                        fakeTemplateItems["commercial"].map(item => {
                            return (
                                <div key={item.id} className='flex xl:w-[254px] xl:h-[63px] lg:w-[207px] lg:h-[59px] items-center cursor-pointer
                                                md:h-[36px] md:items-center md:w-full md:sm:h-[54.5px]'>
                                    <Image src={item.src} alt={item.id} width={22} height={22} className="mr-[12px]"/>
                                    <span className="font-normal leading-[19px] TTNormsRegular xl:text-[16px] lg:text-[14px] text-template-card-item-text-lite
                                                dark:text-template-card-item-text-dark md:text-[14px]">{item.title}</span>
                                </div>
                            )
                        })
                        }
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden md:w-[44%] md:h-auto md:border md:border-[#D0D5DD] dark:border-[#333741] md:rounded-[16px] md:flex md:flex-col md:sm:hidden">
                <div className='flex flex-col justify-start w-full h-full flex-wrap md:w-full md:p-[24px] md:pb-[32px]'>
                    <span className='relative bottom-[6px] right-[1px] 
                                text-heading-text-lite dark:text-heading-text-dark
                                    md:text-[18px] md:font-InterBold md:right-[4px] md:whitespace-nowrap'
                                            >
                                    Контент для блога
                    </span>
                    {
                    fakeTemplateItems["article"].map(item => {
                        return (
                            <div className='flex xl:w-[254px] xl:h-[63px] lg:w-[207px] lg:h-[59px] items-center cursor-pointer
                                            md:h-[36px] md:items-center md:w-full'>
                                <Image src={ theme === "light" ? item.src : theme === "dark" ? item.srcDark : "ss" } alt={item.id} width={22} height={22} className="mr-[12px]"/>
                                <span className="font-normal leading-[19px] TTNormsRegular xl:text-[16px] lg:text-[14px] text-template-card-item-text-lite
                                                dark:text-template-card-item-text-dark md:text-[14px]">{item.title}</span>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
     
    )
}