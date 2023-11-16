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
   "blog" : [
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

export default function TemplateCardArticle() {
    const {theme} = useTheme();
    return (
        <div className="md:hidden md:sm:block w-full h-auto md:sm:px-[20px] xl:mt-[20px] lg:mt-[16px] md:mt-[12px] mb-[200px] md:sm:mb-[150px] md:sm:vsm:hidden">
            <div className="w-full h-auto border border-[#D0D5DD] dark:border-[#333741] rounded-[16px] flex flex-col">
                <div className='flex flex-col justify-start h-full flex-wrap w-full p-[24px] pb-[32px]'>
                    <span className='relative bottom-[6px] right-[1px] 
                                text-heading-text-lite dark:text-heading-text-dark
                                    md:text-[18px] md:font-InterBold md:right-[4px] md:whitespace-nowrap'
                                            >
                                    Контент для блога
                    </span>
                    {
                    fakeTemplateItems["blog"].map(item => {
                        return (
                            <div className='flex xl:w-[254px] xl:h-[63px] lg:w-[207px] lg:h-[59px] items-center cursor-pointer
                                            md:h-[36px] md:items-center md:w-full'>
                                <Image src={theme === "lite" ? item.src : item.srcDark ? item.srcDark : ""} alt={item.id} width={22} height={22} className="mr-[12px]"/>
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