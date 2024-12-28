export * from './projects'
// export * from './friends'
// export * from './changelog'
// export * from './education'
// export * from './career'
// export * from './activity'


// personal info
export const name = '虚惊一场。'
export const headline = '懂点其他端技术的前端工程师.'
export const introduction = 'I’m 虚惊一场, 一名来自山水甲天下的前端开发. I like coding, and building interesting things'
export const email = 'wtechtec@gmail.com'
export const githubUsername = 'wtechtec'

// about page
export const aboutMeHeadline = "I'm 虚惊一场, 一名来自山水甲天下的前端开发."
export const aboutParagraphs = [
  "其实啥也不想干",
  "但是又只不过有点喜欢制作一些自己感兴趣的垃圾东西而已"
]


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "记录一些乱七八糟"


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  // {
  //   name: 'X',
  //   icon: 'x',
  //   href: 'https://x.com/realcoreychiu'
  // },
  // {
  //   name: 'Bsky',
  //   icon: 'bsky',
  //   href: 'https://bsky.app/profile/coreychiu.com'
  // },
  {
    name: 'Jike',
    icon: 'pill',
    href: 'https://web.okjike.com/u/006e2805-aaa1-4a27-903f-8905ddf21911'
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/wtechtec'
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: '/images/icon/wx_qr.png'
  },
  // {
  //   name: 'Ko-fi',
  //   icon: 'coffee',
  //   href: 'https://ko-fi.com/coreychiu'
  // }
]

// https://simpleicons.org/
export const techIcons = [
  // "typescript",
  "javascript",
  // "supabase",
  // "cloudflare",
  "java",
  // "oracle",
  "mysql",
  "react",
  // "nodedotjs",
  // "nextdotjs",
  // "prisma",
  // "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  // "visualstudiocode",
  // "androidstudio",
  // "ios",
  "android",
  "apple",
  "wechat",
  "swift",
  "goland",
  "googlechrome",
  "nodedotjs",
  "python",
  "threedotjs",
  "macos",
  "cplusplus"
];



