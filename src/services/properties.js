import { getCollection } from "./data";

export function getProperties(options) {
  return getCollection("properties", options);
}

export async function getProperty(id) {
  const properties = await getProperties();
  const property = properties.find((item) => String(item.id) === String(id));

  if (!property) {
    throw new Error(`Failed to load property (${id}): not found`);
  }

  return property;
}

export function loadProperties() {
  return getProperties();
}

export function loadProperty({ params }) {
  return getProperty(params.id);
}