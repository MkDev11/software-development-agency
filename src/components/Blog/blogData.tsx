import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Web Accessibility Trends: Building Inclusive Websites",
    paragraph:
      "In today’s digital age, the internet plays an integral role in our daily lives. From shopping and banking to entertainment and education, the online realm has become an indispensable part of our routines. However, have you ever stopped to consider whether everyone, regardless of their abilities, can access and navigate the websites we often take for granted? This is where the concept of web accessibility comes into play.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "lakshayhalo",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "August 10, 2023",
  },
  {
    id: 2,
    title: "How to Create an Effective Content Marketing Strategy",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "The Future of Digital Marketing: Trends and Predictions for 2023",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
