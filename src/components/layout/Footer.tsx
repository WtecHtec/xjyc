import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/layout/Container'
import { footerItems } from '@/config/siteConfig'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { name } from '@/config/infoConfig'
import SocialLinks from '@/components/home/SocialLinks'
import VisitData from '@/components/layout/VisitData'


function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-primary"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-muted pb-16 pt-10">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium">
                {footerItems.map((item) => (
                  <NavLink key={item.name} href={item.href}>{item.name}</NavLink>
                ))}
              </div>
              <div className='flex flex-col justify-center items-start'>
                <div className='flex flex-row justify-end items-center gap-2'>
                  <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} {name}. All rights reserved.
                  </p>          
                  {/* <ThemeToggle /> */}
                </div>
                <SocialLinks className='mt-0'/>
                {/* <VisitData /> */}
                <p style={{display: "flex"}}>
                    <a style={{display: "flex"}}  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026719" 
                    target="_blank" rel="nofollow" className="jj-link" data-v-65b50b51="" data-v-0bb7cad4="">
                      <img src="//lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/img/police.d0289dc.png" alt="police" 
                      style={{ verticalAlign: "middle", height: "20px" }} />
                        桂ICP备2025051198号
                      </a>
                  </p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
