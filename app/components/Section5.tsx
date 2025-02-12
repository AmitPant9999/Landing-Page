import Image from "next/image";
import Link from "next/link";

const Section5: React.FC = () => {
  return (
    <section className="py-12 ml-14">
      <div className="container">
        <div className="flex flex-col gap-2 w-1/2">
          <h3 className="text-blue-500">Lorem ipsum dolor sit amet</h3>
          <h2>LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo
            eleifend condimentum in vitae faucibus. Amet massa malesuada sit
            pretium. Donec pharetra erat lacus suspendisse ornare.
          </p>
        </div>
        <div className="grid grid-cols-1 w-2/3 mx-auto lg:grid-cols-2 mt-14 gap-y-10 ">
          <div className="w-96 flex flex-col items-center border rounded-xl shadow-black shadow-sm hover:scale-105">
            <img src="/img-8.png" className="w-96 rounded-t-lg object-cover h-40" alt="Image 8" />
            <div className="w-96 translate-x-5">
              <h4 className="font-bold text-lg">Lorem ispum dolor sit amit consecteur</h4>
              <p className="text-sm w-80">
                Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
                faucibus cursus nisi. Nunc montes molestie a vitae vulputate.
                Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero
                iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim
                venenatis bibendum.
              </p>
            </div>
            <Link href={'/'} className="border-b-2 -translate-x-32 items-start border-blue-400">
              Learn More
            </Link>
          </div>

          <div className="w-96 flex flex-col items-center border rounded-lg shadow-black shadow-sm  hover:scale-105">
            <img src="/img-9.png" className="w-96 h-40 rounded-t-lg object-cover" alt="Image 9" />
            <div className="w-96 translate-x-5">
              <h4 className="font-bold text-lg">Lorem ispum dolor sit amit consecteur</h4>
              <p className="text-sm w-80">
                Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
                faucibus cursus nisi. Nunc montes molestie a vitae vulputate.
                Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero
                iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim
                venenatis bibendum.
              </p>
            </div>
            <Link href={'/'} className="border-b-2 -translate-x-32 items-start border-blue-400">
              Learn More
            </Link>
          </div>
          <div className="w-96 flex flex-col items-center border rounded-lg shadow-black shadow-sm hover:scale-105">
            <img src="/img-10.png" className="w-96 h-40 rounded-t-lg object-cover" alt="Image 10" />
            <div className="w-96 translate-x-5">
              <h4 className="font-bold text-lg">Lorem ispum dolor sit amit consecteur</h4>
              <p className="text-sm w-80">
                Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
                faucibus cursus nisi. Nunc montes molestie a vitae vulputate.
                Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero
                iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim
                venenatis bibendum.
              </p>
            </div>
            <Link href={'/'} className="border-b-2 -translate-x-32 items-start border-blue-400">
              Learn More
            </Link>
          </div>
          <div className="w-96 flex flex-col items-center border rounded-lg shadow-black shadow-sm hover:scale-105">
            <img src="/img-11.png" className="w-96 h-40 rounded-t-lg object-cover" alt="Image 11" />
            <div className="w-96 translate-x-5">
              <h4 className="font-bold text-lg">Lorem ispum dolor sit amit consecteur</h4>
              <p className="text-sm w-80">
                Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
                faucibus cursus nisi. Nunc montes molestie a vitae vulputate.
                Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero
                iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim
                venenatis bibendum.
              </p>
            </div>
            <Link href={'/'} className="border-b-2 -translate-x-32 items-start border-blue-400">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;