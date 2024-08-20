import CustomizeTheme from "@/components/customizeTheme";

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
              backgroundImage: 'url("/assets/img/cover/cover1.jpg")',
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
                      P
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-4xl font-medium tracking-wide text-white ml-2 md:ml-4">
                    PostApp
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
      <CustomizeTheme />
    </>
  );
}
