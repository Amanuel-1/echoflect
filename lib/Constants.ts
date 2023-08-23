import { Images } from "@/public/resources";


  const menuLinks = [
      {
        title:"Home",
        href:"/categories",
        logo:"",
        description:"this is where the news feed is rendered.",
        dropdown:false,
        megaMenu:false
      },
      {
        title:"Categories",
        href:"/#",
        logo:"",
        description:"this is where the categories of the essay are rendered.",
        dropdown:false,
        megaMenu:false
      },
      {
        title:"Trending",
        href:"/#",
        logo:"",
        description:"this is where the hot posts are rendered.",
        dropdown:false,
        megaMenu:false
      },
      {
        title:"About",
        href:"/#",
        logo:"",
        description:"this is where the about page is rendered.",
        dropdown:false,
        megaMenu:false
      },

    ]

  const Categories = [
    {
      title: "Literature",
      href: "/categories/literature",
      logo: "",
      description: "Explore a vast collection of literary works from renowned authors and emerging talents.",
      dropdown: false,
      megaMenu: false
    },
    {
      title: "Technology",
      href: "/categories/technology",
      logo: "",
      description: "Discover how technology impacts the world of writing and publishing, and stay updated with the latest tools and trends.",
      dropdown: false,
      megaMenu: false
    },
    {
      title: "Art",
      href: "/categories/art",
      logo: "",
      description: "Immerse yourself in the artistic expressions of authors through visual art, illustrations, and cover designs.",
      dropdown: false,
      megaMenu: false
    },
    {
      title: "Science",
      href: "/categories/science",
      logo: "",
      description: "Delve into the intersection of science and writing, and explore scientific concepts through the lens of literature.",
      dropdown: false,
      megaMenu: false
    },
    {
      title: "Food",
      href: "/categories/food",
      logo: "",
      description: "Unleash your creativity in the kitchen with recipes inspired by literary works and explore the relationship between food and writing.",
      dropdown: false,
      megaMenu: false
    },
    {
      title: "Travel",
      href: "/categories/travel",
      logo: "",
      description: "Embark on literary journeys around the world, exploring travel writing, cultural experiences, and inspiring destinations.",
      dropdown: false,
      megaMenu: false
    },
    {
      title: "Sports",
      href: "/categories/sports",
      logo: "",
      description: "Discover the captivating world of sports writing, featuring articles, interviews, and stories that intertwine literature and athletics.",
      dropdown: false,
      megaMenu: false
    },
    {
      title: "Fashion",
      href: "/categories/fashion",
      logo: "",
      description: "Explore the intersection of fashion and literature, where style, self-expression, and storytelling intertwine.",
      dropdown: false,
      megaMenu: false
    },
    {
      title: "Music",
      href: "/categories/music",
      logo: "",
      description: "Immerse yourself in the harmonious connection between music and writing, with articles, playlists, and author-curated soundtracks.",
      dropdown: false,
      megaMenu: false
    }
  ];

  const footerLinks = [
    {
      name: "Home",
      href: "/",
      links: [],
    },
    {
      name: "About Us",
      href: "/about",
      links: [
        {
          title: "Company Overview",
          href: "/about/company",
        },
        {
          title: "Our Team",
          href: "/about/team",
        },
        {
          title: "Mission and Vision",
          href: "/about/mission-vision",
        },
        {
          title: "Company News",
          href: "/about/news",
        },
      ],
    },
    {
      name: "Services",
      href: "/services",
      links: [
        {
          title: "Web Development",
          href: "/services/web-development",
        },
        {
          title: "Mobile App Development",
          href: "/services/mobile-app-development",
        },
        {
          title: "UI/UX Design",
          href: "/services/ui-ux-design",
        },
        {
          title: "Digital Marketing",
          href: "/services/digital-marketing",
        },
        {
          title: "SEO Optimization",
          href: "/services/seo",
        },
        {
          title: "Content Creation",
          href: "/services/content-creation",
        },
        {
          title: "Graphic Design",
          href: "/pages/login",
        },
      ],
    },
    {
      name: "Products",
      href: "/products",
      links: [
        {
          title: "Product 1",
          href: "/products/product1",
        },
        {
          title: "Product 2",
          href: "/products/product2",
        },
        {
          title: "Product 3",
          href: "/products/product3",
        },
        {
          title: "Product 4",
          href: "/products/product4",
        },
        {
          title: "Product 5",
          href: "/products/product5",
        },
      ],
    },
    {
      name: "Blog",
      href: "/blog",
      links: [
        {
          title: "Latest Articles",
          href: "/blog/latest-articles",
        },
        {
          title: "Tutorials",
          href: "/blog/tutorials",
        },
        {
          title: "Industry News",
          href: "/blog/industry-news",
        },
        {
          title: "Case Studies",
          href: "/blog/case-studies",
        },
      ],
    },
    {
      name: "Contact Us",
      href: "/contact",
      links: [
        {
          title: "General Inquiries",
          href: "/contact/general",
        },
        {
          title: "Sales",
          href: "/contact/sales",
        },
        {
          title: "Support",
          href: "/contact/support",
        },
        {
          title: "Partnerships",
          href: "/contact/partnerships",
        },
      ],
    },

  ];

  const statusList = [
    {
      label:"Active Users",
      value : "100K"
    },
    {
      label:"Total Insights",
      value : "1M+"
    },
    {
      label:"Active Authors",
      value : "50K"
    },
    {
      label:"Content Creators",
      value : "60K+"
    },
    {
      label:"Content Creators",
      value : "60K+"
    },
  ]



  const features= [
    {
      svg: Images.Influencer,
      heading: "Welcome to Our Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet vel leo eu fringilla. Nam eu faucibus mauris, at interdum massa. Integer id sapien nulla.",
      svgleft: true,
    },
    {
      svg: "/images/svg2.svg",
      heading: "Discover Our Services",
      description: "We provide a wide range of services to meet your needs. From web development and mobile app development to UI/UX design and digital marketing, our team delivers exceptional solutions tailored to your requirements.",
      svgleft: false,
    },
    {
      svg: "/images/svg3.svg",
      heading: "Meet Our Team",
      description: "Our dedicated team is ready to assist you. With diverse skills and backgrounds, our professionals work collaboratively to ensure your project's success.",
      svgleft: true,
    },
    {
      svg: "/images/svg4.svg",
      heading: "Contact Us",
      description: "Get in touch with us for inquiries or collaboration. We value open communication and prompt personalized assistance to address your questions or partnership opportunities.",
      svgleft: false,
    },
  ];



export {menuLinks,footerLinks,statusList , features,Categories}