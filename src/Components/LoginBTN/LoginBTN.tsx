import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { Lock, Mail } from "lucide-react";


export default function LoginBTN() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} color="primary" className="font-bold text-lg">SignUp / Login</Button>
            <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">

                <ModalContent className="bg-zinc-900 flex flex-col text-2xl text-zinc-100 font-bold rounded-xl">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>

                            <ModalBody>
                                <Input autoFocus endContent={<Mail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />} placeholder="Enter your email" variant="bordered" className="text-lg border-2 p-1 rounded-xl border-black " />
                                <Input endContent={<Lock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />} placeholder="Enter your password" type="password" variant="bordered" className="text-lg border-2 border-black p-1 rounded-xl" />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox className='text-[16px] text-white' color="secondary">Remember me</Checkbox>
                                    <Link color="primary" href="#" size="md"> Forgot password?</Link>
                                </div>
                            </ModalBody>

                            <ModalFooter>
                                <Button className="bg-rose-600/70 text-white font-semibold h-fit p-4 text-md  tracking-tighter rounded-xl" onPress={onClose}> Close</Button>
                                <Button className="bg-emerald-600/70 text-white font-semibold p-4 h-fit text-md  tracking-tighter rounded-xl" onPress={onClose}> SignUp</Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>

            </Modal>
        </>
    );
}
