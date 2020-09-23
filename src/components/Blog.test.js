import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'

import Blog from './Blog'

test('renders content with hidden details', () => {
  const blog = {
    title: 'React patterns',
    author: 'fsdfsdf',
    likes: 5
  }

  const component = render(
    <Blog blog={blog} />
  )

  //   component.debug()

  //   const li = component.container.querySelector('li')

  //   console.log(prettyDOM(li))

  expect(component.container).toHaveTextContent(
    'view'
  )
})

test('clicking view button opens blog', () => {
  const blog = {
    title: 'React patterns',
    author: 'fsdfsdf',
    likes: 5
  }

  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} handleViewClick={mockHandler}/>
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  console.log(mockHandler.mock.calls)

  expect(mockHandler.mock.calls).toHaveLength(1)

})

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