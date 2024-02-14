import AuthLayout from "../components/AuthLayout/AuthLayout"
import { MdOutlineMail } from "react-icons/md"
import { useState } from "react"
import { LiaEyeSolid, LiaEyeSlash } from "react-icons/lia"
import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import useLogin from "../Hooks/useLogin"

const LoginPage = () => {
  const [isPassVisible, setIsPassVisible] = useState(false)

  const togglePassVisibility = () => {
    setIsPassVisible(!isPassVisible)
  }

  const schema = z.object({
    email: z.string().min(1, { message: "Required" }).email(),
    password: z.string().min(1, { message: "Required" }),
  })

  type FormData = z.infer<typeof schema>

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const { data, isError, isLoading, error, mutate: mutateLogin } = useLogin()

  const onSubmit = (data: FieldValues) => {
    if (data) {
      mutateLogin({
        email: data.email,
        password: data.password,
      })
    }
  }

  return (
    <AuthLayout type={"login"}>
      {isError && (
        <div className="alert alert-danger" role="alert">
          {error.response?.data}
        </div>
      )}

      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <div className="input-container">
            <input
              {...register("email")}
              className={errors.email ? "input-danger" : "input"}
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
          <label htmlFor="password">Password</label>
          <div className="input-container">
            <input
              className={errors.password ? "input-danger" : "input"}
              {...register("password")}
              autoComplete="off"
              type={isPassVisible ? "text" : "password"}
              id="password"
              placeholder="*********"
            />

            <div className="input-icon password" onClick={togglePassVisibility}>
              {isPassVisible ? <LiaEyeSolid /> : <LiaEyeSlash />}
            </div>
          </div>
          {errors.password && (
            <div className="input-error">{errors.password.message}</div>
          )}
        </div>

        <button
          className={`btn btn--rounded btn--large btn--center ${
            isLoading ? "btn--loading" : "btn--secondary"
          }`}
        >
          {isLoading == true ? (
            <>
              Signing in...{" "}
              <div
                className="spinner-border text-light spinner-border-sm"
                role="status"
              ></div>
            </>
          ) : (
            "Sign in"
          )}
        </button>

        <p className="align-self-center" style={{ marginBottom: "-1px" }}>
          or
        </p>

        <Link
          to="/registeration"
          type="button"
          className="btn btn--rounded btn--large btn--outlined btn--outlined-blue btn--center"
        >
          Create account
        </Link>
      </form>
    </AuthLayout>
  )
}

export default LoginPage
