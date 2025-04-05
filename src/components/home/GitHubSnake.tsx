'use client'

export default function GitHubSnake() {
  return (
    <div className="w-full overflow-hidden">
      <div className='dark:hidden'>
        <img 
          src="https://raw.githubusercontent.com/WtecHtec/WtecHtec/main/profile-3d-contrib/profile-night-rainbow.svg" 
          alt="github-contribution" />
      </div>
      <div className='hidden dark:block'>
        <img 
          src="https://raw.githubusercontent.com/WtecHtec/WtecHtec/main/profile-3d-contrib/profile-night-rainbow.svg" 
          alt="github-contribution" />
      </div>
    </div>
  )
}