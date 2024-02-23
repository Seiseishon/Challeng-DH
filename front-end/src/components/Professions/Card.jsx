export default function Card({ profession, isLast }) {
  return (
    <>
      <button
      type="button"
      className={`p-[8px_16px] border-t-0 z-[1] text-zinc-950 decoration-slice no-underline bg-white hover:bg-gray-50 border border-gray-200 ${isLast ? 'rounded-b-[8px]' : ''}`}
    >
      {profession}
    </button>
    </>
  );
}
