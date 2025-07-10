import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import dynamic from "next/dynamic";

const CommandMenu = dynamic(
  () => import("@/components/command-menu").then((mod) => mod.CommandMenu),
  { ssr: false },
);

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  const links: { url: string; title: string }[] = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    links.push({
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
    });
  }

  // Add external "Projects" page link displayed in the Projects section
  links.push({
    url: "https://bicheng.me/projects",
    title: "Projects",
  });

  // Optionally surface each individual project link defined in the resume data
  type ProjectItem = { title?: string; link?: { href: string; label?: string } };
  const projectItems = RESUME_DATA.projects as unknown as ProjectItem[];

  projectItems.forEach((project) => {
    if (project.link?.href) {
      links.push({
        url: project.link.href,
        title: project.title ?? project.link.label ?? "Project",
      });
    }
  });

  return [
    ...links,
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function ResumePage() {
  return (
    <main
      className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
      id="main-content"
    >
      <div className="sr-only">
        <h1>{RESUME_DATA.name}&apos;s Resume</h1>
      </div>

      <section
        className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
        aria-label="Resume Content"
      >
        <Header />

        <div className="space-y-8 print:space-y-4">
          <Summary summary={RESUME_DATA.summary} />

          <WorkExperience work={RESUME_DATA.work} />

          <Education education={RESUME_DATA.education} />

          <Skills skills={RESUME_DATA.skills} />

          <Projects projects={RESUME_DATA.projects} />
        </div>
      </section>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}
