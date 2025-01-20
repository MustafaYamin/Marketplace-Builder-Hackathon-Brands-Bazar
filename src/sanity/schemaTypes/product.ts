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
      title: "Product images",
      validation: (rule: Rule) => rule.required(),
      type: "image",
      // of: [{type: 'image'}]
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

