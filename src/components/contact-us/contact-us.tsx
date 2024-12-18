"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageCircle, Loader2 } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

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
import FadeInDiv from "../fade-in-div";

// Define the schema for validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string(),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true); // Set loading state to true
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <FadeInDiv className="relative">
        <div
          className="absolute -inset-2 bg-cyan-500/10 rounded-3xl blur-2xl scroll-mt-[100px]"
          id="contact"
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
            >
              Contact Space Interiors
            </motion.h1>
            <p className="text-gray-400 mt-4">
              Let's design your cosmic living space
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 p-8 bg-gray-900/60 backdrop-blur-lg border border-cyan-500/20 rounded-3xl shadow-2xl"
            >
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-gray-300">
                      <User className="mr-2 text-cyan-400" size={20} />
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        {...field}
                        className="bg-gray-800 border-cyan-500/30 focus:ring-cyan-500/50"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-gray-300">
                      <Mail className="mr-2 text-cyan-400" size={20} />
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your email"
                        {...field}
                        className="bg-gray-800 border-cyan-500/30 focus:ring-cyan-500/50"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-gray-300">
                      <MessageCircle className="mr-2 text-cyan-400" size={20} />
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message"
                        rows={5}
                        {...field}
                        className="bg-gray-800 border-cyan-500/30 focus:ring-cyan-500/50"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? (
                  <Loader2 className="animate-spin mr-2" size={20} />
                ) : (
                  <Send
                    className="mr-2 group-hover:rotate-45 transition-transform"
                    size={20}
                  />
                )}
                {isLoading ? "Sending..." : "Submit Message"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </FadeInDiv>
    </>
  );
}
