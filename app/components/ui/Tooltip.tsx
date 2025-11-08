import * as Tooltip from "@radix-ui/react-tooltip"
import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

interface TooltipProps {
    Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
    text: string
}

const TooltipDemo = ({ Icon, text }: TooltipProps) => {
    return (
        <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <button className="IconButton">
                        <Icon color="#404040"/>
                    </button>
                </Tooltip.Trigger>
                <Tooltip.Content
                    className="TooltipContent bg-primary text-black text-sm px-2 py-1 rounded-xl shadow-md max-w-60 z-20"
                    sideOffset={5}
                >
                    {text}
                    <Tooltip.Arrow className="fill-black" />
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}

export default TooltipDemo
