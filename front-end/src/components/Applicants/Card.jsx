export default function Card({ img, firstName, lastName, profession }) {
  return (
    <>
      <div className="bg-white h-[320px] text-center p-[1em] mb-[3rem] border-[1px_solid_#ede8f0] rounded shadow-xl shadow-slate-300">
        <div>
          <div className="w-[100px] h-[100px] rounded-[50%] m-[0_auto] overflow-hidden">
            <img src={img} alt={firstName} />
          </div>
          <div>
            <h2 className="m-[2em_0_0.75em] text-slate-900 text-[1rem] leading-[100%] font-bold"> {`${firstName} ${lastName}`} </h2>
            <p className="m-0 text-sm text-gray-400"> {profession} </p>
          </div>
          <div className='mt-5 pt-5 w-full border-t border-gray-200 flex items-center justify-between'>
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
