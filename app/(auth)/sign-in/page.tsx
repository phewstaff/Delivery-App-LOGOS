import "@/app/globals.css";
import SignInForm from "@/components/SignInForm";
import { Card, CardContent } from "@/components/ui/card";

const page = ({}) => {
  return (
    <section className="min-h-screen w-full">
      <div className="flex min-h-screen w-full flex-col items-center justify-center md:hidden">
        <SignInForm />
      </div>

      <div className="hidden min-h-screen w-full items-center md:flex">
        <Card className="m-auto flex w-[46rem] md:text-center">
          <CardContent className="w-full">
            <SignInForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default page;
