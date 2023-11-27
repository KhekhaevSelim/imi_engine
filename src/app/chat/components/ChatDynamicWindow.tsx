import { useVirtualizer } from '@tanstack/react-virtual';
import { useLayoutEffect, useRef, useState } from 'react';
import AiMessage from './AiMessage';
import MyMessage from './MyMessage';
import { useTheme } from 'next-themes';

export default function ChatDynamicWindow() {
    const parentRef = useRef<HTMLDivElement>(null)
    // const [maxRange, setMaxRange] = useState<number>(0);
    // useLayoutEffect(()=>{
    //     let maxRange = virtualizer.range;
    //     if(maxRange){
    //         setMaxRange(maxRange.endIndex)
    //     }
       
    // }, [])
    const {theme} = useTheme();
    const sentences =  [
        {id : "1", send : "llm", title : "я ИИ генерирую что по-кайфу, пишу код лучше стажера"},
        {id : "2", send : "i", title : "и чо, покажешь как сделать контроллируемый инпут, и чо, покажешь как сделать контроллируемый инпут, и чо, покажешь как сделать контроллируемый инпут и чо, покажешь как сделать контроллируемый инпут и чо, покажешь как сделать контроллируемый инпут ?"},
        {id : "3", send : "llm", title : "типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... а может и троттлингом ,прям по красоте чтобы было ? "},
        {id : "4", send : "i", title : "нет, простой контроллируемый инпут можешь показать ?"},
        {id : "5", send : "llm", title : "нет, я покажу тебе как вывести в консоль 'hello world' - 'console.log('hello world')'"},
        {id : "6", send : "i", title : "супер."},
        {id : "3", send : "llm", title : "типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... а может и троттлингом ,прям по красоте чтобы было ? "},
        {id : "4", send : "i", title : "нет, простой контроллируемый инпут можешь показать ?"},
        {id : "5", send : "llm", title : "нет, я покажу тебе как вывести в консоль 'hello world' - 'console.log('hello world')'"},
        {id : "6", send : "i", title : "супер."},
        {id : "3", send : "llm", title : "типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... а может и троттлингом ,прям по красоте чтобы было ? "},
        {id : "4", send : "i", title : "нет, простой контроллируемый инпут можешь показать ?"},
        {id : "5", send : "llm", title : "нет, я покажу тебе как вывести в консоль 'hello world' - 'console.log('hello world')'"},
        {id : "6", send : "i", title : "супер."},
        
    ]
    const count = sentences.length
    const virtualizer = useVirtualizer({
      count,
      getScrollElement: () => parentRef.current,
      estimateSize: () => 45,
    })
  
    const items = virtualizer.getVirtualItems()
    // console.log(virtualizer.range)
    // onClick={() => {
    //     virtualizer.scrollToIndex(count - 1)
    //   }}
    return (
      <div className='w-full h-full'>
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
          id={theme === "light" ? "chatWindowLight" : "chatWindowDark"}
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
                 
                  {sentences[virtualRow.index].send === "llm" ? 
                  <AiMessage key={sentences[virtualRow.index].id} title={sentences[virtualRow.index].title}/>
                    :
                  <MyMessage key={sentences[virtualRow.index].id} title={sentences[virtualRow.index].title}/>
                  }
                    
                  
                </div>
              ))}
            </div>
          </div>
          {/* {maxRange && <span>вниз</span>} */}
        </div>
      </div>
    )
  }