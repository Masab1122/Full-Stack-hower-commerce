export function updateSeo({
  title,
  description,
  canonicalUrl,
  ogImage = "https://howercommerce.com/brand-logo.jpg",
  schema
}) {
  const baseTitle = "Hower Commerce | Digital Skills & E-Commerce";
  const finalTitle = title ? `${title} | Hower Commerce` : baseTitle;
  document.title = finalTitle;

  // Meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  if (description) {
    metaDesc.content = description;
  }

  // Canonical link
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement("link");
    linkCanonical.rel = "canonical";
    document.head.appendChild(linkCanonical);
  }
  if (canonicalUrl) {
    linkCanonical.href = canonicalUrl;
  }

  // Open Graph Title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = finalTitle;

  // Open Graph Description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && description) ogDesc.content = description;

  // Schema Injection
  const existingSchema = document.getElementById("page-dynamic-schema");
  if (existingSchema) {
    existingSchema.remove();
  }

  if (schema) {
    const script = document.createElement("script");
    script.id = "page-dynamic-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
