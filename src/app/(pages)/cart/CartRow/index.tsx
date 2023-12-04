'use client'

import React, { useState } from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'
import Image from 'next/image'
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton'

const CartRow = ({product,qty,title,metaImage,addItemToCart}) => {
const [quantity,setQuantity] = useState(qty)


const incrementQuantity = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    addItemToCart({product,quantity:Number(newQuantity)})
}

const decrementQuantity = () => {
    const newQuantity = quantity >1 ? quantity - 1 : 1
    setQuantity(newQuantity)
    addItemToCart({product,quantity:Number(newQuantity)})
}

const enterQuantity = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newQuantity = Number(e.target.value)
    setQuantity(newQuantity)
    addItemToCart({product,quantity:Number(newQuantity)})
}

  return (
    <li className={classes.item} key={title}>
        <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
            {!metaImage && <span>No image</span>}
            {metaImage && typeof metaImage !== 'string' && (
                <Media 
                fill
                resource={metaImage}
                imgClassName={classes.image}
                className={classes.media}
                />
            )}
        </Link>
        <div className={classes.itemDetails}>
            <div className={classes.titleWrapper}>
                <h6>{title}</h6>
                <Price product={product} button={false} />
            </div>

            <div className={classes.quantity}>
                <div className={classes.quantityBtn} onClick={decrementQuantity}><Image src={'/assets/icons/minus.svg'} alt={'Minus'} width={24} height={24} className={classes.qtnBT} /></div>
                <input type="text" value={quantity} onChange={enterQuantity} className={classes.quantityInput}/>
                <div className={classes.quantityBtn} onClick={incrementQuantity}><Image src={'/assets/icons/plus.svg'} alt={'Plus'} width={24} height={24} className={classes.qtnBT} /></div>
            </div>
           

            </div>

            <div className={classes.subtotalWrapper}>
                <Price product={product} button={false} quantity={quantity} />
                <RemoveFromCartButton product={product} />
            </div>
    </li>
  )
}

export default CartRow