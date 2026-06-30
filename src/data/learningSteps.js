import {
    Search,
    PlayCircle,
    FileCheck,
    Award,
} from "lucide-react";

const learningSteps = [
    {
        id: 1,
        step: "01",
        icon: Search,
        title: "Choose Your Course",
        description:
            "Browse our carefully designed courses and choose the one that matches your learning goals and career path.",
        color: "from-indigo-500 to-violet-600",
    },
    {
        id: 2,
        step: "02",
        icon: PlayCircle,
        title: "Start Learning",
        description:
            "Watch engaging video lessons, read learning materials, and complete practical coding exercises at your own pace.",
        color: "from-sky-500 to-cyan-500",
    },
    {
        id: 3,
        step: "03",
        icon: FileCheck,
        title: "Practice & Quiz",
        description:
            "Test your knowledge through quizzes and hands-on projects to strengthen your understanding.",
        color: "from-amber-400 to-orange-500",
    },
    {
        id: 4,
        step: "04",
        icon: Award,
        title: "Earn Certificate",
        description:
            "Successfully complete the course and receive a professional certificate to showcase your skills.",
        color: "from-emerald-500 to-teal-500",
    },
];

export default learningSteps;