import Image from "next/image"

export default function Tool(props: {href: string}) {
    return (
        <Image
            src={props.href}
            width={75}
            height={75}
            alt="Icone d'outil"
            className="cursor-pointer p-2"
        />
    )
}