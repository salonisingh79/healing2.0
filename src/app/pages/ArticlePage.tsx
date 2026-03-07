import { useParams, Link } from 'react-router-dom';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { blogArticles } from '../data/blogData';
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Share2, Bookmark } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <PageLayout>
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-foreground/60 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </PageLayout>
    );
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = blogArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <PageLayout>
      <div className="bg-white">
        
        {/* Back Navigation */}
        <div className="border-b border-muted/20">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 py-12"
        >
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
              {article.category}
            </span>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            {article.excerpt}
          </p>

          {/* Author & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-muted/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{article.author}</div>
                <div className="text-sm text-foreground/60">Contributing Author</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-3 rounded-full border-2 border-muted/30 hover:border-primary/30 hover:bg-primary/5 transition-all">
                <Share2 className="w-5 h-5 text-foreground/70" />
              </button>
              <button className="p-3 rounded-full border-2 border-muted/30 hover:border-primary/30 hover:bg-primary/5 transition-all">
                <Bookmark className="w-5 h-5 text-foreground/70" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto px-6 mb-12"
        >
          <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto px-6 py-12"
        >
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-foreground prose-headings:mb-4 prose-headings:mt-8
              prose-h2:text-3xl prose-h3:text-2xl
              prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-li:text-foreground/80 prose-li:mb-2
              prose-strong:text-foreground prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </motion.div>

        {/* Author Bio CTA */}
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">About {article.author}</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {article.author} is a wellness expert and contributing author at The Healing Groove, 
                  specializing in {article.category.toLowerCase()} and holistic health practices.
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  View all articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-gradient-to-b from-white to-muted/30 py-20">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related, index) => (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/blog/${related.slug}`}
                      className="group block bg-white rounded-2xl overflow-hidden border-2 border-muted/30 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={related.imageUrl}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold text-primary">
                            {related.category}
                          </span>
                          <div className="flex items-center gap-2 text-xs text-foreground/60">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{related.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-1">
                          {related.title}
                        </h3>

                        <span className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read article
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-primary via-primary to-accent py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Experience Authentic Wellness?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Explore verified Ayurvedic centres across India or connect with a Care Guide for personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/search"
                className="px-8 py-4 bg-white hover:bg-white/90 text-primary rounded-xl font-bold transition-all shadow-lg"
              >
                Browse Wellness Centres
              </Link>
              <Link
                to="/care-guide"
                className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-xl font-bold transition-all backdrop-blur-sm"
              >
                Talk to Care Guide
              </Link>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
