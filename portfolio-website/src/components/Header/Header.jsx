import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import {ThemeContextProvider} from '../../contexts/ThemeContext'
import useTheme from '../../contexts/ThemeContext'



function Header() {
  const {themeMode, toggleTheme} = useTheme()

  return (
    <ThemeContextProvider value={{themeMode, toggleTheme}}>
    <header>
      <div className={`flex ${themeMode === "dark" ? "dark" : "light"}`}>
        <nav className="w-[30%] h-16 mx-auto my-5 px-3 border border-black rounded-full flex gap-20 justify-center items-center font-bold shadow-2xl sticky dark:bg-slate-800">
          <Link to="/home">
          <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#484a4d"><path d="M252-212h85v-251h286v251h85v-342L480-725 252-554v342ZM126-86v-531l354-266 354 265.67V-86H512v-266h-64v266H126Zm354-382Z"/></svg>
          </Link>
          <Link to="/about">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#484a4d"><path d="M480-497q-81 0-137.5-56.5T286-691q0-81 56.5-137T480-884q81 0 137.5 56T674-691q0 81-56.5 137.5T480-497ZM126-109v-148q0-43.3 22.7-79.6 22.69-36.3 60.3-55.4 65-32 132.96-48.5Q409.92-457 480-457q72 0 140 16t131 48q37.61 18.96 60.3 54.98Q834-302 834-257.05V-109H126Zm126-126h456v-17q0-10.03-5.5-18.24-5.5-8.2-14.5-12.76-48-23-100-35.5T480-331q-54 0-108 12.5T272-283q-9 4.56-14.5 12.76-5.5 8.21-5.5 18.24v17Zm227.96-388Q508-623 528-642.96q20-19.97 20-48 0-28.04-19.96-47.54-19.97-19.5-48-19.5Q452-758 432-738.32T412-691q0 28.05 19.96 48.03 19.97 19.97 48 19.97Zm.04-68Zm0 456Z"/></svg>
          </Link>
          <Link to="/portfolio">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#484a4d"><path d="M480-406 8-661l472-254 472 254-472 255Zm0 180L32-469l110-73 338 183 339-183 110 73-449 243Zm0 180L32-288l110-73 338 182 339-182 110 73L480-46Zm0-492 226-122-226-123-225 123 225 122Zm1-123Z"/></svg>
          </Link>
          <Link to="/github">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#484a4d"><path d="M271.88-46Q211-46 168.5-88.58 126-131.17 126-192q0-43.63 23-78.32Q172-305 209-323v-313q-37-18-60-52.99T126-768q0-60.83 42.62-103.42Q211.24-914 272.12-914t103.38 42.58Q418-828.83 418-768q0 44.41-23.5 79.7Q371-653 334-636q4 39 34 66t71 27h83q93.79 0 159.9 63.5Q748-416 751-324q37 17 60 52.3 23 35.29 23 79.7 0 60.83-42.62 103.42Q748.76-46 687.88-46T584.5-88.58Q542-131.17 542-192q0-44.02 23.5-79.01T626-323q-3-40-33-67.5T522-418h-83q-28.99 0-54.99-6.5Q358-431 334-443v119q38 17 61 52.3 23 35.29 23 79.7 0 60.83-42.62 103.42Q332.76-46 271.88-46Zm.3-116q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Zm417 0q12.82 0 20.82-8.68 8-8.67 8-21.5 0-12.82-8-21.32t-20.82-8.5q-12.83 0-21.5 8.68-8.68 8.67-8.68 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Zm-417-576q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Z"/></svg>
          </Link>
          <Link to="/contact">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#484a4d"><path d="M800-86q-131.1 0-259.05-57Q413-200 307-305.5 201-411 144-539.28T87-799q0-32.14 21.14-53.57Q129.29-874 161-874h161q37 0 60 18t31 52l25 119q6 31-.5 53T411-593l-103 90q16 26 37.5 52.5T396-396q26 26 50 45.5t48 33.5l101-98q20-19 44.5-25.5t53.5-.5l111 25q35 10 52.5 31t17.5 55v169q0 32.14-21.5 53.57T800-86ZM247-616l65-57-15-75h-82q3 34 10.46 66.94Q232.91-648.12 247-616Zm362 363q33 14 68 23t71 14v-83l-74-17-65 63ZM247-616Zm362 363Z"/></svg>
          </Link>
        </nav>
        <ThemeButton />
      </div>
    </header>
    </ThemeContextProvider>
  );
}

export default Header;
