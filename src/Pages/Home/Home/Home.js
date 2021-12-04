import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
          <Header></Header>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <Skills></Skills>
           <Projects></Projects>
           <Blogs></Blogs>
           <ContactMe></ContactMe>
           <Footer></Footer>
        </div>
    );
};

export default Home;