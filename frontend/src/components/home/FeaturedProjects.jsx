import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FolderKanban } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Client &amp; Academy Work</span>
          </div>
          <h2 className="section-title">
            Featured <span>Projects &amp; Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Explore recent Shopify builds, Amazon launches, development portals, and advertising architectures completed by our team.
          </p>
        </div>

        <div className="grid-2" style={{ gap: "32px", marginBottom: "48px" }}>
          {PROJECTS.slice(0, 4).map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="/projects" className="btn btn-secondary btn-lg">
            <span>View Complete Portfolio Gallery</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
