import { Button } from '@/components/ui/button';
import { ButtonWithIcon } from '@/components/ui/ButtonWithIcon';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <section className="grid gap-6 justify-items-start pb-6 md:pb-0 relative">
        <div className="relative aspect-square w-full lg:aspect-video border-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/homepic.jpg?updatedAt=1759764094296`}
            alt="Project screenshot"
            fill
            className="object-cover"
          />
        </div>
        <div className="grid gap-6 justify-items-start md:w-[68%] lg:w-[40%] md:absolute md:left-0 md:bottom-0 md:bg-background md:pe-24 lg:pe-12 md:pt-12 ">
          <h1 className="heading-h1">
            Hey, I'm Morgan Ero and I love turning ideas into reality
          </h1>
          <ButtonWithIcon href="#about">About Me</ButtonWithIcon>
        </div>
      </section>
      <section
        className="grid md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-start py-6 md:mt-18 lg:mt-30 lg:h-auto"
        id="about">
        <div className="relative aspect-square w-full md:h-full md:col-span-2 lg:col-span-3 border-1 border-brand-orange/50">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/headshot2.jpg?updatedAt=1759698913697`}
            alt="Project screenshot"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover md:object-[53%]"
          />
        </div>
        <div className="grid space-y-6 justify-items-start md:content-between md:col-span-3 md:px-12 lg:px-24">
          <Separator />
          <h2 className="heading-h1">About Me</h2>
          <p className="md:leading-8">
            I'm a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I'm based in Minneapolis, Minnesota, but I'm happy working
            remotely. When I'm not coding, you'll find me at the gym, learning
            anatomy, gaming, or watching some anime. I'd love you to check out
            my work.
          </p>
          <Button
            asChild
            variant="secondary">
            <Link href="/portfolio">Go to portfolio</Link>
          </Button>
          <Separator className="mt-6 md:mt-0" />
        </div>
      </section>
    </div>
  );
}
export default Home;
