import { FC } from "react";
import "@/app/globals.css";
import SignInForm from "@/components/SignInForm";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="flex flex-col items-center ">
      <h1 className="mt-20 text-3xl">Войти</h1>

      <SignInForm />
    </section>
  );
};

export default page;
