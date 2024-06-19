"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

const JsonDocUpload = () => {
  const router = useRouter();

  const [json, setJson] = useState("");

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = JSON.parse(json);
    console.log(data)

    await axios
      .post("/api/business", { data })
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="w-full h-screen flex items-center justify-center relative bg-black">
      <Image width={800} height={800} alt="background" src="/bg-picture.jpg" className="absolute w-full h-screen opacity-60"/>
      <form
        className="gap-2 flex w-full max-w-[35rem] z-10"
        onSubmit={handleUpload}
      >
        <input
          type="text"
          name="json"
          id="json"
          value={json}
          autoComplete="off"
          placeholder="Ievadi json saturu šeit"
          className="bg-white rounded-lg h-12 px-2 w-full placeholder-gray-400"
          onChange={(e) => setJson(e.target.value)}
        />

        <button type="submit" className="h-12 px-12 bg-[#C22A36] rounded-lg text-white font-bold">
          OK
        </button>
      </form>
    </section>
  );
};

export default JsonDocUpload;
