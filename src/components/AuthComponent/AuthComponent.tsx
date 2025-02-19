import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import userLogo from "../../../assents/NavBar/userLogo.png";

const AuthComponent = () => {
  const [registerComponent, setRegisterComponent] = useState(false);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Image src={userLogo} className="size-[18px]" alt="user logo" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          {registerComponent ? (
            /** Register Form */
            <>
              <DialogHeader>
                <DialogTitle className="text-center text-[#004B47]">
                  Register
                </DialogTitle>
                <DialogDescription className="text-lg">
                  By signing up, you agree to our{" "}
                  <span className="underline text-[#004B47]">terms</span> &{" "}
                  <span className="underline text-[#004B47]">policy</span>
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="name" className="text-left font-bold">
                    Name:
                  </Label>
                  <Input id="name" type="text" placeholder="Your Name" />
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="email" className="text-left font-bold">
                    Email:
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="password" className="text-left font-semibold">
                    Password:
                  </Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
              </div>
              <DialogFooter>
                <Button
                  className="w-full bg-[#004B47] hover:bg-[#144240] font-semibold"
                  type="submit"
                >
                  Register
                </Button>
              </DialogFooter>
              <div className="flex items-center gap-2">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="text-gray-500 text-sm">or</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
              <Button
                className="w-full bg-[#4285f4] hover:bg-[#356dc9] font-semibold"
                type="submit"
              >
                Google
              </Button>
              <p className="text-center text-[#5a5a5a]">
                Already have an account?{" "}
                <span
                  className="text-[#004B47] font-semibold underline hover:cursor-pointer"
                  onClick={() => setRegisterComponent(false)}
                >
                  Login
                </span>
              </p>
            </>
          ) : (
            /** Login Form */
            <>
              <DialogHeader>
                <DialogTitle className="text-center text-[#004B47]">
                  Login
                </DialogTitle>
                <DialogDescription className="text-lg">
                  Login with your email & password
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="email" className="text-left font-bold">
                    Email:
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="password" className="text-left font-semibold">
                    Password:
                  </Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
              </div>
              <DialogFooter>
                <Button
                  className="w-full bg-[#004B47] hover:bg-[#144240] font-semibold"
                  type="submit"
                >
                  Login
                </Button>
              </DialogFooter>
              <div className="flex items-center gap-2">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="text-gray-500 text-sm">or</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
              <Button
                className="w-full bg-[#4285f4] hover:bg-[#356dc9] font-semibold"
                type="submit"
              >
                Google
              </Button>
              <p className="text-center text-[#5a5a5a]">
                Do not have an account?{" "}
                <span
                  className="text-[#004B47] font-semibold underline hover:cursor-pointer"
                  onClick={() => setRegisterComponent(true)}
                >
                  Register
                </span>
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthComponent;
