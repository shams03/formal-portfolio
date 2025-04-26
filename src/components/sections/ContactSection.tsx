import React, { useRef, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    if (!formRef.current) return;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICEID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATEID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

    console.log("Form submitted:", data);

    // Show success
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();

    toast({
      title: "Message sent! Don't Forget To Check Your Spam Folder.",
      description:
        "Thank you for your message. I'll get back to you soon. A copy has been sent to you . Check Spam.",
    });

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000); // Reset success state after 3 seconds
  };

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="container-section">
        <h2 className="section-title font-playfair">Contact Me</h2>
        <p className="max-w-3xl mb-12 text-muted-foreground text-lg font-medium">
          Have a question or want to work together? Fill out the form below and
          I'll get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-4 font-playfair">
              Get In Touch
            </h3>
            <p className="mb-8 text-foreground">
              I'm currently available for freelance work, full-time positions,
              or just to chat about interesting projects. Send me a message and
              let's start a conversation!
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-lg font-playfair">Email</h4>
                <p className="text-primary font-medium">
                  shams03.work@gmail.com
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg font-playfair">Based in</h4>
                <p className="text-foreground">Mumbai, India</p>
              </div>
              <div>
                <h4 className="font-medium text-lg font-playfair">Follow Me</h4>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://twitter.com/shams_zero"
                    className="social-icon"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/shams03"
                    className="social-icon"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shams-zaman-1392522ab/"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Form {...form}>
              <form
                ref={formRef}
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          name="name"
                          placeholder="Your name"
                          {...field}
                          className="text-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          name="email"
                          placeholder="Your email"
                          type="email"
                          {...field}
                          className="text-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          name="message"
                          placeholder="How can I help you?"
                          rows={5}
                          {...field}
                          className="text-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Sending..."
                    : isSuccess
                    ? "Sent!"
                    : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
