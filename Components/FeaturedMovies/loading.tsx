import React from 'react'
import Skeleton from '../Skeleton'

function FeatureMovieLoading() {
  return (
    <div className="flex h-20 gap-6 mt-14 mb-14">
    {Array(5)
        .fill(null)
        .map((_, index) => (
            <Skeleton key={index} height={72} />
        ))}
</div>
  )
}

export default FeatureMovieLoading