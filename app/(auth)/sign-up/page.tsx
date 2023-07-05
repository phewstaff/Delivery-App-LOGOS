import { FC } from "react";
import "@/app/globals.css";
import { Card, CardContent } from "@/components/ui/card";
import SignUp from "@/components/SignUp";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="w-full p-12">
      <SignUp className="m-auto flex-col gap-4" />

      <Card className="m-auto hidden w-full md:flex">
        <CardContent className="w-full">
          {/* <SignUp className="m-auto flex-col gap-2" /> */}
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
