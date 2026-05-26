import styles from "./Creative.module.css";

const work = [
  {
    category: "Other Creative Things I've Done, either professionally or at least semi-professionally",
    items: [

      {
        title: "Off-Duty Designs",
        meta: "Founder · Military merch LLC",
        note: "Print-on-demand storefront serving military units. Custom storefronts built on request. Covers its own costs and then some.",
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
