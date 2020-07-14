import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { setupMaster } from 'cluster';
import PropTypes from 'prop-types';

interface User {
  name: string;
  picture: string;
  sub: string;
  nickname: string;
}

const Header = (props) => {
  const [user, setUser] = useState<User>(props.user);

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
            {!user && <a href="/api/login">Login</a>}
            <div className="flex">
              {user && (
                <>
                  <img className="rounded-full h-8 mr-2" src={user.picture} />
                  <span className="self-center">{user.name}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
