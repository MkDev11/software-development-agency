import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Projects",
    path: "/projects",
    newTab: false
  },
  
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    newTab: false
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Blockchain Development",
        path: "/services/blockchain",
        newTab: false
      },
      {
        id: 42,
        title: "Mobile App Development",
        path: "/services/blockchain",
        newTab: false
      },
      {
        id: 43,
        title: "Web Development",
        path: "/services/blockchain",
        newTab: false
      },
      {
        id: 44,
        title: "Shopify Development",
        path: "/services/blockchain",
        newTab: false
      },
      {
        id: 45,
        title: "UI/UX Design",
        path: "/services/blockchain",
        newTab: false
      },
      {
        id: 46,
        title: "IoT",
        path: "/services/blockchain",
        newTab: false
      },
      {
        id: 47,
        title: "Generative AI",
        path: "/services/blockchain",
        newTab: false
      },
    ]
  },
];
export default menuData;
