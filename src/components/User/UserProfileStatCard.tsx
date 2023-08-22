import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export interface Props {
    val: string,
    description: string,
    changesNumber: number
}

const UserProfileStatCard: React.FC<Props> = (props: Props) => {
    return (
        <>
            <div className="flex items-center p-4 bg-white rounded">
                <div className={`flex flex-shrink-0 items-center justify-center ${props.changesNumber < 0 ? "bg-red-400" : "bg-green-200"} h-16 w-16 rounded`}>
                    {props.changesNumber < 0 ? <AiOutlineArrowDown className="w-6 h-6 fill-current text-red-700" /> : <AiOutlineArrowUp className="w-6 h-6 fill-current text-green-700" />}
                </div>
                <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">{props.val}</span>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">{props.description}</span>
                        <span className={`${props.changesNumber > 0 ? 'text-primary-green' : 'text-red-500'} text-sm font-semibold ml-2`}>{props.changesNumber < 0 ? "-" : "+"}{Math.abs(props.changesNumber)}%</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfileStatCard;