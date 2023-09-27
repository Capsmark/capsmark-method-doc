'use client';

import { type Item } from '#/lib/items';
import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  // can be usefull to detect the # tag
  const segment = useSelectedLayoutSegment();

  // todo add logic to check if is active
  const isActive = true;

  return (
    <Link
      onClick={close}
      href={`/#${item.id}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
