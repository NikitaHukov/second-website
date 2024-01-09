import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { number, z } from 'zod'
import type { FieldApi } from '@tanstack/react-form'

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em>{field.state.meta.touchedErrors}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}

export default function App() {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: ''
    },
    onSubmit: async ({ value }: any) => {
      // Do something with form data
      console.log(value)
    },
    // Add a validator to support Zod usage in Form and Field
    validatorAdapter: zodValidator
  })

  return (
    <div className=" p-80 text-center   ">
      <div className=" bg-slate-700 text-4xl text-center text-white w-[660px] mx-auto">
        Login
      </div>
      <div className="text-white bg-slate-700 text-start  text-2xl p-12 w-[660px] mx-auto flex justify-center ">
        <form.Provider>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              void form.handleSubmit()
            }}
          >
            <div>
              {/* A type-safe field component*/}
              <form.Field
                name="firstName"
                validators={{
                  onChange: z
                    .string()
                    .min(3, 'First name must be at least 3 characters'),
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: z.string().refine(
                    async (value) => {
                      await new Promise((resolve) => setTimeout(resolve, 1000))
                      return !value.includes('error')
                    },
                    {
                      message: "No 'error' allowed in first name"
                    }
                  )
                }}
                children={(field) => {
                  // Avoid hasty abstractions. Render props are great!
                  return (
                    <>
                      <label className="text-white" htmlFor={field.name}>
                        First Name:
                      </label>
                      <input
                        className="text-black flex"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </>
                  )
                }}
              />
            </div>
            <div>
              <form.Field
                name="lastName"
                children={(field) => (
                  <>
                    <label className="text-white" htmlFor={field.name}>
                      Last Name:
                    </label>
                    <input
                      className="text-black flex"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    <FieldInfo field={field} />
                  </>
                )}
              />
            </div>
            <div className="text-black">
              <form.Field
                name="age"
                validators={{
                  onChange: (val) =>
                    val < 13 ? 'You must be 13 to make an account' : undefined
                }}
              >
                {(field) => (
                  <>
                    <label className="text-white" htmlFor={field.name}>
                      Age:
                    </label>
                    <input
                      className="flex"
                      name={field.name}
                      value={field.state.value}
                      type="number"
                      onChange={(e) =>
                        field.handleChange(e.target.valueAsNumber)
                      }
                    />
                    {field.state.meta.errors ? (
                      <em role="alert">{field.state.meta.errors.join(', ')}</em>
                    ) : null}
                  </>
                )}
              </form.Field>
            </div>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <button
                  className="bg-sky-500 p-5 cursor-pointer hover:bg-sky-400 rounded-lg"
                  type="submit"
                  disabled={!canSubmit}
                >
                  {isSubmitting ? '...' : 'Submit'}
                </button>
              )}
            />
          </form>
        </form.Provider>
      </div>
    </div>
  )
}
