import ContactForm from '@/components/form/ContactForm';
import { SocialLinks } from '@/components/navigation/SocialLinks';
import { JSX } from 'react';

export default function ContactPage(): JSX.Element {
  return (
    <section>
      <article className="mb-12 flex flex-col gap-4">
        <h1 className="heading-h2">Get in Touch</h1>
        <p>
          I'd love to hear about what your company is working on and explore how
          I could contribute. I'm currently seeking a new role where I can
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
      </article>
      <ContactForm />
    </section>
  );
}
