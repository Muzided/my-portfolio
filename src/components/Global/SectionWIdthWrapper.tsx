import React from 'react'
type Props = {
  children: React.ReactNode;
}
const SectionWIdthWrapper = ({children}:Props) => {
  return (
    <div className="flex h-full pt-32 px-16">
      {children}
    </div>
  )
}

export default SectionWIdthWrapper
