import './styles.css';
import logo from '../../../assets/images/logo.png';
const Sidebar = () => {
  return (
    <sidebar className="sidebar_wrapper">
      <div className="sidebar--logo">
        <img src={logo} alt="logo alllinks" />
        AllLinks
      </div>
      <div className="sidebar--option_list">Bio</div>
      <div className="sidebar--avatar">avatar</div>
      <div className="sidebar--logout">logout</div>
    </sidebar>
  );
};

export default Sidebar;
