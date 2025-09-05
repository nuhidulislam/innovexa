import { IoMdCheckmark } from "react-icons/io";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-bgthird w-full flex justify-center py-10 px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-dark">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-semibold">NAME</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary border-primary"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">PHONE</label>
              <input
                type="text"
                {...register("phone", { required: true })}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary border-primary"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">Phone is required</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-semibold">EMAIL</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary border-primary"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">
                COMPANY NAME
              </label>
              <input
                type="text"
                {...register("company", { required: true })}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary border-primary"
              />
              {errors.company && (
                <p className="text-red-500 text-sm">Company is required</p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">DUE DATE</label>
            <input
              type="text"
              {...register("duedate")}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary border-primary"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">MESSAGE</label>
            <textarea
              rows="5"
              {...register("message", { required: true })}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary border-primary"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">Message is required</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register("terms", { required: true })}
              className="w-4 h-4"
            />
            <label className="text-sm">
              I HAVE READ AND ACCEPTED TERMS AND PRIVACY
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">You must accept the terms</p>
          )}

          <button
            type="submit"
            className="w-full font-bold bg-primary hover:bg-dark hover:text-primary text-dark py-3 rounded-full hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            Submit Form <FaArrowRight />
          </button>
        </form>

        {/* Right Side - Text Content */}
        <div className="flex flex-col gap-2 justify-center space-y-4">
          <span className="bg-dark text-secondary text-xs font-semibold px-3 py-1 rounded-full w-fit">
            CONTACT US
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary">
            LET’S BUILD YOUR
          </h2>
          <h2 className="text-3xl md:text-5xl font-extrabold text-dark">
            NEXT MOVE TOGETHER
          </h2>
          <p className="text-dark text-base leading-relaxed">
            Got a challenge or an idea? We’re here to listen and craft solutions
            that actually work — no fluff, just results.
          </p>

          <ul className="space-y-2 text-dark text-base leading-loose">
            <li className="flex items-center gap-2">
              <span className="text-green-600 "><IoMdCheckmark /></span> Free Strategy Session
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600"><IoMdCheckmark /></span> Quick & Friendly
              Communication
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600"><IoMdCheckmark /></span> Always Ready to Assist
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
