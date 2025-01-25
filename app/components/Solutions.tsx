import Image from "next/image"
const solutions = [
    {
        title: "Law Firms",
        image: "https://cdn.prod.website-files.com/5b15ca3d02dd414c89ecc3ed/649a4529d6a21967f5bd02ed_Legal-Law-Industry%201.avif",
    },
    {
        title: "health industry (clinic booking)",
        image: "https://www.techtic.com/_gatsby/image/3f5c097c186eaebd35c6cfcbd7c7e265/3012fe27395a294ae0f626e37bfeb927/Healthcare-Industry-Statistics-in-2021_inner.jpg?u=https%3A%2F%2Fbackend.techtic.com%2Fwp-content%2Fuploads%2F2020%2F11%2FHealthcare-Industry-Statistics-in-2021_inner.jpg&a=w%3D750%26h%3D417%26fm%3Djpg%26q%3D75&cd=2bddb2fbf0b73c65efeaa68c72ca7930"
    },
    {
        title: "Restaurant (Booking)",
        image: "https://www.touchbistro.com/wp-content/uploads/2022/10/restaurant-industry-statistics-thumbnail.jpg"
    }
]

export default function Solutions() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Solutions for Every Industry</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div key={index} className="bg-white border">
                            {/* Background Image using next/image */}
                            <div className="relative h-64 w-full">
                                <Image
                                    src={solution.image} // Adjust the image path or URL
                                    alt="Background Image"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>

                            {/* Content below the image */}
                            <div className="p-4">
                                <p className="text-lg text-center font-bold text-orange-500">{solution.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

