import React, { useState, useEffect } from "react";
import { PROJECTS } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import { updateSeo } from "../utils/seo";

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    updateSeo({
      title: "Client Projects & Case Studies",
      description: "Explore e-commerce projects, Shopify store builds, Amazon launches, and web applications developed by Hower Commerce.",
      canonicalUrl: "https://howercommerce.com/projects"
    });
  }, []);

  const categories = ["All", "Shopify", "Amazon", "Web Development", "Digital Marketing"];

  const filteredProjects = selectedFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <div style={{ paddingBottom: "80px" }}>
      <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--color-border)", padding: "56px 0" }}>
        <div className="container">
          <div style={{ maxWidth: "760px" }}>
            <div className="section-badge">
              <span>Verified Portfolios</span>
            </div>
            <h1 style={{ fontSize: "2.75rem", marginBottom: "16px" }}>
              Projects &amp; <span>Implementations</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
              A curated collection of client storefronts, Amazon listing optimizations, development projects, and advertising funnels.
            </p>
          </div>

          {/* Filter Bar */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "32px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid",
                  borderColor: selectedFilter === cat ? "var(--color-primary)" : "var(--color-border)",
                  backgroundColor: selectedFilter === cat ? "var(--color-primary)" : "#ffffff",
                  color: selectedFilter === cat ? "#ffffff" : "var(--color-dark)",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: "36px" }}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
