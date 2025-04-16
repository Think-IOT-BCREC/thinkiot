import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
interface Core {
  imageUrl: string,
  name: string,
  designation: string,
  instagram: string,
  linkedin: string,
  twitter: string,
  github: string
}

export default function Core({ core }:{ core: Core }) {
  return (
    <div className="">
      {/* Core */}
      
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="my-10 h-56 w-72 rounded-lg bg-white/10 backdrop-blur-md p-10 shadow-lg shadow-white/10 border border-white/10"
        >
        <div className=" flex justify-center">
          <div className=" -mt-28 h-32 w-32 rounded-full   border-3 border-red-600 ">
            <img
              src={core.imageUrl}
              alt={core.name}
              // placeholderSrc="img/Teams/exe.png"
              // effect="blur"
              className=" rounded-full  object-cover "
            />
          </div>
        </div>
        <div className=" p-2 ">
          <h1 className="mb-1 text-center text-2xl font-bold">{core.name}</h1>
          <p className="text-center text-sm text-gray-800">
            {core.designation}
          </p>
        </div>
        <div className="flex justify-center gap-5 pt-5 text-xl text-gray-700   ">
          <a
            href={core.instagram}
            className="hover:text-red-600"
            target="_blank"
          >
            <BsInstagram />
          </a>
          <a
            href={core.linkedin}
            className="hover:text-red-600"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            href={core.twitter}
            className="hover:text-red-600"
            target="_blank"
          >
            <BsTwitter />
          </a>
          <a href={core.github} className="hover:text-red-600" target="_blank">
            {" "}
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
