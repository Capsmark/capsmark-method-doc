import { items } from '#/lib/items';
import { SectionsMain } from '#/ui/sections/sections-main';

type Section = { title: string; children: any };

const sections: Section[] = [];

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-bold text-gray-300" id="capsmark">
        Capsmark
      </h1>

      <div className="space-y-10 text-white">
        {items.map(({ name, items, id }) => {
          return (
            <section key={name} className="space-y-5">
              <h2
                className="text-xs font-semibold uppercase tracking-wider text-gray-400"
                id={id}
              >
                {name}
              </h2>

              <div className="space-y-10">
                {items.map((item) => (
                  <section
                    key={item.id}
                    className=" space-y-3 text-lg font-bold text-gray-300 text-white"
                  >
                    <h1 id={item.id}>{item.name}</h1>
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
