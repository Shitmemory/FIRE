
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { PlusCircle, Search, SlidersHorizontal } from 'lucide-react';
import { Label } from '@/components/ui/label';

const products = [
  { 
    id: 1, 
    name: 'Organic Flour Blend', 
    description: 'Premium quality, stone-ground organic flour.',
    price: 15.99,
    unit: '5kg bag',
    category: 'Baking',
    imageText: 'Bag of organic flour',
    type: 'Dry Goods'
  },
  // Add more products here
];

const categories = ['All', 'Meat', 'Vegetables', 'Fruits', 'Dairy', 'Baking', 'Spices', 'Beverages'];
const sortOptions = ['Price: Low to High', 'Price: High to Low'];

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

    return matchesSearch && matchesPrice && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    return 0;
  });

  const FilterContent = ({ className = "" }) => (
    <div className={`space-y-6 ${className}`}>
      <div className="space-y-4">
        <Label className="text-lg font-semibold">Search Products</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[hsl(var(--fire-primary))]" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-lg font-semibold">Price Range</Label>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            min={0}
            max={200}
            step={1}
            onValueChange={setPriceRange}
            className="w-full"
          />
          <div className="flex items-center justify-between">
            <Input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-24"
            />
            <span className="text-[hsl(var(--fire-secondary))]">to</span>
            <Input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-24"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-lg font-semibold">Sort By</Label>
        <div className="space-y-2">
          {sortOptions.map(option => (
            <Button
              key={option}
              variant={sortBy === option ? "default" : "outline"}
              onClick={() => setSortBy(option)}
              className="w-full justify-start"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-lg font-semibold">Categories</Label>
        <div className="space-y-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="w-full justify-start"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block w-64"
          >
            <Card className="bg-[hsl(var(--muted))] sticky top-24">
              <CardContent className="p-6">
                <FilterContent />
              </CardContent>
            </Card>
          </motion.div>

          {/* Mobile Filters Button and Sheet */}
          <div className="lg:hidden flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[hsl(var(--fire-secondary))]">Products</h2>
            <Button
              onClick={() => setIsMobileFiltersOpen(true)}
              variant="ghost"
              className="text-[hsl(var(--fire-foreground))] font-semibold"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filters
            </Button>
          </div>

          <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
            <SheetContent side="right" className="w-full sm:max-w-lg bg-[hsl(var(--background))]">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold text-[hsl(var(--fire-primary))]">
                  Filters
                </SheetTitle>
              </SheetHeader>
              <FilterContent className="mt-8" />
            </SheetContent>
          </Sheet>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="card-hover bg-[hsl(var(--muted))]">
                    <div className="w-full h-48 bg-[hsl(var(--background))] relative overflow-hidden">
                      <img  
                        className="w-full h-full object-cover"
                        alt={product.name}
                        src="https://images.unsplash.com/photo-1694388001616-1176f534d72f"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-[hsl(var(--fire-primary))]">
                        {product.name}
                      </CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-2xl font-semibold text-[hsl(var(--fire-secondary))]">
                          ${product.price}
                        </p>
                        <p className="text-sm text-[hsl(var(--fire-secondary))]">
                          {product.unit}
                        </p>
                      </div>
                      <Button className="w-full bg-[hsl(var(--fire-primary))] hover:bg-[hsl(var(--fire-primary)_/_0.9)]">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add to Order
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
