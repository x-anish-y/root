"use client"
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";



const Wrapper = () => {

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [])

  const searchParams = useSearchParams();
  const router = useRouter()


  // const [link, setlink] = useState("")
  // const [linktext, setlinktext] = useState("")
  const [links, setlinks] = useState([{link: "", linktext: ""}])
  const [handle, sethandle] = useState(searchParams.get("handle"))
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")

  const handleChange = (index, link, linktext) => {
    setlinks((initialLinks)=>{
      return initialLinks.map((item, i) => {
        if (i === index){
          return {link, linktext}
        }
        else{
          return item
        }
      })
    })
  }

  const addlink = () => {
    setlinks(links.concat([{link: "", linktext: ""}]))
  }

  const submitLinks = async (links, handle, pic) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      "handle": handle,
      "pic": pic,
      "desc": desc
    });



    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/generate", requestOptions)
    const result = await r.json()
    if(result.success){
      toast.success(result.message)
      setlinks([0])
      sethandle("")
      setpic("")
      setdesc("")
      router.push(`/${handle}`)

    }
    else{
      toast.error(result.message)
    }
  }

  return (
    <div className='container mx-auto min-h-screen overflow-hidden'>
      <div className='flex flex-col '>
        <h1 className={`text-4xl md:text-5xl mt-4 font-bold mb-4 flex justify-center items-center transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Create your own Root</h1>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex order-2 md:order-1 gap-5 pt-5 flex-col justify-center items-center'>
            <h2 style={{transitionDelay: '100ms'}} className={`text-2xl font-semibold transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>STEP 1: Claim your Handle</h2>
            <input
              value={handle || ""}
              onChange={(e) => sethandle(e.target.value)}
              style={{transitionDelay: '200ms'}}
              className={`bg-gray-100 w-[70%] bg-opacity-50 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              type="text"
              placeholder='Choose a Handle' name="" id="" />
            <h2 style={{transitionDelay: '300ms'}} className={`text-2xl font-semibold transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>STEP 2: Add your Links</h2>
            {links && links.map((item, index) => {
              return <div key={index} style={{transitionDelay: `${400 + index * 100}ms`}} className={`flex justify-center items-center gap-5 w-[70%] transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <input 
              value={item.link || ""}
              onChange={(e) => handleChange(index, e.target.value, item.linktext)}
              className='bg-gray-100 w-[50%] md:w-full bg-opacity-50 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type="text" placeholder='Enter Link 🔗' name="" id="" />
              <input 
              value={item.linktext || ""}
              onChange={(e) => handleChange(index, item.link, e.target.value)}
              className='bg-gray-100 w-[50%] md:w-full bg-opacity-50 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type="text" placeholder='Enter Link Name' name="" id="" />
            </div>
            })}
            <button
            style={{transitionDelay: `${400 + links.length * 100}ms`}}
            onClick={() => addlink()}
            className={`inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-xl text-lg transform hover:scale-105 transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Add Links</button>
            <h2 style={{transitionDelay: `${500 + links.length * 100}ms`}} className={`text-2xl font-semibold transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>STEP 3: Add your Profile Picture</h2>
            <input
            style={{transitionDelay: `${600 + links.length * 100}ms`}}
            onChange={(e) => {
              const file = e.target.files[0]
              if (file) {
                const reader = new FileReader()
                reader.onloadend = () => {
                  setpic(reader.result)
                }
                reader.readAsDataURL(file)
              }
            }} className={`bg-gray-100 w-[70%] bg-opacity-50 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} type="file" accept="image/*" />
            <h2 style={{transitionDelay: `${700 + links.length * 100}ms`}} className={`text-2xl font-semibold transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>STEP 4: Add Description</h2>
            <input
              value={desc || ""}
              onChange={(e) => setdesc(e.target.value)}
              style={{transitionDelay: `${800 + links.length * 100}ms`}}
              className={`bg-gray-100 w-[70%] bg-opacity-50 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              type="text"
              placeholder='Enter Description' name="" id="" />
            <button
            disabled={handle == "" || links[0].linktext == "" || pic == ""}
            onClick={() => {submitLinks(links, handle, pic)}}
            style={{transitionDelay: `${900 + links.length * 100}ms`}}
            className={`diabled:bg-gray-500 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-xl text-lg mb-6 transform hover:scale-105 transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Create Your ROOT</button>
            <ToastContainer />
          </div>
          <video className={`order-1 md:order-2 justify-center items-center mix-blend-darken brightness-105 transition-all duration-1000 ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} autoPlay loop playsInline muted src="./rootHeroVideo.mp4"></video>
        </div>
      </div>
    </div>
  )
}



export default Wrapper