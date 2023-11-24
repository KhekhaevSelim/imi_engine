import NavButton from "@/app/components/NavButton";
import HistoryItem from "./HistoryItem";

type fakeHistoryDataType = {
    date : string,
    history : Array<{id : string, role : string, requestMessage: string}>
}

export default function RightSideBar() {
    const fakeHistoryData : Array<fakeHistoryDataType> = [
        { date : "сегодня", 
          history : [
            {id : "1", role : "Писатель", requestMessage : "хочу написать книгу как быть фронтендером и не верстать, помоги"},
            {id : "2", role : "Статья в VK", requestMessage : "накидай чоткую статью про event loop"},
            {id : "3", role : "Художник", requestMessage : "Дай топ лайфхаков для быстрого прогресса в рисовании"},
            ] 
        },
        {
            date : "последние 7 дней",
            history : [
            {id : "4",  role : "Мечтатель", requestMessage : "как мечтать правильно"},
            {id : "5", role : "Доктор", requestMessage : "как стать онкологом"},
            ]
        },
        {
            date : "Последние 15 дней",
            history : [
                {id : "6",  role : "Тренер", requestMessage : "какие ДГТ пить с тестостероном"},
                {id : "7",  role : "Химик", requestMessage : "как отделить гидрохлорид от препарата"},
            ]
        }
    ]
 
    return (
        <div className="h-full w-[280px] xl:p-[20px] flex flex-col">
            <div className="w-[240px] h-[44px] flex items-center justify-between mb-[20px]">
                <span className="font-TTNormsMedium font-[20px] leading-[30px] text-heading-text-lite dark:text-heading-text-dark">История чата</span>
                <NavButton icon="searchTempBtn" callBack={()=>{}} component="searchTempBtn"/>
            </div>
            <div className="flex flex-col flex-grow">
                {
                    fakeHistoryData.map(d => {
                        return (
                            <HistoryItem date={d.date} requestMessages={d.history}/>
                        )
                    })
                }
            </div>
            
        </div>
    )
}