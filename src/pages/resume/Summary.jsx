import styles from "./Summary.module.css";

function Summary() {
  return (
    <div className={styles.container}>
      {/* Mobile photo strip - hidden on desktop */}
      {/* Reminder: This only changes mobile view, for consistency change photos down below too */}
      <div className={styles.mobilePhotos}>
        <img
          src="/summary_photos/headshot_v4.png"
          alt="casual_headshot"
          className={styles.mobilePhoto}
        />
        <img
          src="/summary_photos/summary_photo_lima_1.png"
          alt="PER_Conference"
          className={styles.mobilePhoto}
        />
        <img
          src="/summary_photos/summary_photo_range.png"
          alt="COL_Range"
          className={styles.mobilePhoto}
        />
        <img
          src="/summary_photos/summary_photo_puppets.png"
          alt="ECU_Meeting"
          className={styles.mobilePhoto}
        />
      </div>

      <div className={styles.grid}>
        <div className={styles.main}>
          {/* Formal Professional Summary */}
          <div className={styles.sectionLabel}>Professional Summary</div>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              Former U.S. Army officer with eight years of service, including
              four in Special Operations. Background in logistics, strategic
              communication, and influencing decision-making across complex,
              multi-stakeholder environments. Most recently worked within a
              defense AI and autonomy division, leading platform-level
              integration efforts for a multi-team AI ecosystem. Focused on
              translating complex systems and behavioral insights into products
              that drive user adoption, engagement, and sustained use.
            </p>
          </div>

          <div className={styles.sectionLabel}>My Approach</div>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              Hi, I'm Brian. I spent nine years in the Army; the last five of
              those as a Special Operations Officer. But before that title meant
              anything, I was doing what Army officers do: managing things I
              didn't fully understand yet, coordinating people who knew more
              than me, and figuring out how to make the whole system work
              anyway.
            </p>
            <p className={styles.paragraph}>
              Officers are generalists by design. You're rarely the subject
              matter expert in the room - you're just the person responsible for
              the outcome. That means your job is to understand enough of
              everything to ask the right questions, translate between
              specialists, and build a plan that accounts for all of it.
            </p>
            <p className={styles.paragraph}>
              That experience shaped a simple framework I carry into everything
              I build: understand what people believe, understand why it works
              for them, and design something better that they will choose
              instead.
            </p>
          </div>

          {/* Version A: Direct */}
          {/* <div className={styles.pullQuote}>
            I have spent the last four years getting paid to change what people
            believe.
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              That's the honest version of what a "Psychological Operations Officer" does.
              Most people hear that title and picture propaganda posters or
              loudspeakers mounted to helicopters. The reality is more
              interesting and less cinematic. It's research, targeting, message
              development, product design, channel selection, and capturing
              data. It's applied behavioral science with a mission attached.
            </p>
            <p className={styles.paragraph}>
              The core problem is always the same: you have an audience, they
              currently believe or do something that is working against your
              objective, and you need to move them. You can't force it. You
              can't fake it. You have to understand them well enough to meet
              them where they are, and build something credible enough that they
              take the next step on their own.
            </p>
          </div> */}

          {/* Version B: Softer */}
          <div className={styles.pullQuote}>
            All audiences have a door. The job is figuring out which key opens
            it.
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              That's simplest description of how Psychological Operations work.
              Most people immediately picture propaganda posters or loudspeakers
              mounted to helicopters. The reality is more interesting and less
              cinematic. It's research, targeting, message development, product
              design, channel selection, and capturing data. It's applied
              behavioral science with a mission attached.
            </p>
            <p className={styles.paragraph}>
              The core problem is always the same: you have an audience, they
              currently believe or do something that is working against your
              objective, and you need to move them. You can't force it. You
              can't fake it. You have to understand them well enough to meet
              them where they are, and build something credible enough that they
              take the next step on their own.
            </p>
          </div>

          <div className={styles.pullQuote}>
            Everything is a story if it's done right.
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              Any product or solution you present to a client is a narrative.
              And not in the soft sense. You are moving them from a current
              state to a future state, and the distance between those two points
              is bridged entirely by whether they believe the story you're
              telling. The demo, the pitch, the technical documentation - all of
              it is storytelling. The technology is just the supporting
              evidence.
            </p>
            <p className={styles.paragraph}>
              Psychological Operations made that explicit. The mission wasn't to
              build something impressive - it was to change what someone
              believed and therefore what they did. The product only mattered
              insofar as it served that goal. I think that's true of every
              product, most people just don't frame it that way.
            </p>
            <p className={styles.paragraph}>
              I'm not a developer who learned to communicate. In fact I don't
              think I'd call myself a developer at all. I am a communicator who
              learned to build - because I got tired of having ideas I couldn't
              execute myself.
            </p>
            <p className={styles.paragraph}>
              That shift is what drives how I approach every problem today.
            </p>
          </div>
        </div>
        {/* Remember to change mobile photos up top if you change these and want consistency */}
        <aside className={styles.sidebar}>
          <div className={styles.headshotWrapper}>
            <img
              src="/summary_photos/LinkedIn_Photo_v4.png"
              alt="Brian Bell"
              className={styles.headshot}
            />
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
