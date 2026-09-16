import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ArrowRight } from "lucide-react";
import { COURSES } from "../data/courses";
import CourseCard from "../components/courses/CourseCard";
import { updateSeo } from "../utils/seo";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    updateSeo({
      title: "Professional Training Courses",
      description: "Explore all 9+ professional training programs in Amazon FBA, Shopify Dropshipping, Digital Marketing, Web Development, Python, and AI at Hower Commerce.",
      canonicalUrl: "https://howercommerce.com/courses"
    });
  }, []);

  const categories = ["All", "E-Commerce", "Marketing", "Development", "Programming", "Technology", "Monetization"];

  const filteredCourses = COURSES.filter((course) => {
    const matchesCat = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Page Header */}
      <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--color-border)", padding: "56px 0" }}>
        <div className="container">
          <div style={{ maxWidth: "760px" }}>
            <div className="section-badge">
              <span>Course Catalog</span>
            </div>
            <h1 style={{ fontSize: "2.75rem", marginBottom: "16px" }}>
              Practical Digital Skills <span>Programs</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
              All programs include hands-on lab practice, real tool access, interactive instructor demonstrations, and post-training mentorship.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              marginTop: "36px",
              flexWrap: "wrap"
            }}
          >
            {/* Search Input */}
            <div style={{ position: "relative", minWidth: "280px", flex: "1 1 300px" }}>
              <Search size={18} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--color-text-light)" }} />
              <input
                type="text"
                placeholder="Search courses (e.g. Amazon, Shopify, Python)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: "42px" }}
              />
            </div>

            {/* Category Tabs */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "var(--radius-full)",
                    border: "1px solid",
                    borderColor: selectedCategory === cat ? "var(--color-primary)" : "var(--color-border)",
                    backgroundColor: selectedCategory === cat ? "var(--color-primary)" : "#ffffff",
                    color: selectedCategory === cat ? "#ffffff" : "var(--color-dark)",
                    fontSize: "0.8125rem",
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
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section">
        <div className="container">
          {filteredCourses.length === 0 ? (
            <div className="card" style={{ padding: "48px", textAlign: "center" }}>
              <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", marginBottom: "16px" }}>
                No courses match your search "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="btn btn-primary btn-sm"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid-3" style={{ gap: "32px" }}>
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
