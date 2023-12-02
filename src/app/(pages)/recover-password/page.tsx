import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'

import classes from './index.module.scss'
import Link from 'next/link'
import { RenderParams } from '../../_components/RenderParams'

export default async function RecoverPassword() {
  return (
    <section className={classes.recoverPassword}>
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
        <Link href={'/login'} className={classes.backLink} >
          <Image src={'/assets/icons/arrow-left.svg'} alt={'Arrow left'} width={24} height={24} />
          <p>Back to Login</p>
        </Link>
        <div className={classes.formTitle}>
          <h3>Forgot Your Password</h3>
        </div>
          <RecoverPasswordForm />
      </div>
    </div>
   </section>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}
