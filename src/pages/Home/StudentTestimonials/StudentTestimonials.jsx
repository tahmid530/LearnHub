import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Container from "../../../components/ui/Container";
import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionTitle from "../../../components/ui/SectionTitle";

import testimonials from "../../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function StudentTestimonials() {
    return (
        <SectionWrapper>

            {/* Background Glow */}

            <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-600/15 blur-[150px]" />

            <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-[150px]" />

            <Container>

                <SectionTitle
                    badge="Student Success Stories"
                    title={
                        <>
                            Trusted by
                            <span className="text-amber-400">
                                {" "}
                                Thousands of Learners
                            </span>
                        </>
                    }
                    description="Hear from students who transformed their careers through LearnHub. Their success stories inspire thousands of new learners every year."
                />

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="mt-20"
                >

                    <Swiper
                        modules={[
                            Autoplay,
                            Pagination,
                        ]}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1280: {
                                slidesPerView: 3,
                            },
                        }}
                    >

                        {testimonials.map((testimonial) => (

                            <SwiperSlide
                                key={testimonial.id}
                                className="pb-14"
                            >

                                <TestimonialCard
                                    testimonial={testimonial}
                                />

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </motion.div>

            </Container>

        </SectionWrapper>
    );
}