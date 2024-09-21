import { Container, Main } from "@app-components"
import AgeForm from "./age-form"
import AgeOutput from "./age-output"

export default function Home() {

  return (
    <Main className="bg-grey-light px-4 pt-[88px] sm:grid sm:place-items-center sm:py-0">
      <Container className="bg-white w-full max-w-[840px] min-h-[486px] flex flex-col gap-8 rounded-t-3xl rounded-bl-3xl rounded-br-[100px] px-6 py-12">
        <AgeForm />
        <AgeOutput />
      </Container>
    </Main>
  )
}