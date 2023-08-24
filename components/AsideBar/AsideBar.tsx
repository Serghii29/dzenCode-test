import Link from 'next/link';
import React from 'react';

export const AsideBar: React.FC = () => {
  return (
    <div className="aside-bar">
      <nav className="nav">
        <div>
          <Link href={'/orders'}>ORDERS</Link>
        </div>

        <div>
          <Link href={'/groups'}>GROUPS</Link>
        </div>

        <div>
          <Link href={'/products'}>PRODUCTS</Link>
        </div>

        <div>
          <Link href={'/users'}>USERS</Link>
        </div>

        <div>
          <Link href={'/settings'}>SETTINGS</Link>
        </div>
      </nav>
    </div>
  );
};
