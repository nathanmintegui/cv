import { useForm } from "react-hook-form";

import { rubik800, spaceMono400 } from "~/styles/fonts";

export const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (d: any) => {
    console.log(d);
  };

  return (
    <div className="flex w-5/12 flex-col items-center">
      <h1
        className={`${rubik800.className} section-shadow w-2/12 text-center text-4xl`}
      >
        Contact
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-9/12 flex-col">
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
          className={`${spaceMono400.className} mt-5 w-16 rounded-sm bg-black text-white`}
        >
          Send
        </button>
      </form>
    </div>
  );
};
