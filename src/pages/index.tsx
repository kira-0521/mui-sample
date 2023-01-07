import { NextPage } from 'next'
import { useCallback, useState } from 'react'

import { MyTypography, PrimaryButton } from '../components/atoms'

const Home: NextPage = () => {
  const [state, setState] = useState(false)
  const handleClick = useCallback(() => setState((s) => !s), [setState])
  return (
    <div>
      <PrimaryButton onClick={handleClick}>Children Desu</PrimaryButton>
      {state && <MyTypography variant="h1">Hello</MyTypography>}
    </div>
  )
}

export default Home
