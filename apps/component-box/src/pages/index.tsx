import { Open_Sans, Roboto } from '@next/font/google';
import { Button } from '@src/components/ui/Button';

const sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-osans',
});

export default function Home() {
  return (
    <main
      className={`flex ${sans.variable} min-h-screen w-full items-center justify-center font-sans`}>
      <div className="divide-y-5 flex flex-col gap-5">
        <Button
          onClick={() => {
            console.log('clicked');
          }}>
          Button
        </Button>
      </div>
    </main>
  );
}
