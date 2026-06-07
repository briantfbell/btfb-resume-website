import styles from "./CreativeLanding.module.css";

function CreativeLanding() {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.container}>
          {/* BIO */}
          <p className={styles.paragraph}>
            Hi, I'm Brian (or brianTFbell as I go by online). I started making
            videos in 2019 because I was deployed to South Korea with too much
            time on my hands. Since then, the Army kept me busy enough that
            posting was never consistent, but the thinking never stopped. At
            some point I realized the gap between "guy with a YouTube channel"
            and "person who takes this seriously" wasn't talent or ideas, just
            time.
          </p>

          {/* CHAPTER 1 */}
          <div className={styles.chapterTitle}>
            I never made videos about things. I try to make videos about what
            things mean.
          </div>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              I didn't start with any sort of content strategy. It was just
              videos on concepts I thought were interesting/funny and I figured
              the world was big enough that there'd be some audience who could
              relate. That turned into questions I couldn't let go of -
              questions about the things people consume every day without really
              examining: The shows they watch; The games they play; The loyalty
              programs they opt into; The characters they defend online at 2am.
              I made videos about these topics because I wanted to understand
              them better myself.
            </p>
          </div>

          {/* CHAPTER 2 */}
          <div className={styles.chapterTitle}>
            The internet moves fast, but what if we pause and take a closer
            look?
          </div>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              There's a version of cultural commentary that treats its subjects
              as disposable - quick takes, fast opinions, then they move on. I'm
              interested in the opposite. What happens when you apply genuine
              rigor to something the internet has already decided isn't worth
              it? When you build an actual argument instead of a reaction? I
              think the result might surprise people, or at least make them
              laugh.
            </p>
          </div>

          {/* CHAPTER 3 */}
          <div className={styles.chapterTitle}>
            Storytelling is the most underrated analytical tool we have.
          </div>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              A well-constructed argument delivered as a story doesn't just
              inform, it changes how someone sees something they thought they
              already understood. That's what I'm building toward. The subjects
              might sometimes be silly, but that doesn't mean they can't also be
              interesting (and hopefully still humorous).
            </p>
          </div>
        </div>
      </div>
      <div className={styles.photoCol}>
        <img
          src="/summary_photos/landing_photo.png"
          alt="Brian"
          className={styles.photo}
        />
      </div>
    </div>
  );
}

export default CreativeLanding;
