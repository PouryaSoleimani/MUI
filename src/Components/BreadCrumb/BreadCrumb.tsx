//^ BREADCRUMB COMPONENT
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function BreadCrumb() {
    return (
        <div className="flex items-center justify-start min-w-full sm:pl-[16rem] md:pl-[16rem] flex-shrink py-1 border-b-2 border-zinc-500 font-semibold">
            <Breadcrumbs underline="hover" variant="solid" >
                <BreadcrumbItem className="hover:text-black">Home</BreadcrumbItem>
                <BreadcrumbItem className="hover:text-black">Music</BreadcrumbItem>
                <BreadcrumbItem className="hover:text-black">Artist</BreadcrumbItem>
                <BreadcrumbItem className="hover:text-black">Album</BreadcrumbItem>
                <BreadcrumbItem className="hover:text-black">Song</BreadcrumbItem>
            </Breadcrumbs>
        </div >
    );
}