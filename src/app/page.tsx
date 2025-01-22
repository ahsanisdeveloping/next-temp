"use client"
import Image from "next/image";
import styles from "./page.module.css";
import LandingComponent from "./motion/Motion";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
    <LandingComponent/>

    </div>
  );
}
