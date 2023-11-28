import { useVirtualizer } from '@tanstack/react-virtual';
import HistoryItem from "./HistoryItem";
import { useTheme } from "next-themes";
import "../style.css";
import { useRef } from 'react';

type fakeHistoryDataType = {
    date : string,
    history : Array<{id : string, role : string, requestMessage: string}>
}
export default function HistoryDynamicWindow() {
    const parentRef = useRef<HTMLDivElement>(null)
    const {theme} = useTheme();

    const sentences : Array<fakeHistoryDataType> = [
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
        },
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
    const count = sentences.length
    const virtualizer = useVirtualizer({
      count,
      getScrollElement: () => parentRef.current,
      estimateSize: () => 45,
    })
  
    const items = virtualizer.getVirtualItems();

      
return ( 
<div className='w-full h-[100%]'>
        <div
          ref={parentRef}
          className="List"
          style={{
            height: "100%",
            width: "100%",
            overflowY: 'auto',
            contain: 'strict',
            paddingRight : "15px"
          }}
          id={theme === "light" ? "historyWindowLight" : "historyWindowDark"}
        >
          <div
            style={{
              height: virtualizer.getTotalSize(),
              width: '100%',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${items[0]?.start ?? 0}px)`,
              }}
            >
              {items.map((virtualRow) => (
                <div
                  key={virtualRow.key}
                  data-index={virtualRow.index}
                  ref={virtualizer.measureElement}
                  className='flex'
                >
                 
                  <HistoryItem key={sentences[virtualRow.index].date} date={sentences[virtualRow.index].date} requestMessages={sentences[virtualRow.index].history}/>
             
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
)

    };