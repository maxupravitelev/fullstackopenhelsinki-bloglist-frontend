import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AddBlogForm from './AddBlogForm'

test('<AddBlogForm /> updates parent state and calls onSubmit', () => {
  const handleSubmit = jest.fn()

  const component = render(
    <AddBlogForm addBlog={handleSubmit} />
  )

  const title = component.getByLabelText('title')

  const form = component.container.querySelector('form')

  fireEvent.change(title, {
    target: { value: 'testing of forms could be easier' }
  })
  fireEvent.submit(form)

  console.log(handleSubmit.mock)

  expect(handleSubmit.mock.calls).toHaveLength(1)
  expect(handleSubmit.mock.calls[0][0]).toBe('testing of forms could be easier' )
})