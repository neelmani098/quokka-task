import { useNavigate,Link } from "react-router-dom";
import Styles from '../styles/Dashboard.module.css';

const Dashboard = (props) => {

  const navigate = useNavigate();

  const onLogoutHandler = () => {
    props.logout();
    navigate("/", { replace: true });
  };


  return (
    <>
    <div className={Styles.dashboard}>
    <div>Hey Welcome to dashboard page!</div>
     <div>
      See your profile details, Click <Link to='/profile' style={{color:'red'}}>Profile</Link>
     </div>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      onClick={onLogoutHandler}
    >
      Sign Out
    </button>
    </div>
    
    </>
  );
};

export default Dashboard;
