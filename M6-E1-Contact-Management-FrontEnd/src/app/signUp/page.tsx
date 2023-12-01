import { FormSignUp } from "@/app/signup/components/FormSignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <FormSignUp/>
        <ToastContainer/>
      </section>
    </main>
  )
}
