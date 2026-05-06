import styles from "./Creative.module.css";

const work = [
  {
    category: "YouTube",
    items: [
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
        title: "Fun: A Finite Resource in Video Games",
        meta: "1,346 views · Feb 2024 · 95.5% liked",
        note: "Fun is like oil. We need the children in the mines to get more of it.",
        link: "https://www.youtube.com/watch?v=SLE9cO6hI8k",
        embedId: "SLE9cO6hI8k",
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
  {
    category: "In Production",
    items: [
      {
        title: "Fast Food Rewards Points: A Full Economic Accounting",
        meta: "Script written · Data collected · In progress",
        note: "Thousands of data points across every major chain. The question: what is $1 actually worth at McDonald's vs. Chick-fil-A vs. Starbucks? Planning academic interviews with marketing and economics professors. Yes, seriously.",
        link: null,
      },
    ],
  },
  {
    category: "Brand & Design",
    items: [
      {
        title: "Delta Company Dawgs",
        meta: "Off-Duty Designs storefront",
        note: "Military unit merch built on hypebeast aesthetics — YungLA and DarkSport energy applied to Army culture. Dark palette, bold type, zero clipart.",
        link: null,
      },
      {
        title: "Life Skills for Soldiers",
        meta: "Marketing Director · 501(c)(3)",
        note: "800+ digital assets. 10K+ service members reached. Influencer network built from zero to 6,000+ followers in six months. All volunteer.",
        link: null,
      },
    ],
  },
];

function Creative() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroEyebrow}>brianTFbell</div>
        <h1 className={styles.heroHeading}>
          I take things people interact with casually and take them <em>embarrassingly seriously.</em>
        </h1>
        <p className={styles.heroBio}>
          U.S. Army Special Operations officer. Software developer. YouTube
          person.
        </p>
        <p className={styles.heroBio}>
          I make videos about pop culture, game theory, and whatever I can't
          stop thinking about - then I quantify them until the joke becomes a
          thesis. <br />
          638,000 people have watched me argue that Ted Mosby ruined his own
          life. I have since moved on. Mostly.
        </p>
        <br />
        <p className={styles.heroBio}>
          I post maybe twice a year because I have a day job. This page exists
          to answer the question: what happens if I didn't?
        </p>
      </div>

      <div className={styles.divider} />

      <div className={styles.workSection}>
        {work.map((group) => {
          const hasEmbed = group.items.some((i) => i.embedId);

          return (
            <div
              key={group.category}
              className={`${styles.workGroup} ${hasEmbed ? styles.hasEmbed : ""}`}
            >
              <div className={styles.workLeft}>
                <div className={styles.workGroupLabel}>{group.category}</div>
                <div className={styles.workItems}>
                  {group.items.map((item) => (
                    <div key={item.title} className={styles.workItem}>
                      <div className={styles.workItemInner}>
                        <div className={styles.workTitle}>
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                            >
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

              {hasEmbed && (
                <div className={styles.embedColumn}>
                  {group.items
                    .filter((i) => i.embedId)
                    .map((item) => (
                      <div key={item.embedId} className={styles.embedWrap}>
                        <iframe
                          src={`https://www.youtube.com/embed/${item.embedId}?modestbranding=1&rel=0`}
                          title={item.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.divider} />

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
        <div className={styles.roadmapEmbed}>
          <div className={styles.embedWrap}>
            <iframe
              src="https://www.youtube.com/embed/TC5ugWFohcM?start=9&end=50&modestbranding=1&rel=0"
              title="The Board Has Issued a Statement"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

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

      <div className={styles.footer}>
        <div className={styles.footerHeading}>
          I'm interested in three kinds of conversations.
        </div>
        <div className={styles.footerItem}>
          <span className={styles.footerNum}>01</span>
          <span>
            You back creators who have a point of view and the discipline to
            execute it - and you want to know what full-time looks like for
            someone who's been doing this between deployments and on nights &
            weekends.
          </span>
        </div>
        <div className={styles.footerItem}>
          <span className={styles.footerNum}>02</span>
          <span>
            You're building something in the creator or media space and need
            someone who can think strategically and make the thing.
          </span>
        </div>
        <div className={styles.footerItem}>
          <span className={styles.footerNum}>03</span>
          <span>
            You have a weird, obsessive idea and you want to know if it's
            actually a business.
          </span>
        </div>
        <div className={styles.footerItem}>
          <span className={styles.footerNum}>04</span>
          <span>
            You read "fast food rewards point economics" and thought — yeah, I'd
            watch that.
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

export default Creative;
