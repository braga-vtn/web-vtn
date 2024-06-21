import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";
import { UserButton, currentUser } from "@clerk/nextjs";

type Props = {};

const Navbar = async (props: Props) => {
  let user = null;
  
  try {
    user = await currentUser();
  } catch (error) {
    user = null;
  }

  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-transparent backdrop-transparent z-[100] flex items-center justify-between">
      <aside className="flex items-center gap-[2px]">
        <Image
          src="/vistune-dark.svg"
          width={35}
          height={35}
          alt="logo"
          className="shadow-sm"
        />
      </aside>
      <aside className="flex items-center gap-4">
        <Link
          href={user ? "/dashboard" : "/auth/sign-up"}
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#6600FF_25%,#393BB2_50%,#6600FF_75%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {user ? "Plataforma" : "Entrar"}
          </span>
        </Link>
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;