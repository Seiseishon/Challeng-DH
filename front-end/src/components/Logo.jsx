
import logoDh from "../assets/img/public/logo-dh.png";

export default function Logo() {
  return (
    <>
      <figure className="col-[1] row-[1] h-20 flex items-center content-start m-0 p-[0_3em] w-[300px] bg-white
      dark:bg-bunker-950 transition duration-300
      max-md:hidden
      ">
        <div className="w-10 h-10 rounded-[50%] overflow-hidden">
          <img
            src={logoDh}
            alt="Logo Digital House"
            className="w-full h-full block object-cover"
          />
        </div>
        <figcaption className="m-0 p-[0_0_0_1em] text-black font-bold text-[0.875em] leading-[100%]
        dark:text-bunker-100 transition duration-300
        ">
          Digital House
        </figcaption>
      </figure>
    </>
  );
}
