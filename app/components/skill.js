import Image from "next/image";

export default function Skill({source, alt, title}) {
    return (
        <Image className="m-1" width="80" height="40" src={source} alt={alt} title={title}/>
    )
}