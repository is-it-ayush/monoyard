import Link from "next/link";

export default function HoverWrap({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) {
  return (
    <Link
      prefetch={false}
      href={to}
      className="m-5 flex flex-row rounded-[5px] border-2 border-black p-5 text-black duration-100 hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
    >
      {children}
    </Link>
  );
}
