import ProjectComponent from "@/components/project";
import { notFound } from "next/navigation";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

export const revalidate = 0;
export const dynamic = "force-dynamic";

// Requête SANS paramètre obligatoire $slug
const PROJECT_QUERY = defineQuery(`
  {
    "projectCurrentSlug": *[
      _type == "project" &&
      slug.current == $slug
    ][0]{
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

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data } = await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug: (await params).slug },
  });

  if (!data) {
    notFound();
  }

  return (
    <ProjectComponent
      projectAll={data.projectAllProject}
      projectCurrent={data.projectCurrentSlug}
    />
  );
}
