import Image from "next/image";
import Link from "next/link";

const Success = () => {
  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            height={1000}
            width={1000}
            className="h-10 w-fit"
          />
        </Link>
        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            alt="success"
            height={300}
            width={280}
          />

          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p>We will be in touch shortly</p>
        </section>

        <section className="request-details">
          <p>Requested appointment details:</p>
          <div className="flex items-center gap-3">
            <Image
              src="/assets/icons/logo-full.svg"
              alt="success"
              height={1000}
              width={1000}
              className="h-10 w-fit"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Success;
