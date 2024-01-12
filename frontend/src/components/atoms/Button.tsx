import { MouseEventHandler, ReactNode } from "react"

interface ButtonProps {
    isSolid?:boolean,
    onClick?:MouseEventHandler<HTMLElement>,
    height?:string,
    width?:string,
    children: ReactNode[]|ReactNode
}

export default function Button({ children}: ButtonProps) {

    const commonStyles = "flex flex-row px-[1rem] py-[0.625rem] justify-center items-center gap-[0.625rem] rounded-[0.5rem]" 
    const solidStyles = "bg-[#1DE782] text-white";
    return (
        <button className={commonStyles+" "+solidStyles}>
            {children}
        </button>
    )
}
