import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
