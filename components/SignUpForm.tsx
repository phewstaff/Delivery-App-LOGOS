import { FC } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { clientSchema, restaurantSchema, signUpSchema } from "@/utils/validate";
import { signUpCafeFn, signUpClientFn } from "@/api-service/authApi";
import { useMutation } from "@tanstack/react-query";
import { LoginInput, SignUpInput } from "@/api-service/types";

interface SignUpFormProps {
  role: "client" | "restaurant";
  schema: typeof clientSchema | typeof restaurantSchema;
}

const RegistrationForm: FC<SignUpFormProps> = ({ role, schema }) => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutate: signUpCafe, isLoading: isLoadingCafe } = useMutation(
    (userData: SignUpInput) => signUpCafeFn(userData),
    {
      onMutate() {
        console.log(1);
      },
      onSuccess: () => {
        console.log(2);
      },
      onError: (error: any) => {
        console.log(3);
      },
    }
  );

  const { mutate: signUpClient, isLoading: isLoadingClient } = useMutation(
    (userData: SignUpInput) => signUpClientFn(userData),
    {
      onMutate() {
        console.log(1);
      },
      onSuccess: () => {
        console.log(2);
      },
      onError: (error: any) => {
        console.log(3);
      },
    }
  );

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    if (role === "restaurant") {
      signUpCafe(values);
    }

    if (role === "client") {
      signUpClient(values);
    }

    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-6 flex flex-col gap-6"
        action=""
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {role === "client" && <>Имя</>}
                {role === "restaurant" && <>Название заведения</>}
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер телефона</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Город</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Адрес</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

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

        <Button className="m-auto w-[90%]">
          {role === "client" && <>Регистрация</>}
          {role === "restaurant" && <>Отправить заявку</>}
        </Button>
      </form>
    </Form>
  );
};

export default RegistrationForm;
