const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function getProperties() {
    const response = await fetch(`${API_URL}/properties`);
    
    if(!response.ok){
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
}

export async function getProperty(id) {
    const response = await fetch(`${API_URL}/properties/${id}`); 
    if(!response.ok){
      throw new Error(`Failed to load property (${response.status})`);
    }

    const data = await response.json();
    return data;
}

export function loadProperties() {
  return getProperties();
}

export function loadProperty({ params }) {
  return getProperty(params.id);
}