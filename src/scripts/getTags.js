// Get tags from all posts
export default function getTags(posts) {
  const allTags = posts
    .map((post) => {
      const postTags = post.data.tags;
      let allTags = [];

      if (postTags?.length > 0) {
        postTags.forEach((tag) => {
          if (allTags?.indexOf(tag) === -1) {
            allTags.push(tag);
          }
        });
      }
      return allTags;
    })
    .flat(1);
  // Make the tags unique
  let tags = [...new Set(allTags)];
  return tags;
}
