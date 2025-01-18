import { Rule } from "sanity";


const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      validation: (rule: Rule) => rule.required(),
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      validation: (rule: Rule) => rule.required(),
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "price",
      title: "Price",
      validation: (rule: Rule) => rule.required(),
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      validation: (rule: Rule) => rule.required(),
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      validation: (rule: Rule) => rule.required(),
      type: "text",
    },
    {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }],
          },
    {
      name: "isNew",
      type: "boolean",
      title: "New Badge",
    },
  ],
};

export default product;

// import { defineType } from "sanity";

// export const product = defineType({
//   name: "product",
//   title: "Product",
//   type: "document",
//   fields: [
//     {
//       name: "neme",
//       title: "Title",
//       validation: (rule) => rule.required(),
//       type: "string",
//     },
//     {
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: {
//         source: "name",
//         maxLength: 96,
//       },
//     },
//     {
//       name: "description",
//       type: "text",
//       validation: (rule) => rule.required(),
//       title: "Description",
//     },
//     {
//       name: "image_url",
//       type: "image",
//       validation: (rule) => rule.required(),
//       title: "Product Image",
//     },
//     {
//       name: "price",
//       type: "number",
//       validation: (rule) => rule.required(),
//       title: "Price",
//     },
//     {
//       name: "tags",
//       type: "array",
//       title: "Tags",
//       of: [{ type: "string" }],
//     },
//     {
//       name: "dicountPercentage",
//       type: "number",
//       title: "Discount Percentage",
//     },
//     {
//       name: "isNew",
//       type: "boolean",
//       title: "New Badge",
//     },
//   ],
// });
