export type Committee = {
  slug: string;
  name: string;
  description: string;
  intro: string;
  about: string;
  responsibilities: string[];
  experienceTitle: string;
  experienceDescription: string;
  formLink?: string;
};

export const detailImages = [
  "/media/081b6016516826ee61d0a08a1984f3587e4ceca0.jpg",
  "/media/2e631b7ad6c3e010a6c35d2385a38a6ef0687319.jpg",
  "/media/3695b94bad5d48cec56c86154025e8d566c8bbe6.jpg",
];

export const committees: Committee[] = [
  {
    slug: "academics-committee",
    name: "Academics Committee",
    description: "Overseeing student academics and organizing impactful tutorials as well as learning initiatives",
    intro:
      "The Student Academic Team helps BUCC students succeed through tutorials, curated resources, and technical mentorship.",
    about:
      "The Student Academic Team helps BUCC students succeed through tutorials, curated resources, and technical mentorship. If you enjoy teaching, helping others grow, and strengthening your own understanding, this team is for you.",
    responsibilities: [
      "Course tutoring",
      "Training Program Support",
      "Tutorial Coordination",
      "Academic newsletter contribution",
      "Gathering and preparation of academic materials",
    ],
    experienceTitle: "Build a Culture of Learning",
    experienceDescription:
      "A community where sharing knowledge strengthens our own understanding while making learning easier for others.",
  },
  {
    slug: "debate-committee",
    name: "Debate & Quiz Committee",
    formLink: "https://forms.gle/4EVMFCyZK9iL2u4z8",
    description: "Sharpen your mind, strengthen your voice, and compete with the best.",
    intro:
      "The Debate & Quiz Committee is dedicated to promoting critical thinking, public speaking, intellectual curiosity, and academic excellence within BUCC.",
    about:
      "The Debate & Quiz Committee is dedicated to promoting critical thinking, public speaking, intellectual curiosity, and academic excellence within BUCC. We organize debates, quiz competitions, and knowledge-driven events while preparing members to represent the club in inter-club and external competitions. This committee is ideal for students who enjoy learning, discussing ideas, solving problems, and challenging themselves intellectually.",
    responsibilities: [
      "Participate in debate and quiz training sessions to improve communication, reasoning, and general knowledge.",
      "Represent BUCC in internal and external debate and quiz competitions.",
      "Assist in planning and organizing debate tournaments, quizzes, and intellectual events.",
      "Research current affairs, technology trends, and other relevant topics for debates and quiz competitions.",
      "Collaborate with committee members to develop, plan, and, organize innovative and engaging intellectual activities for the club.",
    ],
    experienceTitle: "Find Your Voice",
    experienceDescription:
      "The Debate & Quiz Committee brings together students passionate about critical thinking, public speaking, and intellectual competition. Through debates, quizzes, and knowledge-driven events, members develop communication, research, and analytical skills while representing BUCC in competitions.",
  },
  {
    slug: "development-committee",
    name: "Development Committee",
    formLink: "https://forms.gle/5QZ1hHctJnb3JanH6",
    description: "Working with other committees to deliver technology driven solutions.",
    intro:
      "The Development Team works with other committees to build and deliver technology-driven solutions for the community.",
    about:
      "As a member of the Development Team, you'll design, build, and maintain the digital tools that power BUCC. You'll collaborate with other committees to turn ideas into working products while sharpening your engineering skills on real projects.",
    responsibilities: [
      "Building and maintaining web and software solutions for BUCC.",
      "Collaborating with committees to gather requirements and ship features.",
      "Writing clean, maintainable, and well-documented code.",
      "Exploring new technologies to improve community tools.",
      "Supporting events with technical infrastructure and tooling.",
    ],
    experienceTitle: "Build What Matters",
    experienceDescription:
      "As part of the development team, you'll create the tools that shape how the community works.",
  },
  {
    slug: "chaplaincy-committee",
    name: "Chaplaincy Committee",
    description: "Building a Christ-centered community through worship, prayer, fellowship, and compassionate service.",
    intro:
      "The Chaplaincy Committee is responsible for fostering the spiritual well-being of the department by organizing prayer meetings, Bible studies, worship services, and other faith-based activities.",
    about:
      "The Chaplaincy Committee is responsible for fostering the spiritual well-being of the department by organizing prayer meetings, Bible studies, worship services, and other faith-based activities. We welcome students who have a heart for serving God, encouraging others, and creating an environment where everyone can grow spiritually regardless of where they are in their faith journey.",
    responsibilities: [
      "Planning and coordinating departmental worship concert, prayer meetings, and Bible studies.",
      "Help create a welcoming and spiritually uplifting atmosphere during departmental events.",
      "Pray with and encourage students while maintaining confidentiality and compassion.",
      "Work with the Chaplain and committee members to develop programs that promote spiritual growth and Christian fellowship.",
    ],
    experienceTitle: "Nurture the Community",
    experienceDescription:
      "Serving on the Chaplaincy Committee is an opportunity to grow spiritually while making a meaningful impact in the lives of others. You'll be part of a supportive team that values prayer, servant leadership, teamwork, and genuine fellowship.",
  },
  {
    slug: "welfare-committee",
    name: "Welfare Committee",
    description: "Making student life better, together",
    intro:
      "The Welfare Committee is the heartbeat of the department, dedicated to the physical, emotional, and social wellbeing of every student.",
    about:
      "The Welfare Committee is the heartbeat of the department, dedicated to the physical, emotional, and social wellbeing of every student. We identify needs, organize support initiatives, and create a space where students feel seen, heard, and cared for. If you are empathetic, community driven, and genuinely want to make a difference in people's lives, this committee is for you.",
    responsibilities: [
      "Identifying and responding to the welfare needs of students within the department.",
      "Planning and executing wellbeing events, outreach programs, and support drives.",
      "Serving as a point of contact for students who need guidance or assistance.",
      "Source sponsorships, donations, and partnerships to support departmental events and welfare projects.",
      "Collaborating with department leadership to advocate for student concerns and improvements.",
      "Monitoring student welfare consistently and following up to ensure issues are resolved.",
    ],
    experienceTitle: "Care for the Community",
    experienceDescription:
      "We believe in serving with compassion, working as a team, and creating a positive impact. Every member has the opportunity to contribute ideas, lead initiatives, and make a meaningful difference in students' lives.",
  },
  {
    slug: "social-committee",
    name: "Social Committee",
    description: "We plan and make unforgettable events and activities that bring BUCC together.",
    intro:
      "This role is for creative and innovative individuals who love planning and crafting memorable experiences.",
    about:
      "This role is for creative and innovative individuals who love planning and crafting memorable experiences. If you love planning, organising, building strong communities, or you have a wild imagination and the drive to make it real, then there’s a spot for you.",
    responsibilities: [
      "Brainstorming and executing creative themes and ideas for BUCC social events.",
      "Gathering feedback from the BUCC student body to understand what kinds of events they want next and how we can improve.",
      "Helping with on-the-ground logistics, including venue setup, vendor management, and decorations.",
      "Promoting upcoming activities through different methods.",
      "Coming up with fun challenges or engaging trends for the BUCC social media(and participating, if you want to).",
    ],
    experienceTitle: "Bring People Together",
    experienceDescription:
      "The team will be fun, collaborative, a little chaotic, and tiny touch of weird. We’ll be the ones that works hard behind the scenes so everyone else can have a great time. Expect a supportive and passionate environment where your boldest and most creative event ideas are always welcomed and encouraged.",
  },
  {
    slug: "sports-committee",
    name: "Sports Committee",
    description: "Organizing, energizing, and running every game, match, and moment that brings BUCC together.",
    intro:
      "The Sports Committee is the engine behind BUCC's biggest live moments: the BUCC Cup, tournaments, Wellness Week, and Inter-Level Games.",
    about:
      "The Sports Committee is the engine behind BUCC's biggest live moments: the BUCC Cup, tournaments, Wellness Week, and Inter-Level Games. We plan the fixtures, build the brackets, sort out venues and sponsors, and run match-days from kickoff to the final whistle. If you love organizing events, rallying people, chasing partnerships, or just making competition happen on the ground, this is your space.",
    responsibilities: [
      "Plan and run BUCC sports events from start to finish: venues, brackets, scheduling, and match-day logistics.",
      "Coordinate players, fixtures, and standings across tournaments and inter-level competitions.",
      "Chase and manage sponsorships and partnerships to fund and grow our events.",
      "Drive hype and turnout, fill brackets, rally teams, and keep the energy high before and during events.",
      "Support media and scoring, fixtures, results, and keeping event data clean and current.",
    ],
    experienceTitle: "Play, Compete, Connect",
    experienceDescription:
      "We move fast and put on events people actually remember. Whether you're building brackets, chasing sponsors, or running the touchline on match-day, you'll have real work to show for your time here, and the whole school will see it.",
  },
  {
    slug: "media-communications-committee",
    name: "Media & Communications Committee",
    description: "Capturing, creating, and communicating every moment that defines BUCC.",
    intro:
      "The Media & Communications Committee is the eyes, ears, and voice of BUCC — responsible for photography, videography, graphic design, and written content across all platforms.",
    about:
      "The Media & Communications Committee is the eyes, ears, and voice of BUCC — responsible for photography, videography, graphic design, and written content across all platforms. We cover events, run the club's social media presence, and tell the stories that keep the BUCC community informed and engaged. If you're a creative who loves producing content, writing, or getting behind a camera or screen, this is your space.",
    responsibilities: [
      "Photograph and document BUCC events, meetings, and activities for official use.",
      "Produce and edit video content for social media and internal communications.",
      "Design graphics and visual assets for announcements, events, and campaigns.",
      "Write articles, blog posts, and memos for the BUCC bi-weekly blog and official channels.",
      "Manage and schedule content across BUCC's social media platforms consistently.",
    ],
    experienceTitle: "Capture Real Experiences",
    experienceDescription:
      "We move with purpose and produce work that actually reaches people. Whether you're behind a lens, at a desk designing, or putting words together — you'll have real work to show for your time here.",
  },
  {
    slug: "community-development-committee",
    name: "Community Development Committee",
    formLink: "https://forms.gle/djnviAKhKWexq1QG6",
    description: "Radically redefining not just what it means to be in BUCC, but what BUCC itself is.",
    intro:
      "We’re a team handling major initiatives like Babcock Tech Week, while also taking on special assignments that require tact, autonomy, and discretion.",
    about:
      "We’re a team handling major initiatives like Babcock Tech Week, while also taking on special assignments that require tact, autonomy, and discretion. We move fast, pursue ideas others would consider unrealistic, and expect the people on the team to be unquestionably capable of making them happen.",
    responsibilities: [
      "A ton of ideation that’ll demand genuine creativity",
      "Curating high-quality experiences for the student body to relish",
      "Finding sponsors to fund our most far-out ideas",
      "Liaising with anyone and everyone, from Faculty Staff to other association executives, from online creators to CEOs and MDs of the largest companies/businesses",
      "Shaping how BUCC and BTW tell their story  building campaigns, creating content, and crafting the moments and experiences that’ll keep generating buzz long after they’ve happened",
    ],
    experienceTitle: "Do the Most Ambitious Work",
    experienceDescription:
      "High intellect, questionable judgment, zero interest in doing things the normal way. Meetings on the grass, ideas that make people ask \"wait, are we allowed to do that?\"  we actively flirt with the line, but we don't cross it, and we do the most ambitious work on this campus while having the most fun in it.",
  },
];
