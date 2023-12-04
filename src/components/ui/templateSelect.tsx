import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const TemplateSelect = SelectPrimitive.Root

const TemplateSelectGroup = SelectPrimitive.Group

const TemplateSelectValue = SelectPrimitive.Value

const TemplateSelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "justify-between w-[312px] h-[44px] px-[14px] py-[12px] rounded-[12px] bg-bg-lite dark:bg-bg-dark flex items-center focus:border-[2px] focus:border-template-item-text-active-lite outline-none focus:shadow-tempGenerateInput ring-offset-white hover:rext-[#fff] disabled:cursor-not-allowed",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild className="">
      <ChevronDown className="h-4 w-[36px] opacity-50 relative top-[2px] left-[1px] md:top-[3px] md:left-[-7px]" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
TemplateSelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const TemplateSelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
TemplateSelectContent.displayName = SelectPrimitive.Content.displayName

const TemplateSelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold text-[black]", className)}
    {...props}
  />
))
TemplateSelectLabel.displayName = SelectPrimitive.Label.displayName

const TemplateSelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none border-none outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 items-center font-TTNormsMedium text-[16px] leading-[19px] text-heading-text-lite",
      className
    )}
    {...props}
  >
    {/* <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span> */}

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
TemplateSelectItem.displayName = SelectPrimitive.Item.displayName

const TemplateSelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", className)}
    {...props}
  />
))
TemplateSelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  TemplateSelect,
  TemplateSelectGroup,
  TemplateSelectValue,
  TemplateSelectTrigger,
  TemplateSelectContent,
  TemplateSelectLabel,
  TemplateSelectItem,
  TemplateSelectSeparator,
}
