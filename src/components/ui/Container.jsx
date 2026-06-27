import clsx from "clsx";

const Container = ({
    children,
    className = "",
}) => {
    return (
        <div
            className={clsx(
                "mx-auto max-w-7xl px-6 lg:px-8",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;