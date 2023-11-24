import Link from "next/link";
import Image from 'next/image';
import LogoIcon from "../../../public/Logo_IMI.svg";

export default function Logo() {
    return (
        <Link 
        href={"http://localhost:3001"}
        className="lg:h-[65px] lg:w-[65px] md:h-[55px] md:w-[55px] rounded-[20px] md:rounded-[16px] block relative bottom-0 left-[-1px] xl:mr-[13px] lg:mr-[7px]"
        >
        <Image 
                src={LogoIcon}
                alt='logo'
                className='shadow-logo-shadow rounded-[20px] md:rounded-[16px]'
                />
        </Link>
    )
}