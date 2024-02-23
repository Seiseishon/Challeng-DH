export default function PanelWrap({title, children}) {
  return (
    <section>
      <h2 className="text-gray-400 text-3xl m-[0_0_8px]"> {title} </h2>
      {children}
    </section>
  );
}