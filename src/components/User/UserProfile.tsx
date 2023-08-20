import BasicChart from "../Charts/BasicChart";
import UserProfileStatCard from "./UserProfileStatCard";

const UserProfile: React.FC = () => {

    const data = {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'],
        datasets: [
            {
                label: 'Aylık Satışlar',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="w-full h-full mt-10">
            <div className="grid md:grid-rows-3 lg:grid-rows-3 md:grid-cols-2 gap-2 w-full items-center lg:pl-5 lg:mt-10 mb-0 pb-0">
                <UserProfileStatCard data={{ changesNumber: -20, description: "test", val: "30" }} />
                <UserProfileStatCard data={{ changesNumber: 15, description: "test2", val: "600" }} />
                <UserProfileStatCard data={{ changesNumber: -99, description: "test3", val: "100" }} />
            </div>
            <div className="flex w-full items-center ">
                <div className="flex items-center mb-4 w-full h-full">
                    <BasicChart data={data} />
                </div>
            </div>
        </div>
    )
}

export default UserProfile;