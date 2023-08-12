'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

type Props = {};

export default function RoleSection({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const gradientOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.8, 1], [0, 0.5, 0.5, 0]);

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0.1, 0.4], [-60, 0]);
  return (
    <div ref={ref} className="mx-auto mt-40 flex max-w-5xl justify-center ">
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(at_bottom_right,_#444_0%,_transparent_60%)]"
      />
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(at_top_left,_#444_0%,_transparent_30%)]"
      />
      <motion.div
        style={{ opacity, x }}
        className="relative z-0 flex min-h-[80vh] max-w-xl flex-col gap-8 text-gray-400"
      >
        <h2 className="text-2xl font-bold text-gray-100">How I build it:</h2>
        <p className="text-base leading-7">
          The Email Response Generator is a web application built with React with Nextjs, Vercel Ai powered by OpenAI
          API, TailwindCSS and Shadcn/ui. The app is a small app I built to test out the OpenAI API, and to see how I
          could use it in a real world application. The app is a simple app that takes in a prompt, and generates a
          response based on the prompt.
        </p>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-200">The app in a nut shell</h3>
          <p className="leading-7">
            The app contains a simple form, where you can input an email, a mood, the email type (profesional or
            personal) and some extra context. Based On the input, the app will send a request to the next server, which
            will then send a request to the OpenAI API. The API will then generate a response based on the prompt, and
            send it back to the server, which will then send it back to the client. The client will then display the
            response to the user.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-200"> The Promt </h3>
          <p className="leading-7">
            The prompt is the input the app sends to the API. The prompt is a string that contains the email, the mood,
            the email type and the context. The GPT model then returns a response based on the promt. Here is the prompt
            I used for the demo:
          </p>
          <div className="rounded-md bg-gray-300 p-6">
            <p className=" text-gray-950 ">
              Write a response to the following email in $&#123;language&#125;. Please ensure that the response is
              written in the same language as the email, unless otherwise specified. The tone of the response should be
              $&#123;mood&#125;. This is a(n) $&#123;emailType&#125;. Your name is $&#123;name&#125;. Please use the
              following additional context to inform your response: $&#123;context&#125; Email provided:
              &apos;$&#123;message&#125;&apos;
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-200">Learn in depth how to do it</h3>
          <p>
            If you want to learn more about how I built this app, you can check out the article I wrote about it. The
            article goes into more detail about how I built a the same app using express and nodejs instead of Nextjs.
            You can find the article here:
          </p>
          <a
            className="underline"
            href="https://ai.plainenglish.io/how-to-make-an-email-response-generator-using-openais-gpt-3-with-react-and-express-js-c747643f80c8"
          >
            How to Make an Email Response Generator Using OpenAi&apos;s GPT-3 with React and Express.js
          </a>
        </div>
      </motion.div>
    </div>
  );
}
