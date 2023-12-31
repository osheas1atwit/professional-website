import Image from "next/image";
import Link from "next/link";

import Layout from "../components/main-layout";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function About() {
  return (
    <Layout id={"info"}>
      <h3>My Links:</h3>
      <div>
        <a href='https://www.github.com/osheas1atwit' target='_blank'>
          <button className={utilStyles.bigButton}>My Github</button>
        </a>{" "}
        <a href='https://www.linkedin.com/in/simon-o-shea/' target='_blank'>
          <button className={utilStyles.bigButton}>My LinkedIn</button>
        </a>
      </div>

      <div style={{ margin: "1em 0" }}>
        I enjoy playing with my computer,{" "}
        <div className={styles.tooltip} title='click vid to enlarge'>
          riding my skateboard
          <span className={styles.tooltiptext}>
            <Link href='kickflip.gif' target='_blank'>
              <Image
                title='click to enlarge'
                src='/kickflip.gif'
                width={320}
                height={400}
              />
            </Link>
            I do stunts too.
          </span>
        </div>
        {/** TODO:
         *
         * make lil gif compilation
         * of my fingerboard creations
         * and throw in a clip at the end.
         * then replace this image with
         * it.
         *  |
         * \|/
         *  V
         */}
        ,{" "}
        <div className={styles.tooltip}>
          connecting with people
          <div
            className={styles.tooltiptext}
            style={{ fontSize: ".8em", width: "250px" }}
          >
            I founded the COF Skate Club, a student organization with over 100
            members in the Fenway area. My goal was to form a friendly community
            of skaters that spanned multiple college campuses in Boston. My
            executive board and I collaborated with several other organizations
            in the area, held custom skateboard workshops, raffled off
            equipment, and more. COF Skate Club is under new leadership and
            still going strong (instagram: @cofskateclub)!
          </div>
        </div>
        , and{" "}
        <div className={styles.tooltip} title='click image to enlarge'>
          making things with my hands
          <span className={styles.tooltiptext}>
            <Link href='fb.jpg' target='_blank'>
              <Image
                title='click to enlarge'
                src='/fb.jpg'
                width={518}
                height={484}
              />
            </Link>
            My first handmade fingerboard.
            <br /> 2022
          </span>
        </div>
        . I just recently graduated from Wentworth Institute of Technology with
        a degree in Computer Science and a minor in Business Managment.
        <br />
        <br />
        Working with computers has been an interest of mine since early high
        school when I{" "}
        <div className={styles.tooltip}>
          built my first gaming PC
          <span className={styles.tooltiptext}>
            <Link href='old_simon.jpg' target='_blank'>
              <Image
                title='click to enlarge'
                src='/old_simon.jpg'
                width={145}
                height={190}
                style={{ border: "black solid 1px" }}
              />{" "}
            </Link>
            <br />
            Me and my computer. <br />
            ~2016
          </span>
        </div>
        . Over the years and up until attending WIT, my focus shifted from
        hardware to software. I have set my sights on becoming a highly
        competent full-stack software engineer, and am looking to join a team of
        other passionate and motivated individuals!
        <br />
        <br />I enjoy making things that others can interact and engage with,
        especially if it helps them accomplish a goal, teaches them something,
        and/or puts a smile on their face. What do you like to make?
      </div>

      <hr />
      <Footer />
    </Layout>
  );
}

export function Footer() {
  return (
    <div className={utilStyles.spread}>
      <Link href='/resume.pdf' target='_blank'>
        view my resume
      </Link>

      <a
        target='_blank'
        rel='noopener noreferrer'
        href='mailto:vesspa0330@gmail.com'
      >
        email me
      </a>
    </div>
  );
}
