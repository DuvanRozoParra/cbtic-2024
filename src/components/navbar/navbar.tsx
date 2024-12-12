import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@components/shadcn";
export function Navbar() {
  //LOGICA COMPONENTE
  return (
    <NavigationMenu className="">
      <NavigationMenuList className="absolute flex justify-center">
      <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-* text-white font-bold ">
            Home
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-row gap-4 p-4">
            {/* imagen */}
            <section className=" bg-blue-500">ADS</section>
            {/* texto */}
            <div className="w-[100px] h-[300px]">
              <h1 className="font-bold">jovenes investigadores</h1>
              <p>hola mundo</p>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* agregar boton */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-* text-white font-bold ">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-row gap-4 p-4">
            {/* imagen */}
            <section className=" bg-blue-500">ADS</section>
            {/* texto */}
            <div className="w-[100px] h-[300px]">
              <h1 className="font-bold">jovenes investigadores</h1>
              <p>hola mundo</p>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="">
          <NavigationMenuTrigger className=" bg-* text-white font-bold ">
            Profesores
          </NavigationMenuTrigger>
          {/* agregar contenido */}
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <Link href="/home">
                  <p>hola mundo</p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className=" bg-* text-white font-bold ">
            Asignaturas
          </NavigationMenuTrigger>
          {/* agregar contenido */}
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <Link href="/home">
                  <p>hola mundo</p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className=" bg-* text-white font-bold ">
            Asesorias
          </NavigationMenuTrigger>
          {/* agregar contenido */}
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <Link href="/home">
                  <p>hola mundo</p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className=" bg-* text-white font-bold ">
            ¿Quienes somos?
          </NavigationMenuTrigger>
          {/* agregar contenido */}
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <Link href="/home">
                  <p>hola mundo</p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <Icons.logo className="h-6 w-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">
                    shadcn/ui
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components that you can copy and
                    paste into your apps. Accessible. Customizable. Open
                    Source.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <ListItem href="/docs" title="Introduction">
              Re-usable components built using Radix UI and Tailwind CSS.
            </ListItem>
            <ListItem href="/docs/installation" title="Installation">
              How to install dependencies and structure your app.
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Typography">
              Styles for headings, paragraphs, lists...etc
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
