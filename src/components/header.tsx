"use client";
import { signOut, useSession } from "next-auth/react";
import { fakeUserComplete } from "../../types/fake-data";

export default function HeaderApp() {
  const { data: session } = useSession();
  return (
    <header
      data-type="navtop"
      className="nav-top [&.show]:translate-y-0 top-0 fixed h-16 px-4 lg:px-8 lg:pl-3 left-0 lg:left-72 right-0 flex flex-row items-center justify-between gap-3 z-50 transition-all duration-300 ease-in-out bg-surface-500 dark:bg-surfacedark-500"
    >
      {/* trigger sidebar */}
      <button
        data-type="dialogs"
        data-target="#sidebar"
        className="relative inline-flex lg:hidden items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] tracking-[.00714em] text-center font-medium hover:bg-primary-600/[0.08] focus:bg-primary-600/[0.08] dark:hover:bg-primary-200/[0.08] dark:focus:bg-primary-200/[0.08]"
      >
        <span className="material-symbols-outlined !text-[28px]">menu</span>
      </button>
      {/* trigger compact layout */}
      <button
        data-type="toggle"
        data-target="#body-layout"
        className="compact-btn group relative hidden  !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] tracking-[.00714em] text-center font-medium hover:bg-primary-600/[0.08] focus:bg-primary-600/[0.08] dark:hover:bg-primary-200/[0.08] dark:focus:bg-primary-200/[0.08]"
      >
        <span className="material-symbols-outlined !text-[28px] menu-close">
          menu_open
        </span>
        <span className="material-symbols-outlined !text-[28px] menu-open">
          menu
        </span>
      </button>
      {/* search form */}
      <div className="relative w-full hidden md:block">
        {/* desktop search */}
        <div className="relative w-full">
          <button className="absolute left-1 top-1 hidden sm:inline-flex !items-center justify-center w-10 h-10 gap-x-2 p-2.5 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-primary-600/[0.08] focus:bg-primary-600/[0.08] dark:hover:bg-primary-200/[0.08] dark:focus:bg-primary-200/[0.08]">
            <span className="material-symbols-outlined !text-2xl">search</span>
          </button>
          <input
            type="search"
            placeholder="Search..."
            className="max-sm:absolute max-sm:inset-x-0 block w-40 sm:w-80 md:w-full pl-14 h-12 rounded-full bg-white dark:bg-gray-900 py-2 px-4 ring-0 focus:outline-none focus:shadow"
          />
        </div>
      </div>
      {/* navbar right */}
      <div className="flex flex-row items-center gap-3 ml-auto md:ml-12">
        {/* mobile search trigger */}
        <button
          data-type="dialogs"
          data-target="#dialog_search"
          className="btn relative inline-flex md:hidden !items-center justify-center w-12 h-12 gap-x-2 p-2.5 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-primary-600/[0.08] focus:bg-primary-600/[0.08] dark:hover:bg-primary-200/[0.08] dark:focus:bg-primary-200/[0.08]"
        >
          <span className="material-symbols-outlined !text-[28px]">search</span>
        </button>
        <div className="relative">
          <button
            data-type="dropdown"
            data-target="#dropdown0"
            className="btn relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 p-2.5 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-primary-600/[0.08] focus:bg-primary-600/[0.08] dark:hover:bg-primary-200/[0.08] dark:focus:bg-primary-200/[0.08]"
          >
            <span
              aria-label="Languages"
              data-microtip-position="bottom"
              role="tooltip"
              className="material-symbols-outlined !text-[28px] pointer-events-none"
            >
              translate
            </span>
          </button>
          {/* menus */}
          <ul
            id="dropdown0"
            data-type="dropdownmenu"
            className="[&.show]:!opacity-100 [&.show]:!visible opacity-0 invisible absolute top-[3.1rem] z-30 transition duration-400 ease-in-out left-auto right-0 transform translate-x-1/3 min-w-[150px] inline-flex flex-col py-2 rounded-xl bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-50/10"
          >
            <li className="relative">
              <a
                href="#"
                className="flex flex-row items-center gap-3 py-2.5 px-6 hover-icon hover:bg-surface-200 dark:hover:bg-surfacedark-200"
              >
                <img
                  src="/assets/img/flags/US.svg"
                  className="h-4"
                  alt="English"
                />
                English
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="w-full flex flex-row items-center gap-3 py-2.5 px-6 hover-icon hover:bg-surface-200 dark:hover:bg-surfacedark-200"
              >
                <img
                  src="/assets/img/flags/IT.svg"
                  className="h-4"
                  alt="Italy"
                />
                Italy
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="flex flex-row items-center gap-3 py-2.5 px-6 hover-icon hover:bg-surface-200 dark:hover:bg-surfacedark-200"
              >
                <img
                  src="/assets/img/flags/ES.svg"
                  className="h-4"
                  alt="Spain"
                />
                Spain
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="flex flex-row items-center gap-3 py-2.5 px-6 hover-icon hover:bg-surface-200 dark:hover:bg-surfacedark-200"
              >
                <img
                  src="/assets/img/flags/SA.svg"
                  className="h-4"
                  alt="Arabic"
                />
                Arabic
              </a>
            </li>
          </ul>
        </div>
        <div className="relative hidden sm:inline-block">
          <button
            data-type="dropdown"
            data-target="#dropdown-apps"
            className="btn relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 p-2.5 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-primary-600/[0.08] focus:bg-primary-600/[0.08] dark:hover:bg-primary-200/[0.08] dark:focus:bg-primary-200/[0.08]"
          >
            <span
              aria-label="Apps"
              data-microtip-position="bottom"
              role="tooltip"
              className="material-symbols-outlined !text-[28px] pointer-events-none"
            >
              apps
            </span>
          </button>
          {/* menus */}
          <div
            id="dropdown-apps"
            data-type="dropdownmenu"
            className="[&.show]:!opacity-100 [&.show]:!visible opacity-0 invisible absolute top-[3.1rem] z-30 transition duration-400 ease-in-out left-auto right-0 transform md:translate-x-[120px] min-w-[300px] inline-flex flex-col rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-50/10 max-sm:fixed max-sm:mt-3 max-sm:left-4 max-sm:right-4 p-6"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <a
                href="#"
                className="py-2 px-3 hover:bg-surface-200 dark:hover:bg-surfacedark-200 rounded-xl flex flex-col items-center gap-1"
              >
                <span className="material-symbols-outlined !text-4xl text-red-600 dark:text-red-200">
                  email
                </span>
                <p className="text-title-sm text-center">Email</p>
              </a>
              <a
                href="#"
                className="py-2 px-3 hover:bg-surface-200 dark:hover:bg-surfacedark-200 rounded-xl flex flex-col items-center gap-1"
              >
                <span className="material-symbols-outlined !text-4xl text-yellow-600 dark:text-yellow-200">
                  event
                </span>
                <p className="text-title-sm text-center">Calendar</p>
              </a>
              <a
                href="#"
                className="py-2 px-3 hover:bg-surface-200 dark:hover:bg-surfacedark-200 rounded-xl flex flex-col items-center gap-1"
              >
                <span className="material-symbols-outlined !text-4xl text-green-600 dark:text-green-200">
                  chat
                </span>
                <p className="text-title-sm text-center">Chat</p>
              </a>
              <a
                href="#"
                className="py-2 px-3 hover:bg-surface-200 dark:hover:bg-surfacedark-200 rounded-xl flex flex-col items-center gap-1"
              >
                <span className="material-symbols-outlined !text-4xl text-purple-600 dark:text-purple-200">
                  pie_chart
                </span>
                <p className="text-title-sm text-center">Chart</p>
              </a>
              <a
                href="#"
                className="py-2 px-3 hover:bg-surface-200 dark:hover:bg-surfacedark-200 rounded-xl flex flex-col items-center gap-1"
              >
                <span className="material-symbols-outlined !text-4xl text-pink-600 dark:text-pink-200">
                  widgets
                </span>
                <p className="text-title-sm text-center">Widgets</p>
              </a>
              <a
                href="#"
                className="py-2 px-3 hover:bg-surface-200 dark:hover:bg-surfacedark-200 rounded-xl flex flex-col items-center gap-1"
              >
                <span className="material-symbols-outlined !text-4xl text-blue-600 dark:text-blue-200">
                  rocket
                </span>
                <p className="text-title-sm text-center">Landing</p>
              </a>
            </div>
          </div>
        </div>
        <div className="relative hidden sm:inline-block">
          {/* trigger bottom sheets */}
          <button
            data-type="dialogs"
            data-target="#sheets_b"
            className="btn relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 p-2.5 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-primary-600/[0.08] focus:bg-primary-600/[0.08] dark:hover:bg-primary-200/[0.08] dark:focus:bg-primary-200/[0.08]"
          >
            <span
              aria-label="Settings"
              data-microtip-position="bottom"
              role="tooltip"
              className="material-symbols-outlined !text-[28px] pointer-events-none"
            >
              settings
            </span>
          </button>
        </div>
        <div className="relative">
          <button
            data-type="dropdown"
            data-target="#dropdown2"
            className="btn relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 p-2.5 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-primary-600/[0.08] focus:bg-primary-600/[0.08] dark:hover:bg-primary-200/[0.08] dark:focus:bg-primary-200/[0.08]"
          >
            <span
              aria-label="Notification"
              data-microtip-position="bottom"
              role="tooltip"
              className="material-symbols-outlined !text-[28px] pointer-events-none "
            >
              notifications
            </span>
            <span className="pointer-events-none absolute top-2 right-2 w-4 h-4 flex items-center justify-center rounded-full text-[11px] leading-none tracking-[.045em] font-medium bg-error-600 dark:bg-error-200 text-white dark:text-error-800">
              1
            </span>
          </button>
          {/* menus */}
          <div
            id="dropdown2"
            data-type="dropdownmenu"
            className="[&.show]:!opacity-100 [&.show]:!visible opacity-0 invisible absolute top-[3.1rem] z-30 transition duration-400 ease-in-out -right-12 sm:right-0 min-w-[300px] inline-flex flex-col py-2 rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-50/10 max-sm:fixed max-sm:mt-3 max-sm:left-4 max-sm:right-4"
          >
            <div className="px-6 pt-1.5 pb-3 font-normal border-b border-gray-100 dark:border-gray-800">
              <div className="relative">
                <div className="text-title-sm">Notifications</div>
                <div className="absolute top-0 right-0">
                  <button className="inline-block mr-0">
                    <span
                      className="material-symbols-outlined pointer-events-none"
                      aria-label="Clear all"
                      data-microtip-position="bottom"
                      role="tooltip"
                    >
                      delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="max-h-60 overflow-y-auto scrollbars">
              {/* item */}
              <a className="relative" href="../user/notification.html">
                <div className="unread flex flex-wrap flex-row items-center border-b border-gray-100 dark:border-gray-800 [&.unread]:bg-surface-400 dark:[&.unread]:bg-surfacedark-400 hover:bg-surface-200 dark:hover:bg-surfacedark-200 py-2">
                  <div className="flex-shrink max-w-full px-2 w-1/4 text-center">
                    <div className="flex justify-center items-center mx-auto w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-200 text-neutral-10 dark:text-neutral-900">
                      <span className="material-symbols-outlined">
                        diversity_3
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full px-2 w-3/4">
                    <div className="text-body-md">
                      Time for a meeting with Mr.Roger
                    </div>
                    <div className="text-gray-500 text-body-md mt-1">
                      5 Minutes Ago
                    </div>
                  </div>
                </div>
              </a>
              {/* item */}
              <a className="relative" href="../user/notification.html">
                <div className="flex flex-wrap flex-row items-center border-b border-gray-100 dark:border-gray-800 [&.unread]:bg-surface-400 dark:[&.unread]:bg-surfacedark-400 hover:bg-surface-200 dark:hover:bg-surfacedark-200 py-2">
                  <div className="flex-shrink max-w-full px-2 w-1/4 text-center">
                    <div className="flex justify-center items-center mx-auto w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-200 text-neutral-10 dark:text-neutral-900">
                      <span className="material-symbols-outlined">person</span>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full px-2 w-3/4">
                    <div className="text-body-md">
                      Congratulations you get a new prospect!
                    </div>
                    <div className="text-gray-500 text-body-md mt-1">
                      1h ago
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="px-6 pt-3 pb-1.5 text-center text-body-md font-normal">
              <a href="../user/notification.html" className="hover:underline">
                Show all Notifications
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <button
            data-type="dropdown"
            data-target="#dropdown1"
            className="btn w-12 h-12 gap-x-2 py-2.5 flex items-center gap-2 justify-center rounded-full text-sm tracking-[0.15px]"
          >
            <img
              src={session?.user.image}
              alt={session?.user.name}
              className="w-10 h-10 flex-none rounded-full bg-primary-600 dark:bg-primary-200"
            />
          </button>
          {/* menus */}
          <ul
            id="dropdown1"
            data-type="dropdownmenu"
            className="[&.show]:!opacity-100 [&.show]:!visible opacity-0 invisible absolute top-[3.1rem] z-30 transition duration-400 ease-in-out left-auto right-0 min-w-[200px] inline-flex flex-col py-2 rounded-xl bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-50/10 max-sm:fixed max-sm:mt-3 max-sm:left-4 max-sm:right-4"
          >
            <li className="relative">
              <a
                href="../user/profile.html"
                className="flex flex-row items-center gap-3 py-2.5 px-6 hover-icon hover:bg-surface-200 dark:hover:bg-surfacedark-200"
              >
                <span className="material-symbols-outlined">person</span>
                Profile
              </a>
            </li>
            <li className="relative">
              <span
                onClick={() => console.log(fakeUserComplete())}
                className="flex flex-row items-center gap-3 py-2.5 px-6 hover-icon hover:bg-surface-200 dark:hover:bg-surfacedark-200 cursor-pointer"
              >
                <span className="material-symbols-outlined">person</span>
                User Generate
              </span>
            </li>
            <li className="relative">
              <a
                href="../user/edit-profile.html"
                className="flex flex-row items-center gap-3 py-2.5 px-6 hover-icon hover:bg-surface-200 dark:hover:bg-surfacedark-200"
              >
                <span className="material-symbols-outlined">settings</span>
                Settings
              </a>
            </li>
            <li className="relative">
              <a
                href="../docs/support.html"
                className="flex flex-row items-center gap-3 py-2.5 px-6 hover-icon hover:bg-surface-200 dark:hover:bg-surfacedark-200"
              >
                <span className="material-symbols-outlined">help_center</span>
                Help
              </a>
            </li>
            <li className="relative border-t border-gray-100 dark:border-gray-800">
              <span
                onClick={() => signOut()}
                className="flex flex-row items-center gap-3 py-2.5 px-6 hover-icon hover:bg-surface-200 dark:hover:bg-surfacedark-200 cursor-pointer"
              >
                <span className="material-symbols-outlined">
                  power_settings_new
                </span>
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
