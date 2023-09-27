'use client';

import { type Item } from '#/lib/items';

import Image from 'next/image';

export function SectionsMain({ item }: { item: Item }) {
  return (
    <div className="mb-10 mt-10 text-sm font-medium">
      {item.paragraphs &&
        item.paragraphs.map((par) => <p className="mb-4 mt-6">{par}</p>)}
      {item.picture &&
        item.picture.map((pic) => {
          return (
            <div>
              <Image src={pic.url} alt="image" />
              {pic.firstSetOfParagraphs &&
                pic.firstSetOfParagraphs.map((par) => (
                  <p className="mb-6 mt-6">{par}</p>
                ))}
              {pic.firstSetOfList && (
                <ol>
                  {pic.firstSetOfList.map((listItem) => (
                    <li>{listItem.listItems}</li>
                  ))}
                </ol>
              )}
              {pic.secondSetOfParagraphs &&
                pic.secondSetOfParagraphs.map((par) => (
                  <p className="mb-6 mt-6">{par}</p>
                ))}
            </div>
          );
        })}
    </div>
  );
}
