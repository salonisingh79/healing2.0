import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { blogArticles, categories } from '../data/blogData';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
type CategoryFilter = 'All Articles' | 'Medical Tourism' | 'Wellness' | 'Healthcare' | 'Guides';

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All Articles');

  const featuredArticle = blogArticles.find(article => article.featured);
  const filteredArticles = activeCategory === 'All Articles' 
    ? blogArticles.filter(a => !a.featured)
    : blogArticles.filter(a => a.category === activeCategory && !a.featured);

  const categoryTabs: CategoryFilter[] = ['All Articles', 'Healthcare', 'Wellness', 'Guides'];

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-muted/30 to-white">
        
        {/* Hero Section */}
        <div className="bg-white border-b border-muted/30">
          <div className="max-w-7xl mx-auto px-6 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Wellness Insights</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Discover Ayurveda & Holistic Healing
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
                Expert insights, authentic stories, and practical guides to help you navigate India's wellness landscape with confidence
              </p>
            </motion.div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="bg-white border-b border-muted/20 sticky top-0 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
              {categoryTabs.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-muted/30 text-foreground/70 hover:bg-muted/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && activeCategory === 'All Articles' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to={`/blog/${featuredArticle.slug}`}
                className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-80 md:h-auto overflow-hidden">
                    <img
                      src={featuredArticle.imageUrl}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-semibold text-primary shadow-lg">
                        Featured Article
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                        {featuredArticle.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredArticle.date}</span>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            {activeCategory === 'All Articles' ? 'Latest Articles' : `${activeCategory} Articles`}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border-2 border-muted/30 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-primary">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-foreground/60">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-muted/30">
                      <div className="flex items-center gap-2 text-xs text-foreground/60">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                      <span className="text-sm font-semibold text-primary group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                        Read more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground/50 text-lg">No articles found in this category yet.</p>
            </div>
          )}
        </div>

        {/* Popular Categories Section */}
        <div className="bg-gradient-to-b from-white to-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-semibold text-primary">Explore Topics</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Popular Categories
                </h2>
                <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                  Dive deeper into our most-read topics and discover valuable insights in these specialized areas.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setActiveCategory(category.name as CategoryFilter)}
                    className="group w-full bg-white rounded-2xl p-8 border-2 border-muted/30 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 text-left h-full"
                  >
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-muted/30">
                      <span className="text-sm font-semibold text-foreground/60">
                        {category.articleCount} {category.articleCount === 1 ? 'Article' : 'Articles'}
                      </span>
                      <span className="text-primary font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                        View Articles
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
