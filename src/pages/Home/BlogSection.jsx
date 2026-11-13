import styled from "styled-components";
import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";
import Button from "../../ui/Button";
import BlogList from "../../features/Blog/BlogList";
import BlogCard from "../../features/Blog/BlogCard";
import { useEffect, useState } from "react";
import { getBlogs } from "../../services/content";
import SectionError from "../../ui/SectionError";
import { useNavigate } from "react-router-dom";
const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;
const BlogContent = styled.div`
  margin-top: 40px;
`;
function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    let active = true;

    getBlogs()
      .then((data) => {
        if (active) setBlogs(data.slice(0, 3));
      })
      .catch((loadError) => {
        if (active) setError(loadError.message);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <Section>
      <Container>
        <BlogHeader>
          <SectionHeader
            label={"Blog"}
            title={"Real estate insights"}
            desc={
              "Stay ahead in the property market with expert advice and updates"
            }
          />
          <Button variant={"primary-dark"} onClick={()=>navigate("/blog")}>Read all articles</Button>
        </BlogHeader>
        <BlogContent>
          {error ? (
            <SectionError errorMessage={`Unable to load articles: ${error}`} />
          ) : (
            <BlogList>
              {blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
            </BlogList>
          )}
    </BlogContent>
      </Container>
    </Section>
  );
}

export default BlogSection;
