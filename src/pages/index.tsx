import React from 'react'
import Seo from '@/components/Seo'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import Social from '@/components/Social'
import Socials from '@/components/Socials'
import { ReactComponent as Logo } from '@/icons/logo.svg'
import { ReactComponent as IllustrationMockups } from '@/icons/illustration-mockups.svg'

function IndexPage() {
  return (
    <div className="grid place-items-center bg-mobile sm:bg-desktop bg-no-repeat sm:bg-cover">
      <Seo title="Frontend Mentor: Huddle landing page" />
      <div className="z-10 min-h-screen max-w-8xl p-10 lg:px-20 grid place-items-center">
        <header className="place-self-start mb-14 lg:mb-20">
          <Logo title="Huddle logo" className="w-30 sm:w-50" />
        </header>
        <main className="grid lg:grid-cols-7 gap-15 mb-16 lg:mb-7">
          <IllustrationMockups className="lg:col-span-4" />
          <section className="lg:col-span-3 text-center lg:text-left lg:mt-8">
            <h1 className="font-headings font-semibold text-2xl sm:text-h1 mb-4 lg:mb-6">
              Build The Community Your Fans Will Love
            </h1>
            <p className="text-base sm:text-lg mb-6">
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
              connections with your users as you engage in genuine discussion.
            </p>
            <button className="text-xs sm:text-lg w-50 h-10 sm:h-14 font-headings bg-neutral text-primary hover:bg-primary-light hover:text-neutral focus-visible:bg-primary-light focus-visible:text-neutral transition-colors shadow rounded-full">
              Register
            </button>
          </section>
        </main>
        <footer className="lg:place-self-end">
          <Socials>
            <Social Icon={FaFacebookF} name="Facebook" link="https://www.facebook.com/" />
            <Social Icon={FaTwitter} name="Twitter" link="https://www.twitter.com/" />
            <Social Icon={FaInstagram} name="Instagram" link="https://www.instagram.com/" />
          </Socials>
        </footer>
      </div>
    </div>
  )
}

export default IndexPage
