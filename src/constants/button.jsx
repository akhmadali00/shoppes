export default function BtnBlack({ mx, my, px, py, children }) {
  return (
    <button
      className={`button w-full rounded-[50px] mx-[0px] my-[16px] px-[30px] py-[14px] bg-[#100d22]
      hover:shadow-2xl`}
    >
      <a
        className="py-2 lg:p-2 text-[12px] lg:text-[14px] font-medium relative"
        href="#"
      >
        Login
      </a>
    </button>
  );
}
