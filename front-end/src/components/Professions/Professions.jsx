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
      <div className="p-4 mb-12 rounded shadow shadow-gray-500 flex flex-col">
        <h4 className="bg-modeLight-3 text-modeLight-6 z-[2] text-center border border-modeLight-1 rounded-t-[inherit] relative p-[8px_16px] m-[0_0_8px] text-2xl">
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
