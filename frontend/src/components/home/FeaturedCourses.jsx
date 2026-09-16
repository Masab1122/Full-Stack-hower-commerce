import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { COURSES } from "../../data/courses";
import CourseCard from "../courses/CourseCard";

export default function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "E-Commerce", "Marketing", "Development", "Monetization"];

  const filteredCourses = activeCategory === "All"
    ? COURSES
    : COURSES.filter((c) => c.category === activeCategory);

  return (
    <section className="section" id="courses">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Career-Focused Curricula</span>
          </div>
          <h2 className="section-title">
            Industry-Driven <span>Professional Courses</span>
          </h2>
          <p className="section-subtitle">
            Master high-demand digital skills that build sustainable freelance careers and online businesses.
          </p>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              flexWrap: "wrap",
              marginTop: "28px"
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "var(--radius-full)",
                    border: "1px solid",
                    borderColor: isActive ? "var(--color-primary)" : "var(--color-border)",
                    backgroundColor: isActive ? "var(--color-primary)" : "#ffffff",
                    color: isActive ? "#ffffff" : "var(--color-dark)",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all var(--transition-fast)"
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid-3" style={{ marginBottom: "48px" }}>
          {filteredCourses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center" }}>
          <Link to="/courses" className="btn btn-primary btn-lg">
            <span>Explore All 9 Courses &amp; Syllabi</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
