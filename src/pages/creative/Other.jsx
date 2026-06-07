import styles from "./Creative.module.css";

const work = [
  {
    category:
      "Other Creative Things I've Done, either professionally or at least semi-professionally",
    items: [
      {
        title: "Off-Duty Designs",
        meta: "Founder · Military merch LLC",
        note: (
          <>
            Off-Duty Designs started as a way to fill a gap - military units,
            community organizations, and even friend groups want custom
            merchandise, but the process of actually getting clothing made and
            ordered for 20+ people can be a real headache. I build each customer
            a personalized storefront that takes that makes it easy (and I think
            the designs are better). They send me what they want, I design the
            artwork and build out the collection, then they share the link and
            order.
            <br />
            <br />
            Over 20 custom collections later, hundreds of items sold, and the
            whole thing runs lean enough that it covers its own costs without
            much babysitting.
          </>
        ),
        link: "https://www.offdutydesigns.me",
        image: "/OffDutyDesigns_Showcase.png",
      },
      {
        title: "Life Skills for Soldiers",
        meta: "Marketing Director · 501(c)(3)",
        note: (
          <>
            Life Skills for Soldiers is a nonprofit focused on financial
            literacy for service members - a population that gets targeted by
            predatory lenders and car dealerships at a genuinely alarming rate.
            I came in as Marketing Director and built the digital presence
            basically from scratch.
            <br />
            <br />
            Weekly social media posts for five years, over 1,000+ assets
            created, and a network grown from zero to 6,000+ followers in six
            months, and over 10,000 Service Members reached through the content.
            All volunteer work.
          </>
        ),
        link: "https://www.lifeskillsforsoldiers.org",
        image: "/LSFS_Showcase.png",
      },
    ],
  },
];

function OtherStuff() {
  return (
    <div className={styles.workSection}>
      {work.map((group) => (
        <div key={group.category} className={styles.workGroup}>
          <div className={styles.workLeft}>
            <div className={styles.workGroupLabel}>{group.category}</div>
            <div className={styles.workItems}>
              {group.items.map((item) => (
                <div key={item.title} className={styles.workItem}>
                  <div
                    className={
                      item.image ? styles.workItemSplit : styles.workItemInner
                    }
                  >
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
                    {item.image && (
                      <div className={styles.workItemImageCol}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className={styles.workItemImage}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OtherStuff;
