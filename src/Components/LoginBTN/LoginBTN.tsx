import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { Lock, Mail } from "lucide-react";


export default function LoginBTN() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} color="primary" className="font-bold text-lg">SignUp / Login</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>

                            <ModalBody>
                                <Input autoFocus endContent={<Mail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />} label="Email" placeholder="Enter your email" variant="bordered" />
                                <Input endContent={<Lock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />} label="Password" placeholder="Enter your password" type="password" variant="bordered" />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox classNames={{ label: "text-small", }}>Remember me</Checkbox>
                                    <Link color="primary" href="#" size="sm"> Forgot password?</Link>
                                </div>
                            </ModalBody>

                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}> Close</Button>
                                <Button color="primary" onPress={onClose}>Sign in</Button>
                            </ModalFooter>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
