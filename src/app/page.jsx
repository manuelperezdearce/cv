import Contact from "./components/Contact"
import Technologies from "./components/Technologies"
import Languages from "./components/Languages"
import Education from "./components/Education"
import Hobby from "./components/Hobby"
import Hero from "./components/Hero"
import Experiences from "./components/Experience/Experiences"

export default function Home() {
  return (
    <main className="bg-black min-h-[100vh] min-w-full flex justify-center py-10">
      <article className="grid grid-cols-[1fr_2fr]  max-w-[900px] [&_section]:p-11 [&_section]:flex [&_section]:flex-col [&_section]:gap-6 ">
        <section className="bg-slate-800 text-white [&>*]:flex [&>*]:flex-col [&>*]:gap-4">
          <Contact />
          <Technologies />
          <Languages />
          <Education />
          <Hobby />
        </ section>
        <section className="bg-white">
          <Hero />
          <Experiences />
        </section>
      </article>

    </main >
  )
}
