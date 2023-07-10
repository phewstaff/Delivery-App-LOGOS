"use client";
import { FC } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { loginUserFn } from "@/api-service/authApi";
import { LoginInput } from "@/api-service/types";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";

interface SignInFormProps {}

const SignInForm: FC<SignInFormProps> = ({}) => {
  const formSchema = z.object({
    mail: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),

    password: z.string().min(6, {
      message: "password number must be at least 6 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { mutate: loginUser, isLoading } = useMutation(
    (userData: LoginInput) => loginUserFn(userData),
    {
      onMutate() {},
      onSuccess: () => {},
      onError: (error: any) => {},
    }
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    loginUser(values);
    console.log(values);
  }

  return (
    <>
      <h1 className="font mt-20 text-5xl font-bold ">Войти</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-10 flex w-full flex-col gap-6 px-8 text-center md:text-start "
          action=""
        >
          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl font-bold leading-5">
                  Электронная почта
                </FormLabel>
                <FormControl>
                  <Input className="h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl font-bold leading-5">
                  Пароль
                </FormLabel>
                <FormControl>
                  <Input className="h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <div className="flex flex-col items-center p-8">
            <Button type="submit" className="h-14 w-full  text-2xl leading-5">
              {isLoading ? (
                <>
                  <div className="flex h-screen items-center justify-center">
                    <div className="relative h-10 w-10 animate-spin rounded-full bg-gradient-to-r from-primary  to-primary-gradient ">
                      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-white bg-gray-200"></div>
                    </div>
                  </div>
                </>
              ) : (
                "Войти"
              )}
            </Button>

            <div className="flex">
              <span className=" flex items-center whitespace-nowrap text-sm text-secondary-foreground">
                Нет аккаунта?
              </span>

              <Link href={"/sign-in"}>
                <Button variant={"link"}>Зарегистрироваться</Button>
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default SignInForm;
