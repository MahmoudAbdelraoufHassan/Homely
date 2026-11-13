import styled from "styled-components";
import BlogCard from "../features/Blog/BlogCard";
import BlogList from "../features/Blog/BlogList";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { useLoaderData } from "react-router-dom";

const BlogContentWrapper = styled.div`
margin-top : 64px;
`
function BlogPage() {
  const blogs = useLoaderData();

  return (
    <Section $withNavbarOffset>
      <SectionHeader
        label={"Blog"}
        $align="center"
        title={"Real estate insights"}
        desc={
"Stay ahead in the property market with expert advice and updates"        }
      />
      <Container>
        <BlogContentWrapper >
    <BlogList>
    {blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
    </BlogList>
    </BlogContentWrapper>
    </Container>
    </Section>
  );
}

export default BlogPage
