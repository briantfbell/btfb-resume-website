import { useEffect, useState } from "react";
import styles from "./Creative.module.css";

const phases = [
  {
    id: "current-state",
    number: "00",
    label: "Current State",
    timeline: "As of 2025",
    heading: "What exists without resources.",
    body: "brianTFbell is a YouTube channel with 638,000 lifetime views, 1,644 subscribers, and two videos published in the last year. The content works. The top video has a 90.7% like rate. The Discord video has a 99.2% like rate. The constraint has never been quality or concept. It has been time. Every video on this channel was made by one person, around a full-time military career, with no dedicated production budget, no editor, and no system. This is the baseline.",
    metrics: [
      { label: "Lifetime views", value: "638K" },
      { label: "Subscribers", value: "1,644" },
      { label: "Videos / year", value: "2" },
      { label: "Operators", value: "1" },
    ],
    milestones: [],
    callout:
      "The channel isn't small because the content is bad. It's small because there's been no runway to make it consistently.",
  },
  {
    id: "pre-production",
    number: "01",
    label: "Pre-Production",
    timeline: "Month 0 - 2",
    heading: "Build before you launch.",
    body: "No content goes out until the system is ready to sustain it. The failure mode for creator channels isn't bad content - it's inconsistent content. Pre-production exists to make sure the first video isn't also the last for six months.",
    metrics: null,
    milestones: [
      {
        tag: "M0",
        title: "Systems setup",
        detail:
          "Workflow locked. Production templates built. Editing pipeline established. Channel audit complete.",
      },
      {
        tag: "M1",
        title: "Studio scouting",
        detail:
          "Commercial space identified. Equipment list finalized. AliExpress, Amazon, and Walmart orders placed for builds.",
      },
      {
        tag: "M2",
        title: "Content pipeline ready",
        detail:
          "Three videos banked before first upload. Editing workflow stress-tested. Publishing cadence scheduled.",
      },
    ],
    callout: null,
  },
  {
    id: "year-1",
    number: "02",
    label: "Year 1",
    timeline: "Month 1 - 12",
    heading: "Establish cadence. Prove the format.",
    body: "Two content series launch in Year 1. The opinion/analysis series is the existing channel - same voice, more consistent. The I Can Do That series is new: find a project someone else built with professional resources, rebuild it from scratch using accessible parts, write the code, post the repo. Each build video gets a short-form cut distributed across TikTok, Instagram, and Facebook.",
    metrics: [
      { label: "Target subscribers", value: "8K+" },
      { label: "Long-form videos", value: "24" },
      { label: "Short-form pieces", value: "100+" },
      { label: "GitHub repos", value: "12+" },
    ],
    milestones: [
      {
        tag: "Q1",
        title: "Opinion/analysis series launches",
        detail:
          "1 long-form video per month. 2-3 misc shorts per month. Fast Food Rewards Point Economics drops as the anchor piece.",
      },
      {
        tag: "Q2",
        title: "I Can Do That series launches",
        detail:
          "1 build video per month. 1 short-form cut per month across platforms. Debut build: a compass that always points to the nearest Chili's. GitHub repo public.",
      },
      {
        tag: "Q3",
        title: "Cadence locked",
        detail:
          "2 long-form videos per month. ~4 short-form per month. All repos public and documented.",
      },
      {
        tag: "Q4",
        title: "Year 1 review",
        detail:
          "Content audit. Top-performing formats identified. Year 2 production plan finalized based on data.",
      },
    ],
    callout:
      "The I Can Do That format is built for compounding. Every build video produces a repo, a short-form cut, and a documented process anyone can follow. The audience grows because the content is useful, not just entertaining.",
  },
  {
    id: "year-2",
    number: "03",
    label: "Year 2",
    timeline: "Month 13 - 24",
    heading: "Scale the operation. Build the infrastructure.",
    body: "Year 2 is where the channel becomes a business. Production quality steps up - sourced interviews, original data, on-location where it makes sense. Short-form goes daily. The studio concept gets piloted: a commercial space built out with a green screen room, podcast bay, photo studio, and editing workstations available by the hour. The channel subsidizes the overhead. The overhead gives the channel a permanent home.",
    metrics: [
      { label: "Target subscribers", value: "40K+" },
      { label: "Short-form cadence", value: "Daily" },
      { label: "Revenue streams", value: "2+" },
      { label: "Studio bays", value: "3+" },
    ],
    milestones: [
      {
        tag: "Q5",
        title: "Production quality steps up",
        detail:
          "Sourced interviews. Original data sets. On-location shoots where relevant. Guest collaborators on I Can Do That builds.",
      },
      {
        tag: "Q6",
        title: "Studio concept piloted",
        detail:
          "Commercial lease signed. Green screen room, podcast bay, photo studio, and editing workstations built out. Available by the hour to outside creators.",
      },
      {
        tag: "Q7",
        title: "First brand deal",
        detail:
          "Channel revenue covers production costs. Studio rental revenue covers overhead. Two independent income streams from one operation.",
      },
      {
        tag: "Q8",
        title: "Systems stable",
        detail:
          "Daily short-form. Consistent long-form. Studio operating. All three revenue streams active.",
      },
    ],
    callout:
      "The studio isn't a vanity project. It's the infrastructure that makes daily output sustainable without burning out a single operator. The channel funds the studio. The studio funds the channel.",
  },
  {
    id: "end-state",
    number: "04",
    label: "End State",
    timeline: "Month 24+",
    heading: "A professional creator-led media organization.",
    body: "A predictable, high-output production cycle delivering consistent idea-first content across platforms. A durable high-trust audience built on quality and consistency. A studio operation that generates independent revenue while supporting the channel. Long-term monetization across brand partnerships, studio rental, and platform revenue. This is what the channel looks like when time stops being the constraint.",
    metrics: [
      { label: "Subscriber target", value: "50K+" },
      { label: "Content cadence", value: "Daily" },
      { label: "Platform presence", value: "4+" },
      { label: "Revenue streams", value: "3+" },
    ],
    milestones: [],
    callout:
      "The ask isn't to fund a lifestyle. It's to buy enough time to build something that sustains itself.",
  },
];

function Plan() {
  const [activeSection, setActiveSection] = useState("current-state");

  useEffect(() => {
    const observers = phases.map((phase) => {
      const el = document.getElementById(phase.id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(phase.id);
        },
        { threshold: 0.3 },
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav className={styles.planNav}>
        {phases.map((phase) => (
          <button
            key={phase.id}
            className={`${styles.planNavBtn} ${activeSection === phase.id ? styles.planNavBtnActive : ""}`}
            onClick={() => scrollTo(phase.id)}
          >
            {phase.label}
          </button>
        ))}
      </nav>

      {phases.map((phase, i) => (
        <div key={phase.id} id={phase.id}>
          <div className={styles.planPhase}>
            <div className={styles.planPhaseHeader}>
              <span className={styles.planPhaseNumber}>{phase.number}</span>
              <div className={styles.planPhaseHeaderMeta}>
                <span className={styles.planPhaseLabel}>{phase.label}</span>
                <span className={styles.planPhaseTimeline}>
                  {phase.timeline}
                </span>
              </div>
            </div>

            <div className={styles.planPhaseBody}>
              <h2 className={styles.planPhaseHeading}>{phase.heading}</h2>
              <p className={styles.planPhaseCopy}>{phase.body}</p>

              {phase.metrics && (
                <div className={styles.planMetrics}>
                  {phase.metrics.map((m) => (
                    <div key={m.label} className={styles.planMetricCard}>
                      <div className={styles.planMetricValue}>{m.value}</div>
                      <div className={styles.planMetricLabel}>{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {phase.milestones.length > 0 && (
                <div className={styles.planMilestones}>
                  {phase.milestones.map((m) => (
                    <div key={m.tag} className={styles.planMilestone}>
                      <div className={styles.planMilestoneTag}>{m.tag}</div>
                      <div className={styles.planMilestoneContent}>
                        <div className={styles.planMilestoneTitle}>
                          {m.title}
                        </div>
                        <div className={styles.planMilestoneDetail}>
                          {m.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {phase.callout && (
                <div className={styles.planCallout}>
                  <span className={styles.planCalloutArrow}>&#8594;</span>
                  <p className={styles.planCalloutText}>{phase.callout}</p>
                </div>
              )}
            </div>
          </div>

          {i < phases.length - 1 && <div className={styles.divider} />}
        </div>
      ))}

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
