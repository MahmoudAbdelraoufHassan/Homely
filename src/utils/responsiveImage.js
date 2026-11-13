export function getResponsiveImage(image, sizes = "100vw") {
  const variants = [image.small, image.medium, image.large].filter(
    (variant, index, allVariants) =>
      allVariants.findIndex((item) => item.src === variant.src) === index,
  );

  return {
    src: image.medium.src,
    srcSet: variants.map(({ src, width }) => `${src} ${width}w`).join(", "),
    sizes,
  };
}
