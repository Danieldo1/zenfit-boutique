'use client'

import React from 'react'

import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filter'
import { Category } from '../../../../payload/payload-types'
import { Checkbox } from '../../../_components/Checkbox'
import { HR } from '../../../_components/HR'
import { RadioBtn } from '../../../_components/RadioBtn'

const Filters = ({categories}: {categories: Category[]}) => {
    const {categoryFilters,sort,setCategoryFilters,setSort} = useFilter()
    
    const handleSelection = (categoryId: string) => {
        if(categoryFilters.includes(categoryId)) {
            const newFilters = categoryFilters.filter((id) => id !== categoryId)
            setCategoryFilters(newFilters)
        } else {
            setCategoryFilters([...categoryFilters, categoryId])
        }

    }

    const handleSort = (value: string) => {
        return setSort(value)
    }
  return (
    <div className={classes.filters}>
        <div>
            <h6 className={classes.title}>Categories</h6>

            <div className={classes.categories}>
                {categories.map((category)=> {
                    const isSelected = categoryFilters.includes(category.id)
                    return (
                        <Checkbox key={category.id} label={category.title} value={category.id} isSelected={isSelected} onClickHandler={handleSelection} />
                    )
                })}
            </div>
            <HR className={classes.hr}/>

            <h6 className={classes.title}>Sort</h6>
            <div className={classes.categories}>
                <RadioBtn label='Latest'
                value='-createdAt'
                isSelected={sort === '-createdAt'}
                onRadioChange={handleSort}
                groupName='sort'
                />
                <RadioBtn label='Oldest'
                value='createdAt'
                isSelected={sort === 'createdAt'}
                onRadioChange={handleSort}
                groupName='sort'
                />
            </div>
        </div>
    </div>
  )
}

export default Filters