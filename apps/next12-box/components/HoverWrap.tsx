import Link from "next/link";

export default function HoverWrap({children, to}: {children: React.ReactNode; to: string}) {
    return (
        <Link
            prefetch={false}
            href={to}
            className="flex flex-row m-5 p-5 border-2 border-black text-black dark:border-white dark:text-white rounded-[5px] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-100">
            {children}
        </Link>
    );
}
