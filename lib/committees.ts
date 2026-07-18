export type Committee = {
  slug: string;
  name: string;
  description: string;
  intro: string;
  about: string;
  responsibilities: string[];
  experienceTitle: string;
  experienceDescription: string;
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
    description: "Support study programs, workshops, and educational events.",
    intro:
      "The Academics Team supports learning at BUCC through study programs, workshops, and educational events that help students grow.",
    about:
      "As a member of the Academics Team, you'll help plan and run study programs, tutorials, and academic events that support fellow students. You'll work alongside other committees to create resources, organize workshops, and foster a culture of learning across the community.",
    responsibilities: [
      "Organizing study groups, tutorials, and academic workshops.",
      "Creating learning resources and study materials for students.",
      "Coordinating educational events and guest sessions.",
      "Collaborating with other committees to support student success.",
      "Identifying academic needs and proposing helpful initiatives.",
    ],
    experienceTitle: "Build a Culture of Learning",
    experienceDescription:
      "As part of the academics team, you'll play a key role in helping students learn and grow together.",
  },
  {
    slug: "debate-committee",
    name: "Debate Committee",
    description: "Participate in discussions, debates, and training sessions.",
    intro:
      "The Debate Team builds confident communicators through discussions, debates, and regular training sessions.",
    about:
      "As a member of the Debate Team, you'll take part in discussions, competitive debates, and training sessions that sharpen your reasoning and public speaking. You'll help organize debate events and mentor others looking to improve their craft.",
    responsibilities: [
      "Participating in debates, discussions, and training sessions.",
      "Organizing internal and inter-faculty debate events.",
      "Researching topics and preparing compelling arguments.",
      "Mentoring new members on public speaking and rhetoric.",
      "Representing BUCC in external debate competitions.",
    ],
    experienceTitle: "Find Your Voice",
    experienceDescription:
      "As part of the debate team, you'll grow into a confident speaker and a sharper critical thinker.",
  },
  {
    slug: "development-committee",
    name: "Development Committee",
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
    description: "Fostering the spiritual wellbeing of the BUCC community.",
    intro:
      "The Chaplaincy Team fosters the spiritual wellbeing of the BUCC community through care, prayer, and support.",
    about:
      "As a member of the Chaplaincy Team, you'll help nurture the spiritual life of the community through devotions, support, and meaningful gatherings. You'll create a welcoming space where members feel cared for and encouraged.",
    responsibilities: [
      "Organizing devotions, prayer sessions, and spiritual gatherings.",
      "Offering care and encouragement to community members.",
      "Coordinating outreach and service-driven initiatives.",
      "Collaborating with other committees on wellbeing programs.",
      "Creating a welcoming and supportive community atmosphere.",
    ],
    experienceTitle: "Nurture the Community",
    experienceDescription:
      "As part of the chaplaincy team, you'll help members grow in purpose, character, and faith.",
  },
  {
    slug: "welfare-committee",
    name: "Welfare Committee",
    description: "Coordinating welfare programs, offering assistance during BUCC events.",
    intro:
      "The Welfare Team coordinates welfare programs and offers assistance to keep the community thriving during BUCC events.",
    about:
      "As a member of the Welfare Team, you'll plan welfare initiatives and provide the support that keeps members comfortable and cared for. You'll coordinate logistics during events and make sure everyone's needs are met.",
    responsibilities: [
      "Coordinating welfare programs and member support initiatives.",
      "Providing assistance and logistics during BUCC events.",
      "Gathering feedback to improve the member experience.",
      "Collaborating with committees to address community needs.",
      "Managing resources and refreshments for gatherings.",
    ],
    experienceTitle: "Care for the Community",
    experienceDescription:
      "As part of the welfare team, you'll make sure every member feels supported and valued.",
  },
  {
    slug: "social-committee",
    name: "Social Committee",
    description: "Planning and executing social events and community gatherings.",
    intro:
      "The Social Team plans and executes social events and community gatherings that bring members together.",
    about:
      "As a member of the Social Team, you'll create memorable experiences through events, hangouts, and community gatherings. You'll handle planning, coordination, and the little details that make every event special.",
    responsibilities: [
      "Planning and executing social events and gatherings.",
      "Coordinating logistics, venues, and schedules.",
      "Designing engaging activities that bring members together.",
      "Collaborating with other committees on joint events.",
      "Capturing feedback to make each event better than the last.",
    ],
    experienceTitle: "Bring People Together",
    experienceDescription:
      "As part of the social team, you'll create the moments the community remembers.",
  },
  {
    slug: "sports-committee",
    name: "Sports Committee",
    description: "Organizing sporting activities and promoting fitness culture across BUCC.",
    intro:
      "The Sports Team organizes sporting events and promotes an active, healthy lifestyle across the BUCC community.",
    about:
      "As a member of the Sports Team, you'll help plan and run sporting activities, inter-faculty competitions, and fitness initiatives that bring energy and community spirit to BUCC. Whether you're passionate about a specific sport or just love bringing people together through healthy competition, this is the place for you.",
    responsibilities: [
      "Organizing sporting events, tournaments, and fitness activities.",
      "Coordinating logistics for inter-faculty and inter-club competitions.",
      "Promoting a healthy and active lifestyle across the BUCC community.",
      "Collaborating with other committees to integrate sports into club events.",
      "Managing equipment, scheduling, and participation registration.",
    ],
    experienceTitle: "Play, Compete, Connect",
    experienceDescription:
      "As part of the sports team, you'll build community through healthy competition and shared energy.",
  },
  {
    slug: "media-communications-committee",
    name: "Media & Communications Committee",
    description: "Capture, create, and communicate the stories that shape BUCC experience.",
    intro:
      "The Media & Communications Team captures, creates, and shares the stories and activities of BUCC through photography, videography, design, and digital content.",
    about:
      "As a member of the Media & Communications Team, you'll help capture, create, and communicate the stories that shape the BUCC experience. You'll work alongside other students to produce visual content, support events, and ensure that important moments within the community are documented and shared effectively. Whether you're interested in photography, videography, graphic design, or digital content creation, this role offers an opportunity to develop practical skills while contributing to a larger mission.",
    responsibilities: [
      "Covering events through photography, videography, and live media support.",
      "Creating content for social media platforms and digital channels.",
      "Documenting significant activities, testimonies, and community milestones.",
      "Collaborating with other committees to communicate their initiatives effectively.",
      "Contributing ideas that improve engagement and strengthen community outreach.",
    ],
    experienceTitle: "Capture Real Experiences",
    experienceDescription:
      "As part of the media & communications team, you'll play a crucial role in capturing authentic moments.",
  },
  {
    slug: "community-development-committee",
    name: "Community Development Committee",
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
