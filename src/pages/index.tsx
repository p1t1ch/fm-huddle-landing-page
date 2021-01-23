import React from 'react'
import Seo from '@/components/Seo'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import Social from '@/components/Social'
import Socials from '@/components/Socials'
import { ReactComponent as Logo } from '@/icons/logo.svg'
import { ReactComponent as IllustrationMockups } from '@/icons/illustration-mockups.svg'
import { ReactComponent as BgDesktop } from '@/icons/bg-desktop.svg'
import { ReactComponent as BgMobile } from '@/icons/bg-mobile.svg'

function IndexPage() {
  return (
    <div className="grid place-items-center py-10 px-20">
      <div className="min-h-screen max-w-7xl grid place-items-center">
        {/* <BgDesktop /> */}
        {/* <BgMobile /> */}
        <Seo title="Frontend Mentor: Huddle landing page" />
        <header className="place-self-start">
          <Logo />
        </header>
        <main className="grid grid-cols-2 gap-x-15">
          <IllustrationMockups className="row-span-3" />
          <section>
            <h1 className="font-headings font-semibold text-h1 mb-6">Build The Community Your Fans Will Love</h1>
            <p className="mb-6">
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
              connections with your users as you engage in genuine discussion.
            </p>
            <button className="w-50 h-14 font-headings bg-neutral text-primary hover:bg-primary-light hover:text-neutral transition-colors shadow rounded-full">
              Register
            </button>
          </section>
        </main>
        <footer className="place-self-end">
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
