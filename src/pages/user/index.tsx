import UserLayout from "@/components/User/UserLayout";
import UserProfile, { Props as UserProfilePageProps } from "@/components/User/UserProfile";
import { ApiResponseModel } from "@/models/authModel";
import { UserDTO } from "@/models/user.entity";
import { setUser } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import { getUserById } from "@/services/user.service";
import { GetServerSideProps } from 'next';
import { parseCookies } from "nookies";
import { useDispatch, useSelector } from "react-redux";

const UserPage: React.FC<UserProfilePageProps> = (props: UserProfilePageProps) => {
    const dispatch = useDispatch();
    const user: UserDTO = {
        id: props.userData.id,
        firstName: props.userData.firstName,
        middleName: props.userData.middleName,
        lastName: props.userData.lastName,
        citizenNumber: props.userData.citizenNumber,
        email: props.userData.email,
        phone: props.userData.phone,
        createdAt: new Date(props.userData.createdAt),
        updatedAt: new Date(props.userData.updatedAt)
    }
    dispatch(setUser(user));
    return (
        <UserLayout>
            <div className="flex container h-full">
                <UserProfile chartData={props.chartData} profileData={props.profileData} userData={props.userData} />
            </div>
        </UserLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = parseCookies(context);
    const token = cookies['token'];
    const response = await getUserById(25, token);

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
        ],
        userData: response.data
    }
    return {
        props: {
            profileData: data.profileData,
            chartData: data.chartData,
            userData: response.data
        }
    }

}

export default UserPage;