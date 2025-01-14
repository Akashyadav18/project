import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight} from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-6 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl text-purple-400 pb-6">
            Easy Meet
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            EasyMeet helps you manage your time effectively. Create events, set
            your availability, and let others book time with you seamlessly.
          </p>
          <Link href={"/dashboard"}>
            <Button size="lg" className="text-lg mx-20px">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/poster3.png"
              alt="Scheduling illustration"
              layout="fill"
              objectFit="contain"
              className="h-40 w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
