import Card from "./Card";

export default function Professions() {
  const professions = [
    "ingeniero",
    "ingeniero",
    "ingeniero",
    "ingeniero",
    "ingeniero",
    "ingeniero",
    "ingeniero",
  ];
  return (
    <>
      <div className="p-4 mb-12 rounded shadow shadow-light-600 flex flex-col
      dark:shadow-dark-400
      ">
        <h4 className="bg-gradient-to-r from-light-300 to-light-500 text-light-800 z-[2] text-center border border-light-500 rounded-t-[inherit] relative p-[8px_16px] m-[0_0_8px] text-2xl
        dark:bg-gradient-to-l dark:from-dark-700 dark:to-dark-500 dark:border-dark-500 dark:text-dark-200">
          Listado de Profesionales
        </h4>
        {professions.map((profession, index) => (
          <Card
            key={index}
            profession={profession}
            isLast={index === professions.length - 1}
          />
        ))}
      </div>
    </>
  );
}
