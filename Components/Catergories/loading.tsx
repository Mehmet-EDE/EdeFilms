import React from 'react'
import Skeleton from '../Skeleton'

function CategoriesLoading() {
    return (
        <div className="flex h-20 gap-6">
            {Array(5)
                .fill(null)
                .map((_, index) => (
                    <Skeleton key={index} height={72} />
                ))}
        </div>
    )
}

export { CategoriesLoading }