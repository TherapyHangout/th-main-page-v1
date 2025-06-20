import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { formatBlogPosts } from "../scripts/utils";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const allPosts = await getCollection("stories");
  const formattedPosts = formatBlogPosts(allPosts);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: formattedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      date: post.data.date,
      author: post.data.author,
      link: `/stories/${post.data.slug}/`,
    })),
  });
}
