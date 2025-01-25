import Image from "next/image";

export default function Hero() {
  // const platforms = [
  //   {
  //     name: "Cluch",
  //     image: "https://cdn.prod.website-files.com/5b15ca3d02dd414c89ecc3ed/675373ff1b120ceabe9226a1_Frame%204200.svg",
  //   },
  //   {
  //     name: "CROWD",
  //     image: "https://cdn.prod.website-files.com/5b15ca3d02dd414c89ecc3ed/67536f93de2887bd56e3e0c0_g2%20crowd%20svg.svg"
  //   },
  //   {
  //     name: "Capterra",
  //     image: ""
  //   }
  // ]
  return (
    <section className="relative bg-gray-900 text-white py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.prod.website-files.com/5b15ca3d02dd414c89ecc3ed/67522b7a524d0ab014bbe4a5_bgfile%20x0.5.avif" // Replace with the actual image path
          alt="User Agent"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="opacity-50"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-end">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-right">
            Never miss another customer
          </h1>
          <p className="text-xl mb-8 text-right">
            The #1 rated call answering service with 99.7% accuracy, powered by AI and human receptionists
          </p>
          <div className="flex justify-end flex-wrap gap-4 mb-8">
            {["Clutch", "G2CROWD", "Capterra", "Trustpilot"].map((platform) => (
              <div key={platform} className="flex items-center">
                <Image src={`/placeholder.svg?height=24&width=24`} alt={platform} width={24} height={24} />
                <span className="ml-2">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
