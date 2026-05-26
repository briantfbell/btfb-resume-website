import { useState, useRef } from "react";
import styles from "./Creative.module.css";

function Ask() {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    if (iframeRef.current) {
      iframeRef.current.src =
        "https://www.youtube.com/embed/TC5ugWFohcM?start=9&end=50&autoplay=1&modestbranding=1&rel=0";
    }
  };

  return (
    <div>
      <div className={styles.roadmapSection}>
        <div className={styles.roadmapLeft}>
          <div className={styles.workGroupLabel}>The Ask</div>
          <p className={styles.roadmapCopy}>
            I post twice a year because I have a day job. Give me the runway to
            do this full time and here's what that looks like: one long-form
            video a month, short-form daily, and production support that scales
            with the channel instead of choking it. The roadmap is real and the
            ask is simple. Click over on the right there and corporate Brian can
            explain:
          </p>
        </div>

        <div className={styles.askEmbedColumn}>
          <div className={styles.embedWrap} onClick={handlePlay}>
            <iframe
              ref={iframeRef}
              src="https://www.youtube.com/embed/TC5ugWFohcM?start=9&end=50&modestbranding=1&rel=0"
              title="The Board Has Issued a Statement"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={playing ? "" : styles.iframeHidden}
            />
            {!playing && (
              <>
                <img
                  className={styles.embedThumb}
                  src="/corporate-brian.png"
                  alt="The Board Has Issued a Statement"
                />
                <div className={styles.embedPlay} />
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.askStatement}>
        <div className={styles.workGroupLabel}>Mission Statement</div>
        <p className={styles.roadmapCopy}>
          Build a creator-led media brand around comedy, commentary, and
          internet culture - making thoughtful, funny videos for people who grew
          up online and never fully left.
        </p>
      </div>

      <div className={styles.askStatement}>
        <div className={styles.workGroupLabel}>Problem Statement</div>
        <p className={styles.roadmapCopy}>
          The channel has already proven it can make distinctive work. The
          problem is consistency. Right now every video is researched, written,
          filmed, edited, and published by one person working around a full-time
          career. When a video ships, the audience responds. Then the channel
          goes quiet while the next one slowly gets made.
        </p>
      </div>

      <div className={styles.askStatement}>
        <div className={styles.workGroupLabel}>What I'm Asking For</div>
        <div className={styles.askNumber}>
          <span className={styles.askMoney}>$X</span>
          <span className={styles.askNumberText}> for </span>
          <span className={styles.askTime}>Y </span>
          <span className={styles.askNumberText}> months</span>
        </div>
        <div className={styles.askDuration}>
          The point is not an exact number. The point is enough runway to turn
          this from an occasional high-effort project into a real production
          operation.
        </div>

        <ul className={styles.askList}>
          <li>
            <span className={styles.askListLabel}>Time leverage</span> - The
            ability to dedicate serious working hours to writing, filming,
            editing, and publishing instead of fitting the channel into whatever
            time is left over
          </li>
          <li>
            <span className={styles.askListLabel}>Production support</span> -
            Editing and workflow help that removes the single-person bottleneck
            without sanding off the voice that makes the work worth watching
          </li>
          <li>
            <span className={styles.askListLabel}>Creative infrastructure</span>{" "}
            - A repeatable system for producing long-form videos, short-form
            clips, recurring formats, and future live or community-based ideas
          </li>
        </ul>
        <div className={styles.divider} />
        <p className={styles.roadmapCopy}>
          <span className={styles.askListLabel}>End state:</span> A consistent,
          creator-led media operation with a clear voice, a repeatable
          publishing cycle, and room to grow beyond videos without turning into
          generic creator-economy slop.
        </p>
      </div>
    </div>
  );
}

export default Ask;
