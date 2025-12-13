// ContactForm.tsx
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormValues {
    name: string;
    email: string;
    message: string;
}

export const ContactForm = () => {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        try {
            const res = await fetch("https://formspree.io/f/xjknpjbd", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                setStatus("success");
                reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (


        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto flex flex-col gap-4">
            <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            {errors.name && <span className="text-red-400 text-sm">Name is required</span>}

            <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            {errors.email && <span className="text-red-400 text-sm">Email is required</span>}

            <textarea
                {...register("message", { required: true })}
                placeholder="Your Message"
                className="p-3 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none h-32"
            />
            {errors.message && <span className="text-red-400 text-sm">Message is required</span>}

            <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer bg-violet-500 hover:bg-violet-600 transition-colors duration-200 text-white font-semibold py-3 px-6 rounded-md mt-2"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
                <p className="text-green-400 font-semibold mt-2">Thanks! Your message has been sent.</p>
            )}
            {status === "error" && (
                <p className="text-red-400 font-semibold mt-2">Oops! Something went wrong.</p>
            )}
        </form>


    );
};
