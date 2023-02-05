import Image from 'next/image';
import {
  Cloud,
  CreditCard,
  Github,
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
import { useState, useEffect } from 'react';

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
import { Text } from '@src/components/ui/Text';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@src/components/ui/HoverCard';
import { Label } from '@src/components/ui/Label';
import { Input } from '@src/components/ui/Input';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@src/components/ui/MenuBar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@src/components/ui/Popover';
import { Progress } from '@src/components/ui/Progress';
import { RadioGroup, RadioGroupItem } from '@src/components/ui/RadioGroup';
import { ScrollArea } from '@src/components/ui/ScrollArea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@src/components/ui/Select';
import { Separator } from '@src/components/ui/Separator';
import { Slider } from '@src/components/ui/Slider';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@src/components/ui/Tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@src/components/ui/Tooltip';
import { Toggle } from '@src/components/ui/Toggle';

export const AllComponents = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
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
              <AlertDialogTitle>Are you sure absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
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
            src="https://images.unsplash.com/photo-1674824959440-09442ed75a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Photo by Collin Watts on Unsplash"
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
        <Text heading={true} headingSize={'h1'} size={'3xl'} weight={'bold'}>
          Hi, You're appreciated.
        </Text>
        <Text className="w-[300px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
          aliquet nunc nisl sit amet nunc. Nulla facilisi.
        </Text>
      </Container>
      <Container title="Switch Component">
        <div className="flex w-[300px] flex-row gap-3">
          <Switch id="myswitch" />
          <Label
            htmlFor="myswitch"
            className="flex items-center justify-center text-sm">
            Allow this setting to be enabled.
          </Label>
        </div>
      </Container>
      <Container title="Hover Card Component" className="flex-col gap-5">
        <HoverCard>
          <HoverCardTrigger>Hover</HoverCardTrigger>
          <HoverCardContent>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold"> is-it-ayush</h4>
              <p className="text-sm">
                This one's awesome, isn't it? You can use this to brief display
                information.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>With Image</HoverCardTrigger>
          <HoverCardContent className="w-[350px]">
            <div className="grid grid-cols-2 grid-rows-1 space-x-4">
              <div className="p-3">
                <AspectRatio ratio={1}>
                  <Image
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Photo by Revolt on Unsplash"
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Cool Shoe</h4>
                <p className="text-sm">
                  It's red and cool. It's a shoe, cool shoe. I found this image
                  on Unsplash and I thought it would be a good example.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Container>
      <Container title="Input Component" className="flex flex-col">
        <div className="w-full">
          <Input id="Name" placeholder="Without Label..." style={'default'} />
        </div>
        <div className="mt-3 flex w-full flex-col">
          <Label htmlFor="input1" className="mb-2 text-sm font-semibold">
            First Name
          </Label>
          <Input id="input1" placeholder="John..." style={'slate'} />
        </div>
        <div className="mt-3 flex w-full flex-col">
          <Label htmlFor="input2" className="mb-2 text-sm font-semibold">
            Last Name
          </Label>
          <Input id="input2" placeholder="Doe..." style={'yellow'} />
        </div>
        <div className="mt-3 flex w-full flex-col">
          <Label htmlFor="input3" className="mb-2 text-sm font-semibold">
            Oops!
          </Label>
          <Input
            id="input3"
            placeholder="This one has errors..."
            style={'yellow'}
            error={'This is an error message.'}
          />
        </div>
        <div className="mt-3 flex w-full flex-col">
          <Label htmlFor="input4" className="mb-2 text-sm font-semibold">
            Password
          </Label>
          <Input id="input4" type="password" placeholder="Password..." />
        </div>
      </Container>
      <Container title="Menu Bar Component">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem>
                Always Show Bookmarks Bar
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked>
                Always Show Full URLs
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>Edit...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </Container>
      <Container title="Popover Component">
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </Container>
      <Container title="Progress Component" className="flex flex-col space-y-4">
        <Progress value={0} className="w-[300px]" />
        <Progress value={25} className="w-[300px]" />
        <Progress value={50} className="w-[300px]" />
        <Progress value={75} className="w-[300px]" />
        <Progress value={100} className="w-[300px]" />
        <Progress value={50} indeterminate={true} className="w-[300px]" />
      </Container>
      <Container title="Radio Component">
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Ayush</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Keshav</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-three" />
            <Label htmlFor="option-three">Github</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-four" id="option-four" />
            <Label htmlFor="option-four">Twitter</Label>
          </div>
        </RadioGroup>
      </Container>
      <Container title="Scroll Area Component">
        <ScrollArea className="flex h-[300px] w-[300px] flex-col justify-center py-5">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="my-5 flex h-[100px] items-center justify-center bg-gray-200 dark:bg-black/5">
              You're appreciated {i}x times.
            </div>
          ))}
        </ScrollArea>
      </Container>
      <Container title="Select Component">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </Container>
      <Container title="Separator" className="flex flex-col">
        <Text weight="medium" size="lg">
          Ayush
        </Text>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <Text>Twitter</Text>
          <Separator orientation="vertical" />
          <Text>Github</Text>
          <Separator orientation="vertical" />
          <Text>Blog</Text>
        </div>
      </Container>
      <Container title="Slider Component" className="flex flex-col gap-5">
        <Slider
          defaultValue={[33]}
          max={100}
          step={1}
          minStepsBetweenThumbs={1}
        />
        <Text weight="medium" size="lg">
          Vertical
        </Text>
        <Slider
          defaultValue={[33, 66]}
          max={100}
          step={1}
          minStepsBetweenThumbs={1}
        />
        <div className="flex h-[250px] items-center space-x-4 text-sm">
          <Slider
            defaultValue={[33, 66]}
            max={100}
            step={1}
            className="h-[150px] w-full"
            orientation="vertical"
          />
          <Text>Horizontal</Text>
          <Slider
            defaultValue={[33, 66]}
            max={100}
            step={1}
            className="h-[150px] w-full"
            orientation="vertical"
          />
        </div>
      </Container>
      <Container title="Tabs Component">
        <Tabs defaultValue="account" className="w-[300px]">
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Text size="sm">
              Login to your account to get started. It's free and only takes a
              minute.
            </Text>
            <div className="grid gap-2 py-4">
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Username..." />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Password..."
                  type="password"
                />
              </div>
            </div>
            <div className="flex">
              <Button>Login</Button>
            </div>
          </TabsContent>
          <TabsContent value="signup">
            <Text size="sm">
              Create an account to get started. It's free and only takes a
              minute.
            </Text>
            <div className="grid gap-2 py-4">
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Username..." />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Password..."
                  type="password"
                />
              </div>
            </div>
            <div className="flex">
              <Button>Signup</Button>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
      <Container title="Tooltip Component">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent className="min-w-full">
              <Text size="sm" ratio={1}>
                Add to library
              </Text>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Container>
      <Container title="Toggle Component">
        <Toggle>Enable</Toggle>
      </Container>
    </>
  );
};
