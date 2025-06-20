export function formatBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {},
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, isPublished } = post.data;
    //console.log(post);
    // filteredOutDrafts if true and isPublished is false
    if (filterOutDrafts && !isPublished) return acc;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    // add post to acc
    acc.push(post);

    return acc;
  }, []);

  // if sortByDate is true we sort by date, if it is false, we
  // get random posts
  if (sortByDate) {
    filteredPosts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  //limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}

//we export our function with an options object and make it optional
// with passing an empty object if there are none
