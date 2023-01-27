import { Button } from '@src/components/ui/Button';
import { Poppins } from '@next/font/google';
import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@src/components/ui/Accordion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@src/components/ui/AlertDialog';
import { AspectRatio } from '@src/components/ui/AspectRatio';
import { Container } from '@src/components/ui/Container';
import { Avatar, AvatarFallback, AvatarImage } from '@src/components/ui/Avatar';

export const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
  return (
    <main
      className={`flex ${font.className} min-h-screen w-full items-center justify-center`}>
      <div className="divide-y-5 flex flex-col gap-5 divide-y-2 divide-black/20">
        <Container title="Button Component">
          <Button
            onClick={() => {
              console.log('clicked');
            }}>
            Button
          </Button>
        </Container>
        <Container title="Accordion Component">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components' aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
        <Container title="Alert Dialog Component">
          <AlertDialog>
            <AlertDialogTrigger className="my-2 flex w-full items-center justify-center border-2 px-3 py-2 transition-colors duration-200 hover:border-black">
              Show Alert
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure absolutely sure?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  onClick={() => {
                    console.log('cancel');
                  }}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    console.log('continue');
                  }}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Container>
        <Container title="Aspect Ratio Component">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="https://images.unsplash.com/photo-1618067328091-d0794daec04c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
              alt="Photo by Alvaro Pinot"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Container>
        <Container title="Avatar Component">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/36449128?v=4" />
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
        </Container>
        <Container title="Avatar Component">
        </Container>
      </div>
    </main>
  );
}
