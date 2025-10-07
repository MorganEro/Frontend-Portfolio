'use client';

import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  website: z.string().optional(),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    mode: 'onTouched', // or 'onBlur' or 'onChange'
    defaultValues: {
      name: '',
      email: '',
      message: '',
      website: '',
    },
  });

  async function onSubmit(data: ContactFormData) {
    // Honeypot check
    if (data.website) return;

    setIsSubmitting(true);
    try {
      const token = await grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: 'submit' }
      );

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, token }),
      });

      if (!res.ok) throw new Error('Failed to send message');

      toast.success('✅ Message sent successfully!', {
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      form.reset();
    } catch (err) {
      console.error(err);
      toast.error('❌ Error sending message', {
        description: 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <h2 className="heading-h2 mb-6">Contact Me</h2>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-lg space-y-10 mb-12">
        {/* Honeypot field (hidden) */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...form.register('website')}
          className="hidden"
        />

        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Name"
                  {...field}
                  className={cn(
                    !form.formState.errors.name && form.getValues('name')
                      ? 'border-green-500/60 border-1'
                      : ''
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  {...field}
                  className={cn(
                    !form.formState.errors.email && form.getValues('email')
                      ? 'border-green-500/60 border-1'
                      : ''
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Your message..."
                  {...field}
                  className={cn(
                    !form.formState.errors.message && form.getValues('message')
                      ? 'border-green-500/60 border-1'
                      : ''
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
