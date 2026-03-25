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
        link: "https://youtube.com/@briantfbell",
      },
      {
        title: "Discord: The Best Bar in Town",
        meta: "1,681 views · Nov 2024 · 99.2% liked",
        note: "Third place theory applied to the internet. Where everybody knows your screen name.",
        link: "https://youtube.com/@briantfbell",
      },
      {
        title: "Fun: A Finite Resource in Video Games",
        meta: "1,346 views · Feb 2024 · 95.5% liked",
        note: "Fun is like oil. We need kids in the mines to get more of it.",
        link: "https://youtube.com/@briantfbell",
      },
      {
        title: "The Rise of Absurdist Humor",
        meta: "2,701 views · Dec 2019",
        note: "Made this before Tim Robinson was a household name. The pattern was already there.",
        link: "https://youtube.com/@briantfbell",
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
      <div className={styles.found}>
        if you found this page, someone sent it to you.
      </div>

      <div className={styles.hero}>
        <div className={styles.heroEyebrow}>Brian Bell</div>
        <h1 className={styles.heroHeading}>
          I take things people interact with casually
          <br />
          and I take them <em>embarrassingly seriously.</em>
        </h1>
        <p className={styles.heroBio}>
          U.S. Army Special Operations officer. Software developer. YouTube
          person. I make videos about pop culture, game theory, and whatever I
          can't stop thinking about — then I quantify them until the joke
          becomes a thesis. 638K people watched me argue that Ted Mosby ruined
          his own life. I have since moved on. Mostly.
        </p>
        <p className={styles.heroBio}>
          I'm not a full-time creator. I'm something more useful: someone who
          understands systems, builds things from scratch, and happens to know
          how to make an audience care. If you're building something in the
          creator or media space and need a person who can think, make, and sell
          ideas — that's the conversation I'm interested in.
        </p>
        <a href="mailto:briantfbell@gmail.com" className={styles.heroCta}>
          let's talk &#8594;
        </a>
      </div>

      <div className={styles.divider} />

      <div className={styles.workSection}>
        {work.map((group) => (
          <div key={group.category} className={styles.workGroup}>
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
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.footer}>
        <div className={styles.footerHeading}>
          I'm interested in three kinds of conversations.
        </div>
        <div className={styles.footerItems}>
          <div className={styles.footerItem}>
            <span className={styles.footerNum}>01</span>
            <span>
              You're building something in the creator economy and need someone
              who can think strategically and execute creatively.
            </span>
          </div>
          <div className={styles.footerItem}>
            <span className={styles.footerNum}>02</span>
            <span>
              You have a weird, obsessive idea and you want to know if it's
              actually a business.
            </span>
          </div>
          <div className={styles.footerItem}>
            <span className={styles.footerNum}>03</span>
            <span>
              You read "fast food rewards point economics" and thought — yeah,
              I'd watch that.
            </span>
          </div>
        </div>
        <a href="mailto:briantfbell@gmail.com" className={styles.footerCta}>
          briantfbell@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Creative;
