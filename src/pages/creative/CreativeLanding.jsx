import styles from "./CreativeLanding.module.css";

function CreativeLanding() {
  return (
    <div className={styles.container}>
      {/* BIO */}
      <p className={styles.paragraph}>
        Hi, I'm Brian - or brianTFbell as I go by online. I started making
        videos in 2019 because I was deployed to South Korea with too much time
        on my hands. The Army kept me busy enough that posting was never
        consistent, but the thinking never stopped. At some point I realized the
        gap between "guy with a YouTube channel" and "person who takes this
        seriously" wasn't talent or ideas - it was time.
      </p>

      {/* CHAPTER 1 */}
      <div className={styles.chapterTitle}>
        I never made videos about things. I made videos about what things mean.
      </div>
      <div className={styles.content}>
        <p className={styles.paragraph}>
          I didn't start with a content strategy. I started with questions I
          couldn't let go of - about the things people consume every day without
          really examining. The shows they watch. The loyalty programs they opt
          into. The characters they defend online at 2am. I made videos because
          I wanted to understand them myself.
        </p>
        <p className={styles.paragraph}>
          It turns out that's enough of a reason.
        </p>
      </div>

      {/* CHAPTER 2 */}
      <div className={styles.chapterTitle}>
        The internet moves fast. I'm more interested in what's underneath.
      </div>
      <div className={styles.content}>
        <p className={styles.paragraph}>
          There's a version of cultural commentary that treats its subjects as
          disposable - quick takes, fast opinions, move on. I'm interested in
          the opposite. What happens when you apply genuine rigor to something
          the internet has already decided isn't worth it? When you build an
          actual argument instead of a reaction? I think you get something that
          surprises people - not because the subject is serious, but because the
          treatment is.
        </p>
      </div>

      {/* CHAPTER 3 */}
      <div className={styles.chapterTitle}>
        Storytelling is the most underrated analytical tool we have.
      </div>
      <div className={styles.content}>
        <p className={styles.paragraph}>
          A well-constructed argument delivered as a story doesn't just inform -
          it changes how someone sees something they thought they already
          understood. That's what I'm building toward. The subjects are
          sometimes silly. The intention isn't.
        </p>
      </div>
    </div>
  );
}

export default CreativeLanding;
