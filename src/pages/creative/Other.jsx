import styles from "./Creative.module.css";

const work = [
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
        title: "Off-Duty Designs",
        meta: "Founder · Military merch LLC",
        note: "Print-on-demand storefront serving military units. Custom storefronts built on request. Covers its own costs and then some.",
        link: null,
      },
    ],
  },
  {
    category: "Nonprofit",
    items: [
      {
        title: "Life Skills for Soldiers",
        meta: "Marketing Director · 501(c)(3)",
        note: "800+ digital assets. 10K+ service members reached. Influencer network built from zero to 6,000+ followers in six months. All volunteer.",
        link: null,
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
        </div>
      ))}
    </div>
  );
}

export default OtherStuff;
