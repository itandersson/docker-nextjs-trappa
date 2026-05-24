import CartModal from "components/cart/modal";
import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const localLinks = [
    { title: "Hem", path: "/" },
    { title: "Tjänster", path: "/tjanster" },
    { title: "Om oss", path: "/om-oss" },
    { title: "Boka tid", path: "/boka-tid" }
  ];

  const menu = await getMenu("next-js-frontend-header-menu");

  const combinedMenu = [
    ...localLinks,
    ...menu.map((item) => ({
      title: item.title,
      path: item.path,
    })),
  ];

  return (
    <nav className="relative p-4 lg:px-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={combinedMenu} />
        </Suspense>
      </div>

      <div className="hidden md:grid md:auto-cols-max md:grid-flow-col md:items-center md:justify-center w-full gap-10">

        {/* Logga */}
        <Link href="/" className="flex items-center gap-2">
          <LogoSquare />
          <span className="hidden lg:block text-sm font-medium uppercase">
            {SITE_NAME}
          </span>
        </Link>

        {/* Meny */}
        <ul className="flex gap-6 text-sm">
          {combinedMenu.map((item) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className="hover:text-black dark:hover:text-white"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Höger actions */}
        <div className="flex items-center gap-6">
          <Link href="/kontakt" className="flex items-center gap-2 text-sm">
            <span className="text-xl">📞</span>
            <span>076-8482577</span>
          </Link>
          <CartModal />
        </div>

      </div>
    </nav>
  );
}

