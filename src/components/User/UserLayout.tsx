import { ReactNode } from "react";
import UserNav from "./UserNav";

interface Props {
    children?: ReactNode;
}

const UserLayout: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            <UserNav>
                {children}
            </UserNav>
        </>
    )
}

export default UserLayout;