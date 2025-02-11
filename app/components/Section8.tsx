import Image from 'next/image'; // Import the Next.js Image component

const Section8 = () => {
  return (
    <section className='py-12 bg-slate-100 '>
       <div className='flex flex-col md:flex-row items-center md:items-start '>

        <div className='w-1/2'>

       <div className="flex flex-col gap-2 ml-14">
          <h3 className="text-blue-500">Lorem ipsum dolor sit amet</h3>

          <h2>LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo
            eleifend condimentum in vitae faucibus. Amet massa malesuada sit
            pretium. Donec pharetra erat lacus suspendisse ornare.
          </p>
        </div>
        <div className='mt-10 flex gap-6 translate-x-12 '>
          <Image src={"/googleplay.png"} width={100} height={100} alt='' />
          <Image src={'/app store.png'} width={100} height={100} alt=''/>
        </div>
        </div>
        <Image src={"/img-12.png"} width={500} height={450} alt='' className='translate-y-12'/>
       </div>
    </section>
    
  );
};

export default Section8;