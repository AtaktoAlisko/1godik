"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import cloud from "../../../public/images/cloud.png";
import bear from "../../../public/images/bear.jpg";
import stars from "../../../public/images/stars.png";
import styles from "./main.module.scss";
import ui from "../../../public/images/ui.png";
import proigr from "../../../public/images/proiriv.png";
import muz from "../../assets/muzik.mp3";

export default function Main() {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio(muz));
  }, []);

  function play() {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <div className={styles.Main}>
      <div className="absolute sm:left-10 sm:top-[200px] min-w-[300px]: left-5 top-[200px]">
        <button
          className={`${styles.muzik} ${isPlaying ? "animate-spin" : ""}`}
          onClick={play}
        >
          <Image height={35} width={80} src={proigr} alt="musik" />
        </button>
      </div>
      <div className={styles.pictures}>
        <Image
          className={`${styles.cloud} ${styles.movingImage}`}
          height={200}
          width={200}
          src={cloud}
          alt="cloud1"
        />
        <Image
          className={`${styles.cloudSecond} ${styles.movingImageSecond}`}
          height={200}
          width={200}
          src={cloud}
          alt="cloud2"
        />
        <Image
          className={styles.bear}
          height={260}
          width={260}
          src={bear}
          alt="bear"
        />
      </div>

      <div className="text-center text-[30px] sm:text-[30px]">
        <p className={styles.Tomiris}>Таир</p>
        <p className={styles.Tomiris}>1 Год</p>
        <p className={styles.Tomiris}> День Рождения</p>
      </div>

      <div className="flex justify-center justify-between mt-10">
        <Image
          className={styles.starss}
          height={90}
          width={100}
          src={stars}
          alt="stars"
        />
        <Image
          className={styles.stars}
          height={80}
          width={90}
          src={stars}
          alt="stars"
        />
      </div>
      <div className="mt-[-70px] mb-[70px]">
        <Image
          className={`${styles.cloudThird} ${styles.movingImageThird}`}
          height={100}
          width={100}
          src={cloud}
          alt="cloud3"
        />
      </div>

      <Image
        className="mx-auto mx-auto-mobile "
        height={250}
        width={250}
        src={ui}
        alt="ui"
      />
    </div>
  );
}
