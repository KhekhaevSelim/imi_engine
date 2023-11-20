import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        defaultNavBtn: "rounded-[12px] text-text-color-white lg:font-TTNormsMedium md:font-TTNormsRegular lg:py-[6px] xl:pl-[16px] lg:pl-[8px] md:pl-[0px] flex justify-start xl:text-[16px] lg:text-[14px] md:text-[10px] md:sm:vsm:hidden",
        defaultCategoriesBtn: "border-none xl:font-TTNormsMedium lg:font-InterMedium md:font-interMedium text-black-text xl:px-[24px] xl:py-[8px] lg:px-[16px] lg:py-[8px]  md:sm:px-[16px] md:sm:py-[8px] vsm:flex vsm:flex-col md:sm:vsm:pb-[0px]  md:sm:vsm:px-[0px]",
        defaultTempBtn : "border border-items-border-lite dark:border-items-border-dark text-template-item-text-default-lite dark:text-template-item-text-dark rounded-[12px] xl:font-TTNormsRegular lg:font-InterRegular xl:text-[14px] lg:text-[12px] font-[400] w-max px-[12px] py-[6px] hover:bg-[#fff] dark:hover:bg-[black] mr-[6px]",
        // defaultTempBtnGrowed : "border border-[#D0D5DD] rounded-[12px] font-TTNormsMedium text-[14px] text-[#2D384B] font-[400] w-max px-[9px] py-[6px] hover:bg-[#fff] flex-grow mr-[4px]",
        defaultTempArrowRight : "border-none rounded-[10px] hover:bg-white dark:hover:bg-black absolute top-[0px] right-[0px] bg-bg-lite dark:bg-bg-dark shadow-arrow-r-20-lite dark:shadow-arrow-r-20-dark", 
        defaultTempArrowLeft : "border-none rounded-[10px] hover:bg-white dark:hover:bg-black absolute top-[0px] left-[0px] z-20 bg-bg-lite dark:bg-bg-dark shadow-arrow-r-20-lite dark:shadow-arrow-r-20-dark " ,
        
        defaultSendInput : "ml-[8px]",
        outline:"rounded-[12px] border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        activeNavBtn : "rounded-[12px] text-active-text-color-white lg:font-TTNormsMedium md:font-TTNormsRegular lg:py-[6px] xl:pl-[16px] lg:pl-[8px] md:pl-[0px] flex justify-start xl:text-[16px] lg:text-[14px] md:text-[10px] md:sm:vsm:hidden",
        activeCategoriesBtn : "h-[38px] rounded-[13px] bg-active-btn-white text-active-text-color-white xl:font-TTNormsMedium lg:font-InterMedium xl:px-[24px] xl:py-[8px] lg:px-[16px] lg:py-[8px] md:sm:px-[16px] md:sm:py-[8px] vsm:flex vsm:flex-col md:sm:vsm:pb-[0px] md:sm:vsm:px-[0px]",
        activeTempBtn : "rounded-[12px] border-none bg-template-card-item-bg-lite dark:bg-template-card-item-bg-dark xl:font-TTNormsRegular lg:font-InterRegular xl:text-[14px] lg:text-[12px] text-template-item-text-active-lite dark:text-template-item-text-dark font-[400] w-max px-[12px] py-[6px] mr-[6px]",
        // activeTempBtnGrowed : "rounded-[12px] border-none bg-[#FFFFFF] font-TTNormsMedium text-[14px] text-active-btn-white font-[400] w-max px-[12px] py-[6px] flex-grow mr-[4px]",
      },
      // 0px 0px 9px 13px #EDF2F6
      size: {
        default: "w-[22px] h-[32px]",
        defaultNavBtn : "h-[40px] w-max md:h-[61px]" ,
        defaultCategoriesBtn : "h-[38px] xl:w-1/4 lg:whitespace-nowrap xl:px-4 xl:py-2 lg:min-w-[83px] md:w-1/4 md:sm:min-w-[106px] md:sm:w-auto md:sm:vsm:min-w-[54px] vsm:h-[47px] vsm:flex-grow",
        defaultTempBtn : "w-max xl:h-[32px] lg:h-[30px]",
        defaultSendInput : "",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
