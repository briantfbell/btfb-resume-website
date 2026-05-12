import { useState } from "react";
import styles from "./Creative.module.css";

const longForm = [
  {
    category: "Some Long-Form Videos",
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
        note: "Watched 46 episodes in 18 hours to stress-test my own argument. Did it hold up?",
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
        note: '"\My life is nothing I thought it should be and everything I was worried it would become because for 50 seconds I thought there was monsters on the world."\ ',
        link: "https://www.youtube.com/watch?v=P9K35WYeqCs",
        embedId: "P9K35WYeqCs",
      },
    ],
  },
];

const inProduction = [
  {
    title: "The Assassination of Quiznos by the Coward Subway",
    meta: "Script: In Progress · Data collected",
    note: "Quiznos was better. Toasted bread, actually good ingredients, and commercials featuring what can only be described as rat creatures screaming about subs. Then Subway launched the $5 Footlong in 2008 and used the recession to drag everyone to the bottom. Quiznos couldn't match the price without torching their whole thing, so they didn't, and then they were gone. The punchline is that a Subway footlong runs you $15 now. They killed the good sandwich shop to become the cheap option, and then stopped being that too.",
    link: null,
  },
  {
    title: "Evolution of the Boogaloo Aesthetic",
    meta: "Script: Not Started",
    note: "The Boogaloo movement started as a joke about a second civil war, and somehow the most lasting thing it produced was a really good Instagram feed. What began as libertarians in Hawaiian shirts has quietly mutated into something nobody saw coming - Japanese street cars, goth girls, submachine guns decked out in Baja Blast blue, and art direction so good you forget the brand started in a random militia forum. The politics are still in the DNA. But at this point the aesthetic has outgrown the ideology, and that's the more interesting story.",
    link: null,
  },
  {
    title: "Rewatching Kids' Movies through Adult Eyes",
    meta: "Script: Not Started",
    note: "There's a trend of TikTok edits with clips from a movie you haven't thought about since 2008, slaps an Ethel Cain track over it, and suddenly you're relating to the trauma of parental expectation of a panda learning martial arts. And the thing is - the emotion was always there. We just didn't catch it because kids are fucking stupid. When you rewatch you reckon with the fact that Monster House was a tale of grief, Shrek was about shame, and a lot of what we dismissed as silly was doing something real the whole time.",
    link: null,
  },

  {
    title: "The Economics of Fast Food Rewards Points",
    meta: "Script: In Progress · Data collected",
    note: "A dollar is a dollar is a dollar, except it isn't. Because not all rewards points are created equal. When fast food restaurants started offering me free stuff for downloading an app, well... I'm only human. So here's the thing - So I visited several major fast food chains, built an excel sheet that wound up exceeding the width of my 43\"\ monitor, and tried to figure out which one is actually giving you the best bang for your buck. I didn't do Starbucks; their reward system is weird and their food sucks.",
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

      <div className={`${styles.workGroup} ${styles.workGroupGrid}`}>
        <div className={styles.workLeft}>
          <div className={styles.workGroupLabel}>Ideas / In Production</div>
          <div className={`${styles.workItems} ${styles.workItemsGrid}`}>
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
