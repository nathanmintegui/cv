import { useForm } from "react-hook-form";

import { rubik800, spaceMono400 } from "~/styles/fonts";

export const Contact: React.FC = () => {
  const { register } = useForm();

  return (
    <div className="flex w-5/12 flex-col items-center">
      <h1
        className={`${rubik800.className} section-shadow flex h-28 w-80 items-center justify-center rounded-3xl text-4xl`}
      >
        Contact
      </h1>
      <form className="flex w-9/12 flex-col">
        <label className={`${spaceMono400.className} flex flex-col`}>
          Email
          <input
            {...register("Email")}
            className="rounded-sm border border-black"
          />
        </label>
        <label className={`${spaceMono400.className} flex flex-col`}>
          Name
          <input
            {...register("Name")}
            className="rounded-sm border border-black"
          />
        </label>
        <label className={`${spaceMono400.className} flex flex-col`}>
          Message
          <input
            {...register("Message")}
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
