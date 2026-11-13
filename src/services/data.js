const DATA_URL = `${import.meta.env.BASE_URL}db.json`;

export async function getDatabase({ signal } = {}) {
  const response = await fetch(DATA_URL, { signal });

  if (!response.ok) {
    throw new Error(`Failed to load project data (${response.status})`);
  }

  return response.json();
}

export async function getCollection(collection, options) {
  const database = await getDatabase(options);
  const records = database[collection];

  if (!Array.isArray(records)) {
    throw new Error(`Data file does not contain a "${collection}" collection.`);
  }

  return records;
}
