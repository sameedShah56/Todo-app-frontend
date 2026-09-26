const Navbar = () => {
  return (
    <nav className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-indigo-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          ✓
        </div>

        <h1 className="text-xl font-bold text-indigo-700">
          TASK LOCATOR
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5 text-gray-700">

        {/* Search */}
        <span className="text-2xl">
          ⌕
        </span>

        {/* Menu */}
        <span className="text-2xl">
          ☰
        </span>

        {/* Profile */}
        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700">
          ♙
        </div>

      </div>

    </nav>
  );
};

export default Navbar;