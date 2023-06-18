import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import FormMahasiswa from './forminputmahasiswa';
import Navbar from './Navbar';
import HeroSections from './HeroSections';
import Footer from './Footer';
import JustArrived from './JustArrived';
import Goals from './Goals';
import Menus from './Menus';
import Messages from './Messages';

export default function Home() {
  return (
    <>
      {/* <FormMahasiswa /> */}
      <Navbar />
      <HeroSections />
      <JustArrived />
      <Goals />
      <Menus />
      <Messages />
      <Footer />
    </>
  );
}
