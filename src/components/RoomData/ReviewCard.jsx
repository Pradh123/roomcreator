// import React from "react";
// import { useState } from "react";
// import { FaArrowCircleUp } from "react-icons/fa";
// const ReviewCard = () => {
//   const [input, setinput] = useState("");
//   const [review, setreview] = useState([" This product is verey very good"]);
//   const handleReview = () => {
//     console.log(review);
//     console.log(input);
//     setinput("");
//     setreview([...review, input]);
//   };
//   console.log(review);
//   return (
//     <div>
//       <div className=" mt-3  mx-10 border border-red-500 min-h-[60vh] bg-slate-50 relative">
//         <h1 className=" text-center font-bold"> Rate And Review </h1>
//         <div className="bg-white p-3 w-[90%] m-auto rounded-md border border-slate-300 ">
//           {review.map((text, i) => (
//             <div key={i}>
//               <span>{text}</span>
//             </div>
//           ))}
//         </div>

//         <section className=" w-full flex  justify-center ">
//           <div className=" w-[80%] rounded-3xl  shadow-xl  flex absolute bottom-3 bg-white justify-between items-center  p-2 ">
//             <input
//               type="text"
//               className=" w-[70%]   p-1 rounded-3xl outline-none  "
//               value={input}
//               onChange={(e) => {
//                 e.preventDefault();
//                 setinput(e.target.value);
//               }}
//             />
//             <FaArrowCircleUp
//               className=" text-[30px] bg-white  cursor-pointer "
//               onClick={handleReview}
//             />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;

// import { useState } from "react";
// import { FaSave } from "react-icons/fa"; // For the save icon

// function ReviewSection() {
//   const [review, setReview] = useState("");
//   const [savedReview, setSavedReview] = useState("");

//   const handleSave = () => {
//     setSavedReview(review); // Save the review text
//     setReview(""); // Clear the input field after saving
//   };

//   return (
//     <>
//       <div className=" w-full container-wrapper mx-auto p-4 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Write a Review</h2>

//         <textarea
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//           rows="4"
//           className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Write your review here..."
//         ></textarea>

//         <button
//           onClick={handleSave}
//           className="mt-3 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
//         >
//           <FaSave size={20} />
//         </button>

//         {savedReview && (
//           <div className="mt-4 p-4 bg-gray-100 rounded-md">
//             <h3 className="font-semibold text-lg">Your Review:</h3>
//             <p>{savedReview}</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default ReviewSection;
import { useState } from "react";
import { FaSave } from "react-icons/fa"; // For the save icon

function ReviewSection() {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([
    "This is a fantastic product! Highly recommended.",
  ]);

  const handleSave = () => {
    if (review.trim()) {
      setReviews([review, ...reviews]); // Add the new review at the start of the array
      setReview(""); // Clear the input field after saving
    }
  };

  return (
    <>
      <div className="w-full  container-wrapper mx-auto p-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-xl shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Make Overview
        </h2>

        {/* Reviews Listing */}
        <div className="space-y-4 mb-6 h-72  overflow-x-auto ">
          {reviews.map((reviewText, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-medium text-gray-800 ">
                Review {index + 1}:
              </h3>
              <p className="text-gray-600 mt-2 ">{reviewText}</p>
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Write a Review
          </h3>

          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="5"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4"
            placeholder="Type your review here..."
          ></textarea>

          <button
            onClick={handleSave}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-lg hover:bg-gradient-to-l transition ease-in-out duration-300"
          >
            <FaSave className="inline-block mr-2" size={20} />
            Save Review
          </button>
        </div>
      </div>
    </>
  );
}

export default ReviewSection;
