'use client';

import { type Item } from '#/lib/items';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function GlobalNavItem({
  item,
  close,
  active,
}: {
  item: Item;
  close: () => false | void;
  active: boolean;
}) {
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);
  /*
   * This useEffect is for
   * When the component mounts and/or updates, set our AnchorTarget based
   * on the item
   * also to prevent re-renders
   */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAnchorTarget(document.getElementById(item.id));
    }
  }, [item]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    anchorTarget &&
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });

    close();
  };

  return (
    <Link
      href={`/#${item.id}`}
      onClick={handleClick}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-800',
        {
          'text-gray-600 hover:bg-gray-200': !active,
          'text-black': active,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
