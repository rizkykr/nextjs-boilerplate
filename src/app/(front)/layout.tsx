"use client";
import SidebarApp from "@/components/sidebar";
import HeaderApp from "@/components/header";
import FooterApp from "@/components/footer";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function HootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => setIsReady(true), []);
  return (
    <>
      {!isReady ? (
        <div className="preloader fixed inset-0 z-50 bg-surface-500 dark:bg-surfacedark-500">
          <div className="w-full h-screen flex justify-center items-center">
            {/* loader */}
            <svg className="circular-loader relative w-[100px] h-[100px]">
              <circle
                className="path stroke-primary-600 dark:stroke-primary-200"
                cx={50}
                cy={50}
                r={20}
                fill="none"
                strokeWidth={5}
                strokeMiterlimit={10}
              />
            </svg>
          </div>
        </div>
      ) : (
        ""
      )}

      <HeaderApp />
      <main className="lg:flex">
        {/* sidebar */}
        <SidebarApp />
        {/* content */}
        <div className="main-content flex-grow min-h-[100%] py-20 relative px-4 lg:pr-8 lg:pl-3">
          {/* content 1 */}
          <div className="grid grid-cols-1 gap-4 md:gap-6">{children}</div>
        </div>
      </main>
      <FooterApp />
      {/* Mobile search */}
      <div
        id="dialog_search"
        className="[&.show]:opacity-100 [&.show]:h-full [&.show]:inset-0 [&.show_.dialog]:!block opacity-0 w-full h-0 z-[70] overflow-auto fixed left-0 top-0 flex items-center justify-center"
      >
        {/* dialogs */}
        <div className="dialog hidden fixed inset-0 z-50 flex-col gap-2 bg-neutral-10 dark:bg-neutral-900">
          {/* header */}
          <div className="min-h-[56px] flex flex-row items-center justify-between gap-4 pl-4 pr-2 pt-4 pb-2">
            <h3 className="flex flex-grow text-title-md">Search</h3>
            <button
              data-close="#dialog_search"
              className="relative flex flex-row items-center justify-center gap-x-2 p-2 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium text-primary-600 dark:bg-surfacedark-100 hover:bg-surface-200 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <hr className="w-full border-surface-100 dark:border-surfacedark-100" />
          <div className="relative p-4">
            <div className="relative">
              <button className="absolute left-1 top-1 inline-flex !items-center justify-center w-10 h-10 gap-x-2 p-2.5 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-primary-600/[0.08] focus:bg-primary-600/[0.08] dark:hover:bg-primary-200/[0.08] dark:focus:bg-primary-200/[0.08]">
                <span className="material-symbols-outlined !text-2xl">
                  search
                </span>
              </button>
              <input
                type="search"
                placeholder="Search..."
                className="block w-full px-14 h-12 rounded-full bg-surface-200 dark:bg-surfacedark-200 focus:bg-white dark:focus:bg-gray-900 py-2 ring-0 focus:outline-none focus:shadow"
              />
              <button className="absolute right-1 top-1 inline-flex !items-center justify-center w-10 h-10 gap-x-2 p-2.5 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-primary-600/[0.08] focus:bg-primary-600/[0.08] dark:hover:bg-primary-200/[0.08] dark:focus:bg-primary-200/[0.08]">
                <span className="material-symbols-outlined !text-2xl">
                  keyboard_voice
                </span>
              </button>
            </div>
          </div>
          {/* body */}
          <div className="relative px-4 h-screen overflow-y-scroll scrollbars">
            {/* search history */}
            <div className="relative flex flex-col w-full px-2 pb-40">
              <button className="flex flex-row items-center gap-4 py-3">
                <span className="material-symbols-outlined w-6">history</span>
                <span className="text-body-md">Joe Thomas</span>
                <span className="material-symbols-outlined w-6 ml-auto transform rotate-45">
                  arrow_back
                </span>
              </button>
              <button className="flex flex-row items-center gap-4 py-3">
                <span className="material-symbols-outlined w-6">history</span>
                <span className="text-body-md">Software</span>
                <span className="material-symbols-outlined w-6 ml-auto transform rotate-45">
                  arrow_back
                </span>
              </button>
              <button className="flex flex-row items-center gap-4 py-3">
                <span className="material-symbols-outlined w-6">history</span>
                <span className="text-body-md">Material 3</span>
                <span className="material-symbols-outlined w-6 ml-auto transform rotate-45">
                  arrow_back
                </span>
              </button>
              <button className="flex flex-row items-center gap-4 py-3">
                <span className="material-symbols-outlined w-6">history</span>
                <span className="text-body-md">Tailwind css</span>
                <span className="material-symbols-outlined w-6 ml-auto transform rotate-45">
                  arrow_back
                </span>
              </button>
              <button className="flex flex-row items-center gap-4 py-3">
                <span className="material-symbols-outlined w-6">history</span>
                <span className="text-body-md">Joe Thomas</span>
                <span className="material-symbols-outlined w-6 ml-auto transform rotate-45">
                  arrow_back
                </span>
              </button>
              <button className="flex flex-row items-center gap-4 py-3">
                <span className="material-symbols-outlined w-6">history</span>
                <span className="text-body-md">Software</span>
                <span className="material-symbols-outlined w-6 ml-auto transform rotate-45">
                  arrow_back
                </span>
              </button>
              <button className="flex flex-row items-center gap-4 py-3">
                <span className="material-symbols-outlined w-6">history</span>
                <span className="text-body-md">Material 3</span>
                <span className="material-symbols-outlined w-6 ml-auto transform rotate-45">
                  arrow_back
                </span>
              </button>
              <button className="flex flex-row items-center gap-4 py-3">
                <span className="material-symbols-outlined w-6">history</span>
                <span className="text-body-md">Tailwind css</span>
                <span className="material-symbols-outlined w-6 ml-auto transform rotate-45">
                  arrow_back
                </span>
              </button>
              <button className="flex flex-row items-center gap-4 py-3">
                <span className="material-symbols-outlined w-6">history</span>
                <span className="text-body-md">Joe Thomas</span>
                <span className="material-symbols-outlined w-6 ml-auto transform rotate-45">
                  arrow_back
                </span>
              </button>
              <button className="flex flex-row items-center gap-4 py-3">
                <span className="material-symbols-outlined w-6">history</span>
                <span className="text-body-md">Software</span>
                <span className="material-symbols-outlined w-6 ml-auto transform rotate-45">
                  arrow_back
                </span>
              </button>
              <button className="flex flex-row items-center gap-4 py-3">
                <span className="material-symbols-outlined w-6">history</span>
                <span className="text-body-md">Material 3</span>
                <span className="material-symbols-outlined w-6 ml-auto transform rotate-45">
                  arrow_back
                </span>
              </button>
              <button className="flex flex-row items-center gap-4 py-3">
                <span className="material-symbols-outlined w-6">history</span>
                <span className="text-body-md">Tailwind css</span>
                <span className="material-symbols-outlined w-6 ml-auto transform rotate-45">
                  arrow_back
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* bottom sheets dialogs */}
      <div
        id="sheets_b"
        className="[&.show_.bg-sheets]:opacity-60 [&.show_.bg-sheets]:inset-0 [&.show_.content-sheets]:translate-y-0"
      >
        {/* background sheets dialogs */}
        <div
          data-close="#sheets_b"
          className="bg-sheets fixed z-[60] opacity-0 -top-full bg-black"
        />
        {/* bottom sheets dialogs content */}
        <div className="content-sheets fixed left-0 right-0 bottom-0 z-[70] transition-transform translate-y-full duration-[400ms] flex flex-col items-center w-full md:w-5/6 lg:w-1/2 gap-3 sm:mx-auto rounded-t-[28px] min-h-[40%] max-h-[70%] bg-surface-100 dark:bg-surfacedark-100 shadow-xl">
          <div className="flex justify-center p-4 w-full h-9">
            <div className="w-8 h-1 opacity-40 bg-gray-500 rounded-full" />
          </div>
          {/* content */}
          <div className="w-full relative flex flex-col gap-4 px-4 sm:px-6">
            <h2 className="text-title-md text-center">Theme Settings</h2>
            <hr className="border-gray-100 dark:border-gray-800" />
            {/* light dark options */}
            <div className="flex flex-row items-center gap-4">
              <h3 className="text-title-sm">Light &amp; Dark</h3>
              <div className="flex flex-row items-center gap-4">
                <button
                  data-type="theme"
                  id="lightdark"
                  className="btn-outline relative flex flex-row items-center justify-center w-10 h-10 gap-x-2 py-2 px-4 rounded-full text-sm tracking-[.00714em] font-medium border border-gray-200 dark:border-gray-700"
                >
                  <span
                    className="material-symbols-outlined !text-base dark-hidden"
                    aria-label="Light Mode"
                    data-microtip-position="top"
                    role="tooltip"
                  >
                    light_mode
                  </span>
                  <span
                    className="material-symbols-outlined !text-base dark-block"
                    aria-label="Dark Mode"
                    data-microtip-position="top"
                    role="tooltip"
                  >
                    dark_mode
                  </span>
                </button>
              </div>
            </div>
            {/* theme colors */}
            <div className="flex flex-row items-center gap-4">
              <h3 className="text-title-sm">Theme Colors</h3>
              {/* menus */}
              <div className="setSkin flex flex-wrap items-center gap-6">
                <div className="relative">
                  <label
                    htmlFor="red-theme"
                    className="setSkin cursor-pointer flex flex-row items-center gap-2 py-2"
                  >
                    <input
                      type="radio"
                      className="z-10 hidden opacity-0"
                      name="themes"
                      id="red-theme"
                      defaultValue="red-theme"
                    />
                    <span
                      aria-label="Red"
                      data-microtip-position="top"
                      role="tooltip"
                      className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-error-600"
                    />
                  </label>
                </div>
                <div className="relative">
                  <label
                    htmlFor="green-theme"
                    className="setSkin cursor-pointer flex flex-row items-center gap-2 py-2"
                  >
                    <input
                      type="radio"
                      className="z-10 hidden opacity-0"
                      name="themes"
                      id="green-theme"
                      defaultValue="green-theme"
                    />
                    <span
                      aria-label="Green"
                      data-microtip-position="top"
                      role="tooltip"
                      className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-green-600"
                    />
                  </label>
                </div>
                <div className="relative">
                  <label
                    htmlFor="yellow-theme"
                    className="setSkin cursor-pointer flex flex-row items-center gap-2 py-2"
                  >
                    <input
                      type="radio"
                      className="z-10 hidden opacity-0"
                      name="themes"
                      id="yellow-theme"
                      defaultValue="yellow-theme"
                    />
                    <span
                      aria-label="Yellow"
                      data-microtip-position="top"
                      role="tooltip"
                      className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-yellow-600"
                    />
                  </label>
                </div>
                <div className="relative">
                  <label
                    htmlFor="purple-theme"
                    className="setSkin cursor-pointer flex flex-row items-center gap-2 py-2"
                  >
                    <input
                      type="radio"
                      className="z-10 hidden opacity-0"
                      name="themes"
                      id="purple-theme"
                      defaultValue="purple-theme"
                    />
                    <span
                      aria-label="Purple"
                      data-microtip-position="top"
                      role="tooltip"
                      className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-purple-600"
                    />
                  </label>
                </div>
                <div className="relative">
                  <label
                    htmlFor="blue-theme"
                    className="setSkin cursor-pointer flex flex-row items-center gap-2 py-2"
                  >
                    <input
                      type="radio"
                      className="z-10 hidden opacity-0"
                      name="themes"
                      id="blue-theme"
                      defaultValue="blue-theme"
                    />
                    <span
                      aria-label="Blue"
                      data-microtip-position="top"
                      role="tooltip"
                      className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-blue-600"
                    />
                  </label>
                </div>
              </div>
            </div>
            {/* theme layout */}
            <div className="flex flex-row items-center gap-4 mb-12">
              <h3 className="text-title-sm">Layouts</h3>
              {/* menus */}
              <div className="setLayout flex flex-wrap items-center gap-3 sm:gap-6">
                <div
                  className="relative"
                  aria-label="Layout Default"
                  data-microtip-position="top"
                  role="tooltip"
                >
                  <label
                    htmlFor="layout-default"
                    className="setLayout cursor-pointer flex flex-row items-center gap-2"
                  >
                    <input
                      type="radio"
                      className="z-10 hidden opacity-0"
                      name="layouts"
                      id="layout-default"
                      defaultValue="layout-default"
                    />
                    <img
                      className="w-12 sm:w-24 rounded h-auto border border-gray-200 dark:border-gray-700 mb-1"
                      src="/assets/img/layouts/default.jpg"
                      alt="layouts"
                    />
                  </label>
                </div>
                <div
                  className="relative"
                  aria-label="Layout Compact"
                  data-microtip-position="top"
                  role="tooltip"
                >
                  <label
                    htmlFor="layout-compact"
                    className="setLayout cursor-pointer flex flex-row items-center gap-2"
                  >
                    <input
                      type="radio"
                      className="z-10 hidden opacity-0"
                      name="layouts"
                      id="layout-compact"
                      defaultValue="layout-compact"
                    />
                    <img
                      className="w-12 sm:w-24 rounded h-auto border border-gray-200 dark:border-gray-700 mb-1"
                      src="/assets/img/layouts/compact.jpg"
                      alt="layouts"
                    />
                  </label>
                </div>
                <div
                  className="relative"
                  aria-label="Layout Compact Text"
                  data-microtip-position="top"
                  role="tooltip"
                >
                  <label
                    htmlFor="layout-compact-text"
                    className="setLayout cursor-pointer flex flex-row items-center gap-2"
                  >
                    <input
                      type="radio"
                      className="z-10 hidden opacity-0"
                      name="layouts"
                      id="layout-compact-text"
                      defaultValue="layout-compact-text"
                    />
                    <img
                      className="w-12 sm:w-24 rounded h-auto border border-gray-200 dark:border-gray-700 mb-1"
                      src="/assets/img/layouts/compact-text.jpg"
                      alt="layouts"
                    />
                  </label>
                </div>
                <div
                  className="relative"
                  aria-label="Layout Classic"
                  data-microtip-position="top"
                  role="tooltip"
                >
                  <label
                    htmlFor="layout-classic"
                    className="setLayout cursor-pointer flex flex-row items-center gap-2"
                  >
                    <input
                      type="radio"
                      className="z-10 hidden opacity-0"
                      name="layouts"
                      id="layout-classic"
                      defaultValue="layout-classic"
                    />
                    <img
                      className="w-12 sm:w-24 rounded h-auto border border-gray-200 dark:border-gray-700 mb-1"
                      src="/assets/img/layouts/classic.jpg"
                      alt="layouts"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script src="/assets/js/main.js" strategy="lazyOnload" />
    </>
  );
}
