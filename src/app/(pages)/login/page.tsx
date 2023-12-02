import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import LoginForm from './LoginForm'

import classes from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
  })

  return (
   <section className={classes.login}>
    <div className={classes.heroImg}>
      <Link href={'/'}>
      <div className={classes.logoContainer}>
        <Image src='logo-dark.svg' alt='Logo' width={150} height={13} className={classes.logo} />
      </div>
      </Link>
    </div>

    <div className={classes.formWrapper}>
      <div className={classes.formContainer}>
        <RenderParams className={classes.params} />
        <div className={classes.formTitle}>
          <h3>Login</h3>
          <Image src={'/assets/icons/hand.png'} alt={'Hand'} width={30} height={30} />
        </div>
        <p>Login or create an account to get started.</p>
          <LoginForm />
      </div>
    </div>
   </section>
  )
}

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login or create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
}
