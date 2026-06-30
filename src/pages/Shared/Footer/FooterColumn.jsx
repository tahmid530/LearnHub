import { Link } from "react-router";

export default function FooterColumn({
    title,
    links,
}) {
    return (
        <div>

            <h3 className="mb-6 text-lg font-semibold text-white">

                {title}

            </h3>

            <ul className="space-y-4">

                {links.map((link) => (

                    <li key={link.name}>

                        <Link
                            to={link.path}
                            className="text-slate-400 transition-colors duration-300 hover:text-indigo-400"
                        >
                            {link.name}
                        </Link>

                    </li>

                ))}

            </ul>

        </div>
    );
}