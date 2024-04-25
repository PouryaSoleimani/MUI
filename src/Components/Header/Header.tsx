//^ HEADER COMPONENT
import { Avatar, Button } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { ChevronDown, HeartHandshake, LayoutGrid, LineChart, Scaling, Zap } from "lucide-react";
import LoginBTN from "../LoginBTN/LoginBTN";

const Header = () => {


  return (
    <div className="bg-black w-full h-16 border-b-2 space-x-5 border-white my-0 py-2 pl-[15rem] flex items-center justify-between pr-10">
      {/*//* USERS */}
      <div className="flex gap-4 items-center">
        <h1 className="text-white font-bold px-2 tracking-tighter w-[6.7rem]">TRENDINGS :</h1>
        <Avatar className="cursor-pointer hover:scale-110 duration-300" isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar className="cursor-pointer hover:scale-110 duration-300" isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar className="cursor-pointer hover:scale-110 duration-300" isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar className="cursor-pointer hover:scale-110 duration-300" isBordered src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        <Avatar className="cursor-pointer hover:scale-110 duration-300" isBordered src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar className="cursor-pointer hover:scale-110 duration-300" isBordered src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      </div>

      {/*//* NAVBAR */}
      <Navbar shouldHideOnScroll className="bg-transparent text-white font-bold">
        <NavbarContent className="hidden sm:flex gap-6" justify="center">

          {/*//* DROPDOWN */}
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger><Button disableRipple className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white font-extrabold" radius="sm" variant="shadow" endContent={<ChevronDown size={28} color="#0080ff" strokeWidth={2.5} />}> Features</Button></DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="ACME features" className="w-[340px] bg-zinc-800 font-bold text-zinc-100" itemClasses={{ base: "gap-4", }}>
              <DropdownItem key="autoscaling" description="ACME scales apps to meet user demand, automagically, based on load." startContent={<Scaling size={28} color="#ffff00" strokeWidth={2.5} />} >
                Autoscaling
              </DropdownItem>
              <DropdownItem key="usage_metrics" description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where." startContent={<LineChart size={28} color="#8000ff" strokeWidth={2.5} />} >
                Usage Metrics
              </DropdownItem>
              <DropdownItem key="production_ready" description="ACME runs on ACME, join us and others serving requests at web scale." startContent={<Zap size={28} color="#0080ff" strokeWidth={2.5} />}>
                Production Ready
              </DropdownItem>
              <DropdownItem key="99_uptime" description="Applications stay on the grid with high availability and high uptime guarantees." startContent={<LayoutGrid size={28} color="#80ff00" strokeWidth={2.5} />} >
                +99% Uptime
              </DropdownItem>
              <DropdownItem key="supreme_support" description="Overcome any challenge with a supporting team ready to respond." startContent={<HeartHandshake size={28} color="#ff0080" strokeWidth={2.5} />} >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {/* //* NAVBAR LINKS */}
          <NavbarItem isActive> <Link href="#" aria-current="page" className="text-white font-extrabold">Customers</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-white font-extrabold"> Integrations</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className="text-white hover:text-[#80ff00] font-extrabold"><LoginBTN/></Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {/* //* NAVBAR DROPDOWN */}
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