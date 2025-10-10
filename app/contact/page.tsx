import ContactForm from '@/components/form/ContactForm';
import { SocialLinks } from '@/components/navigation/SocialLinks';
import { Separator } from '@/components/ui/separator';
import { JSX } from 'react';

export default function ContactPage(): JSX.Element {
  return (
    <section>
      <Separator className="mb-8 lg:mb-12" />
      <article className="mb-6 grid gap-4 lg:grid-cols-2">
        <h1 className="heading-h1">Get in Touch</h1>
        <div className="grid gap-4 justify-items-start">
          <p>
            I'd love to hear about what your company is working on and explore
            how I could contribute. I'm currently seeking a new role where I can
            continue learning, growing, and adding value as part of a dedicated
            team. I take pride in being a hard-working and motivated person who
            approaches every task with curiosity, purpose, and attention to
            detail. My preference would be to find a position at a company based
            in Minneapolis, but I'm also open to other exciting opportunities.
            Please feel free to check out my online profiles below and get in
            touch using the form.
          </p>
          <SocialLinks
            size={20}
            className="justify-start"
          />
        </div>
      </article>
      <Separator className="mb-8 lg:my-12" />
      <ContactForm />
    </section>
  );
}
