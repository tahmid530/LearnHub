const courses = [
    {
        id: 1,
        slug: "react-frontend-bootcamp",

        title: "React Frontend Bootcamp",

        description:
            "Master React, Tailwind CSS, React Router and build production-ready modern web applications.",

        category: "Frontend",

        level: "Beginner",

        badge: "Bestseller",

        thumbnail:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80",

        instructor: {
            name: "John Anderson",
            designation: "Senior Frontend Engineer",
            avatar: "https://i.pravatar.cc/150?img=12",
        },

        rating: 4.9,
        reviews: "2.3k",

        students: "12.5k",

        lessons: 48,

        duration: "8 Weeks",

        price: 49,

        oldPrice: 79,
    },

    {
        id: 2,
        slug: "nodejs-api-development",

        title: "Node.js Backend Development",

        description:
            "Build secure REST APIs using Express, MongoDB, JWT Authentication and modern backend practices.",

        category: "Backend",

        level: "Intermediate",

        badge: "Popular",

        thumbnail:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=80",

        instructor: {
            name: "David Wilson",
            designation: "Backend Architect",
            avatar: "https://i.pravatar.cc/150?img=15",
        },

        rating: 4.8,

        reviews: "1.7k",

        students: "8.2k",

        lessons: 55,

        duration: "10 Weeks",

        price: 59,

        oldPrice: 89,
    },

    {
        id: 3,
        slug: "mongodb-complete-guide",

        title: "MongoDB Complete Guide",

        description:
            "Learn MongoDB from fundamentals to aggregation pipelines, indexing and performance optimization.",

        category: "Database",

        level: "Intermediate",

        badge: "Trending",

        thumbnail:
            "https://images.unsplash.com/photo-1542831371-d531d36971e6?w=900&auto=format&fit=crop&q=80",

        instructor: {
            name: "Emily Carter",
            designation: "Database Engineer",
            avatar: "https://i.pravatar.cc/150?img=32",
        },

        rating: 4.8,

        reviews: "950",

        students: "6.1k",

        lessons: 38,

        duration: "6 Weeks",

        price: 39,

        oldPrice: 69,
    },

    {
        id: 4,
        slug: "javascript-mastery",

        title: "JavaScript Mastery",

        description:
            "Master modern JavaScript including ES6+, asynchronous programming and advanced concepts.",

        category: "Programming",

        level: "Beginner",

        badge: "Top Rated",

        thumbnail:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&auto=format&fit=crop&q=80",

        instructor: {
            name: "Michael Lee",
            designation: "Software Engineer",
            avatar: "https://i.pravatar.cc/150?img=18",
        },

        rating: 5.0,

        reviews: "3.4k",

        students: "18k",

        lessons: 60,

        duration: "9 Weeks",

        price: 45,

        oldPrice: 75,
    },

    {
        id: 5,
        slug: "fullstack-mern",

        title: "Complete MERN Stack",

        description:
            "Build full-stack applications with MongoDB, Express, React and Node.js.",

        category: "Full Stack",

        level: "Advanced",

        badge: "Editor's Choice",

        thumbnail:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=80",

        instructor: {
            name: "Sarah Johnson",
            designation: "Full Stack Developer",
            avatar: "https://i.pravatar.cc/150?img=45",
        },

        rating: 4.9,

        reviews: "2.1k",

        students: "9.4k",

        lessons: 72,

        duration: "12 Weeks",

        price: 89,

        oldPrice: 119,
    },

    {
        id: 6,
        slug: "figma-uiux",

        title: "UI / UX Design with Figma",

        description:
            "Design beautiful user interfaces and prototypes using Figma from beginner to advanced level.",

        category: "UI / UX",

        level: "Beginner",

        badge: "New",

        thumbnail:
            "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&auto=format&fit=crop&q=80",

        instructor: {
            name: "Sophia Martin",
            designation: "UI/UX Designer",
            avatar: "https://i.pravatar.cc/150?img=48",
        },

        rating: 4.7,

        reviews: "780",

        students: "4.8k",

        lessons: 34,

        duration: "5 Weeks",

        price: 35,

        oldPrice: 55,
    },

    {
        id: 7,
        slug: "docker-kubernetes",

        title: "Docker & Kubernetes",

        description:
            "Learn containerization, Docker Compose and Kubernetes deployment from scratch.",

        category: "DevOps",

        level: "Advanced",

        badge: "Trending",

        thumbnail:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop&q=80",

        instructor: {
            name: "Daniel Smith",
            designation: "DevOps Engineer",
            avatar: "https://i.pravatar.cc/150?img=22",
        },

        rating: 4.9,

        reviews: "920",

        students: "5.2k",

        lessons: 41,

        duration: "7 Weeks",

        price: 69,

        oldPrice: 99,
    },

    {
        id: 8,
        slug: "nextjs-full-course",

        title: "Next.js Full Course",

        description:
            "Build fast SEO-friendly React applications using Next.js App Router and Server Components.",

        category: "Frontend",

        level: "Intermediate",

        badge: "Popular",

        thumbnail:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&auto=format&fit=crop&q=80",

        instructor: {
            name: "Alex Brown",
            designation: "Senior React Developer",
            avatar: "https://i.pravatar.cc/150?img=28",
        },

        rating: 4.9,

        reviews: "1.4k",

        students: "7.9k",

        lessons: 52,

        duration: "8 Weeks",

        price: 55,

        oldPrice: 85,
    },
];

export default courses;