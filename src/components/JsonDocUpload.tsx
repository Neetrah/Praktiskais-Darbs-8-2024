"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

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
    <section className="w-full h-screen flex items-center justify-center">
      <form
        action=""
        className="gap-2 flex w-full max-w-[40rem]"
        onSubmit={handleUpload}
      >
        <input
          type="text"
          name="json"
          id="json"
          value={json}
          placeholder="Ievadi json saturu šeit"
          className="bg-white rounded-lg h-12 px-2 w-full"
          onChange={(e) => setJson(e.target.value)}
        />

        <button type="submit" className="h-12 px-4 bg-red-500 rounded-lg">
          Ok
        </button>
      </form>
    </section>
  );
};

export default JsonDocUpload;
