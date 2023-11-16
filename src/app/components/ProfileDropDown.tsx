import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import ProfileImage from "../../../public/Avatar.svg";


export default function ProfileDropDown() {
    return (
        <Select>
            <Image src={ProfileImage} alt="avatar" className='mr-[16px] sm:mr-[3px] vsm:hidden'/>
            <div className='flex flex-col sm:hidden'>
            <span className='text-active-text-color-white text-[14px] font-medium font-TTNormsMedium relative top-[4px] right-[4px] 
                               md:text-[12px] md:top-[6px] md:right-[7px] md:font-InterMedium'>9 812 слов</span>
            <SelectTrigger className="w-[75px] h-[20px] text-text-color-white  flex px-[0px] py-[0px] hover:bg-[#fff] rounded-[20px] 
                                      relative right-[4px] hover:text-black">
                    <span className=' text-[12px] font-regular pl-[4px] pr-[4px] font-TTNormsMedium relative top-[2px] right-[2px]
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