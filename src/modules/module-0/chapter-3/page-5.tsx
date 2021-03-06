import React, {FC} from "react"

import PageContainer from "../../page"
import {Title, Paragraph, Img} from "../../page-components"
import img from "./page-5-1.png"

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les contenus clés travaillés durant le parcours Cap Bien-être</Title>
      <Paragraph>
        <Img src={img} mode="fullscreen" />
      </Paragraph>
    </PageContainer>
  )
}

export default Page
