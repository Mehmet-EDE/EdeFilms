import React from 'react'
import { CategoriesLoading } from "@/Components/Catergories";
import FeatureMovieLoading from '@/Components/FeaturedMovies/loading';

function Loading() {
    return (
        <>
            <FeatureMovieLoading />
            <CategoriesLoading />
        </>
    )
}

export default Loading