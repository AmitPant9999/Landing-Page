import Image from "next/image";
import React from "react";
import Border from "./Border";

interface Section2Props {} // No props are used in this example

const Section2: React.FC<Section2Props> = () => {
  return (
    <section className="py-12 mt-5 ml-14">
      <div className=" relative">
        <h3 className="text-blue-500">Lorem ipsum dolor sit amet</h3>
        <div className="flex flex-col md:flex-row items-start my-3 gap-4">
          <div className="flex flex-col gap-6">
            <h2>LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
              leo eleifend condimentum in vitae faucibus. Amet massa malesuada
              sit pretium. Donec pharetra erat lacus suspendisse ornare.
            </p>

            {[1, 2, 3].map((index) => ( // Render 3 testimonial blocks
              <div key={index} className="flex items-start gap-4">
                <Image src="/logo1.png" width={36} height={36} alt={`Logo ${index}`} /> {/* Added alt text */}
                <div className="flex flex-col">
                  <p className="font-bold">
                    Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                    egestas.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu
                    non viverra. Risus quam mattis senectus vitae interdum odio
                    ornare gravida vestibulum. Donec turpis nulla felis mauris eu
                    donec. Ipsum sit ut tortor.
                  </p>
                </div>
              </div>
            ))}

          </div>
          <div className="lg:w-1/2 mt-8 md:mt-0">
            <Image
              src="/img-6.png"
              width={900}
              height={900}
              className="lg:translate-x-40"
              alt="Image 6" // Added alt text
            />
          </div>
        </div>
        <div className="translate-y-12">

        <Border/>
        </div>
      </div>
    </section>
  );
};

export default Section2;