
export type HistoryItemPropsType = {
    date : string
    requestMessages : Array<{id : string, role : string, requestMessage: string}>
}

export default function HistoryItem(props : HistoryItemPropsType){
    function truncateText(text : string, maxLength : number) {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + "...";
        } else {
          return text;
        }
      }
    return (
        <div className="w-[234px] h-auto flex flex-col mb-[16px] ">
            <span className="font-InterMedium text-[12px] leading-[14px] text-[#98A2B3] dark:text-[#85888E] mb-[8px]">{props.date}</span>
            {
                props.requestMessages.map(d => {
                    return (
                <button className="w-[225px] h-[52px] rounded-[12px] border border-items-border-lite dark:border-items-border-dark 
                                   flex flex-col justify-center px-[16px] overflow-hidden whitespace-no-wrap truncate mb-[8px] relative
                                   hover:bg-[#F9FAFB] dark:hover:bg-items-border-dark"
                                   key={d.id}
                                   id="historyBtn">
                    <span className="font-TTNormsMedium text-[14px] leading-[14px] text-heading-text-lite dark:text-heading-text-dark">{d.role}</span>
                    <span className=" font-InterRegular text-[12px] leading-[18px] text-template-card-item-text-lite 
                                    dark:text-template-card-item-text-dark ">
                                {truncateText(d.requestMessage, 25)}
                    </span>
                </button>
                    )
                })
            }
            
        </div>
    )
} 