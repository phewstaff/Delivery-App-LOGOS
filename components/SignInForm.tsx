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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-6 flex flex-col gap-6 text-center"
        action=""
      >
        <FormField
          control={form.control}
          name="mail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Электронная почта</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button type="submit" className="m-auto w-[90%]">
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
      </form>
    </Form>
  );
};

export default SignInForm;
