import { useNavigate } from "react-router";

const UnauthorisedPage = ()=>{

    const navigate = useNavigate();

    //immediately invoke the function to navigate to Login Page
    (
        ()=>{
            setTimeout(()=>{
                navigate("/login")
            },3000)
        }
    )();
    

    return(
        <div>
            <p>Sorry, You do not have access to this page. You will be redirected to Login page in 3 Seconds...</p>
        </div>
    )
}

export default UnauthorisedPage;