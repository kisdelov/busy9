import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <div>
      <NavBar />
      <p className={`dark:text-${"white"} text-4xl`}>Home</p>
    </div>
  )
}
