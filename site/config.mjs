export const config={
  "id": "blog",
  "repo": "blog-template",
  "title": "Field Notes",
  "heading": "Something worth noticing.",
  "intro": "A sample journal of useful observations, small discoveries and work in progress.",
  "noun": "post",
  "plural": "posts",
  "titleField": "title",
  "publishing": true,
  "fields": [
    {
      "key": "title",
      "label": "Post title",
      "type": "text",
      "required": true
    },
    {
      "key": "date",
      "label": "Publication date",
      "type": "date",
      "required": true
    },
    {
      "key": "tags",
      "label": "Tags",
      "type": "text",
      "required": true
    },
    {
      "key": "body",
      "label": "Article",
      "type": "textarea",
      "required": true,
      "max": 20000
    },
    {
      "key": "state",
      "label": "Publication state",
      "type": "select",
      "required": true,
      "options": [
        "Draft",
        "Published",
        "Archived"
      ],
      "default": "Draft"
    }
  ],
  "settings": [
    {
      "key": "name",
      "label": "Publication name",
      "default": "Field Notes",
      "type": "text",
      "required": true
    },
    {
      "key": "headline",
      "label": "Headline",
      "default": "Notice more. Write it down.",
      "type": "text",
      "required": true
    },
    {
      "key": "about",
      "label": "About this publication",
      "default": "Small observations about design, making and everyday life.",
      "type": "textarea",
      "required": true
    },
    {
      "key": "author",
      "label": "Author name",
      "default": "Alex Morgan",
      "type": "text",
      "required": true
    }
  ]
};
