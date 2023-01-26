import logo from "../../../assests/images/logo.png";

const MobileBar = () => {
  return (
    <>
      <div className="sm:hidden flex justify-between items-center bg-[color:var(--navbar)] p-2">
        <div className="flexRowCenter gap-2">
          <img src={logo} alt="Logo" className="w-10 animate-rotate" />
          <h1 className="text-white text-2xl">Covid-19</h1>
        </div>
        {/* Hamburger */}
        <div className="space-y-2 rotate-180">
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
        </div>
      </div>
    </>
  );
};

export default MobileBar;
