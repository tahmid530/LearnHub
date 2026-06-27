import clsx from "clsx";

const SectionWrapper = ({
    children,
    className = "",
}) => {
    return (
        <section
            className={clsx(
                "relative overflow-hidden bg-[#0F172A] py-24",
                className
            )}
        >
            {children}
        </section>
    );
};

export default SectionWrapper;