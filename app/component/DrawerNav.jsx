"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

import { useChat } from "ai/react";
import { useCompletion } from "ai/react";

export default function DrawerNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
    error,
  } = useCompletion({ api: "api/completion" });
  const [text, setText] = useState("");
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <p>you:{input}</p>

            {"___ "}
            <p>AI: {completion}</p>
          </DrawerBody>

          <DrawerFooter>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  value={input}
                  placeholder="Enter your prompt..."
                  onChange={handleInputChange}
                />

                <Button type="button" onClick={stop}>
                  Stop
                </Button>
                <Button disabled={isLoading} type="submit" colorScheme="teal">
                  Submit
                </Button>
              </form>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
