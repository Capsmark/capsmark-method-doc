'use client';

import { ItemsList } from '#/lib/items';

import { FC, useEffect, useRef } from 'react';

import useItemStore from '#/stores/width.store';
import { SectionsMain } from './sections-main';

export const Section: FC<ItemsList & { index: number }> = ({
  name,
  items,
  id,
  index,
}) => {
  const { setActive } = useItemStore();

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      return setActive(index, entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (!ref.current) {
        return;
      }

      observer.unobserve(ref.current);
    };
  }, [ref]);

  return (
    <section key={name} className="space-y-5">
      <h2
        className="text-lg font-bold uppercase tracking-wider text-gray-900"
        id={id}
      >
        {name}
      </h2>

      <div ref={ref} className="space-y-10">
        {items.map((item) => (
          <section
            key={item.id}
            className=" space-y-3 text-2xl font-bold text-gray-700"
          >
            <div>
              <SectionsMain item={item} />
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};
