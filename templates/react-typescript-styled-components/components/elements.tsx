import styled from 'styled-components';

export const Title = styled.h1`
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto', Arial;
  font-size: 6rem;
  text-align: center;

  /* Thumbnails for Whatsapp: 400x400px */
  @media (min-height: 400px) {
    display: none;
  }
  /* Banners (og:image): 1200x630px */
  @media (min-height: 630px) {
    display: block;
  }
  /* Instagram square posts: 1080x1080px */
  @media (min-height: 1080px) {
  }
  /* Stories: 1080x1920px */
  @media (min-height: 1920px) {
  }
`;

export const Description = styled.h2`
  margin: 1rem 0 0 0;
  color: #ffffff;
  font-family: 'Lora', serif;
  font-size: 3rem;
  letter-spacing: 3px;
  text-align: center;

  /* Same as above, but smarter (max-height instead of min-height) */
  @media (max-height: 400px) {
    display: none;
  }
`;
