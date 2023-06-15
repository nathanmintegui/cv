import { env } from "~/env.mjs";

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import { rubik800, spaceMono400 } from "~/styles/fonts";

import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormValues = {
  email: string;
  name: string;
  message: string;
};

export const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const showToastSuceessMessage = () => {
    toast.success("Email enviado com sucesso!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };

  const showToastErrorMessage = () => {
    toast.error("Ocorreu um erro!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };

  emailjs.init(env.NEXT_PUBLIC_PUBLIC_KEY);

  const onSubmit: SubmitHandler<FormValues> = async (
    data: FormValues
  ): Promise<void> => {
    const templateParams = {
      user_email: data.email,
      name: data.name,
      message: data.message,
    };

    try {
      await emailjs.send(
        env.NEXT_PUBLIC_SERVICE_ID,
        env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams
      );
      showToastSuceessMessage();
    } catch (e) {
      showToastErrorMessage();
    }
  };

  return (
    <div className="flex w-5/12 flex-col items-center">
      <h1
        className={`${rubik800.className} section-shadow flex h-28 w-80 items-center justify-center rounded-3xl text-4xl`}
      >
        Contact
      </h1>
      {/* eslint-disable */}
      <form className="flex w-9/12 flex-col" onSubmit={handleSubmit(onSubmit)}>
        {/* eslint-enable */}
        <label className={`${spaceMono400.className} flex flex-col`}>
          Email
          <input
            {...register("email")}
            className="rounded-sm border border-black"
          />
        </label>
        <label className={`${spaceMono400.className} flex flex-col`}>
          Name
          <input
            {...register("name")}
            className="rounded-sm border border-black"
          />
        </label>
        <label className={`${spaceMono400.className} flex flex-col`}>
          Message
          <input
            {...register("message")}
            className="h-48 rounded-sm border border-black"
          />
        </label>
        <button
          className={`${spaceMono400.className} mt-5 flex h-9 w-20 items-center justify-center rounded-sm bg-black text-white`}
        >
          Send
        </button>
      </form>
    </div>
  );
};
