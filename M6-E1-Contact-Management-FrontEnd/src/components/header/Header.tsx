'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignOutIcon } from '../icons/SignOutIcon';
import { useRouter } from 'next/navigation';



const Header = () => {
  const router = useRouter();
  const [localUser, setLocalUser] = useState('');

  const firstLetter = localUser?.charAt(0);

  useEffect(() => {
    checkToken();
  }, []); // Verifica o token durante a montagem inicial

  const checkToken = () => {
    const tokenWithQuotes = localStorage.getItem('@Management:accessToken');
    if (tokenWithQuotes) {
      const token = tokenWithQuotes.replace(/"/g, '');
      const accessTokenData = JSON.parse(atob(token.split('.')[1]));

      const userName = accessTokenData.name;
      setLocalUser(userName);
    }
  };

  const logout = () => {
    localStorage.removeItem('@Management:accessToken');
    setLocalUser('');
    router.push('/');
  };


  return (
    <header className="font-normal h-[6rem] border-b-2 border-gray-600 font-inherit text-inherit no-underline outline-none border-0 box-border top-0 left-0 right-0 fixed backdrop-blur z-50 bg-brancoHeader shadow-md flex">
      <div className="w-[95vw] m-auto md:w-[62vw] backdrop-filter backdrop-blur-lg bg-opacity-50 bg-transparent md:mx-auto px-2 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src="/logo-white.png"
            alt=""
            className="md:w-[22rem] md:h-[5rem]"
            width={100}
            height={100}
          />
        </Link>
        {localUser ? (
          <nav className="flex">
            <div className="flex items-center md:gap-10 flex-wrap">
              <div className="flex items-center text-lg gap-1 md:gap-3 flex-wrap">
                <span className="text-white font-poppins text-17 font-semibold flex items-center justify-center w-9 h-9 rounded-full bg-yellow-500">
                  {firstLetter}
                </span>
                {localUser && (
                  <p className="text-white font-poppins md:text-[1.5rem] font-normal leading-normal flex items-center justify-center ">
                    {localUser}
                  </p>
                )}
              </div>
              <button
                onClick={logout}
                className="w-[3rem] h-[3rem] bg-transparent rounded-lg flex justify-center items-center hover:bg-grey-1"
              >
                <SignOutIcon />
              </button>
            </div>
          </nav>
        ) : ( 
          <nav className="flex">
            <div className="flex items-center text-lg gap-3 md:gap-10 flex-wrap">
              <div className="flex items-center justify-center gap-2 rounded-xl w-[8rem] h-[4rem] text-white hover:bg-grey-1">
                <Link
                  href={"/register"}
                  className="text-[1rem] md:text-lg font-bold"
                >
                  CADASTRE-SE
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-xl w-[8rem] h-[4rem] bg-yellow-500 text-black ">
                <Link href={"/"} className="text-[1rem] md:text-lg font-bold ">
                  LOGIN
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
