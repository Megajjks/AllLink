import Sidebar from '../../Atoms/Sidebar';

import './styles.css';
const MainLayout = () => {
  return (
    <div className="main_layout">
      <Sidebar />
      <div className="main_layout--View">View</div>
    </div>
  );
};

export default MainLayout;
