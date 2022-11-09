import { useEffect, useState } from 'react'

type Value = any

const getLocalStorageValue = (name: string) => {
  const stringValue = localStorage.getItem(name) as string
  let value: Value = {}

  try {
    value = JSON.parse(stringValue)
  } catch (error) {
    console.error(error)
  }

  return value
}

const setLocalStorageValue = (name: string, value: Value) => {
  try {
    localStorage.setItem(name, JSON.stringify(value))
  } catch (error) {
    console.error(error)
  }
}

export const useLocalStorage = <T extends Value>(
  name: string,
  defaultValue?: T,
) => {
  const [value, setValue] = useState<Value>(defaultValue)

  useEffect(() => {
    setValue(getLocalStorageValue(name) || defaultValue)
  }, [name])

  useEffect(() => {
    setLocalStorageValue(name, value)
  }, [name, value])

  return [value, setValue]
}
