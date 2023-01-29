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
import {
  CheckboxLabel,
  Checkbox,
  CheckboxLabelDescription,
} from '@src/components/ui/Checkbox';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuTrigger,
  ContextMenuGroup,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from '@src/components/ui/ContextMenu';
import {
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  Dialog,
} from '@src/components/ui/Dialog';
import {
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from '@src/components/ui/DropdownMenu';
import { Switch } from '@src/components/ui/Switch';
import { Button } from '@src/components/ui/Button';
import {
  Cloud,
  CreditCard,
  Github,
  HeartHandshake,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Moon,
  Plus,
  PlusCircle,
  Settings,
  Sun,
  User,
  UserPlus,
  Users,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Text } from '@src/components/ui/Text';

export const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main
      className={`flex ${font.className} items-center justify-center bg-white dark:bg-black`}>
      <div className="absolute right-5 top-5 flex w-fit flex-row p-3 lg:left-5">
        {
          <button
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
            className="flex rounded-full bg-black/10 p-2 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20">
            {theme === 'dark' ? (
              <Sun size={24} />
            ) : (
              <Moon size={24} className="text-black dark:text-white" />
            )}
          </button>
        }
        <div className="pl-4">
          <Dialog>
            <DialogTrigger className="rounded-full bg-black/10 p-2 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20">
              <HeartHandshake size={24} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Hello.</DialogTitle>
                <DialogDescription>
                  You can hold down Option Key [⌥] and hover over the components
                  to see their paddings and margins. I've used Inspx by Ruano.
                  These components are highly experimental and are subject to
                  change. These components are built on top of Shadcn's Radix +
                  Tailwind CSS components.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="divide-y-5 mt-2 flex w-fit flex-col gap-5 divide-y-2 divide-black/20 dark:divide-white/20">
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
            <AlertDialogTrigger asChild>
              <Button>Open Dialog</Button>
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
        <Container title="Checkbox Component">
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <CheckboxLabel htmlFor="terms1">
                I agree to the terms and conditions
              </CheckboxLabel>
              <CheckboxLabelDescription className="w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt, nisl eget ultricies tincidunt, nisl eros aliquam
                mauris, nec ultricies nunc lorem eget nunc.
              </CheckboxLabelDescription>
            </div>
          </div>
        </Container>
        <Container title="Context Menu Component">
          <ContextMenu>
            <ContextMenuTrigger className="border-2 border-dashed py-10 px-32 text-center">
              Right click
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuGroup>
                <ContextMenuLabel>Actions</ContextMenuLabel>
                <ContextMenuItem
                  onClick={() => {
                    console.log('"profile" clicked');
                  }}>
                  Profile
                  <ContextMenuShortcut>⌘ + P</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem
                  onClick={() => {
                    console.log('"settings" clicked');
                  }}>
                  Settings
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuLabel>Other</ContextMenuLabel>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>Submenu</ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuGroup>
                      <ContextMenuItem
                        onClick={() => {
                          console.log('"submenu item 1" clicked');
                        }}>
                        Submenu Item 1
                      </ContextMenuItem>
                      <ContextMenuItem
                        onClick={() => {
                          console.log('"submenu item 2" clicked');
                        }}>
                        Submenu Item 2
                      </ContextMenuItem>
                    </ContextMenuGroup>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuItem
                  onClick={() => {
                    console.log('"logout" clicked');
                  }}>
                  Logout
                  <ContextMenuShortcut>⌘ + L</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        </Container>
        <Container title="Dialog Component">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Show Information</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Information.</DialogTitle>
                <DialogDescription>
                  This is just some information. You can render a form here
                  instead. It's up to you. You can also render a list of items.
                  Let your imagination run wild.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </Container>
        <Container title="Dropdown Menu Component">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <h1 className="w-full cursor-pointer px-3 py-2 text-center hover:bg-white hover:text-black">
                Show Dropdown
              </h1>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Keyboard className="mr-2 h-4 w-4" />
                  <span>Keyboard shortcuts</span>
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Invite users</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Message</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        <span>More...</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  <span>New Team</span>
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Cloud className="mr-2 h-4 w-4" />
                <span>API</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Container>
        <Container
          title="Text"
          className="flex flex-col items-start justify-start gap-5">
          <Text heading={true} headingSize={'h1'}>
            Hi, You're appreciated.
          </Text>
          <Text heading={true} headingSize={'h2'}>
            Hi, You're appreciated.
          </Text>
          <Text heading={true} headingSize={'h3'}>
            Hi, You're appreciated.
          </Text>
          <Text heading={true} headingSize={'h4'}>
            Hi, You're appreciated.
          </Text>
          <Text heading={true} headingSize={'h5'}>
            Hi, You're appreciated.
          </Text>
          <Text heading={true} headingSize={'h6'}>
            Hi, You're appreciated.
          </Text>
          <Text className="w-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
            aliquet nunc nisl sit amet nunc. Nulla facilisi.
          </Text>
        </Container>
      </div>
    </main>
  );
}
