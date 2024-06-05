'use client';
import {getListProductImage, getListProductName} from '@/services/api';
import {TProduct, TProductResponse} from '@/utils/types/products';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

function Products() {
  const [products, setProducts] = useState<TProduct[]>([]);

  const getProducts = async () => {
    try {
      const [resListName, resListImage] = [
        await getListProductName(),
        await getListProductImage(),
      ];
      let newArr: TProduct[] = [];

      const listName = resListName;
      const listImage = resListImage;
      listName.map(itemName => {
        const itemImage = listImage.find(v2 => v2.id.includes(itemName.id));
        let item: TProduct = {
          id: itemName.id,
          name: itemName.name,
          image: itemImage?.image ?? listImage[0].image,
        };
        newArr.push(item);
      });
      console.log('newArr', newArr);
      setProducts(newArr);
    } catch (error) {
      setProducts([]);
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="">
      <div className="">
        {products &&
          products.map(o => (
            <div>
              <div>{o.id}</div>
              <Image
                src={o.image}
                width={200}
                height={200}
                alt={o.name}
                className="rounded-xl"
              />
              <div>{o.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
