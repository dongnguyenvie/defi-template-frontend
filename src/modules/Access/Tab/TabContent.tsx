
interface ITabContentProps {
  openTab: number
  children: any[]
}

export const TabContent = ({ openTab, children }: ITabContentProps) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words shadow-assetTab bg-white rounded-3xl rounded-tl-none w-full lg:w-[560px] h-[497px]">
      <div className="px-4 py-1">
        {children.map((Component, index) => {
          return (
            <div
              className={openTab === index + 1 ? 'block' : 'hidden'}
              id={`link-${index}`}
              key={index}
            >
              {Component}
            </div>
          )
        })}
      </div>
    </div>
  )
}
