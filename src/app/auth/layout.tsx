export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative p-3 md:p-8">
        <div className="flex flex-col md:flex-row bg-white dark:bg-black rounded-lg md:rounded-xl oveflow-hidden">
          <div className="flex-shrink max-w-full order-2 md:order-1 w-full md:w-1/2 lg:w-1/3 px-6 py-8 md:px-12 md:py-12 h-full min-h-[90vh]">
            {/* Form */}
            <div className="flex flex-col gap-6 text-gray-600 dark:text-gray-400">
              {children}
            </div>
          </div>
          <div
            className="flex-shrink max-w-full order-1 md:order-2 w-full md:w-1/2 lg:w-2/3 relative rounded-t-lg md:rounded-xl oveflow-hidden bg-primary-200"
            style={{
              backgroundImage: 'url("../src/img/cover/cover1.jpg")',
              backgroundRepeat: "repeat",
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              {/* logo */}
              <div className="relative">
                <a
                  href="../analytics/analytics-dashboard.html"
                  className="sidebar-logo py-6 flex items-center w-full"
                >
                  <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-primary-800 font-bold text-lg">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-200">
                      G
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-4xl font-medium tracking-wide text-white ml-2 md:ml-4">
                    Goodash
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          data-type="dialogs"
          data-target="#sheets_b"
          className="material-symbols-outlined !hidden md:!inline-flex !items-center !absolute right-12 bottom-12 justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium bg-surface-300 dark:bg-surfacedark-300 hover:bg-surface-500 focus:bg-surface-500 dark:text-gray-100 dark:hover:bg-surfacedark-500 dark:focus:bg-surfacedark-500"
        >
          settings
        </button>
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
                      src="../src/img/layouts/default.jpg"
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
                      src="../src/img/layouts/compact.jpg"
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
                      src="../src/img/layouts/compact-text.jpg"
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
                      src="../src/img/layouts/classic.jpg"
                      alt="layouts"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
