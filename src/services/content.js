const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function getCollection(collection) {
  const response = await fetch(`${API_URL}/${collection}`);

  if (!response.ok) {
    throw new Error(`Failed to load ${collection} (${response.status})`);
  }

  return response.json();
}

export function getBlogs() {
  return getCollection("blogs");
}

export async function getBlog(id) {
  const response = await fetch(`${API_URL}/blogs/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to load blog article (${response.status})`);
  }

  return response.json();
}

export function loadBlog({ params }) {
  return getBlog(params.id);
}

export function getTestimonials() {
  return getCollection("testimonials");
}
