import FixedInputChat from "./FixedInputChat";
import ChatHeading from "./ChatHeading";
import AiMessage from "./AiMessage";
import MyMessage from "./MyMessage";

type ChatSectionPropsType = {
    currentRoleId : string
}

export default function ChatSection(props : ChatSectionPropsType ){
    
    const fakeChat = [
        {id : "1", send : "llm", title : "я ИИ генерирую что по-кайфу, пишу код лучше стажера"},
        {id : "2", send : "i", title : "и чо, покажешь как сделать контроллируемый инпут ?"},
        {id : "3", send : "llm", title : "типа такой инпут который обвешан обработчиком, значением, на собственном стейте, с подключенным дебаунсом... а может и троттлингом ,прям по красоте чтобы было ? "},
        {id : "4", send : "i", title : "нет, простой контроллируемый инпут можешь показать ?"},
        {id : "5", send : "llm", title : "нет, я покажу тебе как вывести в консоль 'hello world' - 'console.log('hello world')'"},
        {id : "6", send : "i", title : "супер."},
    ]
    
    return (
        <div className='w-full flex flex-col justify-between items-center flex-grow rounded-[16px] bg-[#fff] dark:bg-[#21242C] z-[20] mb-[12px]'>
            <div className="w-full flex flex-col ">
                <ChatHeading currentRoleId={props.currentRoleId}/>
                <div className="w-full flex flex-col px-[24px] py-[16px]">
                    {
                        fakeChat.length && 
                        fakeChat.map(msg => {
                            if(msg.send === "llm"){
                                return (
                                    <AiMessage title={msg.title} key={msg.id}/>
                                )
                            } 
                            return (
                                <MyMessage title={msg.title} key={msg.id}/>
                            )
                        })
                    }
                </div>
            </div>
            <FixedInputChat/>
        </div>
    )
}