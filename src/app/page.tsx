"use client"

import Header from './components/Header'
import AIcategoties from './components/AIcategories';
import Templates from './components/Templates';
import ChatBots from './components/ChatBots';
import FixedInput from './components/FixedInput';
import MobileCategoriesPanel from './components/AIcategoriesMob';
import TemplateCardCommercial from './components/TemplateCardCommercial';
import TemplateCardSocial from './components/TemplateCardSocial';
import TemplateCardArticle from './components/TemplateCardArticle';
import { useTheme } from 'next-themes';



export default function Home() {
const {theme} = useTheme();
console.log(theme)

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-bg-lite dark:bg-bg-dark ">
      <Header/>
      <div className='flex-grow flex flex-col items-center xl:max-w-1216 lg:max-w-936 md:w-full md:items-baseline'>
        <AIcategoties/>
        <MobileCategoriesPanel/>
        <Templates/>
        <ChatBots/>
         <div className='w-full flex justify-between md:flex-col md:sm:flex-row md:mb-[150px] md:sm:mb-[0px] md:sm:vsm:hidden'>
          <TemplateCardSocial/>
          <TemplateCardCommercial/>
        </div>
        <TemplateCardArticle/>
        <FixedInput/>
      </div>
    </main>
  )
}
