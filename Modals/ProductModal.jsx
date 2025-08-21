'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ProductModal({ product, onClose }) {
  if (!product) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* زر الغلق */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
          >
            ×
          </button>

          {/* محتوى المنتج */}
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-red-600 font-semibold">${product.price}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProductModal
