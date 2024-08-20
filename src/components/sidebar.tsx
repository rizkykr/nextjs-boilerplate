import { lowerCase } from "lodash";
import Link from "next/link";

interface sideMenu {
  title: string;
  icon?: string;
  sub?: sideMenu[];
  link?: string;
  count?: number;
}

interface menuGates {
  title: string;
  menu: sideMenu[];
}

export default function SidebarApp() {
  const menus: menuGates[] = [
    {
      title: "APLIKASI",
      menu: [
        { title: "Homepage", icon: "house", link: "/", count: 9 },
        {
          title: "Master",
          icon: "widgets",
          sub: [{ title: "Kategori", link: "/kategori" }],
        },
      ],
    },
  ];
  const MenuComponent = ({
    title,
    menu,
  }: {
    title: string;
    menu: sideMenu[];
  }) => (
    <>
      {title ? (
        <div className="pt-6 pb-2 px-4 compact-hide">
          <p className="text-title-sm font-medium uppercase text-gray-600 dark:text-gray-400">
            {title}
          </p>
        </div>
      ) : (
        ""
      )}
      <ul className="sidebar-menu flex flex-col">
        {/* Apps */}
        {menu.map((v: sideMenu, i: number) => (
          <li className="relative" key={i}>
            {v.sub?.length ? (
              <>
                <a
                  href="#"
                  data-type="collapse"
                  data-target={`#menu-${lowerCase(v.title) + i}`}
                  className="flex flex-row items-center gap-3 py-3 pl-4 pr-6 mb-1 rounded-full hover-icon [&.active]:text-gray-900 dark:[&.active]:text-gray-100 [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 hover:bg-primary-600/[0.08] dark:hover:bg-primary-200/[0.08] cursor-pointer"
                >
                  {v.icon ? (
                    <span className="material-symbols-outlined">{v.icon}</span>
                  ) : (
                    ""
                  )}
                  <span className="compact-title">{v.title}</span>
                </a>
                <ul
                  id={`menu-${lowerCase(v.title) + i}`}
                  data-type="collapsed"
                  className="sidebar-submenu [&.active]:block hidden"
                >
                  {v.sub.map((x, j: number) => (
                    <li key={j}>
                      <Link
                        href={x.link || ""}
                        className="flex items-center py-3 pl-12 pr-6 mb-1 leading-none gap-2.5 rounded-full hover-icon [&.active]:text-gray-900 dark:[&.active]:text-gray-100 [&.active]:bg-primary-600/[0.08] dark:[&.active]:bg-primary-200/10 hover:bg-primary-600/[0.08] dark:hover:bg-primary-200/[0.08]"
                      >
                        {x.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                href={v.link || ""}
                className="flex flex-row items-center gap-3 py-3 pl-4 pr-6 mb-1 rounded-full hover-icon [&.active]:text-gray-900 dark:[&.active]:text-gray-100 [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 hover:bg-primary-600/[0.08] dark:hover:bg-primary-200/[0.08]"
              >
                {v.icon ? (
                  <span className="material-symbols-outlined">{v.icon}</span>
                ) : (
                  ""
                )}
                <span className="compact-title">{v.title}</span>
                {v.count ? (
                  <span className="compact-hide w-5 h-5 flex items-center justify-center rounded-full text-[11px] leading-none tracking-[.045em] font-medium bg-surface-200 dark:bg-surfacedark-200 ml-auto">
                    {v.count}
                  </span>
                ) : (
                  ""
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <aside
      id="sidebar"
      className="sidebar transition-all duration-500 ease-in-out fixed max-lg:z-[60] lg:shrink-0 lg:relative lg:w-72 h-screen max-lg:[&.show_.sidebar-bg]:opacity-60 dark:max-lg:[&.show_.sidebar-bg]:opacity-60 [&.show_.sidebar-bg]:inset-0 [&.show_.sidebar-content]:translate-x-0"
    >
      {/* backdrop */}
      <div
        data-close="#sidebar"
        className="sidebar-bg fixed z-40 opacity-0 -top-full bg-black"
      />
      {/* menu */}
      <div
        id="sidebar-content"
        className="sidebar-content transition-all duration-300 ease-in-out fixed z-40 max-lg:-translate-x-full max-lg:bg-surface-500 dark:max-lg:bg-surfacedark-500 left-0 top-0 bottom-0 h-screen w-72 overflow-auto scrollbars"
      >
        <Link
          href="/"
          className="sidebar-logo pt-4 pb-2 pl-6 flex items-center w-full"
        >
          <div className="w-9 h-9 rounded-full border-2 border-primary-600 flex items-center justify-center text-primary-800 font-bold text-lg">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-200">
              P
            </span>
          </div>
          <h4 className="text-2xl font-medium tracking-wide text-gray-900 dark:text-gray-100 compact-hide ml-2">
            PostApp
          </h4>
        </Link>
        <div className="w-full inline-flex flex-col px-3 pb-3">
          {menus.map((v, i: number) => (
            <MenuComponent title={v.title} menu={v.menu} key={i} />
          ))}
          <div className="w-full flex flex-col gap-2 mt-12">
            {/* title & content */}
            <div className="pb-2 px-4 compact-hide">
              <p className="text-title-sm font-medium uppercase text-gray-600 dark:text-gray-400">
                Statistics
              </p>
            </div>
            {/* content */}
            <div className="flex flex-col gap-4 compact-hide mb-6">
              <div className="w-full flex flex-col gap-2 px-4">
                <div className="flex flex-row justify-between">
                  <span className="text-title-sm">Complete</span>
                  <span className="text-title-sm">89%</span>
                </div>
                {/* linear progress */}
                <div className="flex bg-gray-100 dark:bg-gray-700 h-1">
                  <div
                    className="flex bg-green-600 dark:bg-green-200"
                    role="progressbar"
                    style={{ width: "89%" }}
                    aria-valuenow={89}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2 px-4">
                <div className="flex flex-row justify-between">
                  <span className="text-title-sm">On Progress</span>
                  <span className="text-title-sm">76%</span>
                </div>
                {/* linear progress */}
                <div className="flex bg-gray-100 dark:bg-gray-700 h-1">
                  <div
                    className="flex bg-yellow-600 dark:bg-yellow-200"
                    role="progressbar"
                    style={{ width: "76%" }}
                    aria-valuenow={76}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2 px-4">
                <div className="flex flex-row justify-between">
                  <span className="text-title-sm">Cancelled</span>
                  <span className="text-title-sm">17%</span>
                </div>
                {/* linear progress */}
                <div className="flex bg-gray-100 dark:bg-gray-700 h-1">
                  <div
                    className="flex bg-error-600 dark:bg-error-200"
                    role="progressbar"
                    style={{ width: "17%" }}
                    aria-valuenow={17}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            {/* action */}
            <div className="px-4 flex justify-center mb-12">
              <a
                href="../index.html"
                target="_blank"
                className="btn relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-label-lg bg-primary-600 text-white dark:bg-primary-200 dark:text-primary-800"
              >
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="ml-1 compact-hide">Upgrade Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
