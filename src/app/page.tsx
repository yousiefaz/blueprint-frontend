import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Clients } from "@/constants/clients";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="overflow-x-hidden lg:pt-24 antialiased flex items-center justify-center ">
      <div className="relative container">
        <Image
          src={"/bg.jpg"}
          width={1920}
          height={1080}
          alt="background"
          className="absolute -z-50 w-full h-full -top-20 left-0 opacity-10"
        />
        {/* Home Section */}
        <section
          id="Home"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 -right-20 md:bottom-44 " />
          <div className="flex flex-col items-center text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="inline-flex items-center gap-1 capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all duration-200">
                new features are now available
                <ArrowRightCircle className="w-4 h-4 text-sky-400" />
              </p>
              <Heading title="All Your Customers, One View" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Get a complete view of your customers and business at a glance.
                Track leads, sales, and interactions in one place with real-time
                analytics to make smarter decisions and drive growth.
              </p>
              <div className="flex items-center gap-4">
                <Button>
                  Get Started
                  <MoveRight className="w-4 h-4" />
                </Button>
                <Link href={""}>
                  <Button variant="outline">View Pricing</Button>
                </Link>
              </div>
            </div>
            <Image
              src={"/hero.png"}
              width={670}
              height={370}
              alt="banner"
              className="mx-auto shadow-xl"
            />
          </div>
        </section>

        {/* Clients Section */}
        <section
          id="Clients"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {Clients.map((client, index) => (
            <Image
              key={index}
              src={client.imageUrl}
              width={120}
              height={80}
              alt={client.alt}
              className="w-20 md:w-full mx-auto"
            />
          ))}
        </section>
        {/* Features Section */}
        {/* Pricing Section */}
        {/* Testimonials Section */}
        {/* Contact Section */}
        {/* Footer Section */}
      </div>
    </main>
  );
};

export default Home;
