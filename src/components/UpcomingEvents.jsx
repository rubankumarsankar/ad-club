import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


const events = [
  {
    date: "27",
    month: "JAN",
    year: "24",
    day: "SUN",
    title: "Webinar On Resetting Advertiser And Advertising Expectations",
    tag: "Open Series",
  },
  {
    date: "01",
    month: "FEB",
    year: "24",
    day: "TUE",
    title: "8th AdClub T10 Tennis Ball Cricket Tournament 2023",
    tag: "Sports",
    // highlight: true,
  },
  {
    date: "15",
    month: "MAR",
    year: "24",
    day: "FRI",
    title: "Workshop On How To Create A Cool Brand Name",
    tag: "Workshop",
  },
  {
    date: "27",
    month: "JAN",
    year: "24",
    day: "SUN",
    title: "TOI And Adclub Madras Presents An Exclusive Brand Quiz",
    tag: "Quiz",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="bg-black text-white py-12 px-4">
      <h2 className="text-center text-yellow-400 font-asgard font-bold text-sm uppercase mb-8">
        Upcoming Events
      </h2>

      <div className="max-w-5xl mx-auto space-y-6">
        {events.map((event, index) => (
          <div key={index} className="relative group">
            <div className="flex items-center justify-between p-4 rounded-md transition-all duration-300 group-hover:shadow-lg">
              {/* Date Box */}
              <div
                className={`
                  w-20 h-20 flex flex-col rounded items-center justify-center mr-4 
                  font-bold text-xs 
                  transition-all duration-300
                  ${
                    event.highlight
                      ? "bg-yellow-400 text-black"
                      : "bg-white text-black group-hover:bg-yellow-400"
                  }
                `}
              >
                <span className="uppercase px-1 ">{event.day}</span>
                <span className="border-t w-10 py-1 border-black"></span>
                <span className="text-xl font-black leading-none">{event.date}</span>
                <span className="text-[10px] font-bold uppercase">
                  {event.month} {event.year}
                </span>
              </div>

              {/* Title */}
              <div className="flex-1 px-4">
                <p className="text-xl font-semibold font-glancyr mb-1">{event.title}</p>
              </div>

              {/* Tag */}
              <div className="px-4">
                <span className="text-[10px] uppercase font-glancyr border border-white px-2 py-1 rounded-full">
                  {event.tag}
                </span>
              </div>

              {/* Arrow / View Details Button */}
              <div className="ml-4">
                <div className="relative w-10 h-10 rounded-full bg-yellow-400 overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:w-32">
                  <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                    <ArrowRight className="text-black w-4 h-4" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-black text-[10px] font-bold uppercase tracking-wide whitespace-nowrap">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Dashed Line */}
            {/* <div className="border-t border-dashed border-blue-400 mt-3"></div> */}
          </div>
        ))}

        {/* View All Events Button */}
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-flex font-asgard items-center"
          >
            <span className="px-6 py-3  bg-yellow-400 text-black uppercase rounded-full font-bold hover:bg-yellow-300 transition-all duration-300">
              View All Events
            </span>
            <span className="px-4 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="h-5 w-5" />
            </span>
          </motion.button>
        </div>

        
      </div>
    </section>
  );
}
