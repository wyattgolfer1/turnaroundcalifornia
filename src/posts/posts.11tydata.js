// Settings shared by every post. Drafts are not built at all, so they can't be found online.
export default {
  layout: "post.njk",
  eleventyComputed: {
    permalink: (data) => (data.draft ? false : `/posts/${data.page.fileSlug}/`),
  },
};
