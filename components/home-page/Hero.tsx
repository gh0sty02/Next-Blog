import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          alt="An Image of Pranay"
          src="/images/site/ghosty.png"
          width={300}
          height={300}
        />
      </div>
      <h1>{"Hi, I'm Pranay"}</h1>
      <p>
        {
          "I blog about web development - especially frameworks such as React and Node "
        }
      </p>
    </section>
  );
};

export default Hero;
