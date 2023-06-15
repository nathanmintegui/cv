import { env } from "~/env.mjs";

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import { rubik800, spaceMono400 } from "~/styles/fonts";

import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";

type FormValues = {
  email: string;
  name: string;
  message: string;
};

export const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

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

      setLoading(false);

      showToastSuceessMessage();
    } catch (e) {
      setLoading(false);

      showToastErrorMessage();
    }
  };

  const Loader: React.FC = () => {
    return (
      <div className="mt-5 flex justify-center bg-black">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-5/12 flex-col items-center">
      <h1
        className={`${rubik800.className} section-shadow flex h-28 w-80 items-center justify-center rounded-3xl text-4xl`}
      >
        Contact
      </h1>
      {/* eslint-disable */}
      <form
        className="mt-5 flex w-9/12 flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* eslint-enable */}
        <label className={`${spaceMono400.className} flex flex-col`}>
          Email
          <input
            {...register("email")}
            className="rounded-sm border border-black bg-gray-100"
          />
        </label>
        <label className={`${spaceMono400.className} flex flex-col`}>
          Name
          <input
            {...register("name")}
            className="rounded-sm border border-black bg-gray-100"
          />
        </label>
        <label className={`${spaceMono400.className} flex flex-col`}>
          Message
          <textarea
            {...register("message")}
            className="h-48 rounded-sm border border-black bg-gray-100"
          />
        </label>
        {loading ? (
          <Loader />
        ) : (
          <button
            className={`${spaceMono400.className} mt-5 flex h-9 items-center justify-center rounded-sm bg-black text-white`}
          >
            send
          </button>
        )}
      </form>
    </div>
  );
};
