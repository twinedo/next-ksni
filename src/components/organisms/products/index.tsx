'use client';
import Modal from '@/components/molecules/modal';
import {getListProductImage, getListProductName} from '@/services/api';
import {TProduct, TProductResponse} from '@/utils/types/products';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

function Products() {
  const [products, setProducts] = useState<TProduct[]>([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<TProduct>();

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
          name: itemName.name ?? 'Product X',
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

  const onSelectProduct = (product: TProduct) => {
    setSelectedProduct(product);
    setIsOpenModal(true);
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products &&
          products.map((o: TProduct) => (
            <div
              className="cursor-pointer relative flex flex-1 flex-col flex-wrap gap-2"
              key={o.id}
              onClick={() => {
                onSelectProduct(o);
              }}>
              <div className="left-0 top-0 absolute bg-white w-5 h-6 rounded-br-lg text-black">
                {o?.id}
              </div>
              <Image
                src={o.image}
                width={200}
                height={200}
                alt={o.name}
                className="rounded-xl hover:shadow-xl"
              />
              <div className="text-black font-semibold line-clamp-2">
                {o.name}
              </div>
            </div>
          ))}
      </div>
      <Modal
        isOpen={isOpenModal}
        isIconClose={true}
        onClose={() => setIsOpenModal(false)}>
        <div className="text-center text-lg font-bold text-black mb-2">
          {selectedProduct?.name}
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative">
            <div className="left-0 top-0 absolute bg-white w-4 h-6 rounded-br-lg z-30 text-black">
              {selectedProduct?.id}
            </div>
            <Image
              src={selectedProduct?.image!}
              width={400}
              height={400}
              alt={selectedProduct?.name!}
              className="rounded-md"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Products;
