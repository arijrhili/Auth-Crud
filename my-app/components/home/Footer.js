import Image from "next/image";
import React from "react";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 grid lg:grid-cols-[1fr,2fr] gap-4">
        <div className="border border-gray-300 rounded-2xl p-6 lg:p-8">
          <div className="text-center flex flex-col items-center gap-4">
            <Image
              src="/img/logo.png"
              width={200}
              height={80}
              alt="dp"
            />

            <p className="max-w-[300px] text-gray-500 text-lg">
              Le site santé de référence avec chaque jour toute l'actualité médicale decryptée par des médecins en exercice et les conseils des meilleurs spécialistes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h1 className="text-xl font-bold mb-4 p-8 ">À PROPOS</h1>
          </div>
          <div>
            <ul className="list-none p-0">
              <li className="mb-2">
                <Link href="/donnees-personnelles" className="text-gray-500 hover:underline">Données personnelles et cookies</Link>
              </li>
              <li className="mb-2">
                <Link href="/qui-sommes-nous" className="text-gray-500 hover:underline">Qui sommes-nous</Link>
              </li>
              <li className="mb-2">
                <Link href="/conditions-utilisation" className="text-gray-500 hover:underline">Conditions d'utilisation</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-none p-0">
              <li className="mb-2">
                <Link href="/plan-du-site" className="text-gray-500 hover:underline">Plan du site</Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-gray-500 hover:underline">Mentions Légales</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
