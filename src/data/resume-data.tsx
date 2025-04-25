import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Bicheng Gu",
  initials: "BC",
  location: "Singapore",
  locationLink: "https://www.google.com/maps/place/Singapore",
  about:
    "A pragmatic Product Manager that delivers solutions.",
  summary: (
    <>
      Dynamic Product Analyst with a track record of driving product growth. 
      Expertise in product lifecycle management, market research, and cross-functional collaboration. 
      Dedicated to delivering innovative solutions and fostering strong client relationships in a fast-paced environment.
    </>
  ),
  avatarUrl: "https://raw.githubusercontent.com/Bicheng-G/assets/main/assets/avatar.jpg",
  personalWebsiteUrl: "https://bicheng.me",
  contact: {
    email: "bicheng.gu@yahoo.com",
    tel: "+65 85882413",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Bicheng-G",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bicheng-gu/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/0xAilurus",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "National University of Singapore",
      degree: "Bachelor's Degree of Technology (Business Analytics) | Honours Merit",
      start: "2018",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Elitetax Systems",
      link: "https://elitetaxsystems.com",
      badges: ["On Site", "Go-to-market", "Presales"],
      title: "Product Manager",
      start: "2024",
      end: null,
      description: (
        <>
          Expanding new line of business from 0 to 1, providing solutions to enterprise clients. 
          <ul className="list-inside list-disc">
            <li>
              Conducted detailed market reasearch and developed go-to-market strategy
            </li>
            <li>
              Established standard operation procedures through learning by doing
            </li>
            <li>
              Implementing curated marketing campaign to generate leads, and nurturing the leads
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Tagrain",
      link: "https://tagrain.com/",
      badges: ["Remote", "Go-to-market", "Product Management", "Lead Generation"],
      title: "Product Analyst → Senior Product Analyst",
      start: "2020",
      end: "2024",
      description: (
        <>
          Joined the team in its MVP stage and played a pivotal role in
          growing to a full-fledged product.
          <ul className="list-inside list-disc">
            <li>
              Led product roadmap development and prioritization
            </li>
            <li>
              Analysed user needs and requirements to identify pain points
            </li>
            <li>
              Led cross-functional collaboration to ensure product alignment
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Pet Parents Club",
      link: "https://shopee.sg/petparentsclub",
      badges: ["eCommerce", "Shopee", "Lazada"],
      title: "Owner",
      start: "2018",
      end: "2020",
      description: (
        <>
          Achieved &#34;Preferred Seller&#34; status within first 5 months.
          <ul className="list-inside list-disc">
            <li>Maintained 5 star shop rating and good word of mouth reputaiton</li>
            <li>
            Insight driven strategic product line-ups
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Sunzo Foundations Engineering",
      link: "",
      badges: ["On Site", "Project Management"],
      title: "Project Engineer",
      start: "2016",
      end: "2018",
      description:
        "Worked for the land reclamation project at Pulau Tekong, effectively coordinating daily with site managers to ensure steady progress and adherence to the main project's timelines.",
    },
    {
      company: "Keppel Singmarine",
      link: "https://www.keppel.com/",
      badges: ["Intern", "AutoCAD"],
      title: "Engineer",
      start: "2016",
      end: "2016",
      description:
        "Worked for the land reclamation project at Pulau Tekong, effectively coordinating daily with site managers to ensure steady progress and adherence to the main project's timelines.",
    }
  ],
  skills: [
    "Market Research",
    "Go-To-Market",
    "Competitor Analysis",
    "Business Development",
    "Requirements Gathering",
    "Project Management",
    "Problem Solving",
    "Lead Generation",
  ],
  projects: [
    {
      title: "Duke",
      techStack: ["Java", "Gradle", "JUnit"],
      description:
        "The Duke program is a ChatBot written in Java that helps user to keep track of to-dos, deadlines and events.",
      link: {
        label: "Duke",
        href: "https://github.com/Bicheng-G/duke",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
