import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { ImagesIcon } from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "projects",
        title: "Projects",
        icon: ImagesIcon,
        S,
        context,
      }),
    ]);
