import { Link } from 'react-router-dom';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { Star, MapPin, Calendar } from 'lucide-react';
import React from 'react';
const STORIES = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    country: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    concern: 'Chronic Burnout & Anxiety',
    centre: 'Kairali Healing Village',
    location: 'Kerala',
    duration: '14 days',
    rating: 5,
    story: 'After 15 years in corporate law, I was completely burnt out. Sleeping pills, anxiety meds—nothing worked. My sister convinced me to try Ayurveda in India. I was skeptical but desperate. The doctors at Kairali didn\'t just treat symptoms—they addressed root causes. The Panchakarma detox was intense but transformative. For the first time in years, I slept naturally. I left with a personalized routine I still follow. Best decision I ever made.',
    outcome: 'Now sleeping 7 hours naturally, stopped anxiety medication, and feel like myself again'
  },
  {
    id: 2,
    name: 'Michael Torres',
    country: 'United States',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    concern: 'Chronic Back Pain',
    centre: 'Somatheeram Resort',
    location: 'Kerala',
    duration: '21 days',
    rating: 5,
    story: 'I\'d lived with back pain for 8 years after a sports injury. Physical therapy helped temporarily, but pain always returned. I heard about Ayurveda from a friend who healed his arthritis. The doctors did a thorough assessment and explained my treatment plan in detail. The oil massages (Abhyanga) and herbal pouches (Kizhi) were unlike anything I\'d experienced. By day 10, I was moving better. By day 21, I was pain-free. That was 3 years ago—still pain-free.',
    outcome: 'Pain-free for 3 years, off painkillers, returned to playing tennis'
  },
  {
    id: 3,
    name: 'Emma Larsson',
    country: 'Sweden',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    concern: 'Digestive Issues & IBS',
    centre: 'Kalari Kovilakom',
    location: 'Kerala',
    duration: '14 days',
    rating: 5,
    story: 'I spent years seeing gastroenterologists with no answers. My IBS controlled my life—I couldn\'t travel, eat out, or feel normal. Coming to India felt like a last resort. The Ayurvedic doctor spent an hour understanding my history, diet, and lifestyle. The treatment wasn\'t just herbs—it was food as medicine, daily routines, stress management. Within a week, my digestion stabilized. The doctors taught me how to maintain it at home.',
    outcome: 'No IBS flare-ups in 18 months, finally enjoying food again'
  },
  {
    id: 4,
    name: 'David Chen',
    country: 'Australia',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    concern: 'Stress & Insomnia',
    centre: 'Ananda in the Himalayas',
    location: 'Uttarakhand',
    duration: '10 days',
    rating: 5,
    story: 'Running a startup meant I hadn\'t slept properly in 2 years. I was skeptical about "ancient medicine" but my wife insisted. The combination of Shirodhara (oil poured on forehead), herbal medicines, and yoga completely reset my nervous system. The doctors explained everything scientifically—no mysticism, just logic. I learned meditation techniques I still use. Sleep is no longer a struggle.',
    outcome: 'Sleeping naturally, clearer thinking, better business decisions'
  }
];

export function StoriesPage() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-primary/5 to-white">
        
        {/* Hero */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Real Stories, Real Healing
            </h1>
            <p className="text-xl text-foreground/70">
              From skeptical to transformed—travelers share their authentic Ayurveda experiences
            </p>
          </div>
        </div>

        {/* Stories */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="space-y-12">
            {STORIES.map((story) => (
              <div key={story.id} className="bg-white rounded-xl border border-muted/50 overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="grid sm:grid-cols-4 gap-6 p-8">
                  <div className="sm:col-span-1">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mx-auto mb-4"
                    />
                    <div className="text-center">
                      <h3 className="font-bold text-foreground mb-1">{story.name}</h3>
                      <p className="text-sm text-foreground/60 mb-3">{story.country}</p>
                      <div className="flex items-center justify-center gap-0.5 mb-3">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">
                        {story.concern}
                      </span>
                      <span className="text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-full font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {story.centre}, {story.location}
                      </span>
                      <span className="text-xs px-3 py-1.5 bg-secondary/10 text-secondary-foreground rounded-full font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {story.duration}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-foreground/70 leading-relaxed italic">
                        "{story.story}"
                      </p>
                    </div>

                    <div className="bg-accent/5 rounded-lg p-4 mb-4">
                      <div className="text-sm font-semibold text-foreground mb-1">Outcome:</div>
                      <p className="text-sm text-foreground/70">{story.outcome}</p>
                    </div>

                    <Link
                      to="/search"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Explore Similar Journeys →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Themes */}
        <div className="bg-gradient-to-b from-white to-muted/30 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Common Patterns We See
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 border border-muted/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Week 1</div>
                <p className="text-sm text-foreground/70">
                  Adjustment period. Body starts responding to treatments and diet changes.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-muted/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Week 2</div>
                <p className="text-sm text-foreground/70">
                  Noticeable improvements. Better sleep, reduced pain, improved digestion.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-muted/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Week 3+</div>
                <p className="text-sm text-foreground/70">
                  Deep transformation. Mental clarity, emotional balance, sustained energy.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-muted/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">After</div>
                <p className="text-sm text-foreground/70">
                  Long-term results. Most maintain improvements for years with home routine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Write Your Story?
          </h2>
          <p className="text-foreground/60 mb-8">
            Every transformation begins with one decision. Let's find the right program for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/search"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-lg font-bold transition-all text-lg"
            >
              Explore Wellness Centres
            </Link>
            <Link
              to="/care-guide"
              className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-bold transition-all text-lg"
            >
              Talk to a Care Guide
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}