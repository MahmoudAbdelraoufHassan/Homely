import styled from "styled-components";
import {
  CalendarBlankIcon,
  ClockIcon,
  HouseSimpleIcon,
  TagIcon,
} from "@phosphor-icons/react";
import { Link, useLoaderData } from "react-router-dom";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";




const ArticleHeader = styled.header`
  margin-bottom: 28px;
`;

const Category = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding: 10px 20px;
  border-radius: 24px;
  background: rgba(7, 190, 138, 0.1);
  font-size: var(--text-sm-size);
  font-weight: var(--font-weight-medium);
`;

const ArticleTitle = styled.h1`
  color: var(--color-black-100);
  font-size: clamp(32px, 5vw,52px);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--heading-2-letter-spacing);
  line-height: 1.12;
  margin-bottom : 12px;
`;

const ArticleIntro = styled.p`
  color: var(--color-black-50);
  font-size: var(--text-md-size);
  line-height: 1.6;
  margin-bottom : 48px;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 24px;

  @media screen and (max-width: 620px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AuthorAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  color: var(--color-black-100);
  font-size: var(--text-base-size);
  font-weight: var(--font-weight-medium);

  span {
    display: block;
    margin-top: 2px;
    color: var(--color-black-50);
    font-size: var(--text-sm-size);
    font-weight: var(--font-weight-regular);
  }
`;

const MetaItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 420px) {
    gap: 12px;
  }
`;

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--color-black-50);
  font-size: var(--text-sm-size);
  white-space: nowrap;

  svg {
    color: var(--color-black-100);
  }
`;

const CoverImage = styled.img`
  display: block;
  width: 100%;
  max-height: 700px;
  aspect-ratio: 16 / 9;
  margin-bottom: 48px;
  margin-top: 48px;
  border-radius: 14px;
  object-fit: cover;
`;

const ArticleBody = styled.article`
  max-width: 1160px;
  margin-inline: auto;
  color: var(--color-black-100);
  font-size: var(--text-base-size);
  line-height: 1.7;

  p + p {
    margin-top: 32px;
  }

  h2 {
    margin-top: 32px ;
    font-size: clamp(20px, 3vw, 32px);
    font-weight: var(--font-weight-medium);
    line-height: 1.3;
  }

  ul {
    margin-top: 32px;
    padding-left: 22px;
    color: var(--color-primary);
    list-style: disc;
  }

  li {
    padding-left: 4px;
  }

  li + li {
    margin-top: 5px;
  }
`;

const BackToBlog = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);

  &:hover {
    text-decoration: underline;
  }
`;

function BlogDetailsPage() {
  const blog = useLoaderData();

  return (
    <Section $withNavbarOffset>
      <Container>
        <ArticleHeader>
          <Category>
            <TagIcon size={16} />
            {blog.category}
          </Category>
          <ArticleTitle>{blog.title}</ArticleTitle>
          <ArticleIntro>{blog.excerpt}</ArticleIntro>
          <ArticleMeta>
            <Author>
              <AuthorAvatar
                src={blog.authorImage}
                alt={`Author ${blog.author}`}
              />
              <AuthorName>
                {blog.author}
                <span>{blog.authorRole}</span>
              </AuthorName>
            </Author>
            <MetaItems>
              <MetaItem>
                <CalendarBlankIcon size={18} />
                {blog.date}
              </MetaItem>
              <MetaItem>
                <ClockIcon size={18} />
                {blog.readTime} min read
              </MetaItem>
            </MetaItems>
          </ArticleMeta>
        </ArticleHeader>

        <CoverImage src={blog.image} alt={blog.imageAlt} />

        <ArticleBody>
          {blog.content.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <BackToBlog to="/blog">
            <HouseSimpleIcon size={18} />
            Back to all articles
          </BackToBlog>
        </ArticleBody>
      </Container>
    </Section>
  );
}

export default BlogDetailsPage;
