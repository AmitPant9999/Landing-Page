import Link from "next/link";

export default function Signin(){
    return <div className="-translate-x-10">
        <Link href={'./signin'} className="bg-white px-3 py-1 ">sign In</Link>
    </div>
}