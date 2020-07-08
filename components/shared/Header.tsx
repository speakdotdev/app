import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-5">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="text-xl font-bold">
            <Link href="/">
              <a>speak.dev</a>
            </Link>
          </div>
          <div>
            <div>Login</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
