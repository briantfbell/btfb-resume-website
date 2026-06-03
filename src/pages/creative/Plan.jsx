import { useEffect, useState } from "react";
import styles from "./Creative.module.css";

const phases = [
  {
    id: "current-state",
    navLabel: "Current State",
    number: "00",
    label: "Current State",
    timeline: "Now",
    heading: "The channel works. It just doesn't exist enough.",
    body: (
      <>
        brianTFbell (the YouTube channel) has more than 638,000 lifetime views,
        over 1,600 subscribers, but I haven't made a single video in the last
        year - and trust me, I really hate that.
        <br />
        The audience shows up when there's something to show up for.
        <br />
        The problem is that between a full-time career and everything else,
        there usually isn't.
      </>
    ),
    metrics: [
      { label: "Lifetime views", value: "638K" },
      { label: "Subscribers", value: "1,644" },
      { label: "Videos / year", value: "2" },
      { label: "Team Size", value: "1" },
    ],

    milestones: [],
  },
  {
    id: "phase-1",
    navLabel: "Phase 1",
    number: "1st ",
    label: " Phase",
    timeline: "Months 0 - 12",
    heading: "Show Up. Do More.",
    body: "One long-form video a month. Every release gets cut into short-form clips for YouTube Shorts, Instagram, TikTok, and Facebook. Long-form is where the actual argument lives. Short-form is how new people find it. The goal isn't volume for its own sake - it's building a rhythm that doesn't collapse the moment life gets busy.",
    metrics: [
      { label: "Long-form videos", value: "12 +" },
      { label: "Short-form clips", value: "100 +" },
      { label: "Primary platforms", value: "4" },
      { label: "Core format", value: "Commentary" },
    ],
    milestones: [
      {
        tag: "Q1",
        title: "Production system built",
        detail:
          "Writing, filming, editing, thumbnail, publishing, and clipping - all of it documented so it can actually be repeated.",
      },
      {
        tag: "Q2",
        title: "Monthly cadence locked in",
        detail:
          "One long-form video out the door every month with short-form cuts following each release.",
      },
      {
        tag: "Q3",
        title: "Distribution tested",
        detail:
          "Shorts, Reels, TikToks, and Facebook clips go out and we figure out which ones actually bring people back to the channel.",
      },
      {
        tag: "Q4",
        title: "Format review",
        detail:
          "Look at what performed, what didn't, and what's worth doing more of before adding more complexity.",
      },
    ],
  },
  {
    id: "phase-2",
    navLabel: "Phase 2",
    number: "2nd",
    label: "Phase",
    timeline: "Months 12 - 24",
    heading: "Get some Assistance.",
    body: "Once the monthly cadence is real and not just a plan, the bottleneck becomes time. Bringing in editing help, better equipment, and repeatable templates means more videos can get out without the writing and creative direction getting handed off. The voice stays, the grunt work gets shared.",
    metrics: [
      { label: "Long-form cadence", value: "1 - 2 / Month" },
      { label: "Short-form cadence", value: " Several Weekly" },
      { label: "Production team", value: "2 - 3" },
      { label: "Revenue tests", value: "2 +" },
    ],
    milestones: [
      {
        tag: "Q5",
        title: "Editor brought in",
        detail:
          "Post-production help so turnaround time drops without the channel starting to sound like someone else made it.",
      },
      {
        tag: "Q6",
        title: "Revenue experiments start",
        detail:
          "Platform revenue, sponsorships, affiliate deals - tested against whether they fit the channel or just make it feel gross.",
      },
      {
        tag: "Q7",
        title: "Collaborative formats tried",
        detail:
          "Guests and collaborators where they make the video better, not just where they make it longer.",
      },
      {
        tag: "Q8",
        title: "Operating model reviewed",
        detail:
          "Keep what's working, cut what sounded good in a spreadsheet but wasn't, figure out where more resources actually help.",
      },
    ],
  },
  {
    id: "phase-3",
    navLabel: "Phase 3",
    number: "3rd",
    label: "Phase",
    timeline: "Months 24+",
    heading: "Build a Space to Scale.",
    body: "If the channel and the community are there, the next move is a small production space - green screen, cameras, microphones, a podcast room, editing stations. A woodworking shop for people making videos. Something local creators can actually use, not just a content backdrop for the main channel.",
    metrics: [
      { label: "Green Screen & Lighting Setup", value: "1" },
      { label: "Production Rooms", value: "4" },
      { label: "Editing stations", value: "2 +" },
      { label: "Rental model", value: "Hourly Rate" },
    ],
    milestones: [
      {
        tag: "S1",
        title: "Internal studio first",
        detail:
          "A small production space built primarily to make the channel better and faster, before anyone else uses it.",
      },
      {
        tag: "S2",
        title: "Limited outside access",
        detail:
          "Open it up to a handful of local creators and collaborators to see if the demand is actually there.",
      },
      {
        tag: "S3",
        title: "Rental model tested",
        detail:
          "Hourly, membership, workshops - run the numbers against real overhead and figure out what actually works.",
      },
      {
        tag: "S4",
        title: "Scale or stay small",
        detail:
          "If the economics make sense, grow it. If they don't, it stays as infrastructure for the channel and that's fine too.",
      },
    ],
  },
  {
    id: "end-state",
    navLabel: "End State",
    number: "∞",
    label: "End State",
    timeline: "Long term",
    heading: "A Media Operation with a Physical Home.",
    body: "Long-form videos with a real publishing cadence, short-form distribution that feeds new people into the channel, and a practical space where creators can actually make things. None of it needs to be big. It just needs to work - and each part of it should make the others better, or it probably shouldn't exist.",
    metrics: [
      { label: "Core business", value: "Media" },
      { label: "Discovery engine", value: "Short-Form" },
      { label: "Community layer", value: "Workspace" },
      { label: "Revenue streams", value: "3 +" },
    ],
    milestones: [],
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
            {phase.navLabel}
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
            <br />
          </div>

          {i < phases.length - 1 && <div className={styles.divider} />}
        </div>
      ))}

      <div className={styles.divider} />
      <br />
      <div className={styles.footer}>
        <div className={styles.footerHeading}>
          Now that you've read all that, feel free to reach out if:
        </div>

        <div className={styles.footerItem}>
          <span className={styles.footerNum}>01</span>
          <span>
            You want to know more about the person trying to make this weird
            little machine work.
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
            You just want to see my Excel table with all the fast food rewards
            point data. That's cool too.
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
