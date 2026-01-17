import ProjectComponent from "@/components/project";
import { notFound } from "next/navigation";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";


export const revalidate = 0;
export const dynamic = "force-dynamic";
const PROJECT_SLUG_QUERY = defineQuery(`
  {
  "projectCurrentSlug": *[
    _type == "projects" &&
    slug.current == $slug
][0]{
  ...,
  gallery[]{
  ...,
  video{ 
  asset ->{
  playbackId,
  data,
  thumbTime
      }
    }
  }
},
  "projectAllProject": *[
  _type == "projects"
] | order(orderRank) {_id, title, slug, category, year, link, designer, gallery}
}
`);


export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data } = await sanityFetch({
    query: PROJECT_SLUG_QUERY,
    params: { slug},
  });
if (!data || !data.projectCurrentSlug) {
    notFound();
  }
  
  const { projectCurrentSlug, projectAllProject } = data;

  return <ProjectComponent projectAll={projectAllProject} projectCurrent={projectCurrentSlug} />;
}
