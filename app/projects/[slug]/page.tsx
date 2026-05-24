import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import CaseStudyClient from "./CaseStudyClient";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const previousProject =
    projectIndex > 0 ? projects[projectIndex - 1] : null;

  const nextProject =
    projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null;

  return (
    <CaseStudyClient
      project={project}
      previousProject={previousProject}
      nextProject={nextProject}
    />
  );
}
