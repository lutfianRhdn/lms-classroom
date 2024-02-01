import React from "react";
import { Modal as M, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Divider, } from "@nextui-org/react";

export default function Modal({ children, title, isOpen, onOpenChange, btnActionTitle, onSubmit}:any) {
  return (
    <>
      <M 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement='center'
        className="m-4"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl font-bold text-dark-blue">{title}</ModalHeader>
              <Divider className="mb-4"/>
              <ModalBody className="whitespace-pre-wrap">
                {children}
              </ModalBody>
              <ModalFooter className="mx-auto">
                <Button 
                  variant="ghost" 
                  className="border-dark-blue text-dark-blue" 
                  onPress={onClose} 
                  radius="sm" 
                  size="sm"
                >
                  Close
                </Button>
                <Button 
                  onPress={onSubmit} 
                  className="bg-dark-blue text-white" 
                  radius="sm" 
                  size="sm"
                >
                  {btnActionTitle}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </M>
    </>
  );
}
