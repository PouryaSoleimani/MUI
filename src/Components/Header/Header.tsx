//^ HEADER COMPONENT
import { Avatar, Button } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "@/";

const Header = () => {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <div className="bg-black w-full h-16 border-b-2 space-x-5 border-white my-0 py-2 pl-[15rem] flex items-center justify-between pr-10">

      <div className="flex gap-4 items-center">
        <h1 className="text-white font-bold tracking-tighter">OUR USERS :</h1>
        <Avatar className="cursor-pointer hover:scale-110 duration-300" isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar className="cursor-pointer hover:scale-110 duration-300" isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar className="cursor-pointer hover:scale-110 duration-300" isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar className="cursor-pointer hover:scale-110 duration-300" isBordered src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        <Avatar className="cursor-pointer hover:scale-110 duration-300" isBordered src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar className="cursor-pointer hover:scale-110 duration-300" isBordered src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      </div>
      <Divider orientation="vertical" className="text-white mx-10" />


      <Navbar shouldHideOnScroll className="bg-transparent text-white font-bold">
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Features
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={icons.scale}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.flash}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem >
            <Link color="foreground" href="#" className="text-white font-extrabold">Features</Link>
          </NavbarItem>
          <NavbarItem isActive> <Link href="#" aria-current="page" className="text-white font-extrabold">Customers</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-white font-extrabold"> Integrations</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className="text-blue-700 font-extrabold">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-blue-700 font-extrabold">Sign Up</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>



      <Dropdown>
        <DropdownTrigger>
          <Button color='secondary' variant="shadow" className="capitalize  font-bold rounded-md hover:scale-110 duration-500" > MENU </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions" className="bg-zinc-300 font-extrabold border-b-8 border-black">
          <DropdownItem className="font-bold hover:bg-black hover:text-white" key="new">New file</DropdownItem>
          <DropdownItem className="font-bold hover:bg-black hover:text-white" key="copy">Copy link</DropdownItem>
          <DropdownItem className="font-bold hover:bg-black hover:text-white" key="edit">Edit file</DropdownItem>
          <DropdownItem className="font-bold hover:bg-black text-rose-700" key="delete">Delete file</DropdownItem>
        </DropdownMenu>
      </Dropdown>



    </div>
  )
}

export default Header