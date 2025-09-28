"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_v8ful9q",
        "template_2c2l942",
        e.currentTarget,
        "o8xl7ZoNN2hlCSGEj"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          e.currentTarget?.reset();
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div
            className={`text-center mb-12 ${
              hasIntersected ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          </div>

          <form
            onSubmit={sendEmail}
            className={`space-y-6 ${
              hasIntersected
                ? "animate-fade-in-up animate-delay-200"
                : "opacity-0"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Input name="first_name" placeholder="First Name" required />
              <Input name="last_name" placeholder="Last Name" required />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input name="phone" placeholder="Contact Number" required />
              <Input type="email" name="email" placeholder="Email" required />
            </div>

            <Textarea
              name="message"
              placeholder="Send Your Message"
              rows={4}
              required
            />

            <div className="flex items-center justify-center gap-4 py-4">
              {[
                {
                  href: "https://www.facebook.com/share/1S9gSBemtQ/?mibextid=wwXIfr",
                  icon: Facebook,
                },
                {
                  href: "https://www.linkedin.com/in/charith-harsha-jayashan/",
                  icon: Linkedin,
                },
                { href: "https://github.com/Charithharsha08", icon: Github },
                { href: "https://x.com/charith_harsha8?s=21", icon: X },
                {
                  href: "https://discord.com/users/Charithharsha08",
                  icon: MessageCircle,
                },
              ].map(({ href, icon: Icon }, index) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  className={`text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 ${
                    hasIntersected ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={loading}
                className="group relative px-8 py-4 bg-primary hover:bg-primary/90 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25 gap-3 text-primary-foreground"
              >
                {loading ? "Sending..." : "Send"} <Send className="h-4 w-4" />
              </Button>
              {success && (
                <p className="mt-3 text-green-500 font-medium">
                  ✅ Message sent successfully!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
