import Image from "next/image";
import OurTeam from "../components/props/ourteam";


export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0">
              <span className="inline-block text-sm font-semibold text-[#2dc070] tracking-wider">
                ABOUT COMPANY
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-[#252B42] leading-tight">
                About Us
              </h1>
              <p className="max-w-lg text-lg text-[#737373]">
                We know how large objects will act, but things on a small scale just do not act that way.
              </p>
              <button className="bg-[#2dc070] text-white px-8 py-4 rounded-md hover:bg-[#25a05d] transition-colors">
                Get Quote Now
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/about-hero.png"
                alt="About Hero"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-[#2dc070] text-sm font-semibold">Problems trying</span>
              <h2 className="text-3xl font-bold text-[#252B42] mt-3">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              </h2>
            </div>
            <p className="text-lg text-[#737373]">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "15K", label: "Happy Customers" },
              { number: "150K", label: "Monthly Visitors" },
              { number: "15", label: "Countries Worldwide" },
              { number: "100+", label: "Top Partners" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#252B42] mb-2">{stat.number}</div>
                <div className="text-base md:text-lg text-[#737373]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/Video card.png"
                alt="Video Thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#2dc070] ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#252B42] mb-4">Meet Our Team</h2>
            <p className="text-lg text-[#737373]">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <OurTeam src="/team-1-user-1.jpg" />
            <OurTeam src="/team-1-user-2.jpg" />
            <OurTeam src="/media.png" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2A7CC7]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-8 md:p-16 text-white">
              <div className="max-w-xl">
                <span className="text-sm font-bold tracking-wider">WORK WITH US</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8">
                  Now Let&apos;s Grow Yours
                </h2>
                <p className="text-lg mb-12 opacity-90">
                  The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                </p>
                <button className="px-10 py-4 border-2 border-white rounded-md hover:bg-white hover:text-[#2A7CC7] transition-all duration-300">
                  Join Now
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/pro-cover-5.png"
                alt="CTA Image"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
