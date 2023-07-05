"use client";
import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AuthForm from "./AuthForm";

interface SignUpProps extends React.HTMLAttributes<HTMLUListElement> {}

const SignUp: FC<SignUpProps> = ({ className }) => {
  return (
    <section>
      <nav className="m-auto flex flex-col items-center">
        <ul className={cn(className, "flex")}>
          <li>
            <Link className="" href={""}>
              <Button className="h-16 w-56 border border-button">
                Стать клиентом
              </Button>
            </Link>
          </li>

          <li>
            <Link href={""}>
              <Button className="h-16 w-56 border border-button">
                Для ресторана
              </Button>
            </Link>
          </li>
        </ul>

        <li className="list-none">
          <span className="text-secondary-foreground">Уже есть аккаунт ?</span>
          <Link href={""}>
            <Button variant={"ghost"}>Войти</Button>
          </Link>
        </li>
      </nav>

      <h1 className="mt-12 text-2xl">Стать партнером</h1>

      <AuthForm />
    </section>
  );
};

export default SignUp;
