import Image from "next/image";

export default function ProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="https://media.tenor.com/exRZ3es-yb8AAAAd/maxwell-maxwell-cat.gif"
        width={200}
        height={200}
        alt="No Picture"
        priority={true}
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      ></Image>
    </section>
  );
}
