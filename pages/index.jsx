import BannerModule from "../components/Banner/Banner";
import CateogaryBlock from "../components/Cateogary Block/CateogaryBlock";
import fakeLinks from '../components/DataFetching/index'
import EditorsPick from "../components/Editors Pick/EditorsPick";
import SeoOptimised from "../components/Seo";
import PopularPost from "../components/Popular Posts/PopularPosts";
import CateogaryBlockModule from "../components/Cateogary Wise Module/CateogaryBlock";
import Newsletter from "../components/NewsLetter/Newzletter";

export default function Home({ cateogaries, recentPosts, editorsPick, recomendedTopics, popularPosts, randomCateogary, recentBlogs }) {
  return (
    <>
      <SeoOptimised curPage={'Home'} />
      <CateogaryBlock cateogarys={cateogaries} />
      <BannerModule recentPost={recentPosts} />
      <EditorsPick editorsPick={editorsPick} recomendedTopics={recomendedTopics} />
      <PopularPost popularPosts={popularPosts} />
      <CateogaryBlockModule randomCateogary={randomCateogary} head={String(randomCateogary[0].Cateogary)} typeOfSection={'cateogary'} />
      <CateogaryBlockModule randomCateogary={recentBlogs} head={'Recent Blog Posts'} typeOfSection={'recent'} />
      <Newsletter />
    </>
  )
}

export const getStaticProps = async () => {
  const [cateogariesRes, recentPostsRes, editorsPickRes, recomendedTopicsRes, popularPostRes, randomCateogaryRes, recentBlogsRes] = await Promise.all([
    fetch(`${process.env.blogURLPOST}${process.env.cateogary}`),
    fetch(`${process.env.blogURLPOST}${process.env.recentPost}`),
    fetch(`${process.env.blogURLPOST}${process.env.editorsPick}`),
    fetch(`${process.env.blogURLPOST}${process.env.recomendedTopics}`),
    fetch(`${process.env.blogURLPOST}${process.env.popularPosts}`),
    fetch(`${process.env.blogURLPOST}${process.env.randomCateogary}`),
    fetch(`${process.env.blogURLPOST}${process.env.recentBlogPosts}`),
  ])

  const [cateogaries, recentPosts, editorsPick, recomendedTopics, popularPosts, randomCateogary, recentBlogs] = await Promise.all([
    cateogariesRes.json(),
    recentPostsRes.json(),
    editorsPickRes.json(),
    recomendedTopicsRes.json(),
    popularPostRes.json(),
    randomCateogaryRes.json(),
    recentBlogsRes.json(),
  ])

  return {
    props: {
      cateogaries,
      recentPosts,
      editorsPick,
      recomendedTopics,
      popularPosts,
      randomCateogary,
      recentBlogs,
    },
    revalidate: 60
  }
}