'use client'

export default function GitHubSnake() {
  return (
    <div className="w-full overflow-hidden">
      <div className='dark:hidden'>
        <img 
          src="https://github.com/WtecHtec/WtecHtec/blob/output/github-contribution-grid-snake.svg" 
          alt="github-contribution" />
      </div>
      <div className='hidden dark:block'>
        <img 
          src="https://github.com/WtecHtec/WtecHtec/blob/output/github-contribution-grid-snake-dark.svg" 
          alt="github-contribution" />
      </div>
    </div>
  )
}