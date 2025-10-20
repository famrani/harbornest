import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {LayoutService} from '../layout.service'

interface NavItem {
  label: string;
  icon?: string;        // bootstrap-icons name, e.g. "bi-compass"
  link: string;         // router link
  external?: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    constructor(
    public layoutSvc: LayoutService,
  ) { }

  /** Top-level nav per mode (kept short & clear) */
  get nav(): NavItem[] {
    switch (this.layoutSvc.mode) {
      case 'guest':
        return [
          { label: 'Experiences', icon: 'bi-compass', link: '/experiences' },
          { label: 'Boats',       icon: 'bi-sailboat', link: '/boats' },
          { label: 'Services',    icon: 'bi-stars',    link: '/conciergery' },
        ];
      case 'customer':
        return [
          { label: 'My Trips',  icon: 'bi-ticket-perforated', link: '/account/trips' },
          { label: 'Payments',  icon: 'bi-credit-card',       link: '/account/payments' },
          { label: 'Messages',  icon: 'bi-chat-dots',         link: '/account/messages' },
        ];
      case 'owner':
        return [
          { label: 'Dashboard',  icon: 'bi-speedometer2', link: '/host' },
          { label: 'Bookings',   icon: 'bi-calendar-check', link: '/host/bookings' },
          { label: 'My Boats',   icon: 'bi-sailboat', link: '/host/boats' },
          { label: 'Concierge',  icon: 'bi-stars', link: '/conciergery' },
        ];
      case 'provider':
        return [
          { label: 'My Service', icon: 'bi-briefcase', link: '/provider/service' },
          { label: 'Leads',      icon: 'bi-inbox',     link: '/provider/leads' },
          { label: 'Calendar',   icon: 'bi-calendar-event', link: '/provider/calendar' },
        ];
      case 'admin':
        return [
          { label: 'Moderation', icon: 'bi-shield-check', link: '/admin/moderation' },
          { label: 'Requests',   icon: 'bi-ui-checks-grid', link: '/admin/requests' },
          { label: 'Bookings',   icon: 'bi-journal-text', link: '/admin/bookings' },
          { label: 'Users',      icon: 'bi-people', link: '/admin/users' },
        ];
      default:
        return [];
    }
  }

  /** Primary CTA per mode (one bold action) */
  get primaryCta(): NavItem | null {
    switch (this.layoutSvc.mode) {
      case 'guest':     return { label: 'Book a tour', icon: 'bi-play-circle', link: '/experiences' };
      case 'customer':  return { label: 'Browse tours', icon: 'bi-compass', link: '/experiences' };
      case 'owner':     return { label: 'List a boat', icon: 'bi-plus-circle', link: '/host/list' };
      case 'provider':  return { label: 'Edit service', icon: 'bi-pencil-square', link: '/provider/service' };
      case 'admin':     return { label: 'Admin Panel', icon: 'bi-tools', link: '/admin' };
      default:          return null;
    }
  }

  /** Secondary CTA per mode (light outline) */
  get secondaryCta(): NavItem | null {
    switch (this.layoutSvc.mode) {
      case 'guest':
        return { label: 'List your boat', icon: 'bi-plus-circle', link: '/host/list' };
      case 'customer':
        return { label: 'My account', icon: 'bi-person', link: '/account' };
      case 'owner':
        return { label: 'Concierge', icon: 'bi-stars', link: '/owner/concierge' };
      case 'provider':
        return { label: 'Provider guide', icon: 'bi-journal-check', link: '/providers/guide' };
      case 'admin':
        return { label: 'Queues', icon: 'bi-diagram-3', link: '/admin/requests' };
      default:
        return null;
    }
  }

  /** Visible “mode pill” text */
  get modeLabel(): string {
    switch (this.layoutSvc.mode) {
      case 'guest':    return 'GUEST';
      case 'customer': return 'CUSTOMER';
      case 'owner':    return 'OWNER';
      case 'provider': return 'PROVIDER';
      case 'admin':    return 'ADMIN';
      default:         return '';
    }
  }

  /** Mode badge style */
  get modeClass(): string {
    switch (this.layoutSvc.mode) {
      case 'guest':    return 'badge text-bg-light border';
      case 'customer': return 'badge text-bg-primary';
      case 'owner':    return 'badge text-bg-dark';
      case 'provider': return 'badge text-bg-info';
      case 'admin':    return 'badge text-bg-danger';
      default:         return 'badge text-bg-secondary';
    }
  }
}
