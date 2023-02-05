import { Poppins } from '@next/font/google';

import {
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  Dialog,
} from '@src/components/ui/Dialog';
import { HeartHandshake } from 'lucide-react';
import { Text } from '@src/components/ui/Text';
import { SeoHeaders } from '@src/components/ui/SeoHeaders';
import { AllComponents } from '@src/components/fragments/AllComponents';
import { ThemeButton } from '@src/components/fragments/ThemeButton';

export const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
  const seo = {
    title: 'Huh! Components?',
    description:
      'A collection of components for Next.js restyled from Shadcns Radix + Tailwind repo.',
    author: 'By Ayush',
    twitter: '@is_it_ayush',
  };

  const url =
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000';

  const og = new URL(`${url}/api/og?title=${seo.title}&author=${seo.author}`);

  return (
    <main
      className={`flex ${font.className} relative items-center justify-center bg-white dark:bg-black/70`}>
      <div className="fixed left-[50%] top-5 z-[5] flex w-[90%] -translate-x-[50%] flex-row items-center justify-between rounded-full bg-white bg-opacity-20 p-3 py-5 drop-shadow-lg backdrop-blur-[5px] dark:bg-black/5">
        <SeoHeaders
          title={seo.title}
          description={seo.description}
          author={seo.author}
          twitterAuthor={seo.twitter}
          twitterSite={seo.twitter}
          url={process.env.NEXT_PUBLIC_BASE_URL}
          imageUrl={og.href}
        />
        <div className="flex flex-row space-x-2">
          <Text size="sm" weight="medium">
            Ayush
          </Text>
        </div>
        <div className="flex flex-row space-x-2">
          <ThemeButton />
          <div className="flex">
            <Dialog>
              <DialogTrigger className="rounded-full bg-black/10 p-2 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20">
                <HeartHandshake size={24} />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Hi! I'm Ayush,</DialogTitle>
                  <DialogDescription>
                    <Text size="sm">
                      I've re-designed and built these components after getting
                      inspired from{' '}
                      <a
                        href="https://ui.shadcn.com/"
                        target={'_blank'}
                        className="italic text-black underline dark:text-white">
                        Shadcn's Work on Radix UI & Tailwind
                      </a>{' '}
                      and to use them throughout my projects. I've also added
                      some of my own components to this. If you want to use them
                      in your projects, you can find the source code here on{' '}
                      <a
                        href="https://github.com/is-it-ayush/monoyard/tree/master/apps/component-box"
                        target={'_blank'}
                        className="italic text-black underline dark:text-white">
                        GitHub.
                      </a>
                      . You can just copy paste and restyle. If you like it, you
                      could also{' '}
                      <a
                        href="https://twitter.com/is_it_ayush"
                        target={'_blank'}
                        className="italic text-black underline dark:text-white">
                        follow me on Twitter
                      </a>
                      . Let me know what you think about it by making a tweet.
                    </Text>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="divide-y-5 relative mt-[80px] flex w-fit flex-col gap-5 divide-y-2 divide-black/20 dark:divide-white/20">
        <AllComponents />
      </div>
    </main>
  );
}
