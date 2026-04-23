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
            video a month, short-form daily, production that scales as the
            channel does. The roadmap is real. The ask is simple. Corporate
            Brian can explain.
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
          Build and scale a professional online media organization that produces
          high-quality, idea-first content on discipline, identity, and modern
          life in order to establish a scalable content infrastructure, a
          durable high-trust audience, and a long-term monetization engine
          across platforms.
        </p>
      </div>

      <div className={styles.askStatement}>
        <div className={styles.workGroupLabel}>Problem Statement</div>
        <p className={styles.roadmapCopy}>
          How does brianTFbell scale from a high-potential content platform with
          a proven concept and demonstrated audience reach into a consistent,
          high-output media operation when full-time professional obligations
          constrain available time, bandwidth, and execution capacity;
          production, editing, and publishing are performed by a single
          operator; irregular output degrades audience growth and platform
          performance; no repeatable system exists to sustain scalable content
          delivery; and maintaining high content quality is essential to
          long-term brand value?
        </p>
      </div>

      <div className={styles.askStatement}>
        <div className={styles.workGroupLabel}>What I'm Asking For</div>
        <p className={styles.roadmapCopy}>
          Targeted resourcing to enable the transition from a single-operator,
          time-constrained content platform to a scalable, repeatable media
          operation.
        </p>
        <ul className={styles.askList}>
          <li>
            <span className={styles.askListLabel}>Time leverage</span> - Funding
            that offsets the opportunity cost of full-time professional
            obligations, creating dedicated capacity for consistent content
            production
          </li>
          <li>
            <span className={styles.askListLabel}>Production support</span> -
            Editing and workflow assistance that removes the single-operator
            bottleneck without degrading content quality
          </li>
          <li>
            <span className={styles.askListLabel}>Systems development</span> -
            Operational runway to build repeatable production systems,
            publishing cadence, and audience growth loops that sustain output at
            scale
          </li>
        </ul>
        <p className={styles.roadmapCopy}>
          <span className={styles.askListLabel}>End state:</span> A professional
          creator-led media organization operating on a predictable, high-output
          production cycle - delivering consistent idea-first content, driving
          sustained audience growth, and generating durable monetization across
          platforms.
        </p>
      </div>
      <div className={styles.divider} />
      <div className={styles.footer}>
        <div className={styles.footerHeading}>
          If you fall into one of the below categories, let's talk!.
        </div>
        <div className={styles.footerItem}>
          <span className={styles.footerNum}>01</span>
          <span>
            You back creators with a clear point of view and proven execution -
            and you’re interested in what happens when that operator is given
            the time and resources to scale.
          </span>
        </div>
        <br />
        <div className={styles.footerItem}>
          <span className={styles.footerNum}>02</span>
          <span>
            You’re building in media or the creator space and need someone who
            can operate at both the strategic and execution level - someone who
            can build the thing.
          </span>
        </div>
        <br />
        <div className={styles.footerItem}>
          <span className={styles.footerNum}>03</span>
          <span>
            You have a weird, obsessive idea and you want to know if it’s real -
            or if it can be turned into something real.
          </span>
        </div>

        <a href="mailto:briantfbell@gmail.com" className={styles.footerCta}>
          briantfbell@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Ask;
