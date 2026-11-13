import styled from "styled-components";
import { Link } from "react-router-dom";
const Card = styled.div`
  min-width: 0;
`;
const CardLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  h3 {
    transition: 0.3s;
  }
  &:hover h3 {
    color: var(--color-primary);
  }
`;
const CardImage = styled.div`
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  margin-bottom: 32px;
  aspect-ratio: 440 / 287;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;

  & h3 {
    font-size: var(--text-lg-size);
    font-weight: var(--text-lg-weight);
    letter-spacing: var(--text-lg-letter-spacing);
    line-height: var(--text-lg-line-height);
    overflow-wrap: anywhere;
  }

  & p {
    color: var(--color-black-50);
    font-size: var(--text-base-size);
    letter-spacing: var(--text-base-letter-spacing);
    line-height: var(--text-base-line-height);
    font-weight: var(--text-base-weight);
    margin-top: 4px;
  }

  & button {
    flex-shrink: 0;
  }

  @media screen and (max-width: 600px) {
    align-items: center;
  }
`;

const Category = styled.span`
  flex-shrink: 0;
  padding:10px 20px;
  border-radius: 20px;
  background: rgba(7, 190, 138, 0.1);
  color: var(--color-black-100);
  font-size: var(--text-sm-size);
  font-weight: var(--font-weight-medium);
`;

function BlogCard({ blog }) {
  return (
    <Card>
      <CardLink to={`/blog/${blog.id}`}>
        <CardImage>
          <img
            src={blog.image}
            alt={blog.imageAlt}
            width="440"
            height="287"
            loading="lazy"
            decoding="async"
          />
        </CardImage>
        <CardInfo>
          <div>
            <h3>{blog.title}</h3>
            <p>{blog.date}</p>
          </div>
          <Category>{blog.category}</Category>
        </CardInfo>
      </CardLink>
    </Card>
  );
}

export default BlogCard;
