import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export const metadata = {
  title: "Your Own Root",
  description: "Root is a simple and intuitive platform that lets you create your own personalized space on the web by claiming a unique handle, adding all your important links, and showcasing your profile in one place. It’s built to help you share your online presence effortlessly through a single, clean link."
,
};

export default async function Page({ params }) {
    const handle = (await params).handle

    const client = await clientPromise;
    const db = client.db("root")
    const collection = db.collection("links")

    const item = await collection.findOne({handle})
    if(!item){
        return notFound()
    }


    return (
  <div className="container mx-auto mt-4 fade-in-up">
    <img className="w-36 h-36 object-cover mx-auto rounded-full" src={item.pic} alt="" />
    <h1 className="text-center font-semibold flex pt-1 hover:text-green-700 transition-all justify-center text-3xl">@{handle}</h1>
    <h1 className="text-center flex justify-center pt-2 text-sm text-slate-400">{item.desc}</h1>

    <div className="grid sm:grid-cols-1 mt-5 md:grid-cols-2 mx-auto w-[70%] gap-6">
      {item.links.map((item, index) => (
        <Link
          target="._blank"
          href={item.link}
          key={index}
          className="p-5 hover:scale-105 hover:transition-all hover:bg-green-400/10 bg-white/10 rounded-xl backdrop-blur-lg shadow-lg ring-1 ring-black/5"
        >
          <h3 className="font-semibold mb-2">{item.linktext}</h3>
          <p className="text-gray-600 w-full h-5 overflow-x-auto text-sm">{item.link}</p>
        </Link>
      ))}
    </div>
  </div>
);

}
