import Image from 'next/image';

const Section4: React.FC = () => {
  return (
    <div className="container mx-auto py-12 mt-12">
      <div className="text-center mb-8">
        <h1>LOREM IPSUM DOLOR SIT AMET</h1>
        <h1>CONSECTETUR. COMMODO LEO AMET.</h1>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 ">
        <div className="flex justify-center items-center hover:scale-105">
          <Image src="/hero.png" alt="Hero" width={100} height={100} />
        </div>
        <div className=" hover:scale-105 flex justify-center items-center">
          <Image src="/honda.png" alt="Honda" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center hover:scale-105">
          <Image src="/bajaj.png" alt="Bajaj" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center hover:scale-105">
          <Image src="/tvs.png" alt="TVS" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center hover:scale-105">
          <Image src="/re.png" alt="Royal Enfield" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center hover:scale-105">
          <Image src="/yamaha.png" alt="Yamaha" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center hover:scale-105">
          <Image src="/ktm.png" alt="KTM" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center hover:scale-105">
          <Image src="/ather.jpeg" alt="Ather" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center hover:scale-105">
          <Image src="/ola.png" alt="Ola Electric" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center hover:scale-105">
          <Image src="/revolt.png" alt="Revolt" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center hover:scale-105">
          <Image src="/uv.jpeg" alt="Ultraviolette" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center hover:scale-105">
          <Image src="/tork.jpeg" alt="Tork Motors" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Section4;