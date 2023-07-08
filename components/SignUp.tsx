"use client";
import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SignUpForm from "./SignUpForm";
import { clientSchema, restaurantSchema } from "@/utils/validate";

interface SignUpProps extends React.HTMLAttributes<HTMLUListElement> {
  role: "client" | "restaurant";
  schema: typeof clientSchema | typeof restaurantSchema;
}

const SignUp: FC<SignUpProps> = ({ className, role, schema }) => {
  return (
    <section>
      <nav className="m-auto flex flex-col items-center">
        <ul className={cn(className, "flex")}>
          <li>
            <Link className="" href={"/sign-up/client"}>
              <Button className="h-16 w-56 border border-button">
                Стать клиентом
              </Button>
            </Link>
          </li>

          <li>
            <Link href={"/sign-up/restaurant"}>
              <Button className="h-16 w-56 border border-button">
                Для ресторана
              </Button>
            </Link>
          </li>
        </ul>

        <li className="list-none">
          <span className="text-secondary-foreground">Уже есть аккаунт ?</span>
          <Link href={"/sign-in"}>
            <Button variant={"ghost"}>Войти</Button>
          </Link>
        </li>
      </nav>

      <h1 className="mt-12 text-2xl">
        {role === "client" && <>Зарегистрироваться</>}
        {role === "restaurant" && <>Стать партнером</>}
      </h1>

      <SignUpForm role={role} schema={schema} />
    </section>
  );
};

export default SignUp;
