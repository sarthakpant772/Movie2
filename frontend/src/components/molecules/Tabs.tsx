import { ReactNode, useState } from "react"

interface TabsProps {
    tabLabels: string[],
    children: ReactNode[]

}

export default function Tabs({ tabLabels, children }: TabsProps) {

    const [activeLabel, setActiveLabel] = useState(0);
    // console.log(children);
    return (
        <div>
            Tabs
            <div className="flex flex-row gap-2">
                {tabLabels.map((label, index) => <div className="px-[10px] py-[5px] rounded-sm bg-black text-white" onClick={() => setActiveLabel(index)} key={label}>{label}</div>)}
            </div>
            {children && children[activeLabel]}
        </div>
    )
}