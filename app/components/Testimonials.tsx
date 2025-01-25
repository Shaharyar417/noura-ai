import Image from "next/image"

const testimonials = [
  {
    name: "Jeremy Treister",
    company: "CMIT Solutions - Downtown Chicago",
    image: "https://cdn.prod.website-files.com/5b15ca3d02dd414c89ecc3ed/649a4be2c72d3464af8bbfc3_jeremy%20treister.avif",
    quote:
      "Smith.ai is our inbound sales team. Having a trained and personable voice has transformed our ability to answer the phone and convert callers to clients.",
  },
  {
    name: "Sara Kelley",
    company: "Sibus Law Group",
    image: "https://cdn.prod.website-files.com/5b15ca3d02dd414c89ecc3ed/675381ffd1565b32e78dcad0_60b57d87634a3a1c483a4a55_sara%20(1).avif",
    quote:
      "Answering, intake, scheduling, and payments ... the benefits have been enormous. We save 10-15 minutes of staff time with every call they answer.",
  },
  {
    name: "Ana Larson",
    company: "George Brazil Heating & Cooling",
    image: "https://cdn.prod.website-files.com/5b15ca3d02dd414c89ecc3ed/675896119bcc9d85e793402b_thumb_square_3e075cc6c372fdf705b9a0d748596c68.avif",
    quote:
      "Their agents are so prepared. Oftentimes our customers think they have spoken to us directly and not an answering service.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Noura.ai is trusted by 3,000+ businesses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

