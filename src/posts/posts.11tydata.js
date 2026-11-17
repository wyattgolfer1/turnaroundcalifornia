// Settings shared by every post
export default {
  layout: "post.njk",
  permalink: (data) => `/posts/${data.page.fileSlug}/`,
};
