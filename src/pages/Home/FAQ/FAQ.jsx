import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Container from "../../../components/ui/Container";
import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionTitle from "../../../components/ui/SectionTitle";
import GlassCard from "../../../components/ui/GlassCard";

import faqData from "../../../data/faqData";
import FAQItem from "./FAQItem";

export default function FAQ() {
    const [activeId, setActiveId] = useState(1);

    const handleToggle = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <SectionWrapper>

            {/* Background Glow */}

            <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-indigo-600/15 blur-[150px]" />

            <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[150px]" />

            <Container>

                <SectionTitle
                    badge="Frequently Asked Questions"
                    title={
                        <>
                            Got Questions?
                            <span className="text-amber-400"> We've Got Answers</span>
                        </>
                    }
                    description="Find answers to the most common questions about LearnHub, our courses, certificates, and learning experience."
                />

                <div className="mx-auto mt-20 max-w-4xl space-y-6">

                    {faqData.map((faq) => (
  <FAQItem
    key={faq.id}
    faq={faq}
    isOpen={activeId === faq.id}
    onToggle={() => handleToggle(faq.id)}
  />
))}

                </div>

            </Container>

        </SectionWrapper>
    );
}