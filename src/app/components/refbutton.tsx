import Link from "next/link"


export default function Refbutton({href,name}:{href:string,name:string}){
    return(
        <button className="border rounded-full bg-[#6fbcf0] p-2 w-1/2 mx-auto text-lg font-bold shadow-md shadow-white md:w-full">
            <Link href={href}>{name}</Link>
        </button>
    );
}
    