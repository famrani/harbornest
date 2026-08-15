import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoPage {
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly origin = 'https://alegriaboat.eu';
  private readonly defaultImage = `${this.origin}/api/media/object?path=${encodeURIComponent('assets/img/home/home-hero-generic.jpg')}`;

  private readonly pages: Record<string, SeoPage> = {
    '/': { title: 'Location de catamaran à Antibes | Alegria Boat', description: 'Privatisez Alegria, catamaran Bali 4.1 avec skipper, pour une journée en mer, une soirée ou un coucher de soleil sur la Côte d’Azur.' },
    '/home': { title: 'Location de catamaran à Antibes | Alegria Boat', description: 'Privatisez Alegria, catamaran Bali 4.1 avec skipper, pour une journée en mer, une soirée ou un coucher de soleil sur la Côte d’Azur.' },
    '/sorties': { title: 'Sorties en catamaran Côte d’Azur | Alegria Boat', description: 'Découvrez nos sorties privées en catamaran depuis Antibes : journée en mer, coucher de soleil, fête et sortie d’entreprise.' },
    '/sorties/journee-en-mer': { title: 'Journée en catamaran depuis Antibes | Alegria Boat', description: 'Une journée privée à bord du catamaran Alegria avec skipper, baignade et découverte de la Côte d’Azur.' },
    '/sorties/coucher-de-soleil': { title: 'Coucher de soleil en catamaran à Antibes | Alegria Boat', description: 'Vivez un coucher de soleil privé en catamaran au départ d’Antibes.' },
    '/sorties/party': { title: 'EVJF, anniversaire et fête en catamaran | Alegria Boat', description: 'Organisez une sortie festive et privée en catamaran sur la Côte d’Azur.' },
    '/sorties/sortie-entreprise': { title: 'Sortie d’entreprise en catamaran | Alegria Boat', description: 'Privatisez Alegria pour un événement d’entreprise ou un moment d’équipe sur la Côte d’Azur.' },
    '/bateau': { title: 'Catamaran Bali 4.1 Alegria | Location à Antibes', description: 'Découvrez Alegria, notre catamaran Bali 4.1 confortable et spacieux disponible à la privatisation.' },
    '/bateau/jouets-nautiques': { title: 'Paddle, snorkeling et jouets nautiques | Alegria Boat', description: 'Découvrez les équipements et jouets nautiques disponibles pendant votre sortie en catamaran.' },
    '/galerie': { title: 'Photos du catamaran Alegria | Côte d’Azur', description: 'Découvrez en images le catamaran Alegria et les sorties en mer proposées depuis Antibes.' },
    '/reserver': { title: 'Demander une offre de location de catamaran | Alegria Boat', description: 'Demandez une offre personnalisée pour privatiser le catamaran Alegria sur la Côte d’Azur.' },
    '/contact': { title: 'Contacter Alegria Boat | Location de catamaran Antibes', description: 'Contactez Alegria Boat pour préparer votre sortie privée en catamaran.' },
    '/faq': { title: 'Questions fréquentes | Alegria Boat', description: 'Réponses aux questions fréquentes sur la réservation, le skipper, les paiements et votre sortie en catamaran.' },
    '/how-it-works': { title: 'Comment réserver une sortie | Alegria Boat', description: 'Découvrez les étapes pour demander une offre, confirmer, payer et profiter de votre sortie en mer.' },
    '/terms': { title: 'Conditions générales | Alegria Boat', description: 'Consultez les conditions générales applicables aux réservations Alegria Boat.' },
    '/safety': { title: 'Consignes de sécurité | Alegria Boat', description: 'Consignes essentielles pour profiter de votre sortie en catamaran en toute sécurité.' }
  };

  constructor(private title: Title, private meta: Meta, @Inject(DOCUMENT) private document: Document) {}

  update(pathname: string): void {
    const path = (pathname.split('?')[0].split('#')[0] || '/').replace(/\/$/, '') || '/';
    const privatePage = path.startsWith('/admin') || path.startsWith('/my-') || path.startsWith('/bookings/') || path.startsWith('/payment/') || path.startsWith('/offer/');
    const page = this.pages[path] || {
      title: privatePage ? 'Alegria Boat' : 'Alegria Boat | Catamaran Côte d’Azur',
      description: 'Location et privatisation du catamaran Alegria au départ d’Antibes.',
      noindex: privatePage
    };
    const canonical = `${this.origin}${path === '/' ? '/' : path}`;
    const image = page.image || this.defaultImage;

    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ name: 'robots', content: page.noindex || privatePage ? 'noindex,nofollow' : 'index,follow,max-image-preview:large' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Alegria Boat' });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.setLink('canonical', canonical);
    this.setJsonLd(path, canonical, page);
  }

  private setLink(rel: string, href: string): void {
    let link = this.document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!link) { link = this.document.createElement('link'); link.rel = rel; this.document.head.appendChild(link); }
    link.href = href;
  }

  private setJsonLd(path: string, url: string, page: SeoPage): void {
    const id = 'alegria-jsonld';
    this.document.getElementById(id)?.remove();
    const script = this.document.createElement('script');
    script.id = id; script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Organization', '@id': `${this.origin}/#organization`, name: 'Alegria Boat', url: this.origin, logo: `${this.origin}/api/media/object?path=${encodeURIComponent('assets/img/home/catamaran.png')}` },
        { '@type': 'WebSite', '@id': `${this.origin}/#website`, url: this.origin, name: 'Alegria Boat', publisher: { '@id': `${this.origin}/#organization` }, inLanguage: ['fr','en','es','it','de','nl','ru'] },
        { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, isPartOf: { '@id': `${this.origin}/#website` }, about: { '@id': `${this.origin}/#organization` }, inLanguage: this.document.documentElement.lang || 'fr' },
        ...(path === '/' ? [{ '@type': 'LocalBusiness', name: 'Alegria Boat', url: this.origin, image: this.defaultImage, areaServed: 'Côte d’Azur', description: page.description, priceRange: '€€€' }] : [])
      ]
    });
    this.document.head.appendChild(script);
  }
}
