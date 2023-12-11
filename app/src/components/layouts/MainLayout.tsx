
import { ReactNode } from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = ({ children }:{children:ReactNode}) => {
    return (
      <>
        <Navbar />
        {children}
        <Footer/>
      </>
    );
  };

export default MainLayout