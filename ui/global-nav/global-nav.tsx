'use client';

import { items } from '#/lib/items';
import useItemStore from '#/stores/width.store';
import { CapsLogo } from '#/ui/caps-logo';

import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { MouseEvent, useState } from 'react';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  const onLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    close();
  };

  const { getActivity } = useItemStore();

  const handleClick = (event: MouseEvent<HTMLElement>, target: string) => {
    event.preventDefault();

    window.scrollTo({
      top:
        document.getElementById(target)!.getBoundingClientRect().top +
        window.scrollY -
        35,
      behavior: 'smooth',
    });

    close();
  };

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-400 bg-gray-100 lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-400">
      <div
        onClick={onLogoClick}
        className="flex h-14 cursor-pointer items-center px-4 py-4 lg:h-auto"
      >
        <div className="group flex w-full items-center gap-x-2.5">
          <div className="h-10 w-10 rounded-full border border-black/20 p-2 group-hover:border-black/60">
            <CapsLogo />
          </div>

          <h3 className="font-semibold tracking-wide text-gray-600 group-hover:text-gray-900">
            Capsmark
          </h3>
        </div>
      </div>

      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-700 group-hover:text-gray-900">
          Menu
        </div>
        {isOpen ? (
          <XIcon className="block w-6 text-gray-600" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-gray-600" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-white': isOpen,
          hidden: !isOpen,
        })}
      >
        {/*
         */}

        <nav className="space-y-6 px-2 pb-24 pt-5">
          {items.map(({ name, id }, index) => {
            const isActive = getActivity(index);

            return (
              <div key={name}>
                <div
                  className={clsx(
                    ' text-gray-6W00 mb-2 cursor-pointer rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wider ',
                    {
                      'text-gray-600 hover:bg-gray-500 hover:text-white':
                        !isActive,
                      'bg-gray-800 text-gray-100': isActive,
                    },
                  )}
                  onClick={(e) => handleClick(e, id)}
                >
                  <div>{name}</div>
                </div>

                {/* <div className="space-y-1">
                {items.map((item, index) => (
                  <GlobalNavItem
                    key={index}
                    item={item}
                    close={close}
                    active={activeItem === item.id ? true : false}
                  />
                ))}
              </div> */}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
