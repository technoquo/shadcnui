import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return "123456789".split("");
};

export default async function Page() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {data.map((i) => (
        <Card key={i}>
          <CardHeader className="flex-row">
            <Image
              src="https://github.com/shadcn.png"
              alt="Shuding Wu"
              width={40}
              height={40}
              className="rounded-full mr-2 w-10 h-10"
            />
            <div>
              <CardTitle>Shuding Wu</CardTitle>
              <CardDescription>Frontend Developer</CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Button>Ver mas</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
