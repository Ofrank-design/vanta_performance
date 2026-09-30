/* ==========================================================================
   VANTA PERFORMANCE: content data
   All programs, membership tiers, testimonials, team, journal and FAQ copy
   lives here. Image keys refer to entries in js/imageRegistry.js.
   ========================================================================== */

const SITE = {
  name: "Vanta Performance",
  tagline: "Private performance coaching for people who expect more from themselves.",
  email: "concierge@vantaperformance.com",
  phone: "+1 (310) 555-0192",
  address: "1 Meridian Place, Los Angeles, CA",
};

const PROGRAMS = [
  {
    slug: "the-executive",
    name: "The Executive",
    tagline: "For demanding schedules.",
    weeks: "12 Weeks",
    image: "programs.strength",
    tags: ["Strength", "Energy", "Mobility", "Resilience"],
    overview: "Built for people whose limit is time, not effort. The Executive fits serious training into a schedule that survives travel, back to back meetings and unpredictable weeks.",
    whoFor: "Founders, operators and senior leaders who train around a calendar they do not fully control.",
    experience: "Two to three sessions a week, each designed to deliver a full training effect in 45 minutes, with a mobile companion program for the weeks you are on the road.",
    methodology: "Strength work is sequenced around your recovery capacity rather than a fixed template. Sessions adjust when your sleep and stress data suggest you need less.",
    weeklyStructure: "Two strength sessions, one conditioning session, and a daily mobility sequence you can complete in a hotel room.",
    coachInvolvement: "A dedicated coach reviews your data each week and adjusts your programming before you have to ask.",
    aiSupport: "Vanta Intelligence adapts each session using how you slept, your stress markers and your travel schedule.",
    recoverySystem: "A structured evening routine, plus access to the recovery suite when you train in person.",
  },
  {
    slug: "the-athlete",
    name: "The Athlete",
    tagline: "Performance focused.",
    weeks: "16 Weeks",
    image: "programs.power",
    tags: ["Power", "Speed", "Strength", "Conditioning"],
    overview: "For people training toward a specific result rather than a general sense of fitness. The Athlete is organized around measurable output: power, speed and work capacity.",
    whoFor: "Competitive and former athletes who want to train like one again.",
    experience: "Four sessions a week, with quarterly testing to measure your progress against a baseline.",
    methodology: "A periodized strength and power block builds toward a defined peak, with conditioning added as the block progresses.",
    weeklyStructure: "Two strength and power sessions, one speed and conditioning session, and one recovery and mobility session.",
    coachInvolvement: "In person or video coaching for every session, with a coach present at all quarterly testing.",
    aiSupport: "Session load adapts to your daily readiness, and longer term programming adjusts as testing results arrive.",
    recoverySystem: "Weekly access to the recovery suite, plus a sleep and nutrition protocol built around your training block.",
  },
  {
    slug: "the-longevity-system",
    name: "The Longevity System",
    tagline: "For sustainable performance.",
    weeks: "24 Weeks",
    image: "programs.mobility",
    tags: ["Mobility", "Strength", "Recovery", "Lifestyle"],
    overview: "Built for people who plan in decades. The Longevity System balances strength, mobility and recovery to build a body that keeps performing well beyond a single season.",
    whoFor: "Anyone who wants to stay strong and mobile at fifty, sixty and beyond.",
    experience: "Three sessions a week with an emphasis on movement quality, joint health and the daily habits that compound over months.",
    methodology: "A gradual strength foundation is paired with a mobility and recovery system that lowers injury risk over the long run.",
    weeklyStructure: "Two strength sessions and one dedicated mobility and recovery session, supported by daily habit tracking.",
    coachInvolvement: "A detailed monthly review with your coach covering training, sleep, stress and nutrition together.",
    aiSupport: "Long range trend analysis flags early warning signs, such as declining sleep quality or a rising resting heart rate, before they become setbacks.",
    recoverySystem: "Full access to the recovery suite and a personal sleep protocol.",
  },
  {
    slug: "the-private-protocol",
    name: "The Private Protocol",
    tagline: "Fully customized.",
    weeks: "By Application",
    image: "programs.engine",
    tags: ["One to One", "Fully Bespoke"],
    overview: "A fully bespoke coaching relationship built around one person. There is no template. The protocol is designed around your goals, constraints and history.",
    whoFor: "Clients whose situation, goals or schedule do not fit a structured program.",
    experience: "One to one coaching with a dedicated performance director, organized entirely around your calendar.",
    methodology: "Built from scratch after a thorough consultation and assessment, and revisited as your needs change.",
    weeklyStructure: "Set by your goals and your schedule.",
    coachInvolvement: "Direct, ongoing access to your performance director, in person or remotely.",
    aiSupport: "Vanta Intelligence runs quietly in the background, and your performance director reviews its findings with you personally.",
    recoverySystem: "Unlimited access to the recovery suite and a fully personal recovery protocol.",
  },
];

const MEMBERSHIP_TIERS = [
  {
    tier: "Essential",
    description: "Structured coaching for people ready to commit to a defined program.",
    features: ["Structured program access", "Monthly coach check in", "Progress tracking"],
    featured: false,
  },
  {
    tier: "Signature",
    description: "Coaching, performance tracking and adaptive programming together.",
    features: ["Everything in Essential", "Vanta Intelligence adaptive programming", "Weekly coach review", "Recovery suite access"],
    featured: true,
  },
  {
    tier: "Private",
    description: "Close, one to one coaching with direct access to your coach.",
    features: ["Everything in Signature", "Dedicated performance director", "Priority scheduling", "Quarterly detailed assessment"],
    featured: false,
  },
  {
    tier: "Black",
    description: "By application only. A fully bespoke performance partnership.",
    features: ["Everything in Private", "Unlimited access", "Concierge scheduling", "Fully customized protocol"],
    featured: false,
  },
];

const TESTIMONIALS = [
  {
    quote: "I've worked with trainers for fifteen years. This is the first program that adjusted to my schedule instead of asking me to adjust to it.",
    name: "M. Chen",
    role: "Founder, Technology",
  },
  {
    quote: "The assessment told me more about my recovery patterns than three years of wearable data ever did.",
    name: "R. Okafor",
    role: "Managing Director, Finance",
  },
  {
    quote: "Private coaching without the ego. My coach changes the plan when the data says I need less, and never makes me feel I have to prove anything.",
    name: "A. Laurent",
    role: "Partner, Law",
  },
];

const TEAM = [
  { name: "Julian Voss", role: "Founder & Performance Director", image: "team.julianVoss", bio: "Fifteen years coaching executives and athletes, with a background in strength and conditioning for professional sport." },
  { name: "Dr. Naomi Reyes", role: "Director of Recovery Science", image: "team.naomiReyes", bio: "Leads the recovery and longevity protocols, drawing on a clinical background in sleep and stress physiology." },
  { name: "Marcus Bell", role: "Senior Performance Coach", image: "team.marcusBell", bio: "Specializes in strength and power development for The Athlete program, with a competitive powerlifting background." },
  { name: "Elena Cho", role: "Head of Vanta Intelligence", image: "team.elenaCho", bio: "Builds the adaptive systems behind the performance engine and turns daily data into coaching decisions." },
];

const JOURNAL = [
  {
    slug: "training-mistake-calendar-full",
    category: "Performance",
    date: "September 12, 2026",
    image: "journal.speed",
    title: "The Training Mistake High Performers Make When Their Calendar Gets Full",
    excerpt: "Skipped sessions are the obvious problem. The bigger one is what happens to the sessions that survive a brutal week.",
    body: [
      "When a week falls apart, most people assume the damage is the sessions they miss. Those are easy to see and easy to forgive. The quieter damage happens to the sessions that survive.",
      "A forty minute slot squeezed between calls tends to get the same plan as a ninety minute slot on a free Saturday, just cut short. The warm up disappears, the heavy work gets rushed, and the session ends with fatigue but very little training effect. Repeat that for a month and you have plenty of tiredness and not much progress.",
      "A better approach is to decide in advance what a short session is for. On a compressed day, one or two movements done well, with proper rest between sets, will do more than a full plan done badly. Our coaches build a short version of every session ahead of time, so a busy week means a smaller dose rather than a worse one.",
      "If your training tends to fall apart when your calendar fills, the plan probably needs redesigning. Discipline is rarely the issue.",
    ],
  },
  {
    slug: "recovery-is-not-a-day-off",
    category: "Recovery",
    date: "August 30, 2026",
    image: "journal.recovery",
    title: "Why Recovery Deserves a Place in Your Program",
    excerpt: "The people who recover best plan it with the same intent as a strength session.",
    body: [
      "Ask a group of ambitious people what they do on a rest day and many will describe what they avoid. Recovery gets treated as an absence, the space where training used to be.",
      "In practice, recovery is where the adaptation happens. Training provides the stimulus, and sleep, food, low stress and easy movement decide how much of that stimulus turns into strength, speed or endurance. Skimp on the second half and the first half is largely wasted.",
      "The people who recover well plan for it. They know which days are hard and which are easy, they protect their sleep window, and they choose light activity such as walking or mobility work over doing nothing or doing too much. They also track a few simple signals so they can tell when an easy day needs to be easier.",
      "At Vanta we schedule recovery with the same care as the training around it. It has a purpose, a length and a way of being measured, and it appears in your program as a session in its own right.",
    ],
  },
  {
    slug: "what-your-resting-heart-rate-is-telling-you",
    category: "Intelligence",
    date: "August 14, 2026",
    image: "journal.endurance",
    title: "What Your Resting Heart Rate Is Telling You",
    excerpt: "One number, tracked consistently, is among the earliest signals that something needs to change.",
    body: [
      "Resting heart rate is a modest number. It takes a minute to measure and it rarely makes anyone feel like an expert. Tracked over a few weeks, though, it is one of the earliest signals that your body is under strain.",
      "A single reading tells you very little. Coffee, a poor night or a hard session the day before can each move it by several beats. The useful information is in the trend. A resting rate that climbs by a few beats and stays there for a week often points to accumulated fatigue, an illness on the way, or stress that has not been dealt with.",
      "The best way to use it is quietly. Measure at the same time each morning, before caffeine and before your phone, and look at the seven day average instead of the daily figure. Compare it with your own baseline and ignore everyone else's numbers.",
      "When the average moves, check it against your sleep, your mood and how the last few sessions felt. Vanta Intelligence does this automatically and flags changes to your coach, who decides whether the plan should change with it.",
    ],
  },
  {
    slug: "the-case-for-fewer-better-sessions",
    category: "Training",
    date: "July 29, 2026",
    image: "journal.strength",
    title: "The Case for Fewer, Better Sessions",
    excerpt: "Four focused sessions a week will usually outperform six inconsistent ones.",
    body: [
      "There is a common belief that more sessions produce more results. It holds for a short time, then stops holding.",
      "Six sessions a week only work if you can recover from six sessions a week, and most busy professionals cannot. What tends to happen is that two or three of those sessions get shortened, distracted or skipped, and the ones that remain are done tired.",
      "Four focused sessions with a clear purpose, enough rest between them and your full attention will usually beat that pattern. Each session has a job. One builds strength, one builds power, one builds work capacity and one restores movement quality. Nothing is there to fill the calendar.",
      "If you are training more than you can sustain, try removing the weakest session of your week and putting its effort into the others. Most people find they feel better and lift more within a month.",
    ],
  },
  {
    slug: "travel-mode-training-on-the-road",
    category: "Lifestyle",
    date: "July 11, 2026",
    image: "journal.conditioning",
    title: "Travel Mode: Keeping Performance Intact on the Road",
    excerpt: "The goal on the road is to protect the progress you have already made.",
    body: [
      "Travel breaks routines. Hotel gyms are limited, time zones scramble sleep, and the schedule is set by other people. Trying to copy a full home program in those conditions usually ends in frustration.",
      "A more realistic goal for a trip is to protect the gains you have already made, which takes far less than building new ones. Two short strength sessions a week, daily movement and regular walking will hold most people steady for weeks.",
      "Sleep matters most. Get outdoor light soon after you land, keep meals roughly regular, and be more careful than usual with caffeine and alcohol. A well rested traveler who trains lightly will outperform an exhausted one who trains hard.",
      "Our travel mode builds a compact plan around the equipment you will have and the hours you will actually be free, then adjusts once you are home. The aim is to return in the same condition you left, or slightly better.",
    ],
  },
  {
    slug: "sleep-is-the-most-underused-lever",
    category: "Recovery",
    date: "June 24, 2026",
    image: "journal.focus",
    title: "Sleep Is the Most Underused Lever in Performance",
    excerpt: "Most people trying to perform better should look at their bedroom before their program.",
    body: [
      "When someone wants to perform better, the conversation usually starts with the program: which exercises, how many sets, how often. Those questions matter, but the bedroom often deserves attention first.",
      "Sleep is when tissue is repaired, when training is consolidated and when the hormones that govern appetite and stress settle back into balance. A week of short nights can reduce strength, slow reaction time and make hard sessions feel harder than they are.",
      "The fixes are usually simple and rarely glamorous. A consistent wake time, a cooler and darker room, less screen time in the last hour and an earlier last meal do more for most people than any supplement. Alcohol and late caffeine are the two other common culprits.",
      "If you are training hard on six hours of sleep, adding more training will not solve the problem. Improve the sleep first and the program will start working the way it was designed to.",
    ],
  },
];

const FAQS = [
  { q: "Who is Vanta Performance for?", a: "Executives, founders, athletes and high achieving professionals who want a coaching relationship built around their goals and schedule, supported by real data instead of guesswork." },
  { q: "How does the application process work?", a: "You complete a short application covering your goals, current routine and schedule. Our team reviews every application personally and follows up to arrange a private consultation." },
  { q: "How does Vanta Intelligence work?", a: "Vanta Intelligence looks at your training history, recovery data and lifestyle to adjust your program as your circumstances change. Your coach reviews its recommendations and makes the final decisions." },
  { q: "Is coaching available remotely?", a: "Private coaching is available at our Los Angeles studio. Remote coaching through the platform is available for members who travel often or live elsewhere." },
  { q: "How is pricing structured?", a: "Pricing is shared after your private consultation, because each membership is built around a specific program and level of access." },
  { q: "Can I switch programs later?", a: "Yes. Your coach will recommend a change as your goals evolve, and most members move between programs as their circumstances change." },
];
