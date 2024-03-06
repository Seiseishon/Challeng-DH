import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="text-center mt-44">
      <div className="text-xl">
        <h4 className="text-red-600">404</h4>
      </div>
      <div className="text-4xl text-slate-700">Página no encontrada</div>
      <div className="text-lg text-slate-600">
        <p>Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
      </div>
      <button className="bg-slate-300 px-2 py-1 mt-4 rounded-xl border border-slate-700 hover:bg-slate-400">
        <Link to='/'>Regresar a la home</Link>
      </button>
    </div>
  );
}
