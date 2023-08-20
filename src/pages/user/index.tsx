import UserLayout from "@/components/User/UserLayout";
import UserProfile from "@/components/User/UserProfile";

const UserPage: React.FC = () => {
    return (
        <UserLayout>
            <div className="flex container h-full">
                <UserProfile />
            </div>
        </UserLayout>
    )
}

export default UserPage;