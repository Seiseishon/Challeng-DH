export default function Card({ profession, isLast }) {
  return (
    <>
      <button
        type="button"
        className={`p-[8px_16px] text-black bg-white hover:bg-slate-50 border-slate-300 transition-colors duration-300 ${
          isLast ? "rounded-b-[8px]" : ""
        }
      dark:bg-bunker-900 dark:hover:bg-bunker-800 dark:border-bunker-500 dark:text-bunker-200 border no-underline border-t-0 decoration-slice z-[1]
      `}
      >
        {profession}
      </button>
    </>
  );
}
