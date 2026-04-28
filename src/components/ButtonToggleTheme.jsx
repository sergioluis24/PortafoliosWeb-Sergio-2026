import { useEffect, useState } from "react";
// import IconSun from "./icons/IconSun.astro";

export function ButtonToggleTheme({ sun, moon }) {
  const [theme, setTheme] = useState("dark");
  function handleChangeTheme(event) {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
      document.querySelector("html").classList.remove("light");
    } else {
      document.querySelector("html").classList.add("light");
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  return (
    <button
      className={`group relative cursor-pointer px-4 py-2 rounded-xl dark:bg-carbon dark:text-porcelain bg-porcelain text-carbon
  shadow-md dark:shadow-slate-100/20 shadow-slate-950-30 transition-all duration-75 hover:shadow-lg dark:hover:shadow-slate-100/30 hover:shadow-slate-950/40 active:shadow-sm active:shadow-slate-100

  `}
      onClick={handleChangeTheme}
    >
      <span
        className={`relative z-20 block transition-transform duration-75  group-active:translate-y-0.5 `}
      >
        {theme === "dark" ? sun : moon}
      </span>

      <span
        className="pointer-events-none absolute top-0.5 left-0 w-full h-full
    rounded-xl dark:bg-porcelain bg-carbon group-active:bg-primary/10 -z-10 transition-all duration-75"
      ></span>
    </button>
  );
}
