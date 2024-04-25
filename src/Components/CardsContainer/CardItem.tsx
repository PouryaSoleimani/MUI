import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react";

type CardItemProps = { title: string, count: string, album: string, img: string }

export default function CardItem({ title, count, album, img }: CardItemProps) {
    return (
        <Card className="bg-black/80 rounded-xl pb-20 text-zinc-100 hover:scale-105 cursor-pointer duration-500 max-w-fit" isHoverable shadow="lg" isFooterBlurred isBlurred>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{title}</p>
                <small className="text-default-500">{count}</small>
                <h4 className="font-bold text-large">{album}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image alt="Card background" className="object-cover rounded-xl" src={img} width={270} />
            </CardBody>
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button className="text-tiny text-white bg-cyan-500/80 rounded-xl font-bold tracking-tighter" variant="faded" color="secondary" radius="lg" size="sm">   Notify me</Button>
            </CardFooter>
        </Card>
    );
}
