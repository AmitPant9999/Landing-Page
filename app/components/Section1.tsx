import Image from 'next/image';
import Border from './Border';

interface Section1Props {} // No props are being used in this example

const Section1: React.FC<Section1Props> = () => {
  return (
    <section className="bg-white py-20 shadow-lg  relative ml-14">
      <div className="container mx-auto px-4">
        <h3 className="text-blue-400">Lorem Ipsum Dolor Sit</h3>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-left md:pr-16">
            <h1>LOREM IPSUM DOLOR SIT AMET</h1>
            <p className="text-gray-500 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
              donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
              nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
            </p>

            {/* Testimonials */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-center gap-5">
                <Image src="/img-3.png" width={150} height={150} alt="Testimonial 1" /> {/* Added alt text */}
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-5">
                <Image src="/img-4.png" width={150} height={150} alt="Testimonial 2" /> {/* Added alt text */}
                <p className="">
                  Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna
                  ullamcorper id dui cursus. Venenatis.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-5">
                <Image src="/img-5.png" width={150} height={150} alt="Testimonial 3" /> {/* Added alt text */}
                <p className="">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu
                  facilisi enim. Ut diam auctor tortor tincidunt.
                </p>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="mt-8 flex items-center gap-6">
              <a href="#" className="text-white px-2 py-1 bg-blue-600 hover:underline"> {/* Corrected hover class */}
                Loerum Ipsum →
              </a>
              <span className="text-gray-500">123456789</span>
            </div>
          </div>

          {/* Right Side: Image Carousel */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="">
              <Image
                width={800}
                height={700}
                src="/img-2.png"
                alt="Motorcycle 1" // Added alt text
              />
              {/* Add more Image components for other carousel images */}
            </div>
          </div>

        </div>
        <Border/>
       
      </div>
    </section>
  );
};

export default Section1;