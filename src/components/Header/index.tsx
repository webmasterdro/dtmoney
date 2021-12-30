import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <div className="bg-indigo-600">
      <div className="flex items-center justify-between mx-auto max-w-7xl py-4 pb-40">
        <img src={logo} alt="logo" />
        <button className="bg-indigo-700 h-12 px-8 text-white rounded-lg transition-[filter] hover:duration-100 hover:brightness-90 ">
          Nova transação
        </button>
      </div>
    </div>
  );
}
