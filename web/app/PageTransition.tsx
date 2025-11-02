'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    // Only re-render the key when pathname changes, creating a brief flash
    setKey(pathname);
  }, [pathname]);

  return (
    <div
      key={key}
      style={{
        animation: 'fadeIn 0.5s ease-in-out',
      }}
    >
      {children}
    </div>
  );
}
