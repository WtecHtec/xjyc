// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "其实只是有点喜欢制作一些自己感兴趣的垃圾东西而已."

export type ProjectItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
  // projects 
  export const projects: Array<ProjectItemType> = [
    {
      name: 'WhisperKeyboard',
      description:
        '一款基于Whisper的Ai语音输入法',
      link: { href: '//whisperkeyboard.app', label: 'whisperkeyboard' },
      category: ['Mac'],
      techStack: ['Swift'],
      tags: ['Whisper', 'Ai语音']
    },
    {
      name: 'Switch Mate Pro',
      description:
        '管理Mac输入法的应用',
      link: { href: '//apps.apple.com/us/app/switch-mate-pro/id6723865383', label: 'Switch Mate Pro' },
      logo: '/images/icon/switchmetaicon.png',
      category: ['Mac'],
      techStack: ['Swift'],
      tags: ['输入法', '自动切换']
    },
    {
      name: 'Sparkle Easy',
      description:
        '获取Macos更新框架Sparkle基本签名信息',
      link: { href: '//sparkleeasy.pages.dev', label: 'Sparkle Easy' },
      logo: '/images/icon/sparkleicon.png',
      category: ['Mac'],
      techStack: ['Electron', 'Node'],
      tags: ['Sparkle', 'Tools']
    },
    {
      name: 'Video Zoom',
      description:
        '视频编辑、缩放指定区域',
      link: { href: ' //capcut.xujingyichang.top/', label: 'Sparkle Easy' },
      logo: '/images/icon/capcut.png',
      category: ['Web'],
      techStack: ['React', 'Canvas', 'Video'],
      tags: ['Video', 'Capcut', 'Tools']
    },
    {
      name: '情绪宣泄瓶',
      description:
        '只是一款听森林声音的微信小程序',
      link: { href: '/images/icon/wx_qr_qingxu.jpg', label: '情绪宣泄瓶' },
      logo: '/images/icon/qingxuicon.png',
      category: ['微信小程序'],
      techStack: ['微信小程序'],
      tags: ['情绪', '休息']
    },
    {
      name: '随便用用Lite',
      description:
        '收集一些有趣或实用工具的微信小程序',
      link: { href: '/images/icon/wx_qr_suibian.jpg', label: '随便用用Lite' },
      logo: '/images/icon/suibianicon.png',
      category: ['微信小程序'],
      techStack: ['微信小程序'],
      tags: ['助手', '有趣']
    },
    {
      name: '放大镜录屏',
      description:
        '可以设置放大录屏区域的chrome录屏插件.',
      link: { href: '//chromewebstore.google.com/detail/%E6%94%BE%E5%A4%A7%E9%95%9C%E5%BD%95%E5%B1%8F/oamckfgecgfenpchklfhelhnngmhdnma?authuser=0&hl=zh-CN', label: 'chrome' },
      logo: '/images/icon/fangdaicon.png',
      category: ['Tools'],
      techStack: ['Javascript', 'Chrome', 'React'],
      tags: ['录屏', '插件']
    },
    {
      name: '即时设计插件',
      description:
        '如果你正在使用即时设计做设计稿,希望可以帮助你.',
      link: { href: '//js.design/community?category=personHome&id=6407e807c1bb4e25e60f1eb8', label: 'js.design' },
      logo: '/images/icon/jishiicon.ico',
      category: ['Tools'],
      techStack: ['Javascript', 'React'],
      tags: ['Design']
    },
    // {
    //   name: 'MagicBox Tools',
    //   description:
    //     'Find the best AI tools in MagicBox.tools',
    //   link: { href: 'magicbox.tools', label: 'MagicBox Tools' },
    //   logo: '/images/icon/magicbox.png',
    //   category: ['Website'],
    //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    //   tags: ['AI', 'Tools Directory']
    // },
  ]
  
  export const githubProjects: Array<ProjectItemType> = [
    {
      name: 'WorkNotes',
      description: '工作笔记开源库,包含Java\\Golang\\Node\\Swfit工具类',
      link: { href: '//github.com/WtecHtec/WorkNotes', label: 'WorkNotes' },
      // gitStars: 1,
      // gitForks: 1
    },
    {
      name: 'pcapp-go-wails-react-ts',
      description:
        '学习Golang开发期间折腾的微信自动化桌面应用[wails框架]',
      link: { href: '//github.com/WtecHtec/pcapp-go-wails-react-ts', label: 'pcapp-go-wails-react-ts' },
      // gitStars: 1,
      // gitForks: 1
    },
    {
      name: 'electron-jest',
      description:
        '可视化操作浏览器编排工作流程的桌面应用',
      link: { href: '//github.com/WtecHtec/electron-jest', label: 'electron-jest' },
      // gitStars: 1,
      // gitForks: 1
    },
    {
      name: 'wtechtec-wx-chart',
      description:
        '基于canvas在微信小程序绘制数据图表的组件库',
      link: { href: '//github.com/WtecHtec/wtechtec-wx-chart', label: 'wtechtec-wx-chart' },
      // gitStars: 1,
      // gitForks: 1
    },
    {
      name: 'VideoSpeakMacOs',
      description:
        '读取视频帧获取视频字幕、拼接视频字幕的Macos应用',
      link: { href: '//github.com/WtecHtec/VideoSpeakMacOs', label: 'VideoSpeakMacOs' },
      // gitStars: 1,
      // gitForks: 1
    },
    {
      name: 'NanoAutoWeb',
      description:
        '探索LLM操作系统的应用',
      link: { href: '//github.com/WtecHtec/NanoAutoWeb', label: 'NanoAutoWeb' },
      // gitStars: 1,
      // gitForks: 1
    },
    {
      name: 'electron-react-record',
      description:
        '视角跟随鼠标移动、放大点击区域的录制应用',
      link: { href: '//github.com/WtecHtec/electron-react-record', label: 'electron-react-record' },
      // gitStars: 1
    },
  ]
  