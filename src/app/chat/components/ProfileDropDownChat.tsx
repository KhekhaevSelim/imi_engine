import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ProfileDropDown() {
    return (
        <Select>
            <div className='flex flex-col sm:hidden'>
            <span className='text-header-bg-lite text-[14px] font-medium font-TTNormsMedium relative top-[4px] right-[4px] 
                               md:text-[12px] md:top-[6px] md:right-[7px] md:font-InterMedium
                               dark:text-[#fff]'>
                                9 812 слов</span>
            <SelectTrigger className="w-[85px] h-[20px] text-text-color-white  flex px-[0px] py-[0px] pb-[3px] hover:bg-[#fff] rounded-[20px] 
                                      relative right-[4px] hover:text-black">
                    <span className=' text-[14px] font-regular pl-[4px] pr-[4px] font-TTNormsMedium relative top-[2px] right-[2px]
                                      md:top-[2px] md:right-[6px]'>Premium</span>
            </SelectTrigger>
            </div>
            
            <SelectContent className="">
                <SelectGroup className="">
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}