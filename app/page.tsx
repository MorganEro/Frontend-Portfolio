import { Button } from '@/components/ui/button';
import { ButtonWithIcon } from '@/components/ui/ButtonWithIcon';
import Image from 'next/image';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <section className="grid gap-6 justify-items-start border-b border-brand-lightgrey pb-6">
        <div className="relative aspect-square w-full border-1 border-brand-orange/50">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/homepic.jpg?updatedAt=1759764094296`}
            alt="Project screenshot"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="heading-h2">
          Hey, I'm Morgan Ero and I love turning ideas into reality
        </h1>
        <ButtonWithIcon href="#about">About Me</ButtonWithIcon>
        <div className="relative aspect-square w-full border-1 border-brand-orange/50">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/headshot2.jpg?updatedAt=1759698913697`}
            alt="Project screenshot"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section
        className="grid gap-6 justify-items-start py-6 border-b border-brand-lightgrey"
        id="about">
        <h2 className="heading-h2">About Me</h2>
        <p>
          I'm a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I'm based in Minneapolis, Minnesota, but I'm happy working remotely.
          When I'm not coding, you'll find me at the gym, learning anatomy,
          gaming, or watching some anime. I'd love you to check out my work.
        </p>
        <Button
          asChild
          variant="secondary">
          <Link href="/portfolio">Go to portfolio</Link>
        </Button>
      </section>
    </div>
  );
}
export default Home;
