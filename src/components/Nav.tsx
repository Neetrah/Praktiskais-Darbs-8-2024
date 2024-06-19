import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="w-full flex items-center justify-end">
      <Link href="/upload">
        <Button color="blue" size="2">
          <ArrowUpTrayIcon className="text-white h-5" />
          Papildināt
        </Button>
      </Link>
    </nav>
  );
};

export default Nav;
