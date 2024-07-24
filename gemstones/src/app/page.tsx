import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        {/* reusable component that works as a 'container' for uniform design */}
        <MaxWidthWrapper>
          <div>hello</div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
