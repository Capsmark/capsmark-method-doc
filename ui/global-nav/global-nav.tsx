'use client';

import { items } from '#/lib/items';
import { CapsLogo } from '#/ui/caps-logo';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import { GlobalNavItem } from './global-nav-item';

export function GlobalNav() {
  // todo change later
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  // end todo here

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const curPos = window.scrollY;
      let curSection = null;

      for (const section in items) {
        // todo fix
        curSection = items[section] >= curPos ? section : curSection;
        if (curSection !== section) {
          break;
        }
      }
      if (curSection !== activeItem) {
        setActiveItem(curSection);
      }
    }
  };

  const getAnchorPoints = () => {
    if (typeof window !== 'undefined') {
      const curScroll = window.scrollY - 100;
      const viewPortHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      );
      for (const key in items) {
        // todo fix
        items[key] =
          document.getElementById(key)!.getBoundingClientRect().top + curScroll;
      }
      const bottom = document.body.offsetHeight;
    }
    handleScroll();
  };

  const observer = new MutationObserver(getAnchorPoints);
  if (typeof window !== 'undefined') {
    observer.observe(document.getElementById('root')!, {
      childList: true,
      subtree: true,
    });
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <div className="h-10 w-10 rounded-full border border-white/20 p-2 group-hover:border-white/60">
            <CapsLogo />
          </div>

          <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            Capsmark
          </h3>
        </Link>
      </div>

      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XIcon className="block w-6 text-gray-400" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 pb-24 pt-5">
          {items.map(({ name, items }) => {
            return (
              <div key={name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                  <div>{name}</div>
                </div>

                <div className="space-y-1">
                  {items.map((item, index) => (
                    // todo add anchor link here
                    <GlobalNavItem key={index} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
