import { createContext, useEffect, useState } from 'react';
import BrandService from '../services/BrandService'
import ColorService from '../services/ColorService'
import CategoryService from '../services/CategoryService'
import SizeService from '../services/SizeService'

const ProductContext = createContext();


const ProductContextProvider = ({ children }) => {
  const [sizes, setSizes] = useState([])
  const [colors, setColors] = useState([])
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [isChange, setIsChange] = useState(1)

  useEffect(() => {
    initData()
  }, [])

  const initData = async () => {
    await fetchApiGetAllSize()
    await fetchApiGetAllBrand()
    await fetchApiGetAllColor()
    await fetchApiGetAllCategory()
    setIsChange(prev => prev + 1)
  }

  const fetchApiGetAllCategory = async () => {
    const result = await CategoryService.getAll()
    setCategories(result.data)
  }

  const fetchApiGetAllBrand = async () => {
    const result = await BrandService.getAll()
    setBrands(result.data)
  }

  const fetchApiGetAllSize = async () => {
    const result = await SizeService.getAll()
    setSizes(result.data)
  }

  const fetchApiGetAllColor = async () => {
    const result = await ColorService.getAll()
    setColors(result.data)
  }

  const findCategoryById = (categoryId) => {
    return categories.find(category => category.categoryId === categoryId)
  }

  const findSizeById = (sizeId) => {
    return sizes.find(size => size.sizeId === sizeId)
  }

  const findColorById = (colorId) => {
    return colors.find(color => color.colorId === colorId)
  }

  const findBrandById = (brandId) => {
    return brands.find(brand => brand.brandId === brandId)
  }

  return (
    <ProductContext.Provider value={{
      brands,
      categories,
      colors,
      sizes,
      findCategoryById,
      findSizeById,
      findColorById,
      findBrandById,
      isChange,
      setIsChange
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductContextProvider }
