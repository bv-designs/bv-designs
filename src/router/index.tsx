import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  Testimonials,
  Projects,
  ProjectDetails,
  ContactUs,
} from '../pages';
import { Header, Footer, ScrollToTop } from '../components';

const BvRouter: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDetails />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default BvRouter;
