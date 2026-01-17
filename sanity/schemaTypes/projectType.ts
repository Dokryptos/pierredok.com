import { defineField, defineType, defineArrayMember } from "sanity";
import { ArchiveIcon } from "@sanity/icons";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ArchiveIcon,
  orderings: [orderRankOrdering],
  fieldsets: [
    {
      name: "misc",
      title: "Misc",
      options: {
        columns: 3,
      },
    },
  ],
  fields: [
    orderRankField({ type: "project" }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: "The title of the project (Obligation)",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: `The slug is the url path of the project, Can use Generate button but try to keep it clean Without ponctuation(, . ; : ! ?) and Without (&é"'(-è_çà)=) (Obligation)`,
    }),
    defineField({
      name: "Designer",
      title: "Designer",
      type: "string",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: "The designer of the project (Obligation)",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: "The link of the project (Obligation)",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: "The year of the project (Obligation)",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: "The category of the project Portfolio | Perso (Obligation)",
    }),
    defineField({
      name: "gallery",
      title: "gallery",
      type: "array",
      description:
        "Select all the image you want to render, in Webp for keep the place on the CMS and keep the CMS available with the free version (Obligation) with 1 image or 1 Link vimeo not both",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      of: [
        defineArrayMember({
          type: "object",
          name: "galleryItem",
          description: "Need 1 video or 1 image for complmete the project",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              description: "Image related to the array of project",
            }),
            defineField({
              title: "Video file",
              type: "mux.video",
              name: "video",
              description:
                "Video related to the Video inside array of project.",
            }),
          ],
          validation: (Rule) =>
            Rule.custom((fields) => {
              if (fields?.image && fields?.video) {
                return "You can only have image OR a video, not both";
              }
              if (!fields?.image && !fields?.video) {
                return "You must provide either an image or a video.";
              }
              return true;
            }),
        }),
      ],
    }),
  ],
});
