import { useState } from "react";
import styles from "./Creative.module.css";

const longForm = [
  {
    category: "Long-Form Videos",
    items: [
      {
        title: "Fun: A Finite Resource in Video Games",
        meta: "1,346 views · Feb 2024 · 95.5% liked",
        note: "Fun is like oil. We need the children in the mines to get more of it.",
        link: "https://www.youtube.com/watch?v=SLE9cO6hI8k",
        embedId: "SLE9cO6hI8k",
      },
      {
        title:
          "everyone in How I Met Your Mother kinda sucks (except Marshall)",
        meta: "638K views · Aug 2021 · 90.7% liked",
        note: "Watched 46 episodes in 18 hours to stress-test my own argument. It held up.",
        link: "https://www.youtube.com/watch?v=UqzVfOpaH8c",
        embedId: "UqzVfOpaH8c",
      },
      {
        title: "Discord: The Best Bar in Town",
        meta: "1,681 views · Nov 2024 · 99.2% liked",
        note: "Third place theory applied to the internet. A third place... where everybody knows your screen name.",
        link: "https://www.youtube.com/watch?v=BenEbKc4AE0",
        embedId: "BenEbKc4AE0",
      },
      {
        title: "The Rise of Absurdist Humor",
        meta: "2,701 views · Dec 2019",
        note: "Made this before Tim Robinson was a household name. The pattern was already there.",
        link: "https://www.youtube.com/watch?v=P9K35WYeqCs",
        embedId: "P9K35WYeqCs",
      },
    ],
  },
];

const inProduction = [
  {
    title: "The Economics of Fast Food Rewards Points",
    meta: "Script written · Data collected · In progress",
    note: "Thousands of data points across every major chain. The question: what is $1 actually worth at McDonald's vs. Chick-fil-A vs. Starbucks? Planning academic interviews with marketing and economics professors. Yes, seriously.",
    link: null,
  },
];

function Work() {
  const [playing, setPlaying] = useState({});

  return (
    <div className={styles.workSection}>
      {longForm.map((group) => (
        <div
          key={group.category}
          className={`${styles.workGroup} ${styles.workGroupEmbed}`}
        >
          <div className={styles.workLeft}>
            <div className={styles.workGroupLabel}>{group.category}</div>
            <div className={styles.workItems}>
              {group.items.map((item) => (
                <div key={item.title} className={styles.workItem}>
                  <div className={styles.workItemInner}>
                    <div className={styles.workTitle}>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noreferrer">
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </div>
                    <div className={styles.workMeta}>{item.meta}</div>
                    <div className={styles.workNote}>{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.embedColumn}>
            {group.items.map((item) => (
              <div
                key={item.embedId}
                className={styles.embedWrap}
                onClick={() =>
                  setPlaying((prev) => ({ ...prev, [item.embedId]: true }))
                }
              >
                {playing[item.embedId] ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${item.embedId}?autoplay=1&modestbranding=1&rel=0`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      className={styles.embedThumb}
                      src={`https://i.ytimg.com/vi/${item.embedId}/hqdefault.jpg`}
                      alt={item.title}
                    />
                    <div className={styles.embedPlay} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className={styles.workGroup}>
        <div className={styles.workLeft}>
          <div className={styles.workGroupLabel}>Ideas / In Production</div>
          <div className={styles.workItems}>
            {inProduction.map((item) => (
              <div key={item.title} className={styles.workItem}>
                <div className={styles.workItemInner}>
                  <div className={styles.workTitle}>{item.title}</div>
                  <div className={styles.workMeta}>{item.meta}</div>
                  <div className={styles.workNote}>{item.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
