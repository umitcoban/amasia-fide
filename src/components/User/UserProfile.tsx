import { UserDTO } from "@/models/user.entity";
import BasicChart, { Props as chartDataProps } from "../Charts/BasicChart";
import UserProfileStatCard, { Props as profileDataProps } from "./UserProfileStatCard";

export interface Props {
    chartData: chartDataProps,
    profileData: profileDataProps[],
    userData: UserDTO
}

const UserProfile: React.FC<Props> = (props: Props) => {
    return (
        <div className="w-full h-full mt-10">
            <div className="grid md:grid-rows-3 lg:grid-rows-3 md:grid-cols-2 gap-2 w-full items-center lg:pl-5 lg:mt-10 mb-0 pb-0">
                {props.profileData.map((profileData, index) => {
                    return <UserProfileStatCard key={index}
                        changesNumber={profileData.changesNumber} description={profileData.description} val={profileData.val} />
                })}
            </div>
            <div className="flex w-full items-center ">
                <div className="flex items-center mb-4 w-full h-full">
                    <BasicChart datasets={props.chartData.datasets} labels={props.chartData.labels} />
                </div>
            </div>
        </div>
    )
}

export default UserProfile;