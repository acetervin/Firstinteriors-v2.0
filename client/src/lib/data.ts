export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  year: string;
  timeline: string;
  featured: boolean;
  image: string;
  gallery: { category: string; images: string[] }[];
}

let projectsCache: Project[] | null = null;

export async function getProjects(): Promise<Project[]> {
  if (projectsCache) {
    return projectsCache;
  }

  try {
    const response = await fetch('/projects.json');
    if (!response.ok) {
      throw new Error('Failed to load projects');
    }
    projectsCache = await response.json();
    return projectsCache as Project[];
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find(p => p.id === id);
}

export const initializeProjects = async () => {
  return await getProjects();
};
