import { NavLink } from "react-router-dom";

export default function Header() {

  return (
    <header className="w-full">
      <div className="flex items-center mx-4">
        <nav className="w-[40%] h-16 mx-auto my-5 px-3 border border-black rounded-full flex gap-20 items-center justify-center shadow-2xl sticky">
          <NavLink to="/home"
            className={({isActive}) => `${isActive ? "font-bold" : "hover:font-bold min-w-[50px] ease-in duration-100"}`}
          >Home</NavLink>
          <NavLink to="/about"
            className={({isActive}) => `${isActive ? "font-bold" : "hover:font-bold min-w-[50px] ease-in duration-100"}`}
          >About</NavLink>
          <NavLink to="/portfolio"
            className={({isActive}) => `${isActive ? "font-bold" : "hover:font-bold min-w-[50px] ease-in duration-100"}`}
          >Portfolio</NavLink>
          <NavLink to="/blogs"
            className={({isActive}) => `${isActive ? "font-bold" : "hover:font-bold min-w-[50px] ease-in duration-100"}`}
          >Blogs</NavLink>
          <NavLink to="/contact"
            className={({isActive}) => `${isActive ? "font-bold" : "hover:font-bold min-w-[50px] ease-in duration-100"}`}
          >Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

