import { getCollection } from "./data";

export function getBlogs() {
  return getCollection("blogs");
}

export async function getBlog(id) {
  const blogs = await getBlogs();
  const blog = blogs.find((item) => String(item.id) === String(id));

  if (!blog) {
    throw new Error(`Failed to load blog article (${id}): not found`);
  }

  return blog;
}

export function loadBlog({ params }) {
  return getBlog(params.id);
}

export function getTestimonials() {
  return getCollection("testimonials");
}
