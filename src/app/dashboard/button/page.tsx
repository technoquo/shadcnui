"use client";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>
      <Button variant={"destructive"}>Default</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"link"}>Link</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"secondary"}>Default</Button>
      <Button disabled>Default</Button>
      <Button onClick={() => alert("clicked")}>Alert</Button>
      <Button variant={"success"}>Success</Button>
      <Button capitalize={false}>capitalize false</Button>
    </div>
  );
}
