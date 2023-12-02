'use client'

import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'

import Image from 'next/image'
import Link from 'next/link'
import { Footer, Media } from '../../../../payload/payload-types'
import { Button } from '../../Button'

const FooterComponent = ({footer}:{footer:Footer}) => {
  const pathname = usePathname()

  const navItems = footer?.navItems || []
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.links}>
            {inclusions.map((item) => (
              <li key={item.title}>
                <Image src={item.icon} alt={item.title} width={36} height={36} className={classes.icon} />
                <h5 className={classes.title}>{item.title}</h5>
                <p className={classes.description}>{item.description}</p>
              </li>

            ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
          <Gutter>
            <div className={classes.wrap}>
              <Link href={'/'}>
                <Image src='/logo-light.svg' alt='ZenFit logo'  width={150} height={50}/>
              </Link>
              <p>{footer.copyright}</p>
              <div className={classes.socialLinks}>
                {navItems.map((item) => {
                  const icon = item?.link?.icon as Media
                  return (
                    <Button
                    key={item.link.label}
                    el='link'
                    href={item.link.url}
                    newTab={true}
                    className={classes.socialLinkItem}
                    >
                      <Image src={icon?.url} alt={item.link.label} width={24} height={24} className={classes.socialIcon}/>
                    </Button>
                  )
                })}
              </div>
            </div>    
          </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent