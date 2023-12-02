import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import CreateAccountForm from './CreateAccountForm'
import Image from 'next/image'
import classes from './index.module.scss'
import Link from 'next/link'

export default async function CreateAccount() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent(
      'Cannot create a new account while logged in, please log out and try again.',
    )}`,
  })

  return (
    <section className={classes.createAccount}>
    <div className={classes.heroImg}>
      <Link href={'/'}>
      <div className={classes.logoContainer}>
      <div className={classes.logoBackground}></div>
        <Image src='logo-dark.svg' alt='Logo' width={150} height={13} className={classes.logo} />
      </div>
      </Link>
    </div>

    <div className={classes.formWrapper}>
      <div className={classes.formContainer}>
        <RenderParams className={classes.params} />
        <div className={classes.formTitle}>
          <h3>Create an Account</h3>
          <Image src={'/assets/icons/muscle.png'} alt={'Hand'} width={40} height={40} className={classes.hand} />
        </div>
        <p>Lets get you started.</p>
          <CreateAccountForm />
      </div>
    </div>
   </section>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Create an account or log in to your existing account.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
