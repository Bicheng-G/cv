'use client';

import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

type ProjectTags = readonly string[];

interface ProjectLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders project title with optional link and status indicator
 */
function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          aria-label="Active project indicator"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
}

/**
 * Renders a list of technology tags used in the project
 */
function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTags;
  link?: string;
}

/**
 * Card component displaying project information
 */
function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card
      className="flex h-full flex-col overflow-hidden border p-3"
      role="article"
    >
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            <ProjectLink title={title} link={link} />
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Project description"
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <ProjectTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["projects"];
}

/**
 * Tiny component that renders an ArrowUpRight icon with a lightweight
 * "glitch" / flicker animation. The effect is achieved via a small
 * state-driven opacity loop rather than CSS keyframes to keep the
 * bundle size minimal and avoid additional global styles.
 */
function GlitchyArrow(props: React.ComponentProps<typeof ArrowUpRight>) {
  const [opacity, setOpacity] = useState(1);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    const steps = [0.6, 0.2, 0.8, 0.4, 1];
    const stepInterval = 60; // ms between individual opacity updates

    function runSequence() {
      let idx = 0;

      function next() {
        setOpacity(steps[idx]);
        idx += 1;
        if (idx < steps.length) {
          timeoutRef.current = window.setTimeout(next, stepInterval);
        } else {
          // Start the next sequence after a random pause
          const pause = Math.random() * (2500 - 1500) + 1500; // 1.5–2.5s
          timeoutRef.current = window.setTimeout(runSequence, pause);
        }
      }

      next();
    }

    // initial delay before the first glitch burst
    timeoutRef.current = window.setTimeout(runSequence, 1500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return <ArrowUpRight style={{ opacity }} {...props} />;
}

/**
 * Section component displaying all side projects
 */
export function Projects({ projects }: ProjectsProps) {
  return (
    <Section className="print-force-new-page scroll-mb-16 print:space-y-4 print:pt-12">
      <h2 className="text-xl font-bold flex items-center gap-1" id="side-projects">
        <a
          href="https://bicheng.me/projects"
          target="_self"
          className="inline-flex items-center gap-1 underline decoration-gray-500/30 hover:decoration-gray-500/80 text-primary"
        >
          Projects
        </a>
        <GlitchyArrow className="size-4" aria-hidden="true" />
      </h2>
{/*       <div
        className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
        role="feed"
        aria-labelledby="side-projects"
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="h-full" // Added h-full here
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={"link" in project ? project.link.href : undefined}
            />
          </article>
        ))}
      </div> */}
    </Section>
  );
}
