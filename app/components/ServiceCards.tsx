import { PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

const services = [
  {
    title: "AI-First",
    features: ["Lead qualification & FAQ", "Smart escalation to human agents", "Simple call transfers"],
    price: 97.5,
    callType: "home services",
  },
  {
    title: "Human-First",
    features: ["Complex qualification & intake", "Scheduling & payments", "Intelligent call routing"],
    price: 292.5,
    callType: "law firm",
  },
]

export default function ServiceCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col border-gray-200 border-2 rounded-[0.5rem]">
              <CardHeader className="bg-orange-500 text-white rounded-tl-[0.5rem] rounded-tr-[0.5rem]">
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow mt-2">
                <h3 className="font-bold mb-2 text-orange-500">Key features:</h3>
                <ul className="list-disc list-inside mb-4">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className="font-bold text-orange-500">Starting at ${service.price.toFixed(2)}/mo</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Get started</Button>
                <Button variant="link" className="w-full text-orange-500 hover:text-orange-600">
                  Compare plans &gt;
                </Button>
                <Button
                  variant="ghost"
                  className="w-full flex items-center gap-2 text-orange-500 hover:text-orange-600"
                >
                  <PlayCircle size={16} />
                  Hear a sample {service.callType} call
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

