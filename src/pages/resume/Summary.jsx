import styles from "./Summary.module.css";

function Summary() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.main}>
          <div className={styles.sectionLabel}>Professional Summary</div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              Product-minded engineer and former U.S. Army Psychological
              Operations Officer with 8 years of experience designing influence
              campaigns across South America. Specialized in translating complex
              systems into intuitive products by combining user insight,
              narrative design, and technical execution.
            </p>
            <p className={styles.paragraph}>
              Currently building full-stack applications (React, Node.js,
              PostgreSQL) with a focus on data-driven decision tools and
              user-centered design. Seeking roles at the intersection of
              engineering, operations, and mission-critical systems -
              particularly in defense tech and high-impact environments.
            </p>
          </div>

          <div className={styles.sectionLabel}>My Approach</div>
          <p classname={styles.content}>
            <p className={styles.paragraph}>
              Hi, I'm Brian. I spent eight years as a U.S. Army Special
              Operations officer, which sounds like it should tell you a lot
              about me. It doesn't.
            </p>
            <p className={styles.paragraph}> </p>
            <p className={styles.paragraph}>
              The job was real and the work mattered, but the uniform was never
              the whole story. So let me tell you what actually filled those
              eight years.
            </p>
          </p>

          <div className={styles.pullQuote}>
            I have spent the last four years getting paid to change what people
            believe.
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              That's the honest version of "Psychological Operations Officer."
              The Army gave me a title, a team, and a problem: how do you shift
              the behavior of a population that doesn't speak your language,
              doesn't trust your government, and has every reason to ignore you?
              You tell better stories than the other guy. You figure out what
              people actually care about, then you build a narrative that meets
              them there.
            </p>
            <p className={styles.paragraph}>
              I like to think I got pretty good at it.
            </p>
            <p className={styles.paragraph}>
              The thing about information operations is that the craft
              transfers. The same instincts that went into designing influence
              campaigns across four countries in South America go into building
              a product people actually want to use, designing a radar-based
              motion sensor that looks like something out of a video game
              because that framing makes it easier to explain to a partner force
              with no technical background, or writing a YouTube video about a
              silly sitcom that holds attention for twenty-two minutes.
            </p>
          </div>

          <div className={styles.pullQuote}>
            Everything is a story if it's done right.
          </div>
          <div className={styles.content}>
            <div className={styles.paragraph}>
              So the question should always be: what story are we trying to
              tell, and who are we telling it to?
            </div>

            <div className={styles.paragraph}>
              This is the lens I bring to engineering. I'm not a developer who
              learned to communicate. In fact I don't think I'd call myself a
              developer at all. I am a communicator who learned to build -
              because I got tired of having ideas I couldn't execute myself.
            </div>
          </div>

          <div className={styles.lookingFor}>
            <div className={styles.lookingForLabel}>
              What I'm Actually Looking For
            </div>
            <p className={styles.lookingForText}>
              A role where the problem is genuinely hard, a competent team where
              I can be the dumbest person in the room - and therefore the one
              with the most to learn - and work that connects to something that
              matters. Defense tech fits that description. I am trying to find
              the intersection of systems, narratives, and people.
            </p>
            <p className={styles.lookingForText}>
              If this framing resonates - or if you want to push back on it -
              don't hesitate to reach out.
            </p>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.headshotWrapper}>
            {/* <img
              src="/summary_photos/LinkedIn_Photo_v2.png"
              alt="Brian Bell"
              className={styles.headshot}
            /> */}
            <img
              src="/summary_photos/summary_photo_lima_1.png"
              alt="Brian Bell"
              className={styles.headshot}
            />
            <img
              src="/summary_photos/summary_photo_range.png"
              alt="Brian Bell"
              className={styles.headshot}
            />
            <img
              src="/summary_photos/summary_photo_puppets.png"
              alt="Brian Bell"
              className={styles.headshot}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Summary;
