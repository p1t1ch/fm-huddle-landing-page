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
    <div>
      {/* <BgDesktop /> */}
      {/* <BgMobile /> */}
      <Seo title="Frontend Mentor: Huddle landing page" />
      <header>
        <Logo />
      </header>
      <main>
        <IllustrationMockups />
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
          connections with your users as you engage in genuine discussion.
        </p>
        <button>Register</button>
      </main>
      <footer>
        <Socials>
          <Social Icon={FaFacebookF} name="Facebook" link="https://www.facebook.com/" />
          <Social Icon={FaTwitter} name="Twitter" link="https://www.twitter.com/" />
          <Social Icon={FaInstagram} name="Instagram" link="https://www.instagram.com/" />
        </Socials>
      </footer>
    </div>
  )
}

export default IndexPage
