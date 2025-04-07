// app/projects/[project]/page.tsx (Server Component)
import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";
import Project from "./Project";
import projects from "../../../data/projects.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProjectPage({ params }: { params: any }) {
  const { project } = await params;

  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "projects",
    project
  );

  const projectMDLink = path.join(filePath, "summary.md");
  const projectData = projects.projects.find((p) => p.link.endsWith(project));

  if (
    !fs.existsSync(filePath) ||
    !projectData ||
    !fs.existsSync(projectMDLink)
  ) {
    redirect("/");
  }
  const projectMd = fs.readFileSync(projectMDLink, "utf-8");

  return <Project project={projectData} mdFileText={projectMd} />;
}
