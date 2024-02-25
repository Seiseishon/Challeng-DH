export default function PanelWrap({title, children}) {
  return (
    <section>
      <h2 className="text-slate-400 text-3xl m-[0_0_8px]
      dark:text-dark-300
      "> {title} </h2>
      {children}
    </section>
  );
}