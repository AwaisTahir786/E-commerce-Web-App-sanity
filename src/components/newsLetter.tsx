import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function NewsLetter() {
  return (
    <div className="flex relative flex-col justify-center items-center gap-4  py-48">
      <h1 className="text-9xl absolute opacity-5 font-extrabold">News Letter</h1>
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
        Subscribe Our Newsletter
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-0">
        Get the latest information and promo offers directly
      </p>
      <div className="flex flex-row gap-2 mt-4">
        <Input className="rounded-sm" placeholder="input email address" />
        <Button className="rounded-none">Get Started</Button>
      </div>
    </div>
  );
}

export default NewsLetter;
