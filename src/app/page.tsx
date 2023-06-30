import Image from "next/image"
import Link from 'next/link';
import React from 'react';
import Layout from './layout';
import anime from 'animejs';

export default function Home() {
  return (
    <main>
      <div className="h-full">
        <div className="container pt-24 md:pt-36 mx-8 flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left mb-8 ">
              <span className="bg-clip-text text-transparent bg-white">
                Py
              </span>
              Bot
            </h1>
            <p className="leading-normal text-base md:text-2xl text-center md:text-left mb-8 ">
              Unlock the Power of Python with PyBot
            </p>
            <h6 className="text-white opacity-75 font-bold leading-tight text-center md:text-left mb-8 ">
              Powered by ChatGPT
            </h6>

            <div className="flex items-center justify-between pt-4">
              <Link href="/chat">
                <button
                  className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-blue-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded-full focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  type="button"
                >
                  Start
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full xl:w-3/5 p-12 overflow-hidden">
            <img
              src="macbook.png" // Reemplaza con la URL de la imagen que deseas mostrar
              alt="Descripción de la imagen"
              className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
