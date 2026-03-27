import styles from "./Creative.module.css";

function Plan() {
  return (
    <div>
      <div className={styles.workGroup}>
        <div className={styles.workLeft}>
          <div className={styles.workGroupLabel}>The Roadmap</div>
          <div className={styles.workItems}>
            <div className={styles.workItem}>
              <div className={styles.workItemInner}>
                <div className={styles.workTitle}>
                  Year 1 — Establishing Cadence
                </div>
                <div className={styles.workMeta}>
                  12 long-form · ~100 short-form · First 10K subscribers
                </div>
                <div className={styles.workNote}>
                  One video a month. Same format, same voice, just consistent.
                  Two Shorts or TikToks a week cut from long-form. The fast food
                  rewards point economics video drops here as the anchor piece.
                </div>
              </div>
            </div>
            <div className={styles.workItem}>
              <div className={styles.workItemInner}>
                <div className={styles.workTitle}>
                  Year 2 — Scaling the Obsession
                </div>
                <div className={styles.workMeta}>
                  12 long-form · Daily short-form · First brand deal
                </div>
                <div className={styles.workNote}>
                  Production steps up. Sourced interviews. Original data.
                  On-location where it makes sense. The studio concept gets
                  piloted - a rented commercial space built out with a green
                  screen room, podcast bay, and editing workstations available
                  by the hour. The channel subsidizes the overhead. The overhead
                  gives the channel a home.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.askStatement}>
        <div className={styles.workGroupLabel}>The Business Case</div>
        <p className={styles.roadmapCopy}>
          The channel doesn't need to be massive to be a business. It needs to
          be consistent, specific, and trusted. A niche audience that shows up
          every month is worth more to a brand partner than a viral moment that
          disappears. Year 1 builds the habit. Year 2 monetizes it. The studio
          concept turns overhead into infrastructure - a space that pays for
          itself while giving the channel a permanent home to grow from.
        </p>
      </div>

      <div className={styles.divider} />

      <div className={styles.footer}>
        <div className={styles.footerHeading}>Ready to talk?</div>
        <div className={styles.footerItem}>
          <span className={styles.footerNum}>01</span>
          <span>
            You've read The Ask and The Plan and you want to know more about the
            person behind them.
          </span>
        </div>
        <br />
        <div className={styles.footerItem}>
          <span className={styles.footerNum}>02</span>
          <span>
            You have capital, a network, or an opportunity that fits what you
            just read.
          </span>
        </div>
        <br />
        <div className={styles.footerItem}>
          <span className={styles.footerNum}>03</span>
          <span>
            You just want to talk about fast food rewards point economics.
            That's fine too.
          </span>
        </div>
        <br />
        <a href="mailto:briantfbell@gmail.com" className={styles.footerCta}>
          briantfbell@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Plan;
