type Section = { title: string; children: any };

const sections: Section[] = [];

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Capsmark</h1>

      <div className="space-y-10 text-white">
        {sections.map(({ title }) => {
          return (
            <section key={title} className="space-y-5">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {title}
              </h2>

              {/* <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return <></>;
                })}
              </div> */}
            </section>
          );
        })}
      </div>
    </div>
  );
}
