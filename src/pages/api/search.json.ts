import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export const Get: APIRoute = async ({ url }): Promise<Response> => {
    const query: string | null = url.searchParams.get("q");

    if (query === null) {
        return new Response(JSON.stringify({
            error: 'querty parameter "q" is required'
        }),{
            status: 400,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    const allProjects: CollectionEntry<"project">[] = await getCollection("project");

    const isValidQuery = query && query.trim() !== "";

    const searchResults = isValidQuery
  ? allProjects.filter(project => {
      const q = query!.toLowerCase();
      return (
        project.data.title.toLowerCase().includes(q) ||
        project.body.toLowerCase().includes(q) ||
        project.slug.toLowerCase().includes(q) ||
        project.data.tags.map(tag => tag.toLowerCase()).includes(q)
      );
    })
  : [];

    return new Response(JSON.stringify(searchResults),{
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
};