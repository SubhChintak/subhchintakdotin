// import BlurFade from "@/components/magicui/blur-fade";
// import Image from "next/image";
// import Link from "next/link";

// const works = [
//   {
//     background: "bg-gray-200",
//     imageUrl: "/images/curexpertindia.png",
//     title: "CureXpert India",
//     link: "https://www.curexpertindia.com/",
//   },
//   {
//     background: "bg-gray-200",
//     imageUrl: "/images/feminaflow.png",
//     title: "Femina Flow",
//     link: "https://feminaflow.vercel.app/",
//   },
//   {
//     background: "bg-gray-200",
//     imageUrl: "/images/yourtutor.png",
//     title: "Your Tutor",
//     link: "https://yourtutor.vercel.app/",
//   },
//   {
//     background: "bg-gray-200",
//     imageUrl: "/images/business.webp",
//     title: "Flight 9",
//     link: "https://www.flight9.art",
//   },


// ];

// export function BlurFadeDemo() {
//   return (
//     <section id="photos">
//       <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
//         {works.map(({ imageUrl, title, link }, idx) => (
//           <BlurFade
//             key={title}
//             delay={0.25 + idx * 0.05}
//             inView
//             className={`rounded-lg ${works[idx].background} p-4`}
//           >
//             <Link href={link} target="_blank" rel="noreferrer">
//               <Image
//                 height={10000}
//                 width={10000}
//                 className="
//                 h-5/6 w-full object-cover rounded-lg"
        
              
       
//                 src={imageUrl}
//                 alt={`Random stock image ${idx + 1}`}
//               />
//               <h3 className="text-lg font-semibold p-4">{title}</h3>
//             </Link>
//           </BlurFade>
//         ))}
//       </div>
//     </section>
//   );
// }
