// 'use client'

// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import { FaExternalLinkAlt } from 'react-icons/fa'

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-[125px] pb-12 sm:pb-16 md:pb-24">
//       {/* Background Video Effect */}
//       <div className="absolute inset-0">
//         <video
//           className="w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           onError={(e) => {
//             console.error('Video failed to load:', e);
//             const videoElement = e.currentTarget;
//             videoElement.style.display = 'none';
//           }}
//         >
//           <source src="/main.mp4" type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-white text-center lg:text-left"
//           >
//             <div className="mb-4 sm:mb-6">
//               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#dc2626] font-semibold mb-2">Welcome to the Future of Education</p>
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
//                 Where Intelligence Meets Imagination
//               </h1>
//             </div>
//             <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-3 sm:mb-4">
//               GI-SMART – The Global Institute for Strategic Management & Advanced Research Technologies
//             </p>
//             <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed">
//               In an age defined by artificial intelligence, data systems, and digital transformation, GI-SMART is more than an academic institution — it's a global innovation ecosystem. We are cultivating a new generation of thinkers, designers, and strategists who will lead the industries of the 21st century.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
//               <motion.button
//                 onClick={() => {
//                   const element = document.getElementById('explore-programs')
//                   if (element) {
//                     element.scrollIntoView({ behavior: 'smooth', block: 'start' })
//                   }
//                 }}
//                 whileHover={{ scale: 1.05, y: -3 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-[#dc2626] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg flex items-center justify-center gap-2 hover:bg-[#b91c1c] transition-all duration-300"
//               >
//                 EXPLORE CURRICULUM
//                 <FaExternalLinkAlt />
//               </motion.button>
//             </div>

//             <p className="text-white/80 text-xs sm:text-sm">
//               Round 1 Deadline: 16th Feb 2026
//             </p>
//           </motion.div>

//           {/* Right Content - Video/Screen */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative mt-8 lg:mt-0"
//           >
//             <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 border border-white/20">
//               <div className="aspect-video bg-gray-900 rounded relative overflow-hidden">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center text-white p-4 sm:p-6 md:p-8">
//                     <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#dc2626] mb-2 sm:mb-4">
//                       Letter to my 'Classmates'
//                     </h2>
//                     <p className="text-xs sm:text-sm md:text-base text-white/80">
//                       A celebration of what is to come and who will be with us in each of those moments.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/paris.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Center Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full text-center text-white flex flex-col items-center"
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">
            Study. Innovate. Lead.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/90 mb-8">
            AI-driven education and global collaboration from the heart of Paris.
          </p>

          {/* CTA (RED like Apply Now) */}
          <motion.button
            onClick={() => {
              const element = document.getElementById('explore-programs')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }
            }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#dc2626] hover:bg-[#b91c1c] px-8 py-3 text-white font-semibold rounded-md transition"
          >
            Apply Now
          </motion.button>
        </motion.div>

      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
      </div>

    </section>
  )
}

export default Hero