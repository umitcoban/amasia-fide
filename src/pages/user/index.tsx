import UserLayout from "@/components/User/UserLayout";
import UserProfile, { Props as UserProfilePageProps } from "@/components/User/UserProfile";
import { GetServerSideProps } from 'next';

const UserPage: React.FC<UserProfilePageProps> = (props: UserProfilePageProps) => {
    return (
        <UserLayout>
            <div className="flex container h-full">
                <UserProfile chartData={props.chartData} profileData={props.profileData} />
            </div>
        </UserLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data: UserProfilePageProps = {
        chartData: {
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
        },
        profileData: [
            {
                changesNumber: 25,
                description: "test",
                val: "30"
            },
            {
                changesNumber: 25,
                description: "test",
                val: "30"
            },
            {
                changesNumber: 25,
                description: "test",
                val: "30"
            },
            {
                changesNumber: 25,
                description: "test",
                val: "30"
            }
        ]
    }
    return {
        props: {
            profileData: data.profileData,
            chartData: data.chartData
        }
    }

}

export default UserPage;