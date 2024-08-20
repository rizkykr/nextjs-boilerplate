export default function SearchDialog() {
  return (
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
  );
}
