export default function Card({ profession, isLast }) {
  return (
    <>
      <button
      type="button"
      className={`p-[8px_16px] text-light-700 bg-light-200 hover:bg-light-300 border-light-300 ${isLast ? 'rounded-b-[8px]' : ''}
      dark:bg-dark-800 dark:hover:bg-dark-700 border-dark-700 dark:text-dark-300 border no-underline border-t-0 decoration-slice z-[1]
      `}>
      {profession}
    </button>
    </>
  );
}
