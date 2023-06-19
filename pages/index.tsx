import React from 'react';
import Navbar from './Navbar';
import HeroSections from './HeroSections';
import JustArrived from './JustArrived';
import Goals from './Goals';
import Menus from './Menus';
import Messages from './Messages';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSections />
      <JustArrived />
      <Goals />
      <Menus />
      <Messages />
      <Footer />
    </>
  );
};

export default Home;
