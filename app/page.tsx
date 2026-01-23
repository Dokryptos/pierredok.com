import ProjectComponent from "@/components/project";
import { notFound } from "next/navigation";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

export const revalidate = 0;
export const dynamic = "force-dynamic";

// Requête SANS paramètre obligatoire $slug
const HOME_QUERY = defineQuery(`
  {
    "projectCurrentSlug": *[_type == "project"] | order(orderRank asc)[0]{
      ...,
      gallery[]{
        ...,
        video{ asset ->{ playbackId, data, thumbTime } }
      }
    },
    "projectAllProject": *[_type == "project"] | order(orderRank asc) {
      _id, title, slug, category, year, link, designer, gallery
    }
  }
`);

export default async function HomePage() {
  const { data } = await sanityFetch({
    query: HOME_QUERY,
    // On ne passe PAS de params ici, la requête s'en passe
  });

  if (!data || !data.projectCurrentSlug) {
    notFound();
  }

  return (
    <ProjectComponent 
      projectAll={data.projectAllProject} 
      projectCurrent={data.projectCurrentSlug} 
    />
  );
}