import { useEffect, useState } from "react";
import styles from "./Creative.module.css";

const phases = [
  {
    id: "current-state",
    number: "00",
    label: "Current State",
    timeline: "Now",
    heading: "The channel works when it exists.",
    body: "brianTFbell is a small YouTube channel with 638,000 lifetime views, 1,644 subscribers, and two videos published in the last year. The issue is not that the work has no audience. The issue is that the work appears, performs, and then disappears again while the next video gets built around a full-time career.",
    metrics: [
      { label: "Lifetime views", value: "638K" },
      { label: "Subscribers", value: "1,644" },
      { label: "Videos / year", value: "2" },
      { label: "Operators", value: "1" },
    ],
    milestones: [],
    callout: "The first business problem is not discovery. It is consistency.",
  },
  {
    id: "phase-1",
    number: "01",
    label: "Phase 1",
    timeline: "Months 0 - 12",
    heading: "Make the channel consistent.",
    body: "The first goal is simple: publish one strong long-form video every month and turn each release into short-form clips for YouTube Shorts, Instagram, TikTok, and Facebook. Long-form builds trust. Short-form creates discovery. The point is not to become a content farm. The point is to build a repeatable rhythm without losing the voice that made the work worth watching.",
    metrics: [
      { label: "Long-form videos", value: "12+" },
      { label: "Short-form clips", value: "100+" },
      { label: "Primary platforms", value: "4" },
      { label: "Core format", value: "Commentary" },
    ],
    milestones: [
      {
        tag: "Q1",
        title: "Production system built",
        detail:
          "Writing, filming, editing, thumbnail, publishing, and clipping workflows documented and tested.",
      },
      {
        tag: "Q2",
        title: "Monthly cadence established",
        detail:
          "One long-form video published each month with short-form clips cut from each release.",
      },
      {
        tag: "Q3",
        title: "Distribution loop refined",
        detail:
          "Shorts, Reels, TikToks, and Facebook clips tested to identify what actually drives new viewers back to the channel.",
      },
      {
        tag: "Q4",
        title: "Format review",
        detail:
          "Best-performing topics, hooks, structures, and clip formats identified before scaling output further.",
      },
    ],
    callout:
      "The channel gets funded first so the creator can stop treating every upload like a miracle.",
  },
  {
    id: "phase-2",
    number: "02",
    label: "Phase 2",
    timeline: "Months 12 - 24",
    heading: "Add production support without sanding off the voice.",
    body: "Once the cadence is proven, the next step is removing the single-person bottleneck. Editing help, production assistance, better equipment, and repeatable templates allow the channel to increase output while keeping the writing and creative direction creator-led. This is the transition from hobby workflow to small media operation.",
    metrics: [
      { label: "Long-form cadence", value: "1-2 / month" },
      { label: "Short-form cadence", value: "Several / week" },
      { label: "Production team", value: "2-3" },
      { label: "Revenue tests", value: "2+" },
    ],
    milestones: [
      {
        tag: "Q5",
        title: "Editor/workflow support added",
        detail:
          "Bring in editing or post-production help to reduce turnaround time without outsourcing the identity of the channel.",
      },
      {
        tag: "Q6",
        title: "Revenue experiments begin",
        detail:
          "Test platform revenue, sponsorships, affiliate opportunities, and project-based partnerships that fit the channel instead of cheapening it.",
      },
      {
        tag: "Q7",
        title: "Collaborative formats tested",
        detail:
          "Bring in guests, collaborators, or build partners where they make the video better, not just bigger.",
      },
      {
        tag: "Q8",
        title: "Operating model reviewed",
        detail:
          "Keep what compounds. Cut what only sounded smart in a plan. Decide what deserves more money, space, or people.",
      },
    ],
    callout:
      "The goal is not to professionalize the weirdness out of the channel. The goal is to make the weirdness easier to produce.",
  },
  {
    id: "phase-3",
    number: "03",
    label: "Phase 3",
    timeline: "Months 24+",
    heading: "Pilot a creator workspace.",
    body: "If the channel and community prove the demand, the next expansion is a small collaborative production space: a practical digital creator workshop with a green screen area, cameras, microphones, a podcast room, computers, and editing software. Think woodworking shop or pottery studio, but for people making videos, podcasts, thumbnails, clips, and weird internet projects.",
    metrics: [
      { label: "Green screen", value: "1" },
      { label: "Podcast room", value: "1" },
      { label: "Editing stations", value: "2+" },
      { label: "Rental model", value: "Hourly / member" },
    ],
    milestones: [
      {
        tag: "S1",
        title: "Internal studio first",
        detail:
          "Build a small production space primarily to support the channel, improve output, and reduce production friction.",
      },
      {
        tag: "S2",
        title: "Limited creator access",
        detail:
          "Open the space selectively to local creators, collaborators, and small teams to test real demand before committing to a larger footprint.",
      },
      {
        tag: "S3",
        title: "Rental model tested",
        detail:
          "Compare hourly rentals, memberships, workshops, and private production support against overhead, scheduling friction, and equipment wear.",
      },
      {
        tag: "S4",
        title: "Scale or stay small",
        detail:
          "If the economics work, expand. If they do not, keep the space as internal infrastructure for the media operation.",
      },
    ],
    callout:
      "The studio is not the company. The studio is infrastructure - useful only if it helps better work get made more often.",
  },
  {
    id: "end-state",
    number: "04",
    label: "End State",
    timeline: "Long term",
    heading: "A creator-led media operation with a physical home.",
    body: "The end state is a sustainable creator business built around long-form videos, short-form distribution, and eventually a practical space for digital creators to make things together. The channel builds the audience. The audience validates the community. The workspace gives the operation a home. Each piece should make the others stronger, or it should not exist.",
    metrics: [
      { label: "Core business", value: "Media" },
      { label: "Discovery engine", value: "Short-form" },
      { label: "Community layer", value: "Workspace" },
      { label: "Revenue streams", value: "3+" },
    ],
    milestones: [],
    callout:
      "The ask is not to fund a lifestyle. It is to buy enough time to build a creator business that can eventually sustain itself.",
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
            className={`${styles.planNavBtn} ${
              activeSection === phase.id ? styles.planNavBtnActive : ""
            }`}
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
            You've read The Ask and The Plan and want to know more about the
            person trying to make this weird little machine work.
          </span>
        </div>

        <br />

        <div className={styles.footerItem}>
          <span className={styles.footerNum}>02</span>
          <span>
            You have capital, a network, or an opportunity that fits the next
            stage of the channel.
          </span>
        </div>

        <br />

        <div className={styles.footerItem}>
          <span className={styles.footerNum}>03</span>
          <span>
            You just want to talk about fast food rewards point economics.
            That's also acceptable.
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
