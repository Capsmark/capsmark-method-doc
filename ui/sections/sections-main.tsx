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
              {pic.firstSetOfList &&
                pic.firstSetOfList.map((listItem) => (
                  <ol className="ml-8">
                    {listItem.listItems.map((l, index) => (
                      <li>
                        {listItem.ul ? (
                          <div className="align-center flex">
                            <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-black"></div>{' '}
                            {l}
                          </div>
                        ) : (
                          <div>
                            {index + 1}. {l}
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                ))}

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
