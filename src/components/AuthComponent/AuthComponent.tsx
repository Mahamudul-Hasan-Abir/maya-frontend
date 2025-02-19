"use client";
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
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import userLogo from "../../../assents/NavBar/userLogo.png";
import toast from "react-hot-toast";

interface AuthComponentProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

const AuthComponent = ({ isOpen, onClose }: AuthComponentProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/search";

  const [registerComponent, setRegisterComponent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Extract form values manually
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      ?.value;

    // Construct JSON payload in the exact format
    const data = {
      name: name,
      email: email,
      password: password,
      permission: "store_owner", // Extra field
    };
    console.log(data);
    try {
      const response = await fetch("https://api-maya.nusratech.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.token) {
        onClose(false);
        localStorage.setItem("authToken", result.token);
        router.push(redirect ? redirect : "/search");
        toast.success("Successfully Registered");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error submitting form:", error);
      if (error.status == "422") {
        toast.error("Something Went Wrong");
      }
    }
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const email = (form.elements.namedItem("loginemail") as HTMLInputElement)
      ?.value;
    const password = (
      form.elements.namedItem("loginpassword") as HTMLInputElement
    )?.value;

    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    try {
      const response = await fetch("https://api-maya.nusratech.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      if (result.token) {
        localStorage.setItem("authToken", result.token);
        onClose(false);
        toast.success("Successfully loggedin");

        router.push(redirect ? redirect : "/search");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error submitting form:", error);
      if (error.status == "422") {
        toast.error("Something Went Wrong");
      }
    }
  };
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogTrigger asChild>
          <Image src={userLogo} className="size-[18px]" alt="user logo" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          {registerComponent ? (
            /** Register Form */
            <form onSubmit={handleSubmit}>
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
                  <Input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="email" className="text-left font-bold">
                    Email:
                  </Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="password" className="text-left font-semibold">
                    Password:
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                  />
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
            </form>
          ) : (
            /** Login Form */
            <form onSubmit={handleLogin}>
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
                    id="loginemail"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="password" className="text-left font-semibold">
                    Password:
                  </Label>
                  <Input
                    id="loginpassword"
                    type="password"
                    placeholder="••••••••"
                  />
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
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthComponent;
