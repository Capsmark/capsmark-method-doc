import { items } from '#/lib/items';
import { SectionsMain } from '#/ui/sections/sections-main';

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="space-y-10 text-white">
        {items.map(({ name, items, id }) => {
          return (
            <section key={name} className="space-y-5">
              <h2
                className="text-lg font-bold uppercase tracking-wider text-gray-900"
                id={id}
              >
                {name}
              </h2>

              <div className="space-y-10">
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
        })}
      </div>
    </div>
  );
}
