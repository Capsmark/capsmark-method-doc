import { items } from '#/lib/items';

type Section = { title: string; children: any };

const sections: Section[] = [];

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300" id="capsmark">
        Capsmark
      </h1>

      <div className="space-y-10 text-white">
        {items.map(({ name, items }) => {
          return (
            <section key={name} className="space-y-5">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {name}
              </h2>

              <div className="space-y-80">
                {items.map((item) => {
                  return (
                    <section
                      key={item.id}
                      className="mb-80 mt-80 space-y-80 text-white"
                    >
                      <h1 id={item.id}>{item.name}</h1>
                    </section>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
