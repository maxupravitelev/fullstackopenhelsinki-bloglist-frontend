import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'

import Blog from './Blog'

// exercise 5.13
test('renders content with hidden details', () => {
  const blog = {
    title: 'React patterns',
    author: 'fsdfsdf',
    likes: 5
  }

  const component = render(
    <Blog blog={blog} />
  )
  expect(component.container).toHaveTextContent(
    'view'
  )
})

// exercise 5.14
test('clicking view button opens blog', () => {
  const blog = {
    title: 'React patterns',
    author: 'some author',
    url: 'www.test.net',
    likes: 5
  }

  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} handleViewClick={mockHandler}/>
  )

  expect(component.container).not.toHaveTextContent(
    'www.test.net'
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  expect(component.container).toHaveTextContent(
    'hide'
  )

  expect(component.container).toHaveTextContent(
    'www.test.net'
  )

})

// Exercise 
test('click like twice', () => {

  const blog = {
    title: 'React patterns',
    author: 'fsdfsdf',
    likes: 5
  }

  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} addLike={mockHandler}/>
  )

  const viewButton = component.getByText('view')
  fireEvent.click(viewButton)

  const button = component.getByText('like')

  fireEvent.click(button)
  fireEvent.click(button)


  expect(mockHandler.mock.calls).toHaveLength(2)

})


// CI=true npm test