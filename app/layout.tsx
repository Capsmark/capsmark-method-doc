import '#/styles/globals.css';
import { GlobalNav } from '#/ui/global-nav/global-nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Capsmarks Methodology',
    template: '%s | Documentation',
  },
  description:
    'A comprehensive guide to our companys strategic approach and operational practices.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:light]">
      <body className="overflow-y-scroll bg-white pb-36" id={'semi-root'}>
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="mx-auto max-w-7xl space-y-8 bg-white px-2 pt-20 lg:px-8 lg:py-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
