import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { FakeRolesMiniDataType } from "../page";
import chatBotMiniItem, { chatBotMiniItemPropsType } from "./ChatBotMiniItem";
import consultantMini from "../../../../public/consultantMini.png";
import marketologMini from "../../../../public/marketologMini.png";
import writerMini from "../../../../public/writerMini.png";
import businessMini from "../../../../public/businessMini.png";
import investorMini from "../../../../public/investorMini.png";
import seoMini from "../../../../public/seoMini.png";
import fitnesMini from "../../../../public/fitnesMini.png";
import { useTheme } from "next-themes";
import "../style.css";

type RolesHalfDynamicWindowPropsType = {
    callBack : (role : string) => void
}
export default function RolesHalfDynamicWindow( props : RolesHalfDynamicWindowPropsType) {
    const {theme} = useTheme();
    const fakeRolesMiniData : Array<FakeRolesMiniDataType> = [
        { id : "consultant", src : consultantMini, title : "Личный консультант" },
        { id : "marketolog", src : marketologMini , title : "Маркетолог" },
        { id : "writer", src : writerMini , title : "Писатель"},
        { id : "business", src : businessMini, title : "Бизнес ангел"},
        { id : "investor", src : investorMini, title : "Инвестор"},
        { id : "seo", src :  seoMini, title : "SEO специалист"},
        { id : "fitnes", src : fitnesMini , title : "Фитнес специалист"},
        { id : "consultant", src : consultantMini,  title : "Личный консультант" },
        { id : "marketolog", src : marketologMini,  title : "Маркетолог"},
        { id : "writer", src : writerMini , title : "Писатель"},
        { id : "business", src : businessMini, title : "Бизнес ангел"},
        { id : "consultant", src : consultantMini,  title : "Личный консультант" },
        { id : "marketolog", src : marketologMini,  title : "Маркетолог"},
        { id : "writer", src : writerMini , title : "Писатель"},
        { id : "business", src : businessMini, title : "Бизнес ангел"},
        { id : "consultant", src : consultantMini,  title : "Личный консультант" },
        { id : "marketolog", src : marketologMini,  title : "Маркетолог"},
        { id : "writer", src : writerMini , title : "Писатель"},
        { id : "business", src : businessMini, title : "Бизнес ангел"},
        
      ]
      const Row: React.FC<ListChildComponentProps> = ({ index, style }) => {
        const itemData: chatBotMiniItemPropsType = {
          ...fakeRolesMiniData[index],
          callBack: (role: string) => handleCallBack(role),
          id: fakeRolesMiniData[index].id,
        };
    
        return (
          <div style={{ ...style}}>
            {chatBotMiniItem(itemData)}
          </div>
        );
      };
    
 
      const handleCallBack = (role: string) => {
        props.callBack(role);

      };
    
return (
    <AutoSizer>
    {({ height, width}) => (
    <List
        className={theme === "light" ? "RolesWindowLight" : "RolesWindowDark"}
        height={height}
        itemCount={fakeRolesMiniData.length}
        itemSize={38}
        width={width}
        style={{overflowX : "hidden"}}
    >
        {Row}
    </List>
    )}
</AutoSizer>
)

    };