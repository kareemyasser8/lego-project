import React, { FormEvent } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface Props {
  options: string[]
  idOfMenu: string
}

const FilterCheckBoxForm = ({ options, idOfMenu }: Props) => {

  const { register, getValues } = useForm()

  const handleValueChange = (data: FormEvent) => {
    const values = getValues();
    console.log(values);
  }

  return (
    <form>
      <div className="d-flex flex-column">
        <div className="collapse multi-collapse" id={idOfMenu}>
          <div className="mt-3">
            {options.map((option, index) => {
              return (
                <div
                  key={index}
                  className="d-flex align-items-center gap-1 mt-1"
                >
                  <input
                    {...register(`${option}`)}
                    type="checkbox"
                    className="custom-checkbox"
                    onChange={handleValueChange}
                  />
                  <label className="gray">{option}</label>
                </div>
              )
            })}
          </div>
        </div>
        <hr className="hr hr-blurry" />
      </div>
    </form>
  )
}

export default FilterCheckBoxForm
