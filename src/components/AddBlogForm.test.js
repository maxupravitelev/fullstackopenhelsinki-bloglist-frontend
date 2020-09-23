import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AddBlogForm from './AddBlogForm'

test('<AddBlogForm /> updates parent state and calls onSubmit', () => {
  const handleSubmit = jest.fn()

  const component = render(
    <AddBlogForm addBlog={handleSubmit} />
  )

  // const title = component.getByLabelText('title')

  const title = component.container.querySelector('#title')
  const author = component.container.querySelector('#author')
  const url = component.container.querySelector('#url')

  const form = component.container.querySelector('form')

  fireEvent.change(title, {
    target: { value: 'testing of forms' }
  })
  fireEvent.change(author, {
    target: { value: 'author' }
  })
  fireEvent.change(url, {
    target: { value: 'www.testing3000.nowhere' }
  })
  fireEvent.submit(form)

  expect(handleSubmit.mock.calls).toHaveLength(1)
  expect(handleSubmit.mock.calls[0][0]).toBe('testing of forms' )
  expect(handleSubmit.mock.calls[0][1]).toBe('author')
  expect(handleSubmit.mock.calls[0][2]).toBe('www.testing3000.nowhere')
})