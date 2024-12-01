import type { TinaField } from "tinacms";
export function articleFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
      options: ["report", "review"],
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured",
    },
    {
      type: "string",
      name: "slug",
      label: "Url",
      required: true,
    },
    {
      type: "string",
      name: "translationKey",
      label: "Key",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "Author",
      options: ["dave", "mathilde"],
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "keywords",
      label: "Keywords",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "boolean",
      name: "social_posts",
      label:
        "Social posts (Facebook, Twitter, Instagram [coming soon], Pinterest, Tumblr)",
    },
    {
      type: "datetime",
      name: "social_date",
      label: "Social posts date",
    },
    {
      type: "string",
      name: "hashtags",
      label: "Hashtags",
    },
    {
      type: "boolean",
      name: "title_has_context",
      label: "Title Has Context",
    },
  ] as TinaField[];
}
export function authorFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
      required: true,
    },
    {
      type: "string",
      name: "name",
      label: "Name",
      required: true,
    },
    {
      type: "string",
      name: "contact",
      label: "Contact URL (optional)",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
    },
    {
      type: "string",
      name: "biography",
      label: "Biography",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ] as TinaField[];
}
export function expedition_index__rename_to__index_en_Fields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
      required: true,
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "hashtags",
      label: "Hashtags",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ] as TinaField[];
}
export function pageFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
      required: true,
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
  ] as TinaField[];
}
export function titleFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
  ] as TinaField[];
}
