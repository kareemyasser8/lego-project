import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { BsPerson } from "react-icons/bs"
import { LiaEyeSlash, LiaEyeSolid } from "react-icons/lia"
import { MdOutlineMail } from "react-icons/md"
import AuthLayout from "../components/AuthLayout/AuthLayout"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  fname: z
    .string()
    .min(1, { message: "Required" })
    .regex(/^[a-zA-Z]+$/, {
      message: `There are some characters in this name our system can’t handle
  `,
    }),
  lname: z
    .string()
    .min(1, { message: "Required" })
    .regex(/^[a-zA-Z]+$/, {
      message: `There are some characters in this name our system can’t handle
`,
    }),
  email: z.string().email(),
  password: z
    .string()
    .min(5, { message: "Password should be at least 5 characters" }),
})

type FormData = z.infer<typeof schema>

const RegisterationPage = () => {
  const [isPassVisible, setIsPassVisible] = useState(false)

  const togglePassVisibility = () => {
    setIsPassVisible(!isPassVisible)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <>
      <AuthLayout type={"registeration"}>
        <form action="" className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="firstName">first name</label>
            <div className="input-container">
              <input
                {...register("fname")}
                className={errors?.fname ? `input-danger` : `input`}
                autoComplete="off"
                type="text"
                id="firstName"
                placeholder="Write your first name"
              />
              <div className="input-icon">
                <BsPerson />
              </div>
            </div>
            {errors.fname && (
              <div className="input-error">{errors.fname.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="lastName">last name</label>
            <div className="input-container">
              <input
                className={errors?.lname ? `input-danger` : `input`}
                {...register("lname")}
                autoComplete="off"
                type="text"
                id="lastName"
                placeholder="Write your last name"
              />
              <div className="input-icon">
                <BsPerson />
              </div>
            </div>
            {errors.lname && (
              <div className="input-error">{errors.lname.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email">email</label>
            <div className="input-container">
              <input
                {...register("email")}
                className={errors?.email ? `input-danger` : `input`}
                autoComplete="off"
                type="text"
                id="email"
                placeholder="Enter your email"
              />
              <div className="input-icon">
                <MdOutlineMail />
              </div>
            </div>
            {errors.email && (
              <div className="input-error">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password">Your Password</label>
            <div className="input-container">
              <input
                {...register("password")}
                className={errors?.password ? `input-danger` : `input`}
                autoComplete="off"
                type={isPassVisible ? "text" : "password"}
                id="password"
                placeholder="*********"
              />
              <div
                className="input-icon password"
                onClick={togglePassVisibility}
              >
                {isPassVisible ? <LiaEyeSolid /> : <LiaEyeSlash />}
              </div>
            </div>
            {errors.password && (
              <div className="input-error">{errors.password.message}</div>
            )}
          </div>
          <button className="filledBlueBtn btn-submit">
            Yes! Create my account
          </button>
        </form>
      </AuthLayout>
    </>
  )
}

export default RegisterationPage
