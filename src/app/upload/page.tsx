import JsonDocUpload from "@/components/JsonDocUpload";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <section className="w-full h-full">
      <JsonDocUpload />
    </section>
  );
}
