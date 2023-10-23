import { Counter } from './Counter'
import { Box } from '../../components/Box/Box'

export { Page }

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <Box></Box>
    </>
  )
}
