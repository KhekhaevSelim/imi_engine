import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import AiMessage from './AiMessage';
import MyMessage from './MyMessage';
import { useTheme } from 'next-themes';
import NavButton from '@/app/components/NavButton';

export default function ChatDynamicWindow() {
    const parentRef = useRef<HTMLDivElement>(null)
    const {theme} = useTheme();
    const [scrollContainerHeight, setScrollContainerHeight] = useState<number>(0);
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [showScrollToEnd, setShowScrollToEnd] = useState<boolean>(false);
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
  
    const items = virtualizer.getVirtualItems();

    const scrollToEnd = () => {
        virtualizer.scrollToIndex(sentences.length - 1);
    }

    const checkShowScrollToEnd = () => {
        return (scrollContainerHeight - scrollTop) > 260
    }

    useEffect(()=> {
        if(parentRef.current){
            setScrollContainerHeight(parentRef.current.getBoundingClientRect().height)
        }
        
        let timerId : NodeJS.Timeout | number ;
        timerId = setTimeout(()=> {
            scrollToEnd()
        }, 200) ;

        return () => clearTimeout(timerId);
    },[]);

    useEffect(()=> {
        if(parentRef.current){
            let newScrollTop =  parentRef.current.scrollTop;
            setScrollTop(newScrollTop)
        }
        setShowScrollToEnd(checkShowScrollToEnd)
        
    })

    
    return (
      <div className='w-full h-[full]'>
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
          
        </div>
        {showScrollToEnd && <NavButton component='scrollToEnd' icon='scrollToEnd' callBack={()=>scrollToEnd()}/>}
      </div>
    )
  }