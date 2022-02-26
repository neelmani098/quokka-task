import { useContext } from "react";
import AuthContext from "../store/auth-context";

const Profile = ()=>{

    //to access value stores in local storage using context
    const authCtx = useContext(AuthContext);

    return(
        <>
            <div>
                Hey Congrats!<br/>
                If you see this message means your are logged in and have access for same.<br/>

                Credentials by which you logged in are: <br/>

                Email: {authCtx.email}<br/>
                Password: {authCtx.password}<br/>
            </div>
        </>
    )
}

export default Profile;