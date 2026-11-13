export function getResponsiveImage(image, sizes = "100vw") {
  const variants = [image.small, image.medium, image.large];

  return {
    src: image.medium.src,
    srcSet: variants.map(({ src, width }) => `${src} ${width}w`).join(", "),
    sizes,
  };
}
