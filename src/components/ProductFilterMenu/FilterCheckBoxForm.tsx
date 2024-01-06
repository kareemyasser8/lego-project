import React, { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import useFilterStore from "../../state-management/useFilterStore"

interface Props {
  options: string[]
  idOfMenu: string
}

const FilterCheckBoxForm = ({ options, idOfMenu }: Props) => {
  const { register, getValues, setValue, reset, trigger } = useForm()
  const { addFilter, removeFilter, filterToBeRemoved: removedFilter, filters, changed } =
    useFilterStore()

  useEffect(() => {
    if (removedFilter !== "all") {
      if (getValues(removedFilter) == true) {
        setValue(removedFilter, false)
      }
    } else {
      Object.keys(getValues()).forEach((key) => {
        setValue(key, false)
      })
    }
  }, [removedFilter, changed])

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    if (checked) addFilter(name)
    else removeFilter(name)
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
