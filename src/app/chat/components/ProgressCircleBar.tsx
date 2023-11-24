import { useTheme } from "next-themes";

type ProgressCircleBarPropsType = {
    percentage : number
}

export default function ProgressCircleBar(props : ProgressCircleBarPropsType) {
    const {theme} = useTheme();
    const percentage = props.percentage;
    const radius = 85;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100
    return (
        <svg className="w-[44px] h-[44px] mr-[14px]" viewBox="0 0 200 200">
            <defs>
                <linearGradient id="gradient">
                    <stop offset="35%" stop-color="#0017E4"/>
                    <stop offset="100%" stop-color="#3793FF"/>
                </linearGradient>
            </defs>
            <circle cx={100} cy={100} strokeWidth={10} r={radius} fill="none" className="stroke-[#fff] dark:stroke-[black]"/>
            <circle cx={100} cy={100} strokeWidth={10} r={radius} fill="none" className="" 
                            style={{strokeDasharray : dashArray, strokeDashoffset : dashOffset}}
                            transform="rotate(-90 100 100)" strokeLinecap="round" strokeLinejoin="round" 
                            stroke="url(#gradient)"/>
                     
            <text x="51%" y="55%" dy="0.3rem" textAnchor="middle" 
                  className="font-InterMedium text-[3rem]" 
                  fill={theme === "light" ? "#101828" : theme === "dark" ? "#F5F5F6" : "ss"}>{percentage}%</text>
        </svg>
    )
}