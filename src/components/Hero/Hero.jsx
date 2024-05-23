import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Arnav!</h1>
        <div className={styles.description}>
          <p>I'm a student at the <b>University of Texas at Austin</b> pursuing a double major in <b>Computer Science and Mathematics.</b> I'm interested in the rapidly-developing field of <b>ML, LLMs, and Agents.</b> </p>
          <br></br>
          <p>I'm passionate about creating software to meaningfully impact people's lives. Check out <b>my portfolio</b> to see how I've leveraged cutting-edge technologies to solve complex problems and push the boundaries of what's possible in AI and data science!</p>
          <br></br>
          <p>I love meeting new people and am always eager to learn from others - contact me at <a href="mailto:arnav.chopra1864@gmail.com">arnav.chopra1864@gmail.com</a>, or check out <a href>my blog (link later)</a> to see what I've been up to!</p>
          <br></br>
          <p><a href>My Resume (link later)</a></p>
        </div>
      </div>
      <img
          // src={getImageUrl("hero/me.jpg")}
          alt="Me standing in a suit, smiling"
          className={styles.heroImage}
        />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
